const { gql } = require("apollo-server");

const trackTypeDefs = gql`
  type Query {
    "Fetch a specific user, provided a user's ID"
    track(_id: ID!): Track!
    "Fetch a specific user JWT"
    tracks: [Track!]!
  }

  type Track {
    id: ID!
    title: String!
    album: Album
    artists: [Artist]
    bands: [Band]
    duration: Int
    released: Int
    genres: [Genre]
  }
`;

module.exports = trackTypeDefs;
