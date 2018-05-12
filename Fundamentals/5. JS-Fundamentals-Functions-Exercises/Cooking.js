function cooking(input) {
let num=input[0];
    for (let i = 1; i < input.length; i++) {
       if(input[i]==='chop'){
           num= num/2
       }
        if(input[i]==='dice'){
            num=Math.sqrt(num);
        }
        if(input[i]==='spice'){
            num+=1;
        }
        if(input[i]==='bake'){
            num=num*3;
        }
        if(input[i]==='fillet'){
            num-=(num*20)/100
        }
        console.log(num);
    }
}
cooking([32,'chop','chop','chop','chop','chop']);