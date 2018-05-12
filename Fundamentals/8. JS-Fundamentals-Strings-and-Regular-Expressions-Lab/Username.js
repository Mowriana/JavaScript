function username(arr) {
    let final=[];
    for (let i = 0; i < arr.length; i++) {
        let token=arr[i].split('@')
        let domains= token[1].split('.')
       let result= token[0] + '.';
        for (let str of domains) {
            result += str[0]
        }
        final.push(result)
    }
    console.log(final.join(', '))
    
}
username(['peshoo@gmail.com', 'todor_43@mail.dir.bg', 'foo@bar.com'])