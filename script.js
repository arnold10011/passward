document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");
    const successMessage = document.getElementById("success-message");

    // Скрыть сообщение об ошибке при новом вводе
    errorMessage.textContent = '';
    successMessage.style.display = 'none'; // Скрыть сообщение об успешном входе

    // Пример проверки пароля
    if (password === "Андрей") {
        // Показываем сообщение о успешном входе
        successMessage.textContent = "Вы успешно вошли";
        successMessage.style.display = 'block'; // Показываем сообщение
    } else {
        // Показываем ошибку, если пароль неверный
        errorMessage.textContent = "Неверный пароль. Попробуйте снова.";
    }
});