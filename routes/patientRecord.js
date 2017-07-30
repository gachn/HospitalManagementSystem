var express = require('express');
var router = express.Router();
var currentUser = require('../currentUser');
var currentPatient = require('../currentPatient');
var models_user = require('../models/PatientDetail');

/* GET users listing. */


router.get('/', function(req, res, next) {
    res.render('patient_record_display');
});


router.post('/', function(req, res, next) {


    console.log('dslkjfhdjkghsdk\mn\n\n\n\n\n\n\n');


    var doa  =  req.body.doa;
    var id = currentPatient.getID();
    var age = req.body.age;
    var dname = req.body.dname;
    var dtreat = req.body.dtreat;


    var newPatient = new models_user({
        pid : id,
        doa : doa,
        dname : dname,
        status : status,
        prescription : pres,
        hosname : hosname
    });



    models_user_det.createPatient(Ddata, function (err, user) {
        if (err) {
            throw err;
        }
        else {

            console.log('WOW ::::::::::))))))))))))))');
            res.redirect('../dashboard');
        }

    })



    res.render('patient_record_display');
});


module.exports = router;
