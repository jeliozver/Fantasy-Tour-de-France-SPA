const VALIDATOR = require('validator');

const TEAM = require('mongoose').model('Team');

function validateTeamForm(payload) {
    let errors = {};
    let isFormValid = true;

    if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
        isFormValid = false;
        errors.name = 'Please provide team name.';
    }

    if (!payload || typeof payload.country !== 'string' || payload.country.trim().length === 0) {
        isFormValid = false;
        errors.country = 'Please provide team country name.';
    }

    if (!payload || !VALIDATOR.isURL(payload.jersey)) {
        isFormValid = false;
        errors.jersey = 'Please provide link to team jersey image.';
    }

    return {
        success: isFormValid,
        errors: errors
    };
}

module.exports = {
    add: (req, res) => {
        let validationResult = validateTeamForm(req.body);

        if (!validationResult.success) {
            return res.status(200).json({
                success: false,
                message: 'Team form validation failed!',
                errors: validationResult.errors
            });
        }

        TEAM.create({
            name: req.body.name,
            country: req.body.country,
            jersey: req.body.jersey
        }).then((newStage) => {
            return res.status(200).json({
                success: true,
                message: 'Team creation successful!',
                body: newStage
            });
        }).catch(() => {
            return res.status(400).json({
                success: false,
                message: 'Team creation failed!'
            });
        });
    },

    edit: (req, res) => {
        let validationResult = validateTeamForm(req.body);

        if (!validationResult.success) {
            return res.status(200).json({
                success: false,
                message: 'Team form validation failed!',
                errors: validationResult.errors
            });
        }

        TEAM.findById(req.params.id).then((oldTeam) => {
            if (!oldTeam) {
                return res.status(200).json({
                    success: false,
                    message: 'Team Not Found!'
                });
            }

            oldTeam.name = req.body.name;
            oldTeam.country = req.body.country;
            oldTeam.jersey = req.body.jersey;

            oldTeam.save().then(() => {
                res.status(200).json({
                    success: true,
                    message: 'Team Edited!'
                });
            });
        }).catch(() => {
            return res.status(400).json({
                success: false,
                message: 'Team edit failed!'
            });
        });
    },

    getAll: (req, res) => {
        TEAM.find({}).sort({ name: 1 }).then((teams) => {
            return res.status(200).json({
                success: true,
                message: 'Teams retreived successfuly!',
                body: teams
            });
        }).catch(() => {
            return res.status(400).json({
                success: false,
                message: 'Bad Request!'
            });
        });
    },

    getSingle: (req, res) => {
        TEAM.findById(req.params.id).populate('riders').then((team) => {
            if (!team) {
                return res.status(200).json({
                    success: false,
                    message: 'Team Not Found!'
                });
            }

            return res.status(200).json({
                success: true,
                message: 'Team retreived successfuly!',
                body: team
            });
        }).catch(() => {
            return res.status(400).json({
                success: false,
                message: 'Bad Request!'
            });
        });
    },

    byNumber: (req, res) => {
        let number = Number(req.params.number);

        if (isNaN(number)) {
            return res.status(400).json({
                success: false,
                message: 'Bad Request!'
            });
        }

        TEAM.count().then((count) => {
            if (number <= 0) {
                number = 1;
            } else if (number >= count) {
                number = count;
            }
            
            TEAM.findOne({ 'teamNumber': number }).populate('riders').then((team) => {
                return res.status(200).json({
                    success: true,
                    message: 'Team retreived successfuly!',
                    body: team
                });
            }).catch((err) => {
                console.log(err);
            });
        });
    }
};