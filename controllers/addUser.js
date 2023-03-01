var express = require('express')
const Contact = require('../models/newUser')

const addUser = async(req,res)=>{
    let data =  Contact.build(req.body)
    console.log(data)
    await data.save();
    console.log('data saved')

}
module.exports = addUser;