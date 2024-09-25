document.getElementById('form-valores').addEventListener('submit', function(event) {
    event.preventDefault();

    const valorA = parseFloat(document.getElementById('valor-A').value);
    const valorB = parseFloat(document.getElementById('valor-B').value);
    const errorMessages = document.querySelectorAll('.error-message');
    const successMessage = document.querySelector('.sucess-message');

    errorMessages.forEach(msg => msg.style.display = 'none');
    successMessage.textContent = '';

    if (valorB > valorA) {
        successMessage.textContent = 'Formulário válido: Número B é maior que o número A!';
        successMessage.style.color = 'white';
        successMessage.style.display = 'block'
    } else {
        errorMessages.forEach(msg => msg.style.display = 'block');
        errorMessages.textContent = 'Formulário inválido: Número B deve ser maior que o número A.';
        errorMessages.style.color = 'red';
    }
});
