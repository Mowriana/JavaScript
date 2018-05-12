function sort(num) {
    console.log(
        num.sort((a,b) => a-b).slice(0,2)
    )

}
sort([30, 15, 50, 5]);