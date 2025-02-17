document.addEventListener('DOMContentLoaded', () => {
  const refs = {
    openMenuBtn: document.querySelector('[data-menu-open]'),
    closeMenuBtn: document.querySelector('[data-menu-close]'),
    menu: document.querySelector('[data-menu]'),
    navLinks: document.querySelectorAll('.mobile-menu-list .mobile-nav-link'),
    orderProjectBtnMobile: document.querySelector('.mobile-btn'),
    orderProjectBtnDesktop: document.querySelector('.header-btn'),
    dropdowns: document.querySelectorAll('.dropdown'),
  };

  if (refs.openMenuBtn && refs.closeMenuBtn && refs.menu) {
    refs.openMenuBtn.addEventListener('click', () => {
      toggleMenu();
      disableBodyScroll();
    });

    refs.closeMenuBtn.addEventListener('click', () => {
      toggleMenu();
      enableBodyScroll();
    });

    if (refs.navLinks.length) {
      refs.navLinks.forEach(link => {
        link.addEventListener('click', () => {
          window.location.href = link.getAttribute('href');
          closeMenu();
          enableBodyScroll();
        });
      });
    }

    // Обробник для мобільної кнопки "Order the project"
    if (refs.orderProjectBtnMobile) {
      refs.orderProjectBtnMobile.addEventListener('click', () => {
        scrollToWorkTogetherSection();
        closeMenu();
        enableBodyScroll();
      });
    }

    // Обробник для десктопної кнопки "Order the project"
    if (refs.orderProjectBtnDesktop) {
      refs.orderProjectBtnDesktop.addEventListener('click', () => {
        scrollToWorkTogetherSection();
      });
    }

    // Обробники для меню, що випадає
    if (refs.dropdowns.length) {
      refs.dropdowns.forEach(dropdown => {
        dropdown.addEventListener('click', function (event) {
          const dropdownContent = this.querySelector('.dropdown-content');
          dropdownContent.classList.toggle('show');
          event.stopPropagation();
        });
      });
    }
  }

  // Функція для плавного скролінгу до секції "work-together"
  function scrollToWorkTogetherSection() {
    const workTogetherSection = document.getElementById('work-togeth');
    if (workTogetherSection) {
      workTogetherSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }

  function toggleMenu() {
    refs.menu.classList.toggle('is-open');
  }

  function closeMenu() {
    refs.menu.classList.remove('is-open');
  }

  // Функція для відключення скролінгу на body
  function disableBodyScroll() {
    document.body.classList.add('no-scroll');
  }

  function enableBodyScroll() {
    document.body.classList.remove('no-scroll');
  }

  // Закрити меню при зміні ширини екрана (для планшетів та десктоп)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 767) {
      closeMenu();
      enableBodyScroll();
    }
  });

  // Закриття випадаючих меню при кліку поза ними
  document.addEventListener('click', function (event) {
    refs.dropdowns.forEach(dropdown => {
      const dropdownContent = dropdown.querySelector('.dropdown-content');
      if (!dropdown.contains(event.target)) {
        dropdownContent.classList.remove('show');
      }
    });
  });
});

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
//     menuImg = `/img/header/header-bg_mob_menu-${imgName}@1x.webp`;
//     heroImg = `/img/hero/hero-bg_mob-${imgName}@1x.webp`;

//     if (dpr >= 2) {
//       menuImg = `/img/header/header-bg_mob_menu-${imgName}@2x.webp`;
//       heroImg = `/img/hero/hero-bg_mob-${imgName}@2x.webp`;
//     }
//   } else if (mediaQueryTablet.matches) {
//     // Планшет
//     heroImg = `/img/hero/hero-bg_tab-${imgName}@1x.webp`;

//     if (dpr >= 2) {
//       heroImg = `/img/hero/hero-bg_tab-${imgName}@2x.webp`;
//     }
//   } else if (mediaQueryDesktop.matches) {
//     // Десктоп
//     heroImg = `/img/hero/hero-bg_desk-${imgName}@1x.webp`;

//     if (dpr >= 2) {
//       heroImg = `/img/hero/hero-bg_desk-${imgName}@2x.webp`;
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

