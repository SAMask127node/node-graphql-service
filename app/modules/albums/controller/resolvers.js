const albumResolvers = {
  Query: {
    album: async (_, { _id }, { dataSources }) => {
      const data = await dataSources.albumAPI.getAlbum(_id);
      return data;
    },
    albums: async (_, __, { dataSources }) => {
      const data = await dataSources.albumAPI.getAlbums();
      return data;
    },
  },
};

module.exports = albumResolvers;
