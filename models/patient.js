var mongoose = require('mongoose');

var db = mongoose.connection;

var PatientSchema = mongoose.Schema({
    name : {
      type : String
    },
    age : {
        type : Number
    },
    id : {
        unique : true,
        type : String
    },
    email : {
        type : String
    },
    dob : {
        type : String
    },
    gender : {
        type : String
    },
    phone : {
        type : String
    },
    addr : {
        type : String
    },
    regYear : {
        type : String
    },
    detail:[
        {
            name : {
                type :  String
            },
            treat : {
                type  :String
            }
        }
    ]
});


var Patient = module.exports = mongoose.model('Patient', PatientSchema);



module.exports.getPatientByUsername = function(username, callback){
    var query = {id : username};
    Patient.findOne(query, callback);
}


module.exports.updatePatientDData = function(user,Ddata, callback){
    Patient.update({ "id" : user.id },    // should be important to "cast"
        {
            "$push": {
                "detail": Ddata
            }
        },callback);
}


module.exports.createPatient = function(newPatient, callback){
    newPatient.save(callback);
}






