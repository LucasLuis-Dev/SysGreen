const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;

  if (scrollPos > 100) {
    navbar.classList.add('white');
  } else {
    navbar.classList.remove('white');
  }
});