const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema( {
    match_Id: String,
    matchdate_gmt: String,
    league: String,
    teama: String,
    teamb: String,
    seriesname: String
});

const Match = mongoose.model("Match", matchSchema)

module.exports  = Match;
