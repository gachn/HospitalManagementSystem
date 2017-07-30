/**
 * Created by Gaurav on 7/29/2017.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {

    res.render('patient_record_display');
});

module.exports = router;
