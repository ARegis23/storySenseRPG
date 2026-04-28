const pages = Array.from(document.querySelectorAll('.page'));
const stepButtons = Array.from(document.querySelectorAll('.step-button'));
const nextButtons = Array.from(document.querySelectorAll('[data-next]'));
const goButtons = Array.from(document.querySelectorAll('[data-go]'));
const prevButton = document.querySelector('#prevButton');
const nextButton = document.querySelector('#nextButton');
const pageIndicator = document.querySelector('#pageIndicator');

let currentPage = 0;

function showPage(pageIndex) {
  currentPage = Math.max(0, Math.min(pageIndex, pages.length - 1));

  pages.forEach((page, index) => {
    page.classList.toggle('active', index === currentPage);
  });

  stepButtons.forEach((button, index) => {
    button.classList.toggle('active', index === currentPage);
  });

  pageIndicator.textContent = `Tela ${currentPage + 1} de ${pages.length}`;

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

stepButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const pageIndex = Number(button.dataset.page);
    showPage(pageIndex);
  });
});

nextButtons.forEach((button) => {
  button.addEventListener('click', () => showPage(currentPage + 1));
});

goButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const pageIndex = Number(button.dataset.go);
    showPage(pageIndex);
  });
});

prevButton.addEventListener('click', () => showPage(currentPage - 1));
nextButton.addEventListener('click', () => showPage(currentPage + 1));

showPage(0);
