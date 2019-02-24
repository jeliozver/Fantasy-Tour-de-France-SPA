const VALIDATOR = require('validator');

const RIDER = require('mongoose').model('Rider');
const TEAM = require('mongoose').model('Team');

const PAGE_LIMIT = 15;

function validateRiderForm(payload) {
  const errors = {};
  let isFormValid = true;

  if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
    isFormValid = false;
    errors.name = 'Please provide rider name.';
  }

  if (!payload || typeof payload.country !== 'string' || payload.country.trim().length === 0) {
    isFormValid = false;
    errors.country = 'Please provide rider country.';
  }

  if (!payload || typeof payload.riderType !== 'string' || payload.riderType.trim().length === 0) {
    isFormValid = false;
    errors.riderType = 'Please provide rider type.';
  }

  if (!payload || typeof payload.team !== 'string' || payload.team.trim().length < 24) {
    isFormValid = false;
    errors.riderType = 'Please select proper rider team.';
  }

  if (!payload || isNaN(Number(payload.age))) {
    isFormValid = false;
    errors.age = 'Please provide rider age.';
  }

  if (!payload || isNaN(Number(payload.cost))) {
    isFormValid = false;
    errors.cost = 'Please provide rider price.';
  }

  if (!payload || !VALIDATOR.isURL(payload.image)) {
    isFormValid = false;
    errors.image = 'Please provide link to rider image.';
  }

  return {
    success: isFormValid,
    errors
  };
}

module.exports = {
  add: (req, res) => {
    const validationResult = validateRiderForm(req.body);

    if (!validationResult.success) {
      return res.status(200).json({
        success: false,
        message: 'Rider form validation failed!',
        errors: validationResult.errors
      });
    }

    TEAM.findById(req.body.team).then((foundTeam) => {
      if (!foundTeam) {
        return res.status(404).json({
          success: false,
          message: 'The provided team does not exist!'
        });
      }

      RIDER.create({
        name: req.body.name,
        country: req.body.country,
        age: req.body.age,
        riderType: req.body.riderType,
        image: req.body.image,
        cost: req.body.cost,
        team: foundTeam._id,
      }).then((newRider) => {
        foundTeam.riders.push(newRider._id);
        foundTeam.save().then(() => {
          res.status(200).json({
            success: true,
            message: 'Rider created successfuly!',
            body: newRider
          });
        });
      }).catch(() => {
        return res.status(400).json({
          success: false,
          message: 'Rider creation failed!'
        });
      });
    }).catch(() => {
      return res.status(400).json({
        success: false,
        message: 'Rider creation failed!'
      });
    });
  },

  edit: (req, res) => {
    const validationResult = validateRiderForm(req.body);

    if (!validationResult.success) {
      return res.status(200).json({
        success: false,
        message: 'Rider form validation failed!',
        errors: validationResult.errors
      });
    }

    RIDER.findById(req.params.id).then((oldRider) => {
      if (!oldRider) {
        return res.status(404).json({
          success: false,
          message: 'Rider Not Found!'
        });
      }

      oldRider.name = req.body.name;
      oldRider.country = req.body.country;
      oldRider.age = req.body.age;
      oldRider.riderType = req.body.riderType;
      oldRider.image = req.body.image;
      oldRider.cost = req.body.cost;

      if (oldRider.team.toString() !== req.body.team) {
        TEAM.update({ _id: req.body.team }, { $push: { riders: oldRider._id } }).then(() => {
          TEAM.update({ _id: oldRider.team }, { $pull: { riders: oldRider._id } }).then(() => {
            oldRider.team = req.body.team;
            oldRider.save().then(() => {
              res.status(200).json({
                success: true,
                message: 'Rider edited!',
                body: oldRider
              });
            });
          });
        }).catch(() => {
          return res.status(400).json({
            success: false,
            message: 'Rider edit failed!'
          });
        });
      } else {
        oldRider.save().then(() => {
          res.status(200).json({
            success: true,
            message: 'Rider Edited!',
            body: oldRider
          });
        });
      }
    }).catch(() => {
      return res.status(400).json({
        success: false,
        message: 'Rider edit failed!'
      });
    });
  },

  getAll: (req, res) => {
    RIDER
      .find({})
      .then((riders) => {
        return res.status(200).json({
          success: true,
          message: 'Riders retreived successfuly!',
          body: riders
        });
      })
      .catch(() => {
        return res.status(400).json({
          success: false,
          message: 'Bad Request!'
        });
      });
  },

  getSingle: (req, res) => {
    RIDER
      .findById(req.params.id)
      .populate('team')
      .then((rider) => {
        if (!rider) {
          return res.status(404).json({
            success: false,
            message: 'Rider Not Found!'
          });
        }

        return res.status(200).json({
          success: true,
          message: 'Rider retreived successfuly!',
          body: rider
        });
      })
      .catch(() => {
        return res.status(400).json({
          success: false,
          message: 'Bad Request!'
        });
      });
  },

  search: (req, res) => {
    const page = Number(req.query.page) - 1;

    RIDER.count().then((count) => {
      RIDER
        .find({})
        .sort({ 'cost': -1 })
        .skip(page * PAGE_LIMIT)
        .limit(PAGE_LIMIT)
        .populate('team')
        .then((riders) => {
          return res.status(200).json({
            success: true,
            message: 'Riders retreived successfuly!',
            body: riders,
            count: count
          });
        });
    });
  }
};