// Função para ligar diretamente para o número de telefone
function callPhone() {
    // Substitua o número abaixo com o número real de telefone
    window.location.href = "tel:+5511999999999";  // Exemplo: número para ligar
}

// Função para enviar uma mensagem (simulação)
function sendMessage() {
    const message = document.getElementById('message').value;
    const responseMessageDiv = document.getElementById('responseMessage');

    if (message.trim() === "") {
        responseMessageDiv.innerHTML = "Por favor, digite uma mensagem!";
        responseMessageDiv.style.color = "red";
    } else {
        // Simulando o envio da mensagem
        responseMessageDiv.innerHTML = "Mensagem enviada com sucesso!";
        responseMessageDiv.style.color = "green";
        
        // Limpar o campo após o envio
        document.getElementById('message').value = "";
    }
}