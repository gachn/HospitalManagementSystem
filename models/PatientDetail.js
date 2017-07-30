var mongoose = require('mongoose');

var db = mongoose.connection;

var PatientSchema = mongoose.Schema({
    pid : {
        type : String
    },
    dname : {
        type : String
    },
    date : {
        type : String
    },
    hosName : {
        type : String
    },
    dis : {
        type : String
    }

});


var Patient = module.exports = mongoose.model('PatientDetails', PatientSchema);



module.exports.getPatientByUsername = function(username, callback){
    var query = {pid : username};
    Patient.find(query, callback);
};


module.exports.createPatient = function(newPatientDetails, callback){
    newPatientDetails.save(callback);
}






