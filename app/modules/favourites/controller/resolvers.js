const favouritesResolvers = {
  Query: {
    favourites: async (_, __, { dataSources }) => {
      const data = await dataSources.favouritesAPI.getFavourites();
      return data;
    },
  },
};

module.exports = favouritesResolvers;
