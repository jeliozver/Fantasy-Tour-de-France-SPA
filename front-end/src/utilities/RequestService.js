class RequestService {
  constructor(domain) {
    this.domain = domain || 'http://localhost:8000';

    this.get = this.get.bind(this);
    this.post = this.post.bind(this);
    this.update = this.update.bind(this);
    this.delete = this.delete.bind(this);
  }

  get(endpoint, token) {
    return this._fetch(`${this.domain}${endpoint}`, {
      method: 'GET'
    }, token).then((res) => {
      return Promise.resolve(res);
    });
  }

  post(endpoint, body, token) {
    return this._fetch(`${this.domain}${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(body)
    }, token).then((res) => {
      return Promise.resolve(res);
    });
  }

  update(endpoint, body, token) {
    return this._fetch(`${this.domain}${endpoint}`, {
      method: 'PUT',
      body: JSON.stringify(body)
    }, token).then((res) => {
      return Promise.resolve(res);
    });
  }

  delete(endpoint, token) {
    return this._fetch(`${this.domain}${endpoint}`, {
      method: 'DELETE',
    }, token).then((res) => {
      return Promise.resolve(res);
    });
  }

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