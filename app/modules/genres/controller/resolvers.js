const genreResolvers = {
  Query: {
    // get a single user by ID, for the user page
    genre: async (_, { _id }, { dataSources }) => {
      console.log("id: ", _id);
      // console.log("dataSources: ", dataSources);
      const data = await dataSources.genreAPI.getGenre(_id);
      return data;
    },
    genres: async (_, __, { dataSources }) => {
      const data = await dataSources.genreAPI.getGenres();
      console.log("data: ", data);
      return data;
    },
  },
  Mutation: {
    createGenre: async (
      _,
      { name, description, country, year },
      { dataSources }
    ) => {
      year = parseInt(year);
      const data = await dataSources.genreAPI.createGenre(
        name,
        description,
        country,
        year
      );
      return data;
    },
    updateGenre: async (
      _,
      { _id, name, description, country, year },
      { dataSources }
    ) => {
      year = parseInt(year);
      const data = await dataSources.genreAPI.updateGenre(
        _id,
        name,
        description,
        country,
        year
      );
      return data;
    },
    deleteGenre: async (_, { _id }, { dataSources }) => {
      const data = await dataSources.genreAPI.deleteGenre(_id);
      return data;
    },
  },
};

module.exports = genreResolvers;
