var mongoose = require('mongoose');

var db = mongoose.connection;

var HospitalSchema = mongoose.Schema({
    username : {
        type:String,
        index:true,
        unique : true
    },
    password : {
        type : String
    }
});


var User = module.exports = mongoose.model('User', HospitalSchema);

module.exports.getPasswordByUsername = function(username, callback){
    var query = {username: username};
    User.findOne(query, callback);
}



