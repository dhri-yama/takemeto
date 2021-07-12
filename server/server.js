const express = require("express");
const app = express();
const PORT = 3001;
const graphql = require("graphql")
const { graphqlHTTP } = require("express-graphql");
const mongoose = require("mongoose")
const schema = require('./Schemas')
mongoose.connect('mongodb+srv://dhriyama:2BSMYyhARyyVC8@cluster0.loojc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
  useCreateIndex: true
});

mongoose.connection.once('open',()=>{
  console.log("connected to DB")
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql:true
}))

app.listen(PORT, () => {
  console.log("Server running");
});