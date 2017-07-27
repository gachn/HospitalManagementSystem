/**
 * Created by Gaurav on 7/26/2017.
 */
var express = require('express');
var router = express.Router();
var  passport=require('passport');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login');
});
router.post('/', function(req, res, next) {
    console.log('post req');
    res.redirect('login');
});

module.exports = router;
