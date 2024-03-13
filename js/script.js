// mobile menu
const menuIcon = document.querySelector(".mobile");
const menuBtnOne = document.querySelector(".mobile .first");
const menuBtnTwo = document.querySelector(".mobile .second");
const menuBtnThree = document.querySelector(".mobile .third");
const mobileMenu = document.querySelector(".down-menu");
const menuLinks = mobileMenu.querySelectorAll(".down-menu-ul .link:not(:last-child)");
menuIcon.onclick = () => {
  menuBtnOne.classList.toggle("first-x-class");
  menuBtnTwo.classList.toggle("second-x-class");
  menuBtnThree.classList.toggle("third-x-class");
  mobileMenu.classList.toggle("open");
};
menuLinks.forEach((link) => {
  link.onclick = () => {
    menuBtnOne.classList.toggle("first-x-class");
    menuBtnTwo.classList.toggle("second-x-class");
    menuBtnThree.classList.toggle("third-x-class");
    mobileMenu.classList.toggle("open");
  };
});
import translations from "./translations.js";

const languageSelectors = document.querySelectorAll("select");
languageSelectors.forEach((langSelector => {
    langSelector.addEventListener("change", (event) => {
        setLanguage(event.target.value);
        localStorage.setItem("lang", event.target.value);
      });
}))

document.addEventListener('DOMContentLoaded', () => {
  const language = localStorage.getItem('lang') || 'en';
  setLanguage(language);
})

const setLanguage = (language) => {
  const elements = document.querySelectorAll("[data-translate]");
  elements.forEach((element) => {
    const translationKey = element.getAttribute("data-translate");
    element.textContent = translations[language][translationKey];
  });
  document.dir = language === "ar" ? "rtl" : "ltr";
};

const nums = document.querySelectorAll(".stat .number");
const section = document.querySelector(".stats-container");
let started = false;
if(section) {
  window.onscroll = function () {
    if (window.scrollY >= section.offsetTop - 700) {
      if (!started) {
        nums.forEach((num) => startCount(num));
      }
      started = true;
    }
  };
  
  function startCount(el) {
    const target = el.dataset.target;
    let count = setInterval(() => {
      el.textContent++;
      if (el.textContent == target) {
        clearInterval(count);
      }
    }, 2000 / target);
  }
}


var swiper = new Swiper(".slide-content", {
  slidesPerView: 4,
  spaceBetween: 15,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
