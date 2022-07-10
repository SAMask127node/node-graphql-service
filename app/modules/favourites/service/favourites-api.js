require("dotenv").config();
const { RESTDataSource } = require("apollo-datasource-rest");

class favouritesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3007/";
  }

  willSendRequest(request) {
    console.log(this.context.token);
    request.headers.set("Authorization", this.context.token);
  }

  async getFavourites() {
    return this.get(`v1/favourites`);
  }
}

module.exports = favouritesAPI;
