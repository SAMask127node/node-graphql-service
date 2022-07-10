const { gql } = require("apollo-server");

const favouritesTypeDefs = gql`
  type Query {
    favourites: [Favourites!]!
  }

  type Favourites {
    id: ID!
    userId: ID
    bands: [Band]
    genres: [Genre]
    artists: [Artist]
    tracks: [Track]
  }
`;

module.exports = favouritesTypeDefs;
