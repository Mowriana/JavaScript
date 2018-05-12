function stars(points) {
    let stars = '';
    for (let i = 1; i <= points; i++) {
        for (let j = 0; j < i; j++) {
            stars += '*'
        }
        stars += '\n'
    }

    for (let a = points-1; a>=1; a--) {
        for (let b = 1; b <= a; b++) {
            stars += '*'
        }
        stars += '\n'
    }
    console.log(stars);
}
stars(5);



