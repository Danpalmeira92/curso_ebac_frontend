document.getElementById('form-valores').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário para validar primeiro

    const valorA = parseFloat(document.getElementById('valor-A').value);
    const valorB = parseFloat(document.getElementById('valor-B').value);
    const errorMessage = document.querySelector('.error-message');
    const successMessage = document.querySelector('.sucess-message');

    // Limpar mensagens anteriores
    errorMessage.style.display = 'none';
    successMessage.style.display = 'none'; // Esconde as mensagens antes de validar

    // Validação
    if (valorB > valorA) {
        successMessage.style.display = 'block';  // Exibe mensagem de sucesso
    } else {
        errorMessage.style.display = 'block'; // Exibe mensagem de erro
    }
})

