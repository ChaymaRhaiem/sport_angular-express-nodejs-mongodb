const mongoose = require ('mongoose');

const matchSchema = mongoose.Schema ( {


    teamOne:String ,
    teamTwo : String,
    scoreOne: String,
    scoreTwo : String,
    img:String
});

const match  = mongoose.model('Match', matchSchema); // pascal case for models 
module.exports = match;