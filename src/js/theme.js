// // Імпорт зображень моб меню
// import headerMobMenuRed01 from '../img/header/header-bg_mob_menu-red@1x.webp';
// import headerMobMenuRed02 from '../img/header/header-bg_mob_menu-red@2x.webp';
// import headerMobMenuOrange01 from '../img/header/header-bg_mob_menu-orange@1x.webp';
// import headerMobMenuOrange02 from '../img/header/header-bg_mob_menu-orange@2x.webp';
// import headerMobMenuKhaki01 from '../img/header/header-bg_mob_menu-khaki@1x.webp';
// import headerMobMenuKhaki02 from '../img/header/header-bg_mob_menu-khaki@2x.webp';
// import headerMobMenuBlue01 from '../img/header/header-bg_mob_menu-blue@1x.webp';
// import headerMobMenuBlue02 from '../img/header/header-bg_mob_menu-blue@2x.webp';

// // Імпорт зображень моб hero
// import heroMobRed01 from '../img/hero/hero-bg_mob-red@1x.webp';
// import heroMobRed02 from '../img/hero/hero-bg_mob-red@2x.webp';
// import heroMobOrange01 from '../img/hero/hero-bg_mob-orange@1x.webp';
// import heroMobOrange02 from '../img/hero/hero-bg_mob-orange@2x.webp';
// import heroMobKhaki01 from '../img/hero/hero-bg_mob-khaki@1x.webp';
// import heroMobKhaki02 from '../img/hero/hero-bg_mob-khaki@2x.webp';
// import heroMobBlue01 from '../img/hero/hero-bg_mob-blue@1x.webp';
// import heroMobBlue02 from '../img/hero/hero-bg_mob-blue@2x.webp';

// // Імпорт зображень таблет hero
// import heroTabRed01 from '../img/hero/hero-bg_tab-red@1x.webp';
// import heroTabRed02 from '../img/hero/hero-bg_tab-red@2x.webp';
// import heroTabOrange01 from '../img/hero/hero-bg_tab-orange@1x.webp';
// import heroTabOrange02 from '../img/hero/hero-bg_tab-orange@2x.webp';
// import heroTabKhaki01 from '../img/hero/hero-bg_tab-khaki@1x.webp';
// import heroTabKhaki02 from '../img/hero/hero-bg_tab-khaki@2x.webp';
// import heroTabBlue01 from '../img/hero/hero-bg_tab-blue@1x.webp';
// import heroTabBlue02 from '../img/hero/hero-bg_tab-blue@2x.webp';

// // Імпорт зображень десктоп hero
// import heroDeskRed01 from '../img/hero/hero-bg_desk-red@1x.webp';
// import heroDeskRed02 from '../img/hero/hero-bg_desk-red@2x.webp';
// import heroDeskOrange01 from '../img/hero/hero-bg_desk-orange@1x.webp';
// import heroDeskOrange02 from '../img/hero/hero-bg_desk-orange@2x.webp';
// import heroDeskKhaki01 from '../img/hero/hero-bg_desk-khaki@1x.webp';
// import heroDeskKhaki02 from '../img/hero/hero-bg_desk-khaki@2x.webp';
// import heroDeskBlue01 from '../img/hero/hero-bg_desk-blue@1x.webp';
// import heroDeskBlue02 from '../img/hero/hero-bg_desk-blue@2x.webp';

// //  Зміна теми сайту
// const paleteBtn = document.querySelector(".header-palete-btn");
// const menuTargetColor = document.querySelector(".header-menu-target-color");

//       // Обробник кліку для кнопки
// paleteBtn.addEventListener("click", (event) => {
//   event.stopPropagation();
//   menuTargetColor.style.display = 
//     menuTargetColor.style.display === "flex" ? "none" : "flex";
// });

//       // Закриття меню при кліку поза ним
// document.addEventListener("click", (event) => {
//   if (!menuTargetColor.contains(event.target) && event.target !== paleteBtn) {
//     menuTargetColor.style.display = "none";
//   }
// });

// const mobileMenuImg = document.querySelector('.mobile-menu');
// const heroSectionBack = document.querySelector('.hero-section');
// const rootStyle = document.querySelector(':root');
// const mediaQueryMobile = window.matchMedia('(max-width: 767px)');
// const mediaQueryTablet = window.matchMedia('(min-width: 768px) and (max-width: 1439px)');
// const mediaQueryDesktop = window.matchMedia('(min-width: 1440px)');

//       // Функція для зміни теми (колір + фон)
// function changeTheme(color, imgName) {
//   rootStyle.style.setProperty('--accent-color', color);

//       // Отримуємо щільність пікселів екрану (ретина)
//   const dpr = window.devicePixelRatio;

//   let menuImg, heroImg;

//       // Перевіряємо пристрій
//   if (mediaQueryMobile.matches) {
//     // Мобільна версія
//     menuImg = `../img/header/header-bg_mob_menu-${imgName}@1x.webp`;
//     heroImg = `../img/hero/hero-bg_mob-${imgName}@1x.webp`;

//     if (dpr >= 2) {
//       menuImg = `../img/header/header-bg_mob_menu-${imgName}@2x.webp`;
//       heroImg = `../img/hero/hero-bg_mob-${imgName}@2x.webp`;
//     }
//   } else if (mediaQueryTablet.matches) {
//     // Планшет
//     heroImg = `../img/hero/hero-bg_tab-${imgName}@1x.webp`;

//     if (dpr >= 2) {
//       heroImg = `../img/hero/hero-bg_tab-${imgName}@2x.webp`;
//     }
//   } else if (mediaQueryDesktop.matches) {
//     // Десктоп
//     heroImg = `../img/hero/hero-bg_desk-${imgName}@1x.webp`;

//     if (dpr >= 2) {
//       heroImg = `../img/hero/hero-bg_desk-${imgName}@2x.webp`;
//     }
//   }

//       // Встановлюємо фон
//   mobileMenuImg.style.backgroundImage = `url('${menuImg}')`;
//   heroSectionBack.style.backgroundImage = `url('${heroImg}')`;
// }

//       // Додаємо обробники подій для палітр
// document.querySelector('.palete-red').addEventListener('click', () => {
//   changeTheme('#ed3b44', 'red');
// });

// document.querySelector('.palete-orange').addEventListener('click', () => {
//   changeTheme('#ff7f08', 'orange');
// });

// document.querySelector('.palete-khaki').addEventListener('click', () => {
//   changeTheme('#4b5320', 'khaki');
// });

// document.querySelector('.palete-blue').addEventListener('click', () => {
//   changeTheme('#2b4441', 'blue');
// });

// Імпорт зображень моб меню
import headerMobMenuRed01 from '../img/header/header-bg_mob_menu-red@1x.webp';
import headerMobMenuRed02 from '../img/header/header-bg_mob_menu-red@2x.webp';
import headerMobMenuOrange01 from '../img/header/header-bg_mob_menu-orange@1x.webp';
import headerMobMenuOrange02 from '../img/header/header-bg_mob_menu-orange@2x.webp';
import headerMobMenuKhaki01 from '../img/header/header-bg_mob_menu-khaki@1x.webp';
import headerMobMenuKhaki02 from '../img/header/header-bg_mob_menu-khaki@2x.webp';
import headerMobMenuBlue01 from '../img/header/header-bg_mob_menu-blue@1x.webp';
import headerMobMenuBlue02 from '../img/header/header-bg_mob_menu-blue@2x.webp';

// Імпорт зображень моб hero
import heroMobRed01 from '../img/hero/hero-bg_mob-red@1x.webp';
import heroMobRed02 from '../img/hero/hero-bg_mob-red@2x.webp';
import heroMobOrange01 from '../img/hero/hero-bg_mob-orange@1x.webp';
import heroMobOrange02 from '../img/hero/hero-bg_mob-orange@2x.webp';
import heroMobKhaki01 from '../img/hero/hero-bg_mob-khaki@1x.webp';
import heroMobKhaki02 from '../img/hero/hero-bg_mob-khaki@2x.webp';
import heroMobBlue01 from '../img/hero/hero-bg_mob-blue@1x.webp';
import heroMobBlue02 from '../img/hero/hero-bg_mob-blue@2x.webp';

// Імпорт зображень планшет hero
import heroTabRed01 from '../img/hero/hero-bg_tab-red@1x.webp';
import heroTabRed02 from '../img/hero/hero-bg_tab-red@2x.webp';
import heroTabOrange01 from '../img/hero/hero-bg_tab-orange@1x.webp';
import heroTabOrange02 from '../img/hero/hero-bg_tab-orange@2x.webp';
import heroTabKhaki01 from '../img/hero/hero-bg_tab-khaki@1x.webp';
import heroTabKhaki02 from '../img/hero/hero-bg_tab-khaki@2x.webp';
import heroTabBlue01 from '../img/hero/hero-bg_tab-blue@1x.webp';
import heroTabBlue02 from '../img/hero/hero-bg_tab-blue@2x.webp';

// Імпорт зображень десктоп hero
import heroDeskRed01 from '../img/hero/hero-bg_desk-red@1x.webp';
import heroDeskRed02 from '../img/hero/hero-bg_desk-red@2x.webp';
import heroDeskOrange01 from '../img/hero/hero-bg_desk-orange@1x.webp';
import heroDeskOrange02 from '../img/hero/hero-bg_desk-orange@2x.webp';
import heroDeskKhaki01 from '../img/hero/hero-bg_desk-khaki@1x.webp';
import heroDeskKhaki02 from '../img/hero/hero-bg_desk-khaki@2x.webp';
import heroDeskBlue01 from '../img/hero/hero-bg_desk-blue@1x.webp';
import heroDeskBlue02 from '../img/hero/hero-bg_desk-blue@2x.webp';

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
    switch (imgName) {
      case 'red':
        menuImg = dpr >= 2 ? headerMobMenuRed02 : headerMobMenuRed01;
        heroImg = dpr >= 2 ? heroMobRed02 : heroMobRed01;
        break;
      case 'orange':
        menuImg = dpr >= 2 ? import('../img/header/header-bg_mob_menu-orange@2x.webp') : import('../img/header/header-bg_mob_menu-orange@1x.webp');
        heroImg = dpr >= 2 ? import('../img/hero/hero-bg_mob-orange@2x.webp') : import('../img/hero/hero-bg_mob-orange@1x.webp');
        break;
      case 'khaki':
        menuImg = dpr >= 2 ? headerMobMenuKhaki02 : headerMobMenuKhaki01;
        heroImg = dpr >= 2 ? heroMobKhaki02 : heroMobKhaki01;
        break;
      case 'blue':
        menuImg = dpr >= 2 ? headerMobMenuBlue02 : headerMobMenuBlue01;
        heroImg = dpr >= 2 ? heroMobBlue02 : heroMobBlue01;
        break;
    }
  } else if (mediaQueryTablet.matches) {
    // Планшет
    switch (imgName) {
      case 'red':
        heroImg = dpr >= 2 ? heroTabRed02 : heroTabRed01;
        break;
      case 'orange':
        heroImg = dpr >= 2 ? heroTabOrange02 : heroTabOrange01;
        break;
      case 'khaki':
        heroImg = dpr >= 2 ? heroTabKhaki02 : heroTabKhaki01;
        break;
      case 'blue':
        heroImg = dpr >= 2 ? heroTabBlue02 : heroTabBlue01;
        break;
    }
  } else if (mediaQueryDesktop.matches) {
    // Десктоп
    switch (imgName) {
      case 'red':
        heroImg = dpr >= 2 ? heroDeskRed02 : heroDeskRed01;
        break;
      case 'orange':
        heroImg = dpr >= 2 ? heroDeskOrange02 : heroDeskOrange01;
        break;
      case 'khaki':
        heroImg = dpr >= 2 ? heroDeskKhaki02 : heroDeskKhaki01;
        break;
      case 'blue':
        heroImg = dpr >= 2 ? heroDeskBlue02 : heroDeskBlue01;
        break;
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
