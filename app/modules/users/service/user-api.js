require("dotenv").config();
const { RESTDataSource } = require("apollo-datasource-rest");

class userAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = "http://localhost:3004/";
  }

  async getUser(userId) {
    return this.get(`v1/users/${userId}`);
  }

  async postJWT(email, password) {
    const data = await this.post("v1/users/login", {
      email,
      password,
    });
    return data;
  }

  async createUser(firstName, lastName, email, password) {
    console.log("email: ", email, "password: ", password);
    const data = await this.post("v1/users/register", {
      firstName,
      lastName,
      email,
      password,
    });
    console.log("data: ", data);
    return data;
  }
}

module.exports = userAPI;
