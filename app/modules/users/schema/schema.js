const { gql } = require("apollo-server");

const userTypeDefs = gql`
  type Query {
    "Fetch a specific user, provided a user's ID"
    user(_id: ID!): User!
    "Fetch a specific user JWT"
    jwt(email: String!, password: String!): JWT!
  }
  type Mutation {
    createUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): User!
  }
  "JWT a specific user token"
  type JWT {
    jwt: String!
    "User password name"
    password: String
    "User email name"
    email: String!
  }
  "User is the person who uses software"
  type User {
    _id: ID!
    "User firts name"
    firstName: String
    "User last name"
    lastName: String
    "User password name"
    password: String
    "User email name"
    email: String!
  }
`;

module.exports = userTypeDefs;
