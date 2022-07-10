require("dotenv").config();
const { RESTDataSource } = require("apollo-datasource-rest");

class artistAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3002/";
  }

  willSendRequest(request) {
    console.log(this.context.token);
    request.headers.set("Authorization", this.context.token);
  }

  async getArtist(artistId) {
    return this.get(`v1/artists/${artistId}`);
  }

  async getArtists() {
    return this.get(`v1/artists`);
  }
}

module.exports = artistAPI;
