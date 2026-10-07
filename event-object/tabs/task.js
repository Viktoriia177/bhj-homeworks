document.addEventListener('DOMContentLoaded', () => {
  const navigations = document.querySelectorAll('.tab__navigation');

  navigations.forEach((nav) => {
    const tabs = Array.from(nav.querySelectorAll('.tab'));

    const contentsContainer = nav.nextElementSibling;
    const contents = Array.from(contentsContainer.querySelectorAll('.tab__content'));

    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        const index = tabs.indexOf(tab);
        
        if (index === -1) return;

        tabs.forEach((t) => t.classList.remove('tab_active'));
        contents.forEach((c) => c.classList.remove('tab__content_active'));

        tab.classList.add('tab_active');

        if (contents[index]) {
          contents[index].classList.add('tab__content_active');
        }
      });
    });
  });
});
