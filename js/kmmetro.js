function convertDistance() {
    let value = parseFloat(document.getElementById('distValue').value);
    let unit = document.getElementById('distUnit').value;
    let result;

    if (isNaN(value)) {
        document.getElementById('distResult').innerHTML = "Por favor, insira um valor válido.";
        return;
    }

    if (unit === 'km') {
        // Converte de quilômetros para metros
        result = value * 1000;
        document.getElementById('distResult').innerHTML = value + ' km é igual a ' + result.toFixed(2) + ' metros.';
    } else if (unit === 'metros') {
        // Converte de metros para quilômetros
        result = value / 1000;
        document.getElementById('distResult').innerHTML = value + ' metros é igual a ' + result.toFixed(2) + ' km.';
    }
}