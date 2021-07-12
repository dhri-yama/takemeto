const graphql = require("graphql")
const {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLID}= graphql;
const LinkType = require('./LinkType')

const UserLinkdata =new GraphQLObjectType({
    name: "UserLinkdata",
    fields: () => ({
      username: {type: GraphQLString},
      email: {type: GraphQLString},
      imgurl: {type: GraphQLString},
      name:{type: GraphQLString},
      socials:{type: GraphQLList(GraphQLString)},
      links:{type: new GraphQLList(LinkType)},
    })
  })

module.exports = UserLinkdata