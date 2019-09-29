const mongoose = require('mongoose')
const Joi = require("joi");
const userSchema = new mongoose.Schema({
    username :{
        type :String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    date: {
        type: Date,
        default: Date.now
      }
})



//mnodel

const Users = new mongoose.model("users" , userSchema);
//validatino
function registrationValidation (user) {
    const schema = {
        username : Joi.string().min(3).max(30).required(),
        email : Joi.string().required(),
        password : Joi.string().required()
    };

    return Joi.validate(user, schema);
}

function loginValidation (user) {
    const schema = {
        
        email : Joi.string().required(),
        password : Joi.string().required()
    };

    return Joi.validate(user, schema);
}


exports.Users = Users;

exports.regValidate = registrationValidation;
exports.logValidate = loginValidation;