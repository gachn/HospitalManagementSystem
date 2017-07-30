var express = require('express');
var router = express.Router();
var currentUser=require('../currentUser');
/* GET users listing. */


router.get('/', function(req, res, next) {
    res.render('patient_record_display');
});


router.post('/', function(req, res, next) {
    res.render('patient_record_display');
});


module.exports = router;
