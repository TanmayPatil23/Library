const express = require('express')
const router = require('express').Router()

router.get('/' , (req , res)=> {
    // router code here
    // res.send("HELLO")
    res.render('index')

})


module.exports = router



