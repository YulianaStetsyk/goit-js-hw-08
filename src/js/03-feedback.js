// отримуємо посилання на форму та поля вводу
const form = document.querySelector('.feedback-form');
const emailInput = form.querySelector('input[name="email"]');
const messageInput = form.querySelector('textarea[name="message"]');

// отримуємо стан форми з локального сховища
const storedState = localStorage.getItem('feedback-form-state');

// якщо в сховищі є збережені дані, заповнюємо поля форми
if (storedState) {
    const { email, message } = JSON.parse(storedState);
    emailInput.value = email;
    messageInput.value = message;
}

// зберігаємо стан форми в локальному сховищі при вводі користувача
form.addEventListener('input', _.throttle(() => {
    const state = { email: emailInput.value, message: messageInput.value };
    localStorage.setItem('feedback-form-state', JSON.stringify(state));
}, 500));

// обробляємо сабміт форми
form.addEventListener('submit', (event) => {
    event.preventDefault();

  // отримуємо дані форми
    const email = emailInput.value;
    const message = messageInput.value;

  // очищуємо сховище
    localStorage.removeItem('feedback-form-state');

  // очищуємо поля форми
    emailInput.value = '';
    messageInput.value = '';

  // виводимо дані форми у консоль
    console.log({ email, message });
});
