/**
 * Created by Gaurav on 7/26/2017.
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('login');
});


router.post('/', function(req, res, next) {
    console.log("Username " +req.body.uname+"\nPassword : "+req.body.psw);
    if( checkUser(data)){

        //check
        //redirect to patient page
        //

    }
    else{
        //error
    }
    res.render('login');
});




module.exports = router;
