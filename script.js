const comparison = document.querySelector('.comparison');

document.querySelectorAll('.map-card a[aria-label]').forEach((link) => {
  link.textContent = 'Open map';
});

const emojiLikeSymbols = /[\u2197\u2190\u2192\u2605\u2709]/g;
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
const textNodes = [];
while (textWalker.nextNode()) textNodes.push(textWalker.currentNode);
textNodes.forEach((node) => {
  node.textContent = node.textContent.replace(emojiLikeSymbols, '');
});
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
