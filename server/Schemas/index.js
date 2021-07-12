const graphql = require("graphql")
const {GraphQLObjectType, GraphQLString, GraphQLList, GraphQLInt}= graphql;
const _= require("lodash")

const UserType = require("./TypeDefs/UserType.js")
const UserLinkdata = require("./TypeDefs/UserLinks")
const LinkInput = require("./TypeDefs/LinkInput")

const UserLinks= require('./../models/links')
const User = require('./../models/user')

const RootQuery=new GraphQLObjectType({
  name:"RootQueryType",
  fields:{
    getAllUsers:{
      type: GraphQLList(UserType),
      resolve(parent,args){
        return User.find()
      }
    },

    checkUsername:{
      type: GraphQLList(UserType),
      args:{
        username: {type: GraphQLString}
      },
      resolve(parent,args){
        return User.find({username: args.username})
      }
    },

    getLinkdata:{
      type: GraphQLList(UserLinkdata),
      args:{
        username: {type: GraphQLString}
      },
      resolve(parent,args){
        return UserLinks.find({username: args.username})
      }
    }
  }
})

const Mutation= new GraphQLObjectType({
  name:"Mutation",
  fields: {
    createUser: {
      type: UserType,
      args:{
        username:{type: GraphQLString},
        email: {type: GraphQLString},
        password: {type: GraphQLString},
      },

      resolve(parent,args){
        let tempuser = new User({
          username: args.username,
          email:args.email,
          password: args.password,
        })
        tempuser.save()
        return args
      }
    },

    addLinks: {
      type: UserLinkdata,
      args:{
        username:{type: GraphQLString},
        email:{type: GraphQLString},
        imgurl: {type: GraphQLString},
        name: {type: GraphQLString},
        socials:{type: GraphQLList(GraphQLString)},
        links:{type: GraphQLList(LinkInput)},
      },

      resolve(parent,args){
        let templinks= new UserLinks({
          username:args.username,
          email:args.email,
          imgurl:args.imgurl,
          name: args.name,
          socials: args.socials,
          links: args.links
        })

        templinks.save()
        return args
      }
    },
  }
})

module.exports = new graphql.GraphQLSchema({
    query: RootQuery,
    mutation: Mutation,
    })