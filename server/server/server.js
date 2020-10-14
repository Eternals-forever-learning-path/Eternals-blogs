const express = require('express')
const { ApolloServer } = require("apollo-server-express")
const mongoose = require('mongoose')
require('dotenv').config()

const Posts = require('./model/Posts')
const Details = require('./model/Details')
const resolvers = require('./resolvers')
const typeDefs = require('./typeDefs')

const PORT = process.env.PORT 

const startServer = async() => {

    const app = express()

    const apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
        context: () => { 
            return { Posts, Details } 
        }
    })

    apolloServer.applyMiddleware({ app })

    await mongoose.connect(process.env.MONGO_URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true,
    },(err)=>{
        if(err) throw err;
        console.log("DB Connected Successfully");
    })

    app.listen(PORT, () => {
        console.log(`The server is running on http://localhost:${PORT}${apolloServer.graphqlPath}`)
    })

}

startServer()