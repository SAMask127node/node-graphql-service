require("dotenv").config();
const { RESTDataSource } = require("apollo-datasource-rest");

class trackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3006/";
  }

  willSendRequest(request) {
    console.log(this.context.token);
    request.headers.set("Authorization", this.context.token);
  }

  async getTrack(albumId) {
    return this.get(`v1/tracks/${trackId}`);
  }

  async getTracks() {
    return this.get(`v1/tracks`);
  }
}

module.exports = trackAPI;
