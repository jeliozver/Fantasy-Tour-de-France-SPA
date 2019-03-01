import decode from 'jwt-decode';
import RequestService from './RequestService';

const Request = new RequestService();
class AuthService {
  constructor() {
    this.token = undefined;
    this.userDetails = undefined;

    this.register = this.register.bind(this);
    this.login = this.login.bind(this);
  }

  /**
   * Registers the user
   * 
   * @param {Object} payload
   * @returns {Promise} 
   */
  register(payload) {
    return Request.post('/user/register', payload).then((res) => {
      this._setToken(res.token);
      return Promise.resolve(res);
    });
  }

  /**
   * Logs the user in
   * 
   * @param {Object} payload
   * @returns {Promise}
   */
  login(payload) {
    return Request.post('/user/login', payload).then((res) => {
      this._setToken(res.token);
      return Promise.resolve(res);
    });
  }

  /**
   * Clears userinfo from localStorage
   */
  logout() {
    localStorage.removeItem('token');
    this.token = undefined;
    this.userDetails = undefined;
  }

  /**
   * Gets user profile 
   * 
   * @returns {Object}
   */
  getProfile() {
    try {
      if (!this.userDetails) {
        const decoded = decode(this._getToken());
        this.userDetails = decoded.sub;
      }

      return this.userDetails;
    } catch (err) {
      return {};
    }
  }

  /**
   * Returns whether user is logged in
   * 
   * @returns {Boolean}
   */
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

  /**
   *  Returns whether user is an admin
   * 
   * @returns {Boolean}
   */
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

  /**
   * Sets JWT token to localStorage
   * 
   * @param {String} token
   * @private 
   */
  _setToken(token) {
    this.token = token;
    localStorage.setItem('token', token);
  }

  /**
   * Gets JWT token from localStorage
   * 
   * @returns {String}
   * @private
   */
  _getToken() {
    if (!this.token) {
      this.token = localStorage.getItem('token');
    }

    return this.token;
  }
}

export default AuthService;