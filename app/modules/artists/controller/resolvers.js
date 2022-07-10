const artistResolvers = {
  Query: {
    artist: async (_, { _id }, { dataSources }) => {
      const data = await dataSources.artistAPI.getArtist(_id);
      return data;
    },
    artists: async (_, __, { dataSources }) => {
      const data = await dataSources.artistAPI.getArtists();
      console.log("data: ", data);
      return data;
    },
  },
};

module.exports = artistResolvers;
