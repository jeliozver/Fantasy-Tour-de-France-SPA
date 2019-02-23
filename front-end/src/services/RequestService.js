class RequestService {
  constructor(domain) {
    this.domain = domain || 'http://localhost:8000';
  }

  /**
   * Sends GET request
   * 
   * @param {String} endpoint
   * @param {String} token
   * @returns {Promise}
   */
  get(endpoint, token) {
    return this._fetch(`${this.domain}${endpoint}`, {
      method: 'GET'
    }, token).then((res) => {
      return Promise.resolve(res);
    });
  }

  /**
   * Sends POST request
   * 
   * @param {String} endpoint
   * @param {Object} body
   * @param {String} token
   * @returns {Promise}
   */
  post(endpoint, body, token) {
    return this._fetch(`${this.domain}${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(body)
    }, token).then((res) => {
      return Promise.resolve(res);
    });
  }

  /**
   * Sends PUT request
   * 
   * @param {String} endpoint
   * @param {Object} body
   * @param {String} token
   */
  update(endpoint, body, token) {
    return this._fetch(`${this.domain}${endpoint}`, {
      method: 'PUT',
      body: JSON.stringify(body)
    }, token).then((res) => {
      return Promise.resolve(res);
    });
  }

  /**
   * Sends DELETE request
   * 
   * @param {String} endpoint
   * @param {String} token
   * @returns {Promise}
   */
  delete(endpoint, token) {
    return this._fetch(`${this.domain}${endpoint}`, {
      method: 'DELETE',
    }, token).then((res) => {
      return Promise.resolve(res);
    });
  }

  /**
   * Sends HTTP request
   * 
   * @param {String} url
   * @param {Object} options 
   * @param {String} token
   * @returns {Promise}
   * @private
   */
  _fetch(url, options, token) {
    const headers = {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    };

    if (token) {
      headers['Authorization'] = `Bearer ${token}`;
    }

    return fetch(url, {
      headers,
      ...options
    }).then((res) => {
      return res.json();
    });
  }
}

export default RequestService;