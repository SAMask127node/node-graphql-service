const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    "Fetch a specific user, provided a user's ID"
    genre(_id: ID!): Genre!
    "Fetch a specific user JWT"
    genres: GenresInfo!
  }

  type Mutation {
    create(
      name: String!
      description: String!
      country: String!
      year: String!
    ): Genre!
  }

  type GenresInfo {
    items: [Genre!]!

    limit: Int

    offset: Int

    total: Int
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

module.exports = typeDefs;
