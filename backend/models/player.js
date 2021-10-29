const mongoose = require ('mongoose');
const playerSchema = mongoose.Schema ( {


    name :String,
    nbr:Number,
    post:String,
    team:String,
    age:Number
});

const player  = mongoose.model('Player', playerSchema); // pascal case for models 
module.exports = player;