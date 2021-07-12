const graphql = require("graphql")
const {GraphQLInputObjectType, GraphQLString}= graphql;

const LinkInput= new GraphQLInputObjectType({
  name: "LinkInput",
  fields: ()=>({
    text: {type: GraphQLString},
    href: {type: GraphQLString},
  })
})

module.exports= LinkInput
