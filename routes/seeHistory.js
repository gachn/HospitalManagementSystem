/**
 * Created by Gaurav on 7/30/2017.
 */
var express = require('express');
var router = express.Router();
var currentUser=require('../currentPatient');
var models_user_det = require('../models/PatientDetail');
/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('History ');
    user=currentUser.getID();

    console.log('\n\n\n\n'+user);

    models_user_det.getPatientByUsername(user,function (err,ddata) {

        if(err){

            console.log('error  kjdsfkds kjfdsh');
            res.send("Error");
        }
        else{
            console.log('\n\n\nNumber of Dises : ');
            console.log(ddata);
            //console.log{}
            res.render('seeHistory', {data : ddata});

        }

    });
});

module.exports = router;
