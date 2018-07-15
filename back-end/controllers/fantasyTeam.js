const FANTASY_TEAM = require('mongoose').model('FantasyTeam');
const RIDER = require('mongoose').model('Rider');
const USER = require('mongoose').model('User');
const STATUS = require('mongoose').model('Status');

const TEAM_BALANCE = 180;
const SCORE_SHEET = {
    first: 20,
    second: 15,
    third: 12,
    fourth: 8,
    fifth: 6,
    sixth: 5,
    seventh: 4,
    eighth: 3,
    nineth: 2,
    tenth: 1
};

function validateFantasyTeamForm(payload) {
    let errors = {};
    let isFormValid = true;

    if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
        isFormValid = false;
        errors.password = 'Please provide your team name.';
    }

    return {
        success: isFormValid,
        errors: errors
    };
}

module.exports = {
    add: (req, res) => {

        let validationResult = validateFantasyTeamForm(req.body);

        if (!validationResult.success) {
            return res.status(200).json({
                success: false,
                message: 'Form validation failed!',
                errors: validationResult.errors
            });
        }

        USER.findById(req.user.id).then((user) => {
            FANTASY_TEAM.create({
                name: req.body.name,
                creator: user._id
            }).then((newTeam) => {
                user.fantasyTeam = newTeam._id;
                user.save().then(() => {
                    return res.status(200).json({
                        success: true,
                        message: 'Fantasy Team Created!'
                    });
                });
            }).catch(() => {
                return res.status(400).json({
                    success: false,
                    message: 'Bad Request!'
                });
            });
        });
    },

    getTeam: (req, res) => {
        FANTASY_TEAM.findOne({ creator: req.user.id }).
            populate({ path: 'riders', options: { populate: { path: 'team' } } })
            .then((team) => {
                return res.status(200).json({
                    success: true,
                    body: team
                });
            }).catch(() => {
                return res.status(400).json({
                    success: false,
                    message: 'Bad Request!'
                });
            });
    },

    edit: (req, res) => {
        STATUS.findOne({ name: 'Transfers' }).then((st) => {
            let isLocked = st.status;

            if (isLocked) {
                return res.status(200).json({
                    success: false,
                    message: 'Transfers are currently locked!'
                });
            }

            if (!Array.isArray(req.body.riders) || req.body.riders.length !== 8) {
                return res.status(200).json({
                    success: false,
                    message: 'Your team must have 8 riders!'
                });
            }

            let riderIds = [];
            let totalSum = 0;

            for (let r of req.body.riders) {
                riderIds.push(r._id);
            }

            RIDER.find({ _id: { $in: riderIds } }).then((riders) => {
                totalSum = riders.reduce((sum, r) => (sum + r.cost), 0);
                totalSum = Number(totalSum.toFixed(1));

                FANTASY_TEAM.findOne({ creator: req.user.id }).then((team) => {
                    if (!team) {
                        return res.status(200).json({
                            success: false,
                            message: 'Your must have a team to make transfers!'
                        });
                    }

                    if (TEAM_BALANCE - totalSum < 0) {
                        return res.status(200).json({
                            success: false,
                            message: 'Insufficient balance!'
                        });
                    }

                    let newBalance = TEAM_BALANCE - totalSum;

                    team.balance = Number(newBalance.toFixed(1));
                    team.riders = riderIds;
                    team.save();

                    res.status(200).json({
                        success: true,
                        message: 'Transfers completed successfuly!'
                    });
                });
            });

        });
    },

    lockTransfers: (req, res) => {
        STATUS.findOne({ name: 'Transfers' }).then((st) => {
            st.status = true;
            st.save();
            res.status(200).json({
                success: true,
                message: 'Transfers locked successfuly!'
            });
        }).catch(() => {
            res.status(200).json({
                success: false,
                message: 'Something went wrong, please try again!'
            });
        });
    },

    unlockTransfers: (req, res) => {
        STATUS.findOne({ name: 'Transfers' }).then((st) => {
            st.status = false;
            st.save();
            res.status(200).json({
                success: true,
                message: 'Transfers unlocked successfuly!'
            });
        }).catch(() => {
            res.status(200).json({
                success: false,
                message: 'Something went wrong, please try again!'
            });
        });
    },

    calcPoints: (req, res) => {
        let results = req.body;
        let names = [];
        let scores = {};

        for (let n in results) {
            if (results.hasOwnProperty(n) && n !== 'stageId') {
                names.push(results[n]);
                scores[results[n]] = SCORE_SHEET[n];
            }
        }

        RIDER.find({ name: { $in: names } }).then((riders) => {
            if (riders.length !== 10) {
                return res.status(200).json({
                    success: false,
                    message: 'Some of the riders does not exist in the db please check for typos!'
                });
            }

            FANTASY_TEAM.find({}).then((teams) => {
                for (let t of teams) {
                    let newPoints = 0;
                    let ids = [];

                    for (let id of t.riders) {
                        ids.push(id.toString());
                    }

                    for (let r of riders) {
                        if (ids.includes(r._id.toString())) {
                            newPoints += scores[r.name];
                        }
                    }

                    t.points += newPoints;
                    t.save();
                }

                res.status(200).json({
                    success: true,
                    message: 'Results are calculated!'
                });
            });
        });


    }
};