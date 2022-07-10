const trackResolvers = {
  Query: {
    track: async (_, { _id }, { dataSources }) => {
      const data = await dataSources.trackAPI.getTrack(_id);
      return data;
    },
    tracks: async (_, __, { dataSources }) => {
      const data = await dataSources.trackAPI.getTracks();
      return data;
    },
  },
};

module.exports = trackResolvers;
