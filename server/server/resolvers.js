const resolvers = {
    Query: {
      hello: (_, args, { Posts, Details }, info) => {
          console.log(Posts, Details)
          return "Hello World"
      },
    },
  };

module.exports = resolvers