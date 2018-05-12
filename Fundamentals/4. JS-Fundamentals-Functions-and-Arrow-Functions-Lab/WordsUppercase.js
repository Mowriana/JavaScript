function solve (input) {
    console.log(input
        .toUpperCase()
        .split(/\W+/)//splitwa dumite sus wsichki predminatelni znaci i prazni mesta
        .filter(w=>w!='')// zamestwa ot gornoto wsichki s prazno mqsto
        .join(', '));// joinwa dumite sus zapetaika
}
solve(['Hi, how are you?']);