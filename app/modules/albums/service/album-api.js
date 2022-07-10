require("dotenv").config();
const { RESTDataSource } = require("apollo-datasource-rest");

class albumAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3005/";
  }

  willSendRequest(request) {
    console.log(this.context.token);
    request.headers.set("Authorization", this.context.token);
  }

  async getAlbum(albumId) {
    return this.get(`v1/albums/${albumId}`);
  }

  async getAlbums() {
    return this.get(`v1/albums`);
  }
}

module.exports = albumAPI;
