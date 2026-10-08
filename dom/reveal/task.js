document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');

  const checkReveals = () => {
    reveals.forEach((element) => {
      const rect = element.getBoundingClientRect();

      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight) {
        element.classList.add('reveal_active');
      }
    });
  };

  window.addEventListener('scroll', checkReveals);
  checkReveals();
});
