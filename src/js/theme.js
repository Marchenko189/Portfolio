// import headerMobMenuRed01 from '../img/header/header-bg_mob_menu-red@1x.webp';
// import headerMobMenuRed02 from '../img/header/header-bg_mob_menu-red@2x.webp';
import headerMobMenuOrange01 from '../img/header/header-bg_mob_menu-orange@1x.webp';
import headerMobMenuOrange02 from '../img/header/header-bg_mob_menu-orange@2x.webp';
import headerMobMenuKhaki01 from '../img/header/header-bg_mob_menu-khaki@1x.webp';
import headerMobMenuKhaki02 from '../img/header/header-bg_mob_menu-khaki@2x.webp';
import headerMobMenuBlue01 from '../img/header/header-bg_mob_menu-blue@1x.webp';
import headerMobMenuBlue02 from '../img/header/header-bg_mob_menu-blue@2x.webp';

//  Зміна теми сайту
const paleteBtn = document.querySelector(".header-palete-btn");
const menuTargetColor = document.querySelector(".header-menu-target-color");

      // Обробник кліку для кнопки
paleteBtn.addEventListener("click", (event) => {
  event.stopPropagation();
  menuTargetColor.style.display = 
    menuTargetColor.style.display === "flex" ? "none" : "flex";
});

      // Закриття меню при кліку поза ним
document.addEventListener("click", (event) => {
  if (!menuTargetColor.contains(event.target) && event.target !== paleteBtn) {
    menuTargetColor.style.display = "none";
  }
});

const mobileMenuImg = document.querySelector('.mobile-menu');
const heroSectionBack = document.querySelector('.hero-section');
const rootStyle = document.querySelector(':root');
const mediaQueryMobile = window.matchMedia('(max-width: 767px)');
const mediaQueryTablet = window.matchMedia('(min-width: 768px) and (max-width: 1439px)');
const mediaQueryDesktop = window.matchMedia('(min-width: 1440px)');

      // Функція для зміни теми (колір + фон)
function changeTheme(color, imgName) {
  rootStyle.style.setProperty('--accent-color', color);

      // Отримуємо щільність пікселів екрану (ретина)
  const dpr = window.devicePixelRatio;

  let menuImg, heroImg;

      // Перевіряємо пристрій
  if (mediaQueryMobile.matches) {
    // Мобільна версія
    menuImg = `../img/header/header-bg_mob_menu-${imgName}@1x.webp`;
    heroImg = `../img/hero/hero-bg_mob-${imgName}@1x.webp`;

    if (dpr >= 2) {
      menuImg = `../img/header/header-bg_mob_menu-${imgName}@2x.webp`;
      heroImg = `../img/hero/hero-bg_mob-${imgName}@2x.webp`;
    }
  } else if (mediaQueryTablet.matches) {
    // Планшет
    heroImg = `../img/hero/hero-bg_tab-${imgName}@1x.webp`;

    if (dpr >= 2) {
      heroImg = `../img/hero/hero-bg_tab-${imgName}@2x.webp`;
    }
  } else if (mediaQueryDesktop.matches) {
    // Десктоп
    heroImg = `../img/hero/hero-bg_desk-${imgName}@1x.webp`;

    if (dpr >= 2) {
      heroImg = `../img/hero/hero-bg_desk-${imgName}@2x.webp`;
    }
  }

      // Встановлюємо фон
  mobileMenuImg.style.backgroundImage = `url('${menuImg}')`;
  heroSectionBack.style.backgroundImage = `url('${heroImg}')`;
}

      // Додаємо обробники подій для палітр
document.querySelector('.palete-red').addEventListener('click', () => {
  changeTheme('#ed3b44', 'red');
});

document.querySelector('.palete-orange').addEventListener('click', () => {
  changeTheme('#ff7f08', 'orange');
});

document.querySelector('.palete-khaki').addEventListener('click', () => {
  changeTheme('#4b5320', 'khaki');
});

document.querySelector('.palete-blue').addEventListener('click', () => {
  changeTheme('#2b4441', 'blue');
});

