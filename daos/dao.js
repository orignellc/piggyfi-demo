import createBackendClient from "~/daos/createBackendClient";

export default class Dao {
  http;

  constructor(client = null) {
    this.http = client || createBackendClient();
  }

  async get(uri, params, options = {}) {
    options.params = params;
    return await this.http.get(uri, options);
  }

  async post(uri, data, options = {}) {
    return await this.http.post(uri, data, options);
  }
}
