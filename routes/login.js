/**
 * Created by Gaurav on 7/26/2017.
 */
var express = require('express');
var models_user = require('../models/hospital');
var router = express.Router();
var currentUser = require('../currentUser');
/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login');
});
// router.post('/', function(req, res, next) {
//
//
//     models_user.getPass
//
//     console.log('post req');
//     res.redirect('dashboard',);
// });


router.post('/', function(req, res, next) {
    console.log("Username " +req.body.uname+"\nPassword : "+req.body.psw);

    models_user.getPasswordByUsername(req.body.uname, function (err, user) {
        if (err) {
            //return done(err);
            console.log('Error');
            throw err;
        }
        if (!user) {
            console.log('user not found');
            res.render('login');
        }
        else if(user.password == req.body.psw ) {
            console.log('success');
            currentUser.setID(user);
            res.redirect('dashboard');
        }
        else{
            console.log('system error');
            res.render('login');
        }
    });

});




module.exports = router;
