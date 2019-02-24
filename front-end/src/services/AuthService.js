import decode from 'jwt-decode';
import RequestService from './RequestService';

const Request = new RequestService();
class AuthService {
  constructor() {
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
  }

  /**
   * Gets user profile 
   * 
   * @returns {Object/undefined}
   */
  getProfile() {
    try {
      const decoded = decode(this._getToken());

      return decoded.sub;
    } catch (err) {
      return undefined;
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
    localStorage.setItem('token', token);
  }

  /**
   * Gets JWT token from localStorage
   * 
   * @returns {String}
   * @private
   */
  _getToken() {
    return localStorage.getItem('token');
  }
}

export default AuthService;