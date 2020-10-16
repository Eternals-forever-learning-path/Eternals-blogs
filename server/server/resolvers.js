const resolvers = {
    Query: {

      hello: (_, args, { Posts, Details }, info) => {
          console.log(Posts, Details)
          return "Hello World"
      },
      
      posts: (parent, args, ctx, info) => {
        console.log(parent, ctx)
        return parent
      }
    },

    Mutation: {

      newPosts: (_, args, ctx) => {
        console.log("ctx: ",args)
        console.log("ctx: ",ctx)
        return args
      },

      newDetails: (_, args, ctx) => {
        console.log("args: ",args)
        console.log("ctx: ",ctx)
        return args
      } 
    }
  };

module.exports = resolvers