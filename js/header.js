function toggleMenu() {
  let menu = document.querySelector('.nav-list');
  let hamburger = document.querySelector('.mobile-menu');
  if (menu.classList.contains('active')) {
    menu.classList.remove('active');
    document.querySelector
  } else {
    menu.classList.add('active');
  }

  hamburger.classList.toggle('active');
}