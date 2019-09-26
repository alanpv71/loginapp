const express = require ('express')
const bodyParser = require ('body-parser')
const mongoose = require ('mongoose')

const app = express();

//body parser
app.use(bodyParser.urlencoded ({
extended : false})
)
app.use(bodyParser.json());

//db key config
const db = require("./config/keys").mongoURI;

//mongodb connection
mongoose.connect(db, {useNewUrlParser : true} ).then(console.log("MongoDB Connected Successfully")).catch(err => console.log(err));

//port setup
const port = process.env.PORT || 5000 ;
app.listen(port, () => console.log(`Server up and running on port ${port} !`));
