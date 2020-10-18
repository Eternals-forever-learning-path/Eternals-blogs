const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    hello: String
    posts: [Posts]
    detail: [Details]
  },

  type Mutation {
    createDetails( newDetailInput: DetailInput ): Details
    createPosts( newPostInput: PostInput ): Posts
  },

  type Details {
    id: ID
    uniqueName: String!
    name: String!
    college: String!
    posts: [Posts]
  }

  type Posts {
    id: ID!
    title: String!
    blogType: String!
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