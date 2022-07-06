const graphql = require('graphql')
const {GraphQLObjectType, GraphQLList, GraphQLString, GraphQLObject, GraphQLInt, GraphQLSchema} = graphql
const Match  = require('../Models/matches')
const UserType = require('./TypeDefs/UserType')

const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    fields: {
        getallmatches: {
            type: new GraphQLList(UserType),
            args: {},
            resolve(parent, args) {
                return Match.find()
            }
        },
        
        getmatchbyid: {
            type: new GraphQLList(UserType),
            args: {id: {type: GraphQLString} },
            resolve(parent, args) {

                const arr = Match.find({match_Id: args.id})
                return arr
            }
        },

        getMatchesByDateRange: {
            type: new GraphQLList(UserType),
            args: {dateStart: {type: GraphQLString}, dateEnd: {type: GraphQLString} },
            resolve(parent, args) {
                // Date isin't in ISO format so I'm simply using comparision in date strings as an example. Can be modified later

                const arr = Match.find({matchdate_gmt: {$gte: args.dateStart}, matchdate_gmt: {$lt: args.dateEnd}})

                return arr
            }
        },
    }
})

const Mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        updateMatchField: {
            type: UserType,
            args: {
                id: {type: GraphQLString}, 
                sName: {type: GraphQLString}
            },
            resolve(parent, args) {

                Match.updateOne({match_Id: args.id}, {seriesname: args.sName}, function(err, matches) {
                    if(err) console.log(err);
                    else console.log(matches);
                })
                return args
            }
        }
    }
})

module.exports = new GraphQLSchema({query: RootQuery, mutation: Mutation})