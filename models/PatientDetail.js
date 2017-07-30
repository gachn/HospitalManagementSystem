var mongoose = require('mongoose');

var db = mongoose.connection;

var PatientSchema = mongoose.Schema({
    pid : {
        type : String
    },
    doa : {
        type : String
    },
    dname : {
        type : String
    },
    status : {
        type : String
    },
    prescription : {
        type : String
    },
    hosname : {
        type : String
    },
    ndoa : {
        type : String
    }

});


var PatientDetails = module.exports = mongoose.model('PatientDetails', PatientSchema);



module.exports.getPatientByUsername = function(pid, callback){
    var query = {pid : pid};
    PatientDetails.find(query, callback);
};


module.exports.createPatient = function(newPatientDetails, callback){
    newPatientDetails.save(callback);
}






