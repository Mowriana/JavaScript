//regex za cifrite - ((<[a-z]+>[0-9])(<\/[a-z]+>)([0-9]))
// regex za survey - (\[[A-Za-z]+ - [A-Za-z]+\])

function survey(string) {
    let text = string;
    let regExpStart = /(<[a-z]+>)([A-za-z0-9 ]+)(<\/[a-z]+><[a-z]+>)/gm;
    let regExpSurvey=/\[[A-Za-z]+ - [A-Za-z]+\]/gm;
    let secondNumReg=/<\/val>[0-9]+<\/g>/gm;
    let sum = 0;
    let newSum=0;

     if(text.match(regExpSurvey && "Food - General" )){
         let numb=text.match(/\d+/gm);
         for (let i = 0; i < numb.length; i ++) {
             sum=numb[i]


         }
         sum.reduce( (product, value) => product * value, 0);

         console.log(sum)
     }



    else if(text.match(regExpSurvey && "Food - Special" )){
        let numb=text.match(/\d+/gm);


        console.log("Food - Special:" )

    }

    else if(text.startsWith("<svg>")){
        console.log("Invalid format")
    }
    else if(!text.match(regExpSurvey)){
        console.log("No survey found")
    }

}
survey("<p>Some random text</p><svg><cat><text>" +
    "How do you rate our food? [Food - General]" +
    "</text></cat><cat><g><val>1</val>0</g>" +
    "<g><val>2</val>1</g><g><val>3</val>3</g>" +
    "<g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>" +
    "Some more random text</p>");