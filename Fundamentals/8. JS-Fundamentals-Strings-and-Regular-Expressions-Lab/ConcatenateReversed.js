function concatenateAndReverse(arr) {
    let allStrings = arr.join('');
    let chars = Array.from(allStrings).reverse();
    console.log(chars.join(''))
}

concatenateAndReverse(['I', 'am', 'student'])