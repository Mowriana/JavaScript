function circleArea(num) {
    let area= Math.PI*num*num;
    console.log(area);
    let areaRounded= Math.round(area*100)/100;
    console.log(areaRounded);
    
}
circleArea(5);