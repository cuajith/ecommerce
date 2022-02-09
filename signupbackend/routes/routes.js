const express = require('express')
const router = express.Router()
const signUpTemplateCopy = require('../models/Signupmodels') 
const bcrypt = require('bcrypt')

router.post('/signup', async (request, response)=>{

    const saltPassword = await bcrypt.genSalt(10)
    const securePassword = await bcrypt.hash(request.body.password, saltPassword)

    const signedUpUser = new signUpTemplateCopy({
    fullName:request.body.fullName,
    username:request.body.username,
    email:request.body.email,
    password:securePassword
    })
    signedUpUser.save()
    .then(data=>{
        response.json(data)
    })
    .catch(err=>{
        response.json(err)
    })
})

router.get('/findfirst', function(req, res) {
    signUpTemplateCopy.findOne({username:"muruga90"}, 
    function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
});

router.get('/delete', function(req, res) {
    signUpTemplateCopy.remove({username:"joey"}, 
    function(err, data) {
        if(err){
            console.log(err);
        }
        else{
            res.send(data);
        }
    });  
});


module.exports = router