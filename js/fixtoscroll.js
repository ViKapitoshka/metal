// fixed menu
const mainMenu = document.querySelector('.main-menu');
const scrollHeigth = 119;

window.onscroll = () => {
  let scrolled = window.pageYOffset;
  if (scrolled > scrollHeigth) {
    if (window.innerWidth > 768) {
      mainMenu.style.position = 'fixed';
      mainMenu.style.top = '0';
    }
  } else {
    mainMenu.style.position = '';
  }
}

