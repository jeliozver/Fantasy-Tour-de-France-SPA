const VALIDATOR = require('validator');

const STAGE = require('mongoose').model('Stage');

function validateStageForm(payload) {
  const errors = {};
  let isFormValid = true;

  if (!payload || typeof payload.stageType !== 'string' || payload.stageType.trim().length === 0) {
    isFormValid = false;
    errors.stageType = 'Please provide a correct stage type.';
  }

  if (!payload || typeof payload.startDay !== 'string' || payload.startDay.trim().length === 0) {
    isFormValid = false;
    errors.startDay = 'Please provide starting day for the stage.';
  }

  if (!payload || typeof payload.startCity !== 'string' || payload.startCity.trim().length === 0) {
    isFormValid = false;
    errors.startCity = 'Please provide start stage city.';
  }

  if (!payload || typeof payload.endCity !== 'string' || payload.endCity.trim().length === 0) {
    isFormValid = false;
    errors.endCity = 'Please provide end stage city.';
  }

  if (!payload || !VALIDATOR.isURL(payload.stageProfile)) {
    isFormValid = false;
    errors.stageProfile = 'Please provide link to stage profile image.';
  }

  if (!payload || !VALIDATOR.isURL(payload.stageMap)) {
    isFormValid = false;
    errors.stageMap = 'Please provide link to stage map image.';
  }

  if (!payload || isNaN(Number(payload.stageNumber))) {
    isFormValid = false;
    errors.stageNumber = 'Please provide a correct stage number.';
  }

  if (!payload || isNaN(Number(payload.distance))) {
    isFormValid = false;
    errors.distance = 'Please provide a correct stage distance.';
  }

  return {
    success: isFormValid,
    errors
  };
}

module.exports = {
  add: (req, res) => {
    const validationResult = validateStageForm(req.body);

    if (!validationResult.success) {
      return res.status(200).json({
        success: false,
        message: 'Stage form validation failed!',
        errors: validationResult.errors
      });
    }

    STAGE.create(req.body).then((newStage) => {
      return res.status(200).json({
        success: true,
        message: 'Stage creation successful!',
        body: newStage
      });
    }).catch(() => {
      return res.status(400).json({
        success: false,
        message: 'Stage creation failed!'
      });
    });
  },

  edit: (req, res) => {
    const validationResult = validateStageForm(req.body);

    if (!validationResult.success) {
      return res.status(200).json({
        success: false,
        message: 'Stage form validation failed!',
        errors: validationResult.errors
      });
    }

    STAGE.findById(req.params.id).then((oldStage) => {
      if (!oldStage) {
        return res.status(200).json({
          success: false,
          message: 'Stage Not Found!'
        });
      }

      oldStage.stageNumber = req.body.stageNumber;
      oldStage.stageType = req.body.stageType;
      oldStage.startDay = req.body.startDay;
      oldStage.startCity = req.body.startCity;
      oldStage.endCity = req.body.endCity;
      oldStage.distance = req.body.distance;
      oldStage.stageProfile = req.body.stageProfile;
      oldStage.stageMap = req.body.stageMap;

      oldStage.save().then(() => {
        res.status(200).json({
          success: true,
          message: 'Stage Edited!',
          body: oldStage
        });
      });
    }).catch(() => {
      return res.status(400).json({
        success: false,
        message: 'Stage edit failed!'
      });
    });
  },

  getAll: (req, res) => {
    STAGE.find({}).sort({ stageNumber: 1 }).then((stages) => {
      return res.status(200).json({
        success: true,
        message: 'Stages retreived successfuly!',
        body: stages
      });
    }).catch(() => {
      return res.status(400).json({
        success: false,
        message: 'Bad Request!'
      });
    });
  },

  getSingle: (req, res) => {
    STAGE.findById(req.params.id).then((stage) => {
      if (!stage) {
        return res.status(200).json({
          success: false,
          message: 'Stage Not Found!'
        });
      }

      return res.status(200).json({
        success: true,
        message: 'Stage retreived successfuly!',
        body: stage
      });
    }).catch(() => {
      return res.status(400).json({
        success: false,
        message: 'Bad Request!'
      });
    });
  },

  getByNumber: (req, res) => {
    let number = Number(req.params.number);

    if (isNaN(number)) {
      return res.status(400).json({
        success: false,
        message: 'Bad Request!'
      });
    }

    STAGE.count().then((count) => {
      if (number <= 0) {
        number = 1;
      } else if (number >= count) {
        number = count;
      }

      STAGE.findOne({ 'stageNumber': number }).then((stage) => {
        return res.status(200).json({
          success: true,
          message: 'Stage retreived successfuly!',
          body: stage
        });
      });
    });
  },

  getByDate: (req, res) => {
    STAGE.findOne({ startDay: req.params.date }).then((stage) => {
      return res.status(200).json({
        success: true,
        message: 'Stage retreived successfuly!',
        body: stage || {}
      });
    }).catch(() => {
      return res.status(400).json({
        success: false,
        message: 'Bad Request!'
      });
    });
  },

  search: (req, res) => {
    const params = req.query;

    if (params.query || params.sort) {
      let query = undefined;
      let sort = undefined;

      if (params.query) {
        query = JSON.parse(params.query);
      }

      if (params.sort) {
        sort = JSON.parse(params.sort);
      }

      if (sort) {
        STAGE.find(query).sort(sort).then((result) => {
          return res.status(200).json({
            success: true,
            message: 'Data retreived successfully!',
            body: result,
            query: req.query
          });
        }).catch(() => {
          return res.status(400).json({
            success: false,
            message: 'Bad Request!'
          });
        });
      } else {
        STAGE.find(query).then((result) => {
          return res.status(200).json({
            success: true,
            message: 'Data retreived successfully!',
            body: result,
            query: req.query
          });
        }).catch(() => {
          return res.status(400).json({
            success: false,
            message: 'Bad Request!'
          });
        });
      }
    } else {
      STAGE.find({}).then((result) => {
        return res.status(200).json({
          success: true,
          message: 'Data retreived successfully!',
          body: result,
          query: req.query
        });
      }).catch(() => {
        return res.status(400).json({
          success: false,
          message: 'Bad Request!'
        });
      });
    }
  }
};