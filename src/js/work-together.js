const form = document.getElementById('cooperationForm');
const modal = document.getElementById('modal');
const modalOverlay = document.getElementById('modalOverlay');
const closeBtn = document.querySelector('.modal-btn');

const emailInput = document.getElementById('email');
const commentsInput = document.getElementById('comments');
const validationText = document.querySelector('.validation-text');
const inputsContainer = document.querySelector('.form-inputs');

function disableBodyScroll() {
  document.body.classList.add('no-scroll');
}

function enableBodyScroll() {
  document.body.classList.remove('no-scroll');
}

form.addEventListener('submit', async function (event) {
  event.preventDefault();
  const email = emailInput.value.trim();
  const comments = commentsInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Empty inputs validation
  if (!email || !comments) {
    validationText.textContent = 'Fields cannot be empty!';
    validationText.classList.add('error');
    emailInput.classList.add('error');
    commentsInput.classList.add('error');
    inputsContainer.classList.add('error');
    return;
  }

  // Mail format validation
  if (!emailRegex.test(email)) {
    validationText.textContent = 'Invalid email format';
    validationText.classList.add('error');
    emailInput.classList.add('error');
    return;
  }

  validationText.textContent = 'Success!';
  validationText.classList.remove('error');
  validationText.classList.add('success');

  emailInput.classList.remove('error');
  emailInput.classList.add('success');
  commentsInput.classList.remove('error');
  commentsInput.classList.add('success');
  inputsContainer.classList.add('success');

  try {
    const response = await fetch('https://portfolio-js.b.goit.study/api-docs', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, comments }),
    });

    if (response.ok) {
      form.reset();
      modal.style.display = 'flex';
      modalOverlay.style.display = 'block';
      disableBodyScroll();
    } else {
      alert('Error submitting form. Please check your input and try again.');
    }
  } catch (error) {
    alert('Network error. Please try again later.');
  }
});

function closeModal() {
  modal.style.display = 'none';
  modalOverlay.style.display = 'none';
  enableBodyScroll();

  validationText.textContent = '';
  validationText.classList.remove('success');
  emailInput.classList.remove('success');
  commentsInput.classList.remove('success');
  inputsContainer.classList.remove('success');
}

closeBtn.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', function (event) {
  if (event.target === modalOverlay) {
    closeModal();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    closeModal();
  }
});

emailInput.addEventListener('input', () => {
  validationText.textContent = '';
  validationText.classList.remove('error');
  emailInput.classList.remove('error');
  inputsContainer.classList.remove('error');
});

commentsInput.addEventListener('input', () => {
  validationText.textContent = '';
  validationText.classList.remove('error');
  commentsInput.classList.remove('error');
  inputsContainer.classList.remove('error');
});

emailInput.addEventListener('blur', () => {
  emailInput.classList.remove('error');
  inputsContainer.classList.remove('error');
  validationText.classList.remove('error');
});

commentsInput.addEventListener('blur', () => {
  commentsInput.classList.remove('error');
  inputsContainer.classList.remove('error');
  validationText.classList.remove('error');
});
