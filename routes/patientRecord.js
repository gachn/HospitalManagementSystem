var express = require('express');
var router = express.Router();
var currentUser=require('../currentUser');
/* GET users listing. */


router.get('/', function(req, res, next) {
    res.render('patientRecord');
});

module.exports = router;
