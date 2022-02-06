const axios = require('axios');
const API_ENDPOINT = 'http://localhost:3030';

class Core {
  static isLoading() {
    return Core.__isLoading;
  }

  static setGlobalLoading(loading) {
    Core.__isLoading = !!loading;
    return Core.__isLoading;
  }

  static listPaths(path) {
    const url = `${API_ENDPOINT}/list${path ? '/' + path : ''}`;
    return axios.get(url).then((res) => {
      return res.data;
    });
  }

  static getCP() {
    return Core.__cp;
  }

  static setCP(cp) {
    Core.__cp = cp;
    return Core.__cp;
  }

  static getEndpoint() {
    return Core.__API_ENDPOINT;
  }

}

Core.__API_ENDPOINT = API_ENDPOINT;

Core.__isLoading = false;

Core.__cp = '';

export default Core;