require("dotenv").config();
const { RESTDataSource } = require("apollo-datasource-rest");

class bandAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3003/";
  }

  willSendRequest(request) {
    console.log(this.context.token);
    request.headers.set("Authorization", this.context.token);
  }

  async getBand(bandId) {
    return this.get(`v1/bands/${bandId}`);
  }

  async getBands() {
    return this.get(`v1/bands`);
  }
}

module.exports = bandAPI;
