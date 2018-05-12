function aggregate(input) {
    let arr = input.map(Number);

    let sum = 0;
    let inverse = 0;
    let concat = '';

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        inverse += 1 / arr[i];
        concat += arr[i];
    }
    console.log(sum);
    console.log(inverse);
    console.log(concat);
}
elements([1, 2, 3]);