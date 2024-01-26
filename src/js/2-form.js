const form = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-form-state';
const savedState = JSON.parse(localStorage.getItem(localStorageKey));

if (savedState) {
  form.elements.email.value = savedState.email.trim() || '';
  form.elements.message.value = savedState.message.trim() || '';
}

form.addEventListener('input', event => {
  const trimmedEmail = form.elements.email.value.trim();
  const trimmedMessage = form.elements.message.value.trim();

  const formData = {
    email: trimmedEmail,
    message: trimmedMessage,
  };

  localStorage.setItem(localStorageKey, JSON.stringify(formData));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  const formData = {
    email: form.elements.email.value.trim(),
    message: form.elements.message.value.trim(),
  };

  console.log(formData);

  localStorage.removeItem(localStorageKey);
  form.reset();
});
