const mongoose = require('mongoose')

const resolvers = {
    Query: {
      posts: async (_, args, { Posts } ) => {
        const posts = await Posts.find()
        return posts
      },

      detail: async(_, args, { Details }) => {
        const detail = await Details.find()
        return detail
      },

      blogtype: async(_, { blogType }, { Details, Posts}) => {
        const blogTypes = await Posts.find({ blogType: blogType}) 
        console.log("blogTypes: ",blogTypes)
        return blogTypes
      }
    },

    Mutation: {
      createDetails: async(_, { data }, { Details }) => {
        const existName = await Details.findOne({ uniqueName: data.uniqueName})
        if(existName) {
          throw new Error('Unique Name exists')
        }

        const newDetails = new Details(data)
        const detail = await newDetails.save()

        return detail
      }, 

      createPosts: async(_, { data }, { Posts, Details }) => {
        const existName = await Details.findOne({ uniqueName: data.uniqueName})
        if(!existName){
           throw new Error("The Unique Name is not found")
        }

        const newPost = new Posts({ 
          author_id: existName._id, 
          title: data.title, 
          blogType: data.blogType, 
          description: data.description, 
          image: data.image,
        })
        const post = await newPost.save()

        return post
      },
    },

    Details: {
      posts: async({ id }, args, { Posts }) => {
        const posts = await Posts.find({ author_id: id})
        if(!posts){
          throw new Error("posts error")
        }
        return posts
      }
    },

    Posts: {
      author: async({ author_id }, args, { Details }) => {
        var author =  await Details.findById(mongoose.Types.ObjectId(author_id))
        if(!author) {
            throw new Error('author Error')
        }
        return author
      }
    },

    BlogType: {
      author: async({ author_id }, args, { Details }) => {
        var author =  await Details.findById(mongoose.Types.ObjectId(author_id))
        if(!author) {
            throw new Error('author Error')
        }
        return author
      }
    }
  };

module.exports = resolvers