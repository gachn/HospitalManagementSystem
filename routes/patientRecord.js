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


    console.log('dslkjfhdjkghsdk\mn\n\n\n\n\n');

    var doa  =  req.body.doa;
    var id = currentPatient.getID();
    var dname = req.body.dname;
    var advice = req.body.advice;
    var status = req.body.status;
    var pres = req.body.prescription;
    var ndoa = req.body.ndoa;
    var hosname = currentUser.getID().username;

    var newDetail = new models_user({
        pid : id,
        doa : doa,
        dname : dname,
        status : status,
        prescription : pres,
        hosname : hosname,
        ndoa : ndoa
    });



    models_user.createPatient(newDetail, function (err, user) {
        if (err) {
            throw err;
        }
        else {

            console.log('WOW ::::::::::)))))))))))))\n\n\n)');
            res.redirect('../patientSearch');
        }

    });

});


module.exports = router;
