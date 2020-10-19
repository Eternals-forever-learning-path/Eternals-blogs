const mongoose = require('mongoose')

const resolvers = {
    Query: {
      posts: async (parent, args, { Posts } ) => {
        const posts = await Posts.find()
        console.log("POSTS: ", posts)
        return posts
      },

      detail: async(parent, args, { Details }) => {
          const detail = await Details.find()
          return detail
      }
    },

    Mutation: {
      createDetails: async(_, args, { Details }) => {
        const existName = await Details.findOne({ uniqueName: args.newDetailInput.uniqueName})
        if(existName) {
          throw new Error('Unique Name exists')
        }

        const newDetails = new Details(args.newDetailInput)
        const detail = await newDetails.save()

        return detail
      }, 

      createPosts: async(_, args, { Posts, Details }) => {
        const existName = await Details.findOne({ uniqueName: args.newPostInput.uniqueName})
        if(!existName){
           throw new Error("The Unique Name is not found")
        }

        const newPost = new Posts({ author_id: existName._id , title: args.newPostInput.title, blogType: args.newPostInput.blogType })
        const post = await newPost.save()

        return post
      },
    },

    Details: {
      posts: async(parents, args, { Details, Posts}) => {
        const posts =  await Posts.find({ author_id: parents.id})
        if(!posts){
          throw new Error("posts error")
        }
        return posts
      }
    },

    Posts: {
      author: async(parents, args, {Details, Posts}) => {
        var author =  await Details.findById(mongoose.Types.ObjectId(parents.author_id))
        if(!author) {
            throw new Error('Error')
        }
        return author
      }
    }
  };

module.exports = resolvers