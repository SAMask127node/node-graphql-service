require("dotenv").config();
const { RESTDataSource } = require("apollo-datasource-rest");

class genreAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3001/";
  }

  willSendRequest(request) {
    console.log(this.context.token);
    request.headers.set("Authorization", this.context.token);
  }

  async getGenre(genreId) {
    console.log("id: ", genreId);
    return this.get(`v1/genres/${genreId}`);
  }

  async getGenres() {
    return this.get(`v1/genres`);
  }

  async createGenre(name, description, country, year) {
    const data = await this.post("v1/genres", {
      name,
      description,
      country,
      year,
    });
    return data;
  }
}

module.exports = genreAPI;
