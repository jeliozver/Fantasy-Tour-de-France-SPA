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

  addStage(payload) {
    const token = this._getToken();
    return Request.post('/stage/add', payload, token).then((res) => {
      return Promise.resolve(res);
    });
  }

  addTeam(payload) {
    const token = this._getToken();
    return Request.post('/team/add', payload, token).then((res) => {
      return Promise.resolve(res);
    });
  }

  addRider(payload) {
    const token = this._getToken();
    return Request.post('/rider/add', payload, token).then((res) => {
      return Promise.resolve(res);
    });
  }

  addFantasyTeam(payload) {
    const token = this._getToken();
    return Request.post('/user/team/add', payload, token).then((res) => {
      return Promise.resolve(res);
    });
  }

  getAllStages() {
    return Request.get('/stage/all').then((res) => {
      return Promise.resolve(res);
    });
  }

  getAllTeams() {
    return Request.get('/team/all').then((res) => {
      return Promise.resolve(res);
    });
  }

  getRiders(query) {
    return Request.get(`/rider/search${query}`).then((res) => {
      return Promise.resolve(res);
    });
  }

  getSingleStage(id) {
    return Request.get(`/stage/details/${id}`).then((res) => {
      return Promise.resolve(res);
    });
  }

  getSingleTeam(id) {
    return Request.get(`/team/details/${id}`).then((res) => {
      return Promise.resolve(res);
    });
  }

  getSingleRider(id) {
    return Request.get(`/rider/details/${id}`).then((res) => {
      return Promise.resolve(res);
    });
  }

  getSingleFantasyTeam() {
    const token = this._getToken();
    return Request.get('/user/team', token).then((res) => {
      return Promise.resolve(res);
    });
  }

  editStage(payload, id) {
    const token = this._getToken();
    return Request.update(`/stage/edit/${id}`, payload, token).then((res) => {
      return Promise.resolve(res);
    });
  }

  editTeam(payload, id) {
    const token = this._getToken();
    return Request.update(`/team/edit/${id}`, payload, token).then((res) => {
      return Promise.resolve(res);
    });
  }

  editRider(payload, id) {
    const token = this._getToken();
    return Request.update(`/rider/edit/${id}`, payload, token).then((res) => {
      return Promise.resolve(res);
    });
  }

  editFantasyTeam(payload) {
    const token = this._getToken();
    return Request.update('/user/team/edit', payload, token).then((res) => {
      return Promise.resolve(res);
    });
  }

  getStageByNumber(number) {
    return Request.get(`/stage/byNumber/${number}`).then((res) => {
      return Promise.resolve(res);
    });
  }

  getStageByDate(date) {
    return Request.get(`/stage/byDate/${date}`).then((res) => {
      return Promise.resolve(res);
    });
  }

  getTeamByNumber(number) {
    return Request.get(`/team/byNumber/${number}`).then((res) => {
      return Promise.resolve(res);
    });
  }

  lockTransfers() {
    const token = this._getToken();
    return Request.post('/transfers/lock', {}, token).then((res) => {
      return Promise.resolve(res);
    });
  }

  unlockTransfers() {
    const token = this._getToken();
    return Request.post('/transfers/unlock', {}, token).then((res) => {
      return Promise.resolve(res);
    });
  }

  submitResult(payload) {
    const token = this._getToken();
    return Request.post('/result/submit', payload, token).then((res) => {
      return Promise.resolve(res);
    });
  }

  _getToken() {
    return localStorage.getItem('token');
  }
}

export default CrudService;