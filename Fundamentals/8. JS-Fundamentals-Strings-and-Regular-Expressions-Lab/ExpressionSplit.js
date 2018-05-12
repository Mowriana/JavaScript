function split(str) {
    let regex= /[,;().\s]+/
    str.split(regex).forEach(s => console.log((s)))

}
split('let sum = 4 * 4,b = "wow";')