const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");

// const UserAPI = require("../app/modules/users/service/user-api");
const GenreAPI = require("./datasources/genre-api");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  context: ({ req }) => {
    // console.log("reqsosjndovnsd    :    ", req);
    // console.log(req.headers);
    // console.log("reqsosjndovnsd    :    ", req.headers.authorization);
    const token = req.headers.authorization || "";
    // Add the user to the context
    return { token };
  },
  dataSources: () => {
    return {
      // userAPI: new UserAPI(),
      genreAPI: new GenreAPI(),
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
