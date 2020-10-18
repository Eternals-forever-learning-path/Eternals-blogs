const resolvers = {
    Query: {

      hello: (_, args, { Posts, Details }, info) => {
          console.log(Posts, Details)
          return "Hello World"
      },
      
      posts: async (parent, args, { Posts }, info) => {
        
        const posts = await Posts.find()
        
        return posts
      },

      detail: async(parent, args, { Details }, info) => {
          const detail = await Details.find()

          console.log(detail)

          return detail
      }
    },

    Mutation: {

      createDetails: async(_, args, { Details }) => {
        
        console.log("args: ", args)
        const existName = await Details.findOne({ uniqueName: args.newDetailInput.uniqueName})

        if(existName) {
          throw new Error('Unique Name exists'  )
        }

        const newDetails = new Details(args.newDetailInput)
        const detail = await newDetails.save()
        console.log("detail: ", detail)

        return detail
      }, 

      createPosts: async(_, args, { Posts, Details }) => {
      
        console.log('args: ', args)

        const existName = await Details.findOne({ uniqueName: args.newPostInput.uniqueName})
        console.log(existName)

        if(!existName){
           
        }

        const newPost = new Posts({ title: args.newPostInput.title, blogType: args.newPostInput.blogType})
        const post = await newPost.save()
        console.log("post: ", post)

        return post

      },
    },

    Details: {
      posts: async(parents, args, { Details, Posts}) => {
        console.log(parents)
        const posts =  Posts.findOne({ posts: {id: parents.id}})
        if(!posts){
          throw new Error("posts error")
        }
      }
    },

    // Posts: {

    // }

  };

module.exports = resolvers