/**
 * Created by Gaurav on 7/29/2017.
 */
var express = require('express');
var router = express.Router();
var currentUser=require('../currentUser');
/* GET users listing. */
router.get('/', function(req, res, next) {
    currentUser.setID(null);
    res.redirect('login');
});

module.exports = router;
