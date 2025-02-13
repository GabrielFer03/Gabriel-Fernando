function calcularResultado() {
    // Variáveis para armazenar o número de respostas corretas
    let acertos = 0;

    // Respostas corretas para cada pergunta
    const respostasCorretas = {
        q1: "c", // Lionel Messi tem mais títulos
        q2: "a", // Real Madrid é o maior time da história
        q3: "d", // Neymar ganhou o prêmio Puskás em 2011
        q4: "c", // O Brasil ganhou a primeira Copa do Mundo em 1958
        q5: "a", // Pelé é considerado o maior jogador da história
    };

    // Verificando as respostas selecionadas
    for (let i = 1; i <= 5; i++) {
        const respostaSelecionada = document.querySelector(`input[name="q${i}"]:checked`);
        if (respostaSelecionada && respostaSelecionada.value === respostasCorretas[`q${i}`]) {
            acertos++;
        }
    }

    // Exibindo o resultado
    const resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `Você acertou ${acertos} de 5 questões!`;

    // Exibindo uma mensagem personalizada baseada no número de acertos
    if (acertos === 5) {
        resultadoDiv.innerHTML += "<br>Parabéns! Você é um expert em futebol!";
    } else if (acertos >= 3) {
        resultadoDiv.innerHTML += "<br>Bom trabalho! Você conhece bastante de futebol.";
    } else {
        resultadoDiv.innerHTML += "<br>Você pode melhorar. Continue estudando sobre futebol!";
    }
}