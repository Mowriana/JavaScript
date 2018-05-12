function findWords(input,word) {

    let string = input.toLowerCase();        // case insensitive
    let searchedWord = word.toLowerCase();  // case insensitive

    let inside = `\\b${searchedWord}\\b`;
    let regex = string.match(new RegExp(inside, 'g'));

    console.log(regex?regex.length:0);
}
findWords('How do you plan on achieving that? How? How can you even think of that?',
    'how');