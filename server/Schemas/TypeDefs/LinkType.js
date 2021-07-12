const graphql = require("graphql")
const {GraphQLObjectType, GraphQLString}= graphql;

const LinkType= new GraphQLObjectType({
  name: "Links",
  fields: ()=>({
    text: {type: GraphQLString},
    href: {type: GraphQLString},
  })
})

module.exports= LinkType
