// Mobile nav toggle
const navToggle = document.querySelector('[data-nav-toggle]');
const navLinks = document.querySelector('[data-nav-links]');
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('is-open');
    navToggle.classList.toggle('is-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });
}

// Portfolio filter
const filterBtns = document.querySelectorAll('[data-filter-btn]');
const certCards = document.querySelectorAll('[data-cert-category]');
if (filterBtns.length) {
  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-pressed', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-pressed', 'true');
      const target = btn.dataset.filterBtn;
      certCards.forEach((card) => {
        const match = target === 'all' || card.dataset.certCategory === target;
        card.style.display = match ? '' : 'none';
      });
    });
  });
}
