/**
 * Created by Gaurav on 7/30/2017.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    console.log('login');
    res.render('patientHome');
});

module.exports = router;
