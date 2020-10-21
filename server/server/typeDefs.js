const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    posts: [Posts!]!
    detail: [Details!]!
    blogtype( blogType: String ): [BlogType!]!
  },

  type Mutation {
    createDetails( data: DetailInput! ): Details!
    createPosts( data: PostInput! ): Posts!
  },

  type BlogType {
    title: String!
    author_id: ID!
    createdAt: String!
    author: Details!
  }

  type Details {
    id: ID
    # uniqueName: String
    name: String!
    college: String!
    linkGithub: String
    linkLinkedIn: String
    linkPersonal: String
    image: String
    posts: [Posts!]
  }

  type Posts {
    id: ID
    # uniqueName: String
    title: String!
    description: String!
    blogType: String!
    author_id: ID!
    author: Details!
  }

  input DetailInput{
    uniqueName: String!
    name: String!
    college: String!
    linkGithub: String
    linkLinkedIn: String
    linkPersonal: String
    image: String
  }

  input PostInput {
    title: String!
    blogType: String!
    uniqueName: String!
    description: String!
    image: String
  }
    
`;

module.exports = typeDefs