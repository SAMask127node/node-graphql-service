const { gql } = require("apollo-server");
const genreTypeDefs = require("../app/modules/genres/schema/schema");
const userTypeDefs = require("../app/modules/users/schema/schema");

const typeDefs = gql`
  ${userTypeDefs}
  ${genreTypeDefs}
`;

module.exports = typeDefs;
