/**
 * Created by Gaurav on 7/26/2017.
 */
var express = require('express');
var models_user = require('../models/patient');
var router = express.Router();



router.get('/', function(req, res, next) {
    res.render('test');
});




router.post('/', function(req, res, next) {
    console.log("Patient Id :  " +req.body.pid);

    models_user.getPatientByUsername(req.body.pid, function (err, user) {
        if (err) {
            //return done(err);
            console.log('Error');
            throw err;
        }
        if (!user) {
            user1 = {id : req.body.pid }
            console.log('Patient not found with this id');
            console.log(user1);
            res.render('testupdate',{user : user1 });
        }
        else if(user.password == req.body.psw ) {
            console.log('success');
            console.log(user);
            res.render('testupdate',{user : user});
        }
        else{
            console.log('system error');
            res.render('test');
        }
    });

});


module.exports = router;

router.post('/update', function(req, res, next) {

    console.log("Updating Info \n.Patient Id :  " +req.body.id);

    var name  =  req.body.name;
    var id = req.body.id;
    var age = req.body.age;

    var newPatient = new models_user({
        name : name,
        id : id,
        age : age
    });

    models_user.createPatient(newPatient,function(err,user){
        if (err) {
            //return done(err);
            console.log('Error while updating inserting');
            throw err;
        }
        else{
            console.log('Patient Data Uppdated');
            res.redirect('dashboard');
        }
    });

});




