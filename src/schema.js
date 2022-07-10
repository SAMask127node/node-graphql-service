const { gql } = require("apollo-server");
const albumTypeDefs = require("../app/modules/albums/schema/schema");
const artistTypeDefs = require("../app/modules/artists/schema/schema");
const bandTypeDefs = require("../app/modules/bands/schema/schema");
const favouritesTypeDefs = require("../app/modules/favourites/schema/schema");
const genreTypeDefs = require("../app/modules/genres/schema/schema");
const trackTypeDefs = require("../app/modules/tracks/schema/schema");
const userTypeDefs = require("../app/modules/users/schema/schema");

const typeDefs = gql`
  ${userTypeDefs}
  ${genreTypeDefs}
  ${artistTypeDefs}
  ${bandTypeDefs}
  ${albumTypeDefs}
  ${trackTypeDefs}
  ${favouritesTypeDefs}
`;

module.exports = typeDefs;
