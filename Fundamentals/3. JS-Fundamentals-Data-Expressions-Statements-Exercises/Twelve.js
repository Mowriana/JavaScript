function AssignProperties(array) {
    let name=array[0];
    let firstname=array[1];
    let age=array[2];
    let personage=array[3];
    let gender=array[4];
    let persongender=array[5];

    console.log("{ "+ name+": '"+firstname+"',"+" "+age+": '"+personage+"',"+" "+gender+": '"+persongender+"' }");

};
// function properties([a, b, c, d, e, f]){
//     let myObj = {[a]: b, [c]: d, [e]: f};
//     console.log(myObj);
// }
AssignProperties(['ssid', '90127461', 'status', 'admin', 'expires', '600']);