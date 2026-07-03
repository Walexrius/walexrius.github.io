// Mobile nav toggle
const navToggle = document.querySelector('[data-nav-toggle]');
const navLinks = document.querySelector('[data-nav-links]');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('is-open');
  });
}

// Portfolio filter
const filterBtns = document.querySelectorAll('[data-filter-btn]');
const certCards = document.querySelectorAll('[data-cert-category]');
if (filterBtns.length) {
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');
      const target = btn.dataset.filterBtn;
      certCards.forEach((card) => {
        const match = target === 'all' || card.dataset.certCategory === target;
        card.style.display = match ? '' : 'none';
      });
    });
  });
}
