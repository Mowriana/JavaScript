
function bitcoins(input) {

    let bittcoinCount = 0;
    let goldAmount = 0;
    let moneyLeft = 0;
    let ifThirdDay = 0;
    let dayOfFirstPurchase = 0;

    for (let i = 0; i < input.length; i++) {
        ifThirdDay++;
        goldAmount += Number(input[i]);
        if (ifThirdDay === 3) {
            goldAmount = goldAmount - (Number(input[i]) / 100) * 30;
            ifThirdDay = 0;
        }

        moneyLeft += goldAmount * 67.51;
        while (moneyLeft >= 11949.16) {
            moneyLeft -= 11949.16;
            bittcoinCount++;
            if (bittcoinCount === 1) {
                dayOfFirstPurchase = i + 1;
            }
        }

        goldAmount = 0;

    }

    console.log('Bought bitcoins: ' + bittcoinCount);
    if (dayOfFirstPurchase !== 0) {
        console.log('Day of the first purchased bitcoin: ' + dayOfFirstPurchase);
    }
    console.log('Left money: ' + moneyLeft.toFixed(2) +' lv.');
}

bitcoins([100, 200, 300]);