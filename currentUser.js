/**
 * Created by Gaurav on 7/29/2017.
 */
var HospitalID=null;
var getID=()=>{
    return HospitalID;
};
var setID =(user)=>{
    HospitalID=user;
    console.log(`Hospital Id set to ${HospitalID}`);
};
module.exports={
    getID,setID
};