const express = require ('express');
const mongoose = require('mongoose');
const router = express.Router();


//GET
router.get("/Dashboard", (req,res) => {
    console.log("hiiii");
    var resultArray = [];
mongoose.connect(url, function(err, db){
assert.equal(null, err);
var cursor = db.collection('users').find();
cursor.forEach(function(doc, err){
assert.equal(null, err);
resultArray.push(doc);
}, function() {
db.close();
res.render(console.log(resultArray) );
});
});
});



//export

module.exports = buses;