/**
 * Created by Gaurav on 7/30/2017.
 */
/**
 * Created by Gaurav on 7/29/2017.
 */
var pid=null;
var getID=()=>{
    return pid;
};
var setID =(user)=>{
    pid=user;
    //console.log(`Hospital Id set to ${HospitalID}`);
};
module.exports={
    getID,setID
};