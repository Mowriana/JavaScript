function GradToDegree(grad) {
    let gradN=grad%400;
    let degree=gradN*0.9;
    let result= degree > 0 ? degree :360+degree;
  console.log(result);
    
}
