function calculateIMC() {
    let weight = document.getElementById('weight').value;
    let height = document.getElementById('height').value;

    if (weight === "" || height === "") {
        alert("Por favor, preencha ambos os campos!");
        return;
    }

    // Calcula o IMC
    let imc = weight / (height * height);

    // Exibe o resultado
    let resultText = "IMC: " + imc.toFixed(2);

    // Classificação do IMC
    if (imc < 18.5) {
        resultText += " (Abaixo do peso)";
    } else if (imc >= 18.5 && imc < 24.9) {
        resultText += " (Peso normal)";
    } else if (imc >= 25 && imc < 29.9) {
        resultText += " (Sobrepeso)";
    } else {
        resultText += " (Obesidade)";
    }

    document.getElementById('result').innerHTML = resultText;
}