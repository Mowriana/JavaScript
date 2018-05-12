function square2(n) {

    let line = '';
    for(let i = 1; i <= n; i++) {
        for(let k = 1; k <= n; k++) {
            line += ' *';
        }
        line += '\n';
    }
    console.log(line)
}
square2(3);
