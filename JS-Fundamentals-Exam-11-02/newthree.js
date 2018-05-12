function neshto(input) {


    let pattern = /<svg>(.*?)<cat>(.*?)<text>(.*?)(\[[A-Za-z0-9]+ - [A-Za-z0-9]+\])(.*?)<\/text>(.*?)<\/cat>(.*?)<\/svg>/g;
    let pattern2 = /((<[a-z]+>([0-9])(<\/[a-z]+>)([0-9]+)))/g;
    let result = 0;
    let count = 0;
    let final = result / count;

    let match2 = pattern2.exec(input);
    while (match2) {
        let firstNum = Number(match2[3]);
        let secondNum = Number(match2[5]);
        count += secondNum;
        result += firstNum * secondNum;
        match2 = pattern2.exec(input);
    }

    let match = pattern.exec(input);
    console.log(match[4].substring(1, match[4].length - 1) + ": " + final);

}
neshto("<p>Some random text</p><svg><cat><text>" +
    "How do you rate our food? [Food - General]" +
    "</text></cat><cat><g><val>1</val>0</g>" +
    "<g><val>2</val>1</g><g><val>3</val>3</g>" +
    "<g><val>4</val>10</g><g><val>5</val>7</g></cat></svg><p>" +
    "Some more random text</p>")