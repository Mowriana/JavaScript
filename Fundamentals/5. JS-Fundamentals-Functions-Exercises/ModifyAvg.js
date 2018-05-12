function modifyAvg(num) {
    let numStr=String(num);
    let getAverege= (numStr) =>numStr.split('').map(Number).reduce((a,b)=> a+=b)/numStr.length;


    while(getAverege(numStr) <= 5){
      numStr+='9'
    }
    console.log(numStr)
}
modifyAvg(101)