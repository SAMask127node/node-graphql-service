const bandResolvers = {
  Query: {
    band: async (_, { _id }, { dataSources }) => {
      const data = await dataSources.bandAPI.getBand(_id);
      return data;
    },
    bands: async (_, __, { dataSources }) => {
      const data = await dataSources.bandAPI.getBands();
      console.log("data: ", data);
      return data;
    },
  },
};

module.exports = bandResolvers;
