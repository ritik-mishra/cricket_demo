const express = require('express')
const PORT=3000 
const app = express()
const schema = require('./Schemas/index')
const mongoose = require('mongoose')
const {graphqlHTTP} = require('express-graphql')

const Match = require('./Models/matches')

mongoose.connect("mongodb+srv://ritikmishra:mongodb@cluster0.5a888.mongodb.net/matchdb", {useNewUrlParser: true});



app.use(
    "/graphql",
    graphqlHTTP({
      schema,
      graphiql: true,
    })
  );



app.listen(PORT, () => {
    console.log("server running on 3000")
})