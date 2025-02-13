function calculate() {
    let input = document.getElementById('inputField').value;
    try {
        // Tenta avaliar o cálculo inserido pelo usuário
        let result = eval(input);
        
        // Exibe o resultado
        document.getElementById('result').innerHTML = "Resultado: " + result;
    } catch (error) {
        // Se ocorrer um erro (por exemplo, cálculo inválido), exibe uma mensagem de erro
        document.getElementById('result').innerHTML = "Resultado: Erro!";
    }
}