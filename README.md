# cricket_demo
Demo Project for GraphQL API

As per the tasks mentioned:
* The matches data (kept in sample_data.json) has been ingested to a db (matches) in MongoDB ATLAS
* I have reduced the schema to have only match_id, matchdategmt, league, teama, teamb and seriesname. All the functionalities can be tested over these finite     properties

Following are the graphql APIs:
* getallmatches: call where all matches present in the DB are returned
* getMatchesByDateRange: call where a set of matches are returned when queried with a date range. Note: this will currently compare date range as strings (since    date wasn't in ISO format), we can change that later if need be
* updateMatchField: call where seriesname can be updated in the database. You need to also provide match_id for the match to be updated (as identifier)
* getmatchesByPagination: I WAS NOT ABLE TO UNDERSTAND WHAT THIS ASKED FOR. HENCE, SKIPPED IT

I do not have much experience with AWS lambda; Thus, the application is currently deployed on HEROKU

You can test it by using the link: https://cricketdotcom-demo.herokuapp.com/graphql

Cheers,
Ritik
