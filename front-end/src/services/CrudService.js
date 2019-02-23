import RequestService from './RequestService';

const Request = new RequestService();

class CrudService {
  constructor() {
    this.addStage = this.addStage.bind(this);
    this.addTeam = this.addTeam.bind(this);
    this.addRider = this.addRider.bind(this);
    this.addFantasyTeam = this.addFantasyTeam.bind(this);
    this.editStage = this.editStage.bind(this);
    this.editTeam = this.editTeam.bind(this);
    this.editRider = this.editRider.bind(this);
    this.editFantasyTeam = this.editFantasyTeam.bind(this);
    this.lockTransfers = this.lockTransfers.bind(this);
    this.unlockTransfers = this.unlockTransfers.bind(this);
    this.submitResult = this.submitResult.bind(this);
    this.getSingleFantasyTeam = this.getSingleFantasyTeam.bind(this);
  }

  /**
   * Sends request to add stage to the DB
   * 
   * @param {Object} payload
   * @returns {Promise}
   */
  addStage(payload) {
    const token = this._getToken();
    return Request.post('/stage/add', payload, token).then((res) => {
      return Promise.resolve(res);
    });
  }

  /**
   * Sends request to add team to the DB
   * 
   * @param {Object} payload
   * @returns {Promise} 
   */
  addTeam(payload) {
    const token = this._getToken();
    return Request.post('/team/add', payload, token).then((res) => {
      return Promise.resolve(res);
    });
  }

  /**
   * Sends request to add rider to the DB
   * 
   * @param {Object} payload
   * @returns {Promise}
   */
  addRider(payload) {
    const token = this._getToken();
    return Request.post('/rider/add', payload, token).then((res) => {
      return Promise.resolve(res);
    });
  }

  /**
   * Sends request to add fantasy team to the DB
   * 
   * @param {Object} payload
   * @returns {Promise} 
   */
  addFantasyTeam(payload) {
    const token = this._getToken();
    return Request.post('/user/team/add', payload, token).then((res) => {
      return Promise.resolve(res);
    });
  }

  /**
   * Gets all stages from the db
   * 
   * @returns {Promise}
   */
  getAllStages() {
    return Request.get('/stage/all').then((res) => {
      return Promise.resolve(res);
    });
  }

  /**
   * Gets all teams from the db
   * 
   * @returns {Promise}
   */
  getAllTeams() {
    return Request.get('/team/all').then((res) => {
      return Promise.resolve(res);
    });
  }

  /**
   * Get riders from the DB, based on a search query
   * 
   * @param {String} query
   * @returns {Promise}
   */
  getRiders(query) {
    return Request.get(`/rider/search${query}`).then((res) => {
      return Promise.resolve(res);
    });
  }

  /**
   * Gets a single stage from the DB
   * 
   * @param {String} id
   * @returns {Promise} 
   */
  getSingleStage(id) {
    return Request.get(`/stage/details/${id}`).then((res) => {
      return Promise.resolve(res);
    });
  }

  /**
   * Gets single team from the DB
   * 
   * @param {String} id
   * @returns {Promise} 
   */
  getSingleTeam(id) {
    return Request.get(`/team/details/${id}`).then((res) => {
      return Promise.resolve(res);
    });
  }

  /**
   * Gets single rider from the DB
   * 
   * @param {String} id
   * @returns {Promise} 
   */
  getSingleRider(id) {
    return Request.get(`/rider/details/${id}`).then((res) => {
      return Promise.resolve(res);
    });
  }

  /**
   * Gets single fantasy team from the db
   * 
   * @returns {Promise}
   */
  getSingleFantasyTeam() {
    const token = this._getToken();
    return Request.get('/user/team', token).then((res) => {
      return Promise.resolve(res);
    });
  }

  /**
   * Sends request to edit a stage
   * 
   * @param {Object} payload 
   * @param {String} id
   * @returns {Promise} 
   */
  editStage(payload, id) {
    const token = this._getToken();
    return Request.update(`/stage/edit/${id}`, payload, token).then((res) => {
      return Promise.resolve(res);
    });
  }

  /**
   * Sends request to edit a team
   * 
   * @param {Object} payload 
   * @param {Sttring} id
   * @returns {Promise} 
   */
  editTeam(payload, id) {
    const token = this._getToken();
    return Request.update(`/team/edit/${id}`, payload, token).then((res) => {
      return Promise.resolve(res);
    });
  }

  /**
   * Sends request to edit a rider
   * 
   * @param {Object} payload 
   * @param {String} id
   * @returns {Promise} 
   */
  editRider(payload, id) {
    const token = this._getToken();
    return Request.update(`/rider/edit/${id}`, payload, token).then((res) => {
      return Promise.resolve(res);
    });
  }

  /**
   * Sends a request to edit a fantasy team
   * 
   * @param {Object} payload
   * @returns {Promise} 
   */
  editFantasyTeam(payload) {
    const token = this._getToken();
    return Request.update('/user/team/edit', payload, token).then((res) => {
      return Promise.resolve(res);
    });
  }

  /**
   * Gets stage by given number
   * 
   * @param {Number} number
   * @returns {Promise}
   */
  getStageByNumber(number) {
    return Request.get(`/stage/byNumber/${number}`).then((res) => {
      return Promise.resolve(res);
    });
  }

  /**
   * Gets stage by given date
   * 
   * @param {String} date
   * @returns {Promise} 
   */
  getStageByDate(date) {
    return Request.get(`/stage/byDate/${date}`).then((res) => {
      return Promise.resolve(res);
    });
  }

  /**
   * Gets a team by a given number
   * 
   * @param {Number} number
   * @returns {Promise} 
   */
  getTeamByNumber(number) {
    return Request.get(`/team/byNumber/${number}`).then((res) => {
      return Promise.resolve(res);
    });
  }

  /**
   * Locks transfers
   * 
   * @returns {Promise}
   */
  lockTransfers() {
    const token = this._getToken();
    return Request.post('/transfers/lock', {}, token).then((res) => {
      return Promise.resolve(res);
    });
  }

  /**
   * Unlocks transfers
   * 
   * @returns {Promise}
   */
  unlockTransfers() {
    const token = this._getToken();
    return Request.post('/transfers/unlock', {}, token).then((res) => {
      return Promise.resolve(res);
    });
  }

  /**
   * Submits reqsult after a stage
   * 
   * @param {Object} payload
   * @returns {Promise} 
   */
  submitResult(payload) {
    const token = this._getToken();
    return Request.post('/result/submit', payload, token).then((res) => {
      return Promise.resolve(res);
    });
  }

  /**
   * Gets JWT token from the localStorage
   * 
   * @returns {String}
   * @private
   */
  _getToken() {
    return localStorage.getItem('token');
  }
}

export default CrudService;