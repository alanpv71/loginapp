import React from 'react';
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb+srv://admin:admin@getmybus-a9dlh.mongodb.net/test?retryWrites=true&w=majority';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, client) {
    console.log(err);
    assert.equal(null, err);
   const db = client.db("test");
var cursor = db.collection('buses').find({});
cursor.forEach(iterateFunc, errorFunc);
function iterateFunc(doc) {
    console.log(JSON.stringify(doc, null, 4));
 }
 
 function errorFunc(error) {
    console.log(error);
 }
 
 
 client.close();
});


const Selectbus = () => {
return (
    <div>Hiiiii</div>
)
    

}

export default Selectbus;












