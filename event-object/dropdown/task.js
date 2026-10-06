document.addEventListener('DOMContentLoaded', () => {
  const dropdowns = document.querySelectorAll('.dropdown');

  dropdowns.forEach((dropdown) => {
    const value = dropdown.querySelector('.dropdown__value');
    const list = dropdown.querySelector('.dropdown__list');

    value.addEventListener('click', () => {
      document.querySelectorAll('.dropdown__list_active').forEach((openList) => {
        if (openList !== list) {
          openList.classList.remove('dropdown__list_active');
        }
      });

      list.classList.toggle('dropdown__list_active');
    });

    list.addEventListener('click', (event) => {
      const item = event.target.closest('.dropdown__item');
      if (!item) return;

      event.preventDefault();

      const link = item.querySelector('.dropdown__link');
      if (link) {
        value.textContent = link.textContent.trim();
      }

      list.classList.remove('dropdown__list_active');
    });
  });
});
