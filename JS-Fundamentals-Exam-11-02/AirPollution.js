function polution(matrixInfo, force) {

    let matrix = matrixInfo.map(n => n.split(' ').map(Number));

    for (let obj of force) {
        let info = obj.split(" ");
        let forceKind = info[0];
        let power = Number(info[1]);

        switch (forceKind) {
            case "breeze":
                breeze(power);
                break;
            case 'gale':
                gale(power);
                break;
            case 'smog':
                smog(power);
        }

    }

    function breeze(pow) {
        for (let row = pow; row <= pow; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                matrix[row][col] -= 15;
                if (matrix[col][row] < 0) {
                    matrix[col][row] = 0;
                }
            }

        }
    }

    function gale(pow) {
        for (let row = pow; row <= pow; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                matrix[col][row] -= 20;
                if (matrix[col][row] < 0) {
                    matrix[col][row] = 0;
                }

            }

        }
    }

    function smog(pow) {
        for (let row = 0; row < matrix.length; row++) {
            for (let col = 0; col < matrix[row].length; col++) {
                matrix[row][col] += pow;
                if (matrix[col][row] < 0) {
                    matrix[col][row] = 0;
                }

            }
        }
    }

    let result = '';
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            if(matrix[row][col] >= 50){
                result += '[' + row + '-' + col + ']' + ', ';
            }
        }


    }
    if (result === '') {
        console.log('No polluted areas')
    } else {
        console.log('Polluted areas: ' + result.substring(0, result.length - 2));

    }
}
air([
        "5 7 72 14 4",
        "41 35 37 27 33",
        "23 16 27 42 12",
        "2 20 28 39 14",
        "16 34 31 10 24",
    ],
    ["breeze 1", "gale 2", "smog 25"]
)