function FirstLast(arr) {
    let n =Number(arr.shift());
    console.log(arr.slice(0,n))
    console.log(arr.slice(arr.length-n))
}
FirstLast([3, 6, 7, 8, 9])