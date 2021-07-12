const graphql = require("graphql")
const {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID}= graphql;

const UserType =new GraphQLObjectType({
    name: "User",
    fields: () => ({
      username: {type: GraphQLString},
      password: {type: GraphQLString},
      email: {type: GraphQLString},
    })
  })

module.exports = UserType