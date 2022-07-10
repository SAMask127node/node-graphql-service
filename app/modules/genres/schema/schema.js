const { gql } = require("apollo-server");

const genreTypeDefs = gql`
  type Query {
    "Fetch a specific user, provided a user's ID"
    genre(_id: ID!): Genre!
    "Fetch a specific user JWT"
    genres: GenresInfo!
  }

  type Mutation {
    createGenre(
      name: String!
      description: String!
      country: String!
      year: String!
    ): Genre!
    updateGenre(
      _id: ID!
      name: String!
      description: String!
      country: String!
      year: String!
    ): Genre!
    deleteGenre(_id: ID!): DeletedStatus!
  }

  type GenresInfo {
    items: [Genre!]!

    limit: Int

    offset: Int

    total: Int
  }

  type DeletedStatus {
    acknowledged: Boolean

    deletedCount: Int
  }

  type Genre {
    _id: ID!
    "The genre's name"
    name: String
    "The genre's description"
    description: String
    "The genre's country"
    country: String
    "The genre's year"
    year: String
  }
`;

module.exports = genreTypeDefs;
