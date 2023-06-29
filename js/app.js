// for production only
// window.onerror = function(message, url, lineNumber) {  
//   return true;
// };

function showHamburgerMenu() {
  const hamburger = document.querySelector('.hamburger');
  const nav = document.querySelector('.navigation');
  const navigationLinks = document.querySelectorAll('.navigation__link');

  const handleClick = function () {
    hamburger.classList.toggle('hamburger--active');
    hamburger.setAttribute('aria-expanded', hamburger.classList.contains('hamburger--active'));
    nav.classList.toggle('navigation--active');
  }

  for (let i = 0; i < navigationLinks.length; i++) {
    navigationLinks[i].addEventListener('click', function () {
      hamburger.classList.remove('hamburger--active');
      nav.classList.remove('navigation--active');
    })
  }

  hamburger.addEventListener('click', handleClick);
};

function showModal() {
  const buttons = document.querySelectorAll('.btn--code');
  const modals = document.querySelectorAll('.modal');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {

      for (let j = 0; j < modals.length; j++) {
        modals[i].classList.add('show-modal');

        modals[i].querySelector('.close').addEventListener('click', function() {
          modals[i].classList.remove('show-modal');
        })

      }
    })
  }
}

const init = function () {
  showHamburgerMenu();
  showModal();
};

document.addEventListener('DOMContentLoaded', init);