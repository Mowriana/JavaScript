function numbers(arr) {

    let result = [];
    for (let i of arr) {
        if (i < 0) {
            result.unshift(i);
        } else {
            result.push(i);
        }
    }
    console.log(result.join('\n'));
}
numbers([7, -2, 8, 9]);
