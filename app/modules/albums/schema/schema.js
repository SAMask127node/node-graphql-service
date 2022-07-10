const { gql } = require("apollo-server");

const albumTypeDefs = gql`
  type Query {
    "Fetch a specific user, provided a user's ID"
    album(_id: ID!): Album!
    "Fetch a specific user JWT"
    albums: [Album!]!
  }

  type Album {
    id: ID!
    name: String
    released: Int
    artists: [Artist]
    bands: [Band]
    tracks: [Track]
    genres: [Genre]
    image: String
  }
`;

module.exports = albumTypeDefs;
