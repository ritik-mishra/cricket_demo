const graphql = require('graphql')
const {GraphQLObjectType,  GraphQLString, GraphQLObject, GraphQLInt} = graphql

const UserType = new GraphQLObjectType({
    name: "User",
    fields: () => ({
      match_Id: { type: GraphQLString },
      matchdate_gmt: { type: GraphQLString },
      league: { type: GraphQLString },
      teama: { type: GraphQLString },
      teamb: { type: GraphQLString },
      seriesname: { type: GraphQLString },
    })
  });

module.exports = UserType