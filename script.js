// Получаем ссылку на элемент "About me"
const aboutMeLink = document.querySelector('a[href="#about_me"]');

// Добавляем обработчик события "click" на ссылку
aboutMeLink.addEventListener('click', (e) => {
  e.preventDefault(); // Отменяем стандартное поведение ссылки

  // Получаем элемент блока "About me"
  const aboutMeSection = document.querySelector('#about_me');

  // Вызываем метод "scrollIntoView()" для элемента блока "About me"
  aboutMeSection.scrollIntoView({ behavior: 'smooth' });
});

// Получаем ссылку на элемент "About me"
const homeLink = document.querySelector('a[href="#home"]');

// Добавляем обработчик события "click" на ссылку
homeLink.addEventListener('click', (e) => {
  e.preventDefault(); // Отменяем стандартное поведение ссылки

  // Получаем элемент блока "About me"
  const homeSection = document.querySelector('#home');

  // Вызываем метод "scrollIntoView()" для элемента блока "About me"
  homeSection.scrollIntoView({ behavior: 'smooth' });
});

 
// Получаем ссылку на элемент "Skills"
const skillsLink = document.querySelector('a[href="#skills"]');

// Добавляем обработчик события "click" на ссылку
skillsLink.addEventListener('click', (e) => {
  e.preventDefault(); // Отменяем стандартное поведение ссылки

  // Получаем элемент блока "Skills"
  const skillsSection = document.querySelector('#skills');

  // Вызываем метод "scrollIntoView()" для элемента блока "Skills"
  skillsSection.scrollIntoView({ behavior: 'smooth' });
});


// Получаем ссылку на элемент "portfolio"
const portfolioLink = document.querySelector('a[href="#portfolio"]');

// Добавляем обработчик события "click" на ссылку
portfolioLink.addEventListener('click', (e) => {
  e.preventDefault(); // Отменяем стандартное поведение ссылки

  // Получаем элемент блока "portfolio"
  const portfolioSection = document.querySelector('#portfolio');

  // Вызываем метод "scrollIntoView()" для элемента блока "portfolio"
  portfolioSection.scrollIntoView({ behavior: 'smooth' });
});


// Получаем ссылку на элемент "contacts"
const contactsLink = document.querySelector('a[href="#contacts"]');

// Добавляем обработчик события "click" на ссылку
contactsLink.addEventListener('click', (e) => {
  e.preventDefault(); // Отменяем стандартное поведение ссылки

  // Получаем элемент блока "contacts"
  const contactsSection = document.querySelector('#contacts');

  // Вызываем метод "scrollIntoView()" для элемента блока "contacts"
  contactsSection.scrollIntoView({ behavior: 'smooth' });
});


const menuHamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const headerLinks = document.querySelectorAll(".header__link_list a");
const hamburgerImage = document.querySelector(".hamburger img");

menuHamburger.addEventListener('click', () => {
    navLinks.classList.toggle('mobile-menu');
    toggleHamburgerImage();
});

headerLinks.forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-menu');
        toggleHamburgerImage();
    });
});

function toggleHamburgerImage() {
    const isMobileMenuOpen = navLinks.classList.contains('mobile-menu');
    if (isMobileMenuOpen) {
        hamburgerImage.src = "./img/close.png";
    } else {
        hamburgerImage.src = "./img/humburger.png";
    }
}

document.addEventListener('DOMContentLoaded', () => {
    navLinks.classList.remove('mobile-menu');
});