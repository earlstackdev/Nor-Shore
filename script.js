const comparison = document.querySelector('.comparison');
const range = document.querySelector('#comparison-range');
if (comparison && range) {
  const updateComparison = () => {
    const value = `${range.value}%`;
    comparison.style.setProperty('--position', value);
    range.setAttribute('aria-valuetext', `${range.value} percent after image visible`);
  };
  range.addEventListener('input', updateComparison);
  updateComparison();
}

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', () => {
    const button = form.querySelector('button[type="submit"]');
    if (button) {
      button.disabled = true;
      button.innerHTML = 'Sending request <span aria-hidden="true">…</span>';
    }
  });
}
