const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    hello: String
    posts: Posts!
    details: Details
  },

  type Mutation {
    newPosts( newPostInput: PostInput! ): Posts!
    newDetails( newDetailInput: DetailInput ): Details
  },
  
  type Posts {
    id: ID!
    title: String!
    Description: String!
    image: String
    name: String!
    college: String!
  }

  type Details {
    id: ID!
    linkGithub: String
    linkLinkedIn: String
    linkPersonal: String
    image: String
  }

  input PostInput {
    title: String!
    Description: String!
    image: String
    name: String!
    college: String!
  }

  input DetailInput {
    linkGithub: String
    linkLinkedIn: String
    linkPersonal: String
    image: String
  }

`;

module.exports = typeDefs