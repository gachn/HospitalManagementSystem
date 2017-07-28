/**
 * Created by Gaurav on 7/26/2017.
 */
var express = require('express');
var  passport=require('passport');
var router = express.Router();
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login');
});
router.post('/', function(req, res, next) {
    console.log('post req');
    res.redirect('dashboard');
});

module.exports = router;
