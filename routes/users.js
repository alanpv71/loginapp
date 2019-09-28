const express = require ('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const router = express.Router();

const { Users , regValidate} = require('../models/Users');
//GET
router.get("/", (req,res) => {
    res.send("hiiii");
})


//POST
router.post("/register", (req,res) => {
    const { error } = regValidate(req.body);
    if(error) {
        return res.status(400).json({
        status : 'error',
        type : error.details[0].path[0],
        msg : error.details[0].message
          });
    }

    const newUser = new Users ({
        username : req.body.username,
        email : req.body.email,
        password: req.body.password
    });
//check email
    Users.findOne({email : req.body.email}).then(emailMatch =>{
        if(emailMatch) {
            return res.status(400).json({
                status : "error",
                type : "email",
                msg : "Email Already Registerd"
            })
        }
    })

    Users.findOne({username : req.body.username}).then(username =>{
        if(username) {
            return res.status(400).json({
                status : "error",
                type : "username",
                msg : "username is taken"
            })
        }
    })


    ////hashing the passsword

    bcrypt.genSalt(10, (err,salt) => {
        bcrypt.hash(newUser.password, salt, (err,hash) =>{
            if (err) throw err;
            newUser.password = hash;

            //save to db

            newUser.save().then(post => res.json(post)).catch(err => console.error(err));
        })
    })
});




//export

module.exports = router;