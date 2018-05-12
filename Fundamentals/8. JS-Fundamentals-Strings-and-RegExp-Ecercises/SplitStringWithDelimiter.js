function SplitStrings(str, delimiter) {
    let spiltsElements = str.split(delimiter)
    for (let i = 0; i < spiltsElements.length; i++) {
        console.log(spiltsElements[i]);
        
    }
    
}
SplitStrings('One-Two-Three-Four-Five',
    '-'
);