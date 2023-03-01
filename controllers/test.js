const User = require('../models/User')
var express = require('express')
var router = express.Router()

const test = (req,res)=>{
    //console.log('....................')
    res.send({
        message : "this api is working"
    })
    }
module.exports = test;