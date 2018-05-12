function template(input) {
    let inputt='<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<quiz>\n' + '  ';
    let end =  '</quiz>'

    for (let i = 0; i < input.length; i+=2) {
        let question = input[i];
        let answer = input[i + 1];

        inputt += '<question>\n'+ '    '+ question+ '\n' + '  '+ '</question>\n' +'  '+
            '<answer>\n'+'    '+ answer+ '\n'+'  '+ '</answer>\n';
    }
    console.log(inputt+ end)

}
template(["Who was the forty-second president of the U.S.A.?",
    "William Jefferson Clinton"]);
