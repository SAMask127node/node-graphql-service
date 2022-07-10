const genreResolvers = require("../app/modules/genres/controller/resolvers");
const userResolvers = require("../app/modules/users/controller/resolvers");
var _ = require("lodash");
const albumResolvers = require("../app/modules/albums/controller/resolvers");
const bandResolvers = require("../app/modules/bands/controller/resolvers");
const artistResolvers = require("../app/modules/artists/controller/resolvers");
const trackResolvers = require("../app/modules/tracks/controller/resolvers");

// const resolvers = {
//   Query: genreResolvers.Query,
//   Mutation: genreResolvers.Mutation,
// };
const resolvers = _.merge(
  userResolvers,
  genreResolvers,
  albumResolvers,
  bandResolvers,
  artistResolvers,
  trackResolvers
);

module.exports = resolvers;
