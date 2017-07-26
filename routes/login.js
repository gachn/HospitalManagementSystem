/**
 * Created by Gaurav on 7/26/2017.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login');
});

module.exports = router;
