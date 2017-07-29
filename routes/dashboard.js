/**
 * Created by Gaurav on 7/29/2017.
 */
var express = require('express');
var router = express.Router();
var currentUser=require('../currentUser');
/* GET users listing. */
router.get('/', function(req, res, next) {
    if(currentUser.getID()==null)
        res.redirect('login');
    else
    res.render('dashboard.hbs',{title : currentUser.getID().username+' |Dashboard '});
});

module.exports = router;
