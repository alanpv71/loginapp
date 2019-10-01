const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const app = express();
const dbURI = require('./config/keys').dbURI;
const users = require ('./routes/users'); 

//mongoose

mongoose.connect(dbURI , {
    useNewUrlParser : true
}).then(() => console.log("MongoDB Connected")).catch( err => console.log(err) );


//middleware

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//routes
app.use("/api/users", users);


//port

const port = process.env.PORT || 5000 ;
app.listen(port, () => console.log('Server Running :  port 5000 '));