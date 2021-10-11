let hatInput = document.getElementById("hats");
let sockInput = document.getElementById("socks");
let resultDiv = document.getElementById("result");

function amountChanged() {
    let response = computeTotal(hatInput.valueAsNumber, sockInput.valueAsNumber);
    resultDiv.textContent = response;
}

function computeTotal(hats, socks) {
    let priceOfHat = 10;
    let priceOfSock = 2;
    return "TODO!!!!";
}
