document.addEventListener('DOMContentLoaded', () => {
  const reveals = document.querySelectorAll('.reveal');
  const checkReveals = () => {
    const windowHeight = window.innerHeight;

    reveals.forEach((element) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < windowHeight) {
        element.classList.add('reveal_active');
      }
    });
  };
 
  window.addEventListener('scroll', checkReveals);

  checkReveals();
});
