const express = require('express');
const app = express();
const bcrypt = require('bcrypt');


const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://chayma:azerty@cluster1.kunc4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");


// Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});


const Team = require('./models/team.js'); //import team models 

const Match = require('./models/match.js'); //import match models 
// import body parser module
const bodyParser = require("body-parser");
// Prepare Response to JSON Object to send to FE
app.use(bodyParser.json());
// Parse getted Body from FE to JSON Object
app.use(bodyParser.urlencoded({ extended: true }));

const Player = require('./models/player.js'); //import player models 






//business logic to add players 
app.post('/players', (req, res) => {
    console.log('here into add player', req.body);

    //add obj to db
    const myObj = new Player({


        name: req.body.name,
        nbr: req.body.nbr,
        post: req.body.post,
        team: req.body.team,
        age: req.body.age
    });

    myObj.save();

});

//business logic to add match 
// http://localhost:3000/matches => /



app.get('/matches', (req, res) => {
    console.log('here into get all matches : ');
    //access to DB to find objects
    Match.find((err, docs) => {

        if (err) {
            console.log('error into DB ', err);
        }
        else {
            res.status(200).json({
                matches: docs
            });
        }
    }
    )

}


);

//business logic to add team 
// http://localhost:3000/teams => /
app.post('/teams', (req, res) => {
    console.log('here into add team', req.body);

    //add obj to db
    const teamObj = new Team({

        name: req.body.name,
        foundation: req.body.foundation,
        stadium: req.body.stadium,
        owner: req.body.owner
    });
    myObj.save();

});


app.delete('/matches/:id', (req, res) => {
    console.log('here into delete');
    console.log('here  into ID ', req.params.id);
    Match.deleteOne({ _id: req.params.id }).then(
        (result) => {
            console.log('', result);
            if (result) {
                res.status(200).json({
                    message: 'sucess'
                });

            }
        });

}

);

app.get('/matches/:id', (req, res) => {
    console.log('here into id : ', req.params.id);
    Match.findOne({ _id: req.params.id }).then(
        (result) => {
            console.log('Result', req.params.id);
            if (result) {
                res.status(200).json({  //if the satuts is OK send json file response
                    match: result //format json reponse envoyé au service 
                })
            }
        }
    )
}
);

//edit match by id
/*app.put('/matches/:id', (req,res) => {
    const newMatch = new Match(req.body);
    console.log('Here into edit', req.params.id);
    console.log('edit body', req.body);
    Match.updateOne({_id: req.params.id}, newMatch).then(
        (result) => {
            console.log('Result after edit', result);
            if(result){
                res.status(200).json({
                    message : 'Edited with success'
                });
            }
        }
    );

});*/
app.put('/matches/:id', (req, res) => {
    const newMatch = new Match(req.body);
    console.log('Here into edit', req.params.id);
    console.log('edit body', req.body);
    Match.updateOne({ _id: req.params.id }, newMatch).then(
        (result) => {
            console.log('Result after edit', result);
            if (result) {
                res.status(200).json({
                    message: 'Edited with success'
                });
            }
        }
    );

})



const User = require('./models/user.js'); //import user models 

//add a user
app.post('/users/signup', (req, res) => {
    bcrypt.hash(req.body.pwd, 10).then(
        (result) => {
            console.log('Here into Add User', req.body);
            //add object to DB
            const userObj = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                pwd: result
            });

            userObj.save();
        }
    )
});


//login 

app.post('/users/login',(req,res)=>{
    console.log('Here login', req.body);
    User.findOne({email:req.body.email}).then(
        (emailResult)=> {
            if (!emailResult) {
                res.status(200).json({
                    message:'0'
                })
            }
            return bcrypt.compare(req.body.pwd, emailResult.pwd)
        }
    ).then(
       (pwdResult) => {
           if (!pwdResult) {
            res.status(200).json({
                message:'1'
            })
           }
           User.findOne({email:req.body.email}).then(
               (result)=>{
                   let userToSend = {
                       firstName: result.firstName,
                       lastName: result.lastName
                   }
                   res.status(200).json({
                       user:userToSend,
                       message: '2'
                   })
               }
           )
       }
    )
});







const path = require('path');
const multer = require('multer');


app.use('/images', express.static(path.join('backend/images')))
const MIME_TYPE = {
'image/png': 'png',
'image/jpeg': 'jpg',
'image/jpg': 'jpg'
}
const storage = multer.diskStorage({
// destination
destination: (req, file, cb) => {
const isValid = MIME_TYPE[file.mimetype];
let error = new Error("Mime type is invalid");
if (isValid) {
error = null;
}
cb(null, 'backend/images')
},
filename: (req, file, cb) => {
const name = file.originalname.toLowerCase().split(' ').join('-');
const extension = MIME_TYPE[file.mimetype];
const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
extension;
cb(null, imgName);
}
});

// Create storage engine
// const storage = new GridFsStorage({
//     url: mongoURI,
//     file: (req, file) => {
//       return new Promise((resolve, reject) => {
//         crypto.randomBytes(16, (err, buf) => {
//           if (err) {
//             return reject(err)
//           }
//           const filename = file.originalname
//           const fileInfo = {
//             filename: filename,
//             bucketName: 'uploads',
//           }
//           resolve(fileInfo)
//         })
//       })
//     },
//   })
  
//   const upload = multer({ storage })








// upload.single('img'),
// Traitement logique
app.post('/matches', multer({ storage: storage }).single('img'),(req, res) => {
    console.log('here into add match', req.body);
   let  url = req.protocol + '://' + req.get('host');

    //add obj to db
    const myObj = new Match({


        teamOne: req.body.teamOne,
        teamTwo: req.body.teamTwo,
        scoreOne: req.body.scoreOne,
        scoreTwo: req.body.scoreTwo,
        img: req.file.filename

    });

    myObj.save();

});


module.exports = app;
