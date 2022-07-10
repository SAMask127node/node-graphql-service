const resolvers = {
  Query: {
    // get a single user by ID, for the user page
    user: async (_, { _id }, { dataSources }) => {
      console.log("id: ", _id);
      console.log("dataSources: ", dataSources);
      const data = await dataSources.userAPI.getUser(_id);
      return data;
    },
    jwt: async (_, { email, password }, { dataSources }) => {
      const data = await dataSources.userAPI.postJWT(email, password);
      return data;
    },
  },

  Mutation: {
    create: async (
      _,
      { firstName, lastName, email, password },
      { dataSources }
    ) => {
      const data = await dataSources.userAPI.createUser(
        firstName,
        lastName,
        email,
        password
      );
      return data;
    },
  },
};

module.exports = resolvers;
