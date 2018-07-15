import decode from 'jwt-decode';

import RequestService from './RequestService';
import helperService from './helperService';

let Request = new RequestService();

class AuthService {
  constructor() {
    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.isLoggedIn = this.isLoggedIn.bind(this);
    this.isAdmin = this.isAdmin.bind(this);
  }

  register(payload) {
    return Request.post('/user/register', payload).then((res) => {
      this._setToken(res.token);
      return Promise.resolve(res);
    });
  }

  login(payload) {
    return Request.post('/user/login', payload).then((res) => {
      this._setToken(res.token);
      return Promise.resolve(res);
    });
  }

  logout() {
    helperService.notify('success', 'Logout successful!');
    localStorage.removeItem('token');
  }

  getProfile() {
    try {
      const decoded = decode(this._getToken());

      return decoded.sub;
    } catch (err) {
      return undefined;
    }
  }

  isLoggedIn() {
    try {
      const decoded = decode(this._getToken());

      if (decoded.exp > Date.now() / 1000) {
        return true;
      }

      return false;
    } catch (err) {
      return false;
    }
  }

  isAdmin() {
    try {
      const decoded = decode(this._getToken());

      if (decoded.exp < Date.now() / 1000) {
        return false;
      }

      if (!decoded.sub.isAdmin) {
        return false;
      }

      return true;
    } catch (err) {
      return false;
    }
  }

  _setToken(token) {
    localStorage.setItem('token', token);
  }

  _getToken() {
    return localStorage.getItem('token');
  }
}

export default AuthService;