const genreResolvers = require("../app/modules/genres/controller/resolvers");
const userResolvers = require("../app/modules/users/controller/resolvers");
var _ = require("lodash");

// const resolvers = {
//   Query: genreResolvers.Query,
//   Mutation: genreResolvers.Mutation,
// };
const resolvers = _.merge(userResolvers, genreResolvers);

module.exports = resolvers;
