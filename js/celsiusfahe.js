function convertTemperature() {
    let value = document.getElementById('tempValue').value;
    let unit = document.getElementById('tempUnit').value;
    let result;

    if (unit === 'celsius') {
        result = (value * 9/5) + 32;  // Celsius para Fahrenheit
        document.getElementById('tempResult').innerHTML = value + '°C é igual a ' + result.toFixed(2) + '°F';
    } else if (unit === 'fahrenheit') {
        result = (value - 32) * 5/9;  // Fahrenheit para Celsius
        document.getElementById('tempResult').innerHTML = value + '°F é igual a ' + result.toFixed(2) + '°C';
    }
}
