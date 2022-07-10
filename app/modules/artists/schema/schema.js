const { gql } = require("apollo-server");

const artistTypeDefs = gql`
  type Query {
    "Fetch a specific user, provided a user's ID"
    artist(_id: ID!): Artist!
    "Fetch a specific user JWT"
    artists: [Artist!]!
  }

  type Artist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [Band]
    instruments: [String]
  }
`;

module.exports = artistTypeDefs;
