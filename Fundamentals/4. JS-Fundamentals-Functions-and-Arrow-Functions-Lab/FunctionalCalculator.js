function calculator(num1,num2,str) {

    if(str =='+'){
        console.log(num1+num2);
    }
    else if(str =='/'){
        console.log(num1/num2);
    }
    else if(str == '-'){
        console.log(num1-num2);
    }
    else{
        console.log(num1*num2);
    }

}
calculator(2, 4, '+');