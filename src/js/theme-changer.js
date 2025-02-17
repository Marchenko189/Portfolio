
// Мобільна версія
import redMenuImg1x from './assets/img/header/header-bg_mob_menu-red@1x.webp';
import redMenuImg2x from './assets/img/header/header-bg_mob_menu-red@2x.webp';
import orangeMenuImg1x from './assets/img/header/header-bg_mob_menu-orange@1x.webp';
import orangeMenuImg2x from './assets/img/header/header-bg_mob_menu-orange@2x.webp';
import khakiMenuImg1x from './assets/img/header/header-bg_mob_menu-khaki@1x.webp';
import khakiMenuImg2x from './assets/img/header/header-bg_mob_menu-khaki@2x.webp';
import blueMenuImg1x from './assets/img/header/header-bg_mob_menu-blue@1x.webp';
import blueMenuImg2x from './assets/img/header/header-bg_mob_menu-blue@2x.webp';

import redHeroImg1x from './assets/img/hero/hero-bg_mob-red@1x.webp';
import redHeroImg2x from './assets/img/hero/hero-bg_mob-red@2x.webp';
import orangeHeroImg1x from './assets/img/hero/hero-bg_mob-orange@1x.webp';
import orangeHeroImg2x from './assets/img/hero/hero-bg_mob-orange@2x.webp';
import khakiHeroImg1x from './assets/img/hero/hero-bg_mob-khaki@1x.webp';
import khakiHeroImg2x from './assets/img/hero/hero-bg_mob-khaki@2x.webp';
import blueHeroImg1x from './assets/img/hero/hero-bg_mob-blue@1x.webp';
import blueHeroImg2x from './assets/img/hero/hero-bg_mob-blue@2x.webp';

// Планшет
import redHeroImgTab1x from './assets/img/hero/hero-bg_tab-red@1x.webp';
import redHeroImgTab2x from './assets/img/hero/hero-bg_tab-red@2x.webp';
import orangeHeroImgTab1x from './assets/img/hero/hero-bg_tab-orange@1x.webp';
import orangeHeroImgTab2x from './assets/img/hero/hero-bg_tab-orange@2x.webp';
import khakiHeroImgTab1x from './assets/img/hero/hero-bg_tab-khaki@1x.webp';
import khakiHeroImgTab2x from './assets/img/hero/hero-bg_tab-khaki@2x.webp';
import blueHeroImgTab1x from './assets/img/hero/hero-bg_tab-blue@1x.webp';
import blueHeroImgTab2x from './assets/img/hero/hero-bg_tab-blue@2x.webp';

// Десктоп
import redHeroImgDesk1x from './assets/img/hero/hero-bg_desk-red@1x.webp';
import redHeroImgDesk2x from './assets/img/hero/hero-bg_desk-red@2x.webp';
import orangeHeroImgDesk1x from './assets/img/hero/hero-bg_desk-orange@1x.webp';
import orangeHeroImgDesk2x from './assets/img/hero/hero-bg_desk-orange@2x.webp';
import khakiHeroImgDesk1x from './assets/img/hero/hero-bg_desk-khaki@1x.webp';
import khakiHeroImgDesk2x from './assets/img/hero/hero-bg_desk-khaki@2x.webp';
import blueHeroImgDesk1x from './assets/img/hero/hero-bg_desk-blue@1x.webp';
import blueHeroImgDesk2x from './assets/img/hero/hero-bg_desk-blue@2x.webp';

// Функція зміни теми
function changeTheme(color) {
  const rootStyle = document.querySelector(':root');
  rootStyle.style.setProperty('--accent-color', color);

  const dpr = window.devicePixelRatio;
  const mediaQueryMobile = window.matchMedia('(max-width: 767px)');
  const mediaQueryTablet = window.matchMedia('(min-width: 768px) and (max-width: 1439px)');
  const mediaQueryDesktop = window.matchMedia('(min-width: 1440px)');
  
  let menuImg, heroImg;

  // Мобільна версія
  if (mediaQueryMobile.matches) {
    if (color === '#ed3b44') {
      menuImg = dpr >= 2 ? redMenuImg2x : redMenuImg1x;
      heroImg = dpr >= 2 ? redHeroImg2x : redHeroImg1x;
    } else if (color === '#ff7f08') {
      menuImg = dpr >= 2 ? orangeMenuImg2x : orangeMenuImg1x;
      heroImg = dpr >= 2 ? orangeHeroImg2x : orangeHeroImg1x;
    } else if (color === '#4b5320') {
      menuImg = dpr >= 2 ? khakiMenuImg2x : khakiMenuImg1x;
      heroImg = dpr >= 2 ? khakiHeroImg2x : khakiHeroImg1x;
    } else if (color === '#2b4441') {
      menuImg = dpr >= 2 ? blueMenuImg2x : blueMenuImg1x;
      heroImg = dpr >= 2 ? blueHeroImg2x : blueHeroImg1x;
    }
  }

  // Планшет
  else if (mediaQueryTablet.matches) {
    if (color === '#ed3b44') {
      heroImg = dpr >= 2 ? redHeroImgTab2x : redHeroImgTab1x;
    } else if (color === '#ff7f08') {
      heroImg = dpr >= 2 ? orangeHeroImgTab2x : orangeHeroImgTab1x;
    } else if (color === '#4b5320') {
      heroImg = dpr >= 2 ? khakiHeroImgTab2x : khakiHeroImgTab1x;
    } else if (color === '#2b4441') {
      heroImg = dpr >= 2 ? blueHeroImgTab2x : blueHeroImgTab1x;
    }
  }

  // Десктоп
  else if (mediaQueryDesktop.matches) {
    if (color === '#ed3b44') {
      heroImg = dpr >= 2 ? redHeroImgDesk2x : redHeroImgDesk1x;
    } else if (color === '#ff7f08') {
      heroImg = dpr >= 2 ? orangeHeroImgDesk2x : orangeHeroImgDesk1x;
    } else if (color === '#4b5320') {
      heroImg = dpr >= 2 ? khakiHeroImgDesk2x : khakiHeroImgDesk1x;
    } else if (color === '#2b4441') {
      heroImg = dpr >= 2 ? blueHeroImgDesk2x : blueHeroImgDesk1x;
    }
  }

  const mobileMenuImg = document.querySelector('.mobile-menu');
  const heroSectionBack = document.querySelector('.hero-section');

  mobileMenuImg.style.backgroundImage = `url('${menuImg}')`;
  heroSectionBack.style.backgroundImage = `url('${heroImg}')`;
}


const paleteBtn = document.querySelector(".header-palete-btn");
const menuTargetColor = document.querySelector(".header-menu-target-color");

paleteBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  menuTargetColor.style.display = menuTargetColor.style.display === "flex" ? "none" : "flex";
});

document.addEventListener("click", (event) => {
  if (!menuTargetColor.contains(event.target) && event.target !== paleteBtn) {
    menuTargetColor.style.display = "none";
  }
});

document.querySelector('.palete-red').addEventListener('click', () => {
  changeTheme('#ed3b44');
});

document.querySelector('.palete-orange').addEventListener('click', () => {
  changeTheme('#ff7f08');
});

document.querySelector('.palete-khaki').addEventListener('click', () => {
  changeTheme('#4b5320');
});

document.querySelector('.palete-blue').addEventListener('click', () => {
  changeTheme('#2b4441');
});
