function convertDistance() {
    let value = parseFloat(document.getElementById('distValue').value);
    let unit = document.getElementById('distUnit').value;
    let result;

    if (unit === 'km') {
        result = value * 1000;  // Quilômetro para Metros
        document.getElementById('distResult').innerHTML = value + ' km é igual a ' + result.toFixed(2) + ' metros';
    } else if (unit === 'metros') {
        result = value / 1000;  // Metros para Quilômetro
        document.getElementById('distResult').innerHTML = value + ' metros é igual a ' + result.toFixed(2) + ' km';
    } else {
        document.getElementById('distResult').innerHTML = 'Unidade inválida!';
    }
}
function convertMoney() {
    let value = document.getElementById('moneyValue').value;
    let unit = document.getElementById('moneyUnit').value;
    let result;

    const exchangeRate = 5.1;  // Taxa de câmbio aproximada (1 USD = 5.1 BRL)

    if (unit === 'real') {
        result = value / exchangeRate;  // Real para Dólar
        document.getElementById('moneyResult').innerHTML = 'R$' + value + ' é igual a $' + result.toFixed(2);
    } else if (unit === 'usd') {
        result = value * exchangeRate;  // Dólar para Real
        document.getElementById('moneyResult').innerHTML = '$' + value + ' é igual a R$' + result.toFixed(2);
    }
}