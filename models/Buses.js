const mongoose = require('mongoose')
const Joi = require("joi");
const busSchema = new mongoose.Schema({
    busname :{
        type :String,
        required : true
    },
    starttime : {
        type : String,
        required : true
    },
    endtime : {
        type : String,
        required : true
    },
   route: {
        type: String,
        required : true
        },
    fare : {
        type : String,
        required : true
    }
})



//mnodel

const BusSchema = new mongoose.model("buses" , busSchema);


exports.BusSchema = BusSchema;

