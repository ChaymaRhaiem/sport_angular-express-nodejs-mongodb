const mongoose = require ('mongoose');



const teamSchema = mongoose.Schema ( {


    name:String ,
     foundation: String,
    stadium: String,
     owner: String
});

const team  = mongoose.model('Team', teamSchema); // pascal case for models 
module.exports = team;