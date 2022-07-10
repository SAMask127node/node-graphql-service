const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

const UserAPI = require("../app/modules/users/service/user-api");
const GenreAPI = require("../app/modules/genres/service/genre-api");
const AlbumAPI = require("../app/modules/albums/service/album-api");
const ArtistAPI = require("../app/modules/artists/service/artist-api");
const BandAPI = require("../app/modules/bands/service/band-api");
const TrackAPI = require("../app/modules/tracks/service/track-api");
const FavouritesAPI = require("../app/modules/favourites/service/favourites-api");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  context: ({ req }) => {
    const token = req.headers.authorization || "";
    return { token };
  },
  dataSources: () => {
    return {
      userAPI: new UserAPI(),
      genreAPI: new GenreAPI(),
      albumAPI: new AlbumAPI(),
      artistAPI: new ArtistAPI(),
      bandAPI: new BandAPI(),
      trackAPI: new TrackAPI(),
      favouritesAPI: new FavouritesAPI(),
    };
  },
});

server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});
