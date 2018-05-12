function match(str) {

    let regex = /\b([0-9]{1,2})-([A-Z][a-z]{2,2})-([0-9]{4,4})/gm
    let match =regex.exec(str)

    while (match) {
        console.log(${match[0]} (Day" ${match[1]}, Month: ${match[2]}, Year: ${match[3]}))
        match = regex.exec(str);
    }

}
match('1-Jan-1999 is a valid date.' +
    'So is 01-July-2000.' +
    'I am an awful liar, by the way – Ivo, 28-Sep-2016.');