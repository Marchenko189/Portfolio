import firstImage1 from '../img/projects/project-1.webp';
import firstImage2 from '../img/projects/project-2.webp';
import firstImage3 from '../img/projects/project-3.webp';
import secondImage1 from '../img/projects/project-1@2x.webp';
import secondImage2 from '../img/projects/project-2@2x.webp';
import secondImage3 from '../img/projects/project-3@2x.webp';
import Swiper from 'swiper/bundle';

const projectImages = [
    {
        pct: firstImage1,
        pct2x: secondImage1,
    },
     {
        pct: firstImage2,
        pct2x: secondImage2,
    },
      {
        pct:firstImage3,
        pct2x: secondImage3,
    }
]


const projectCards = document.querySelector('.projects-list');

function projectGalleryImages(img) {
  return img
    .map(
      image =>
        ` <div class="swiper-slide">
          <li class="projects-cards">
          <div class="project-top-card">
            <ul class="project-tags">
              <li class="project-tag">#react</li>
              <li class="project-tag">#js</li>
              <li class="project-tag">#node js</li>
              <li class="project-tag">#git</li>
            </ul>
            <h3 class="projects-text">
              Programming Across Borders: Ideas, Technologies, Innovations
            </h3>
            <a target="_blank" href="https://github.com/SerhiiShevchenkoGRV/ProfIT-project01" class="project-button">See project</a>
          </div>

          <div class="project-bottom-card">
            <picture class="project-img">
              <source
                  srcset="${image.pct} 1x, ${image.pct2x} 2x"
              />
              <img src="${image.pct}" alt="Project image" />
            </picture>
          </div>
        </li>
        </div>`
    )
    .join('');
}

projectCards.innerHTML = projectGalleryImages(projectImages);

document.addEventListener('DOMContentLoaded', function () {
  const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    loop:false,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      
    },
    mousewheel: {
      enabled:true,
      
      sensitivity: 1,
    
      releaseOnEdges: true
    },
    preventInteractionOnTransition: false,
    simulateTouch: true,
    grabCursor: true,
    on: {
      slideChange: () => slideChangeProjects(swiper),
    },

    
  });
 
  function slideChangeProjects(swiper) {
    const prevButton = document.querySelector('.swiper-button-prev');
    const nextButton = document.querySelector('.swiper-button-next');
    
    if (prevButton && nextButton) {
      prevButton.disabled = swiper.isBeginning;
      nextButton.disabled = swiper.isEnd;

      prevButton.classList.toggle('disabled', swiper.isBeginning);
      nextButton.classList.toggle('disabled', swiper.isEnd);
    }
  }

  slideChangeProjects(swiper);
  swiper.update();
    
});

