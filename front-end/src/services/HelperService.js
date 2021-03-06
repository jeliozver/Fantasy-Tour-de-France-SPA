import validator from 'validator';
import toastr from 'toastr';

toastr.options.newestOnTop = false;
toastr.options.closeButton = true;

class HelperService {

  /**
   * Validates the register form
   * 
   * @param {Object} payload
   * @returns {Object}
   */
  validateRegisterForm(payload) {
    const errors = {};
    let isFormValid = true;
    let message = '';

    if (!payload || typeof payload.email !== 'string' || !validator.isEmail(payload.email)) {
      isFormValid = false;
      errors.email = 'Please provide a correct email address.';
    }

    if (!payload || typeof payload.password !== 'string' || payload.password.trim().length < 3) {
      isFormValid = false;
      errors.password = 'Password must have at least 3 characters.';
    }

    if (!payload || payload.password !== payload.confirmedPassword) {
      isFormValid = false;
      errors.passwordsDontMatch = 'Passwords do not match!';
    }

    if (!payload || typeof payload.username !== 'string' || payload.username.trim().length === 0) {
      isFormValid = false;
      errors.name = 'Please provide your name.';
    }

    if (!isFormValid) {
      message = 'Form Validation Failed!';
    }

    return {
      success: isFormValid,
      message: message,
      errors: errors
    };
  }

  /**
   * Validates the login form
   * 
   * @param {Object} payload
   * @returns {Object} 
   */
  validateLoginForm(payload) {
    const errors = {};
    let isFormValid = true;
    let message = '';

    if (!payload || typeof payload.password !== 'string' || payload.password.trim().length === 0) {
      isFormValid = false;
      errors.password = 'Please provide your password.';
    }

    if (!payload || typeof payload.username !== 'string' || payload.username.trim().length === 0) {
      isFormValid = false;
      errors.name = 'Please provide your name.';
    }

    if (!isFormValid) {
      message = 'Form Validation Failed!';
    }

    return {
      success: isFormValid,
      message: message,
      errors: errors
    };
  }

  /**
   * Validates the stage form
   * 
   * @param {Object} payload
   * @returns {Object}
   */
  validateStageForm(payload) {
    const errors = {};
    let isFormValid = true;
    let message = '';

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

    if (!payload || !validator.isURL(payload.stageProfile)) {
      isFormValid = false;
      errors.stageProfile = 'Please provide link to stage profile image.';
    }

    if (!payload || !validator.isURL(payload.stageMap)) {
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

    if (!isFormValid) {
      message = 'Form Validation Failed!';
    }

    return {
      success: isFormValid,
      message: message,
      errors
    };
  }

  /**
   * Validates the team form
   * 
   * @param {Object} payload
   * @returns {Object} 
   */
  validateTeamForm(payload) {
    const errors = {};
    let isFormValid = true;
    let message = '';

    if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
      isFormValid = false;
      errors.name = 'Please provide team name.';
    }

    if (!payload || typeof payload.country !== 'string' || payload.country.trim().length === 0) {
      isFormValid = false;
      errors.country = 'Please provide team country name.';
    }

    if (!payload || !validator.isURL(payload.jersey)) {
      isFormValid = false;
      errors.jersey = 'Please provide link to team jersey image.';
    }

    if (!isFormValid) {
      message = 'Form Validation Failed!';
    }

    return {
      success: isFormValid,
      message: message,
      errors: errors
    };
  }

  /**
   * Validates the rider form
   * 
   * @param {Object} payload
   * @returns {Object} 
   */
  validateRiderForm(payload) {
    const errors = {};
    let isFormValid = true;
    let message = '';

    if (typeof payload.team === 'object') {
      payload.team = payload.team._id;
    }

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

    if (!payload || !validator.isURL(payload.image)) {
      isFormValid = false;
      errors.image = 'Please provide link to rider image.';
    }

    if (!isFormValid) {
      message = 'Form Validation Failed!';
    }

    return {
      success: isFormValid,
      message: message,
      errors: errors
    };
  }

  /**
   * Validates the fantasy team form
   * 
   * @param {Object} payload
   * @returns {Object}
   */
  validateFantasyTeamForm(payload) {
    const errors = {};
    let isFormValid = true;
    let message = '';

    if (!payload || typeof payload.name !== 'string' || payload.name.trim().length === 0) {
      isFormValid = false;
      errors.password = 'Please provide your team name.';
    }

    if (!isFormValid) {
      message = 'Form Validation Failed!';
    }

    return {
      success: isFormValid,
      message: message,
      errors: errors
    };
  }

  /**
   * Validates the stage result form
   * 
   * @param {Object} payload
   * @returns {Object}
   */
  validateStageResultForm(payload) {
    const errors = {};
    let isFormValid = true;
    let message = '';

    for (let input in payload) {
      if (payload.hasOwnProperty(input)) {
        if (!payload || typeof payload[input] !== 'string' || payload[input].trim().length === 0) {
          isFormValid = false;
          errors[input] = `Please provide rider name for ${input} place.`;
        }
      }
    }

    if (errors.hasOwnProperty('stageId')) {
      errors['stageId'] = 'Please select stage';
    }

    if (!isFormValid) {
      message = 'Form Validation Failed!';
    }

    return {
      success: isFormValid,
      message: message,
      errors: errors
    };
  }

  /**
   * Gets the register form initial state
   * 
   * @returns {Object}
   */
  getRegisterFormState() {
    return {
      formData: {
        username: '',
        password: '',
        confirmedPassword: '',
        email: ''
      }
    };
  }

  /**
   * Gets the login form initial state
   * 
   * @returns {Object}
   */
  getLoginFormState() {
    return {
      formData: {
        username: '',
        password: ''
      }
    };
  }

  /**
   * Gets the stage form initial state
   * 
   * @returns {Object}
   */
  getStageFormState() {
    return {
      formData: {
        stageNumber: '',
        stageType: '',
        startDay: '',
        startCity: '',
        endCity: '',
        distance: '',
        stageProfile: '',
        stageMap: ''
      }
    };
  }

  /**
   * Gets the team form initial state
   * 
   * @returns {Object}
   */
  getTeamFormState() {
    return {
      formData: {
        name: '',
        country: '',
        jersey: ''
      }
    };
  }

  /**
   * Gets the rider form initial state
   * 
   * @returns {Object}
   */
  getRiderFormState() {
    return {
      formData: {
        name: '',
        country: '',
        age: '',
        riderType: '',
        image: '',
        cost: '',
        team: '',
      },
      otherData: []
    };
  }

  /**
   * Gets the fantasy team form initial state
   * 
   * @returns {Object}
   */
  getFantasyTeamFormState() {
    return {
      formData: {
        name: ''
      }
    };
  }

  /**
   * Gets the stage result form initial state
   * 
   * @returns {Object}
   */
  getStageResultFormState() {
    return {
      formData: {
        stageId: '',
        first: '',
        second: '',
        third: '',
        fourth: '',
        fifth: '',
        sixth: '',
        seventh: '',
        eighth: '',
        nineth: '',
        tenth: ''
      },
      otherData: []
    };
  }

  /**
   * Gets the country flag short name
   * 
   * @param {String} country
   * @returns {String}
   */
  getFlag(country) {
    switch (country) {
      case 'France': return 'fr';
      case 'Kazakhstan': return 'kz';
      case 'United States': return 'us';
      case 'Bahrain': return 'bh';
      case 'Germany': return 'de';
      case 'Switzerland': return 'ch';
      case 'Belgium': return 'be';
      case 'Australia': return 'au';
      case 'Spain': return 'es';
      case 'Great Britain': return 'gb';
      case 'South Africa': return 'za';
      case 'Netherlands': return 'nl';
      case 'United Arab Emirates': return 'ae';
      case 'Estonia': return 'ee';
      case 'Denmark': return 'dk';
      case 'Poland': return 'pl';
      case 'Italy': return 'it';
      case 'Austria': return 'at';
      case 'Slovakia': return 'si';
      case 'New Zealand': return 'nz';
      case 'Etiopia': return 'et';
      case 'Latvia': return 'lv';
      case 'Norway': return 'no';
      case 'Colombia': return 'co';
      case 'Costa Rica': return 'cr';
      case 'Argentina': return 'ar';
      case 'Sweden': return 'se';
      case 'Croatia': return 'hr';
      case 'Ireland': return 'ie';
      case 'Russia': return 'ru';
      case 'Luxembourg': return 'lu';
      default: return '';
    }
  }

  /**
   * Shows toast message
   * 
   * @param {String} type 
   * @param {String} message 
   * @param {Object} errors 
   */
  notify(type, message, errors) {
    if (type === 'success') {
      toastr.success(message);
    }

    if (type === 'error') {
      toastr.error(message);

      if (errors) {
        for (const err in errors) {
          if (errors.hasOwnProperty(err)) {
            toastr.error(errors[err]);
          }
        }
      }
    }
  }
}

export default HelperService;