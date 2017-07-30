/**
 * Created by Gaurav on 7/29/2017.
 */
var express = require('express');
var router = express.Router();
var currentUser=require('../currentUser');
var cp=require('../currentPatient');

/* GET users listing. */


router.get('/', function(req, res, next) {
    res.render('patientSearch');
});
router.post('/', function(req, res, next) {
    cp.setID(eq.body.pid);
    res.render('patient_data_entry.hbs',{
        id : req.body.pid
    });
});

module.exports = router;
