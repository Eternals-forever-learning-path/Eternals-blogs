const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    posts: [Posts]
    detail: [Details]
  },

  type Mutation {
    createDetails( newDetailInput: DetailInput ): Details
    createPosts( newPostInput: PostInput ): Posts
  },

  type Details {
    id: ID
    uniqueName: String
    name: String!
    college: String!
    posts: [Posts]
  }

  type Posts {
    id: ID
    uniqueName: String
    title: String!
    blogType: String!
    author_id: ID
    author: Details
  }

  input DetailInput{
    uniqueName: String!
    name: String!
    college: String!
  }

  input PostInput {
    title: String!
    blogType: String!
    uniqueName: String!
  }
    
`;

module.exports = typeDefs