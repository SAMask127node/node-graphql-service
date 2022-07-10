const { gql } = require("apollo-server");

const bandTypeDefs = gql`
  type Query {
    "Fetch a specific user, provided a user's ID"
    band(_id: ID!): Band!
    "Fetch a specific user JWT"
    bands: [Band!]!
  }

  type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: [Genre]
  }
`;

module.exports = bandTypeDefs;
