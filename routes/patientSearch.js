/**
 * Created by Gaurav on 7/29/2017.
 */
var express = require('express');
var router = express.Router();
var currentUser=require('../currentUser');
var models_user = require('../models/patient');
var models_user_det = require('../models/PatientDetail');
var cp=require('../currentPatient');

/* GET users listing. */


router.get('/', function(req, res, next) {
    res.render('patientSearch');
});


router.post('/', function(req, res, next) {

    console.log("Patient Id :  " +req.body.pid);
    cp.setID(req.body.pid);
    models_user.getPatientByUsername(req.body.pid, function (err, user) {
        if (err) {
            //return done(err);
            console.log('Error');
            throw err;
        }
        if (!user) {
            user1 = {id : req.body.pid };
            console.log('Patient not found with this id');
            console.log(user1);
            res.render('patient_data_entry.hbs',{user : user1 });
        }
        else if(user ) {
            console.log('success123');
            console.log(user);
            //res.render('patient_record_display',{user : user});

            models_user_det.getPatientByUsername(user.id,function (err,ddata) {

                if(err){

                    console.log('error  kjdsfkds kjfdsh');
                }
                else{
                    console.log('\n\n\nNumber of Dises : ');
                    console.log(ddata[0].dname);
                    res.render('patient_record_display', {data: {user,ddata}});

                }

            });
        }
        else{
            console.log('system error');
            res.render('/');
        }
    });

    // res.render('patient_data_entry.hbs',{
    //     id : req.body.pid
    // });
});

module.exports = router;

router.post('/insertData', function(req, res, next) {
    console.log("Updating Info \nPatient Id :  " +req.body.pid);

    var date = new Date();

    var name  =  req.body.name;
    var age = req.body.age;
    var email = req.body.email;
    var dob = req.body.dob;
    var gender = req.body.gender;
    var phone = req.body.phone;
    var addr = req.body.addr;
    var id = req.body.pid;
    var currentYear = date.getFullYear();

    console.log('\n\n\nYear : '+currentYear+'\n\n\n');


    var newPatient = new models_user({
        name : name,
        id : id,
        age : age,
        email : email,
        dob : dob,
        gender : gender,
        phone : phone,
        addr : addr,
        regYear :currentYear
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
                    res.render('patient_record_display', {user: user});
                }
            });


        }
        else if (user) {

            // console.log(user);
            // console.log(Ddata);
            //
            // models_user.updatePatientDData(user, Ddata, function (err, user) {
            //     if (err) {
            //         throw err;
            //     }
            //     else {
            //
            //         console.log('WOW ::::::::::))))))))))))))');
            //         res.redirect('../dashboard');
            //     }
            //
            // })

            res.render('patient_record_display', {user: user});

        }
        else {
            console.log('system error');
            res.render('/');
        }
    });

});
