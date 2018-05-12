function evenPosition(elements) {
    console.log(elements.filter((el,i) => {
       return i%2===0
    }).join(' '))
}
evenPosition([1,2,2,4,5])