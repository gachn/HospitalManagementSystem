/**
 * Created by Gaurav on 7/26/2017.
 */
var express = require('express');
var models_user = require('../models/patient');
var models_user_det = require('../models/PatientDetail');
var router = express.Router();



router.get('/', function(req, res, next) {
    res.render('test');
});



router.get('/count', function(req, res, next) {
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/HMS";

    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        db.collection("patients").findOne({id : '123'}, function(err, result) {
            if (err) throw err;
            console.log(result.detail);

            db.close();
            res.send(result.detail);
        });
    });

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
        else if(user ) {
            console.log('success123');
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

    console.log("Updating Info \nPatient Id :  " +req.body.pid);

    var name  =  req.body.name;
    var id = req.body.pid;
    var age = req.body.age;
    var dname = req.body.dname;
    var dtreat = req.body.dtreat;

    var Ddata = new models_user_det({
        pid : id,
        dname : "d1",
        date : "25/06/1589",
        hosName : dtreat,
        dis : dname

    });

    var newPatient = new models_user({
        name : name,
        id : id,
        age : age
    });


    models_user.getPatientByUsername(req.body.pid, function (err, user) {
        if (err) {
            //return done(err);
            console.log('Error');
            throw err;
        }
        if (!user) {
            user1 = {id: req.body.pid};
            console.log('Patient not found with this id');
            console.log(user1);

            models_user.createPatient(newPatient,function(err,user){
                if (err) {
                    //return done(err);
                    console.log('Error while updating inserting');
                    throw err;

                }
                else{
                    console.log('Patient Data Uppdated');
                    res.render('testupdate', {user: user1});
                }
            });


        }
        else if (user) {

            console.log(user);
            console.log(Ddata);

            models_user_det.createPatient(Ddata, function (err, user) {
                if (err) {
                    throw err;
                }
                else {

                    console.log('WOW ::::::::::))))))))))))))');
                    res.redirect('../dashboard');
                }

            })

            //res.render('testupdate', {user: user});

        }
        else {
            console.log('system error');
            res.render('test');
        }
    });

    // models_user.createPatient(newPatient,function(err,user){
    //     if (err) {
    //         //return done(err);
    //         console.log('Error while updating inserting');
    //         throw err;
    //
    //     }
    //     else{
    //         console.log('Patient Data Uppdated');
    //         res.redirect('/dashboard');
    //     }
    // });


});




