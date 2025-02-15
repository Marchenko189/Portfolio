import cover01_1x from '../img/covers/cover01@1x.jpg';
import cover01_2x from '../img/covers/cover01@2x.jpg';
import cover02_1x from '../img/covers/cover02@1x.jpg';
import cover02_2x from '../img/covers/cover02@2x.jpg';
import cover03_1x from '../img/covers/cover03@1x.jpg';
import cover03_2x from '../img/covers/cover03@2x.jpg';
import cover04_1x from '../img/covers/cover04@1x.jpg';
import cover04_2x from '../img/covers/cover04@2x.jpg';
import cover05_1x from '../img/covers/cover05@1x.jpg';
import cover05_2x from '../img/covers/cover05@2x.jpg';
import cover06_1x from '../img/covers/cover06@1x.jpg';
import cover06_2x from '../img/covers/cover06@2x.jpg';
import cover07_1x from '../img/covers/cover07@1x.jpg';
import cover07_2x from '../img/covers/cover07@2x.jpg';
import cover08_1x from '../img/covers/cover08@1x.jpg';
import cover08_2x from '../img/covers/cover08@2x.jpg';
import cover09_1x from '../img/covers/cover09@1x.jpg';
import cover09_2x from '../img/covers/cover09@2x.jpg';
import cover10_1x from '../img/covers/cover10@1x.jpg';
import cover10_2x from '../img/covers/cover10@2x.jpg';

const coversArr = [
  {
    src1x: cover01_1x,
    src2x: cover01_2x,
    alt: 'Power pulse',
  },
  {
    src1x: cover02_1x,
    src2x: cover02_2x,
    alt: 'Mimino',
  },
  {
    src1x: cover03_1x,
    src2x: cover03_2x,
    alt: 'Ukrainian artistry',
  },
  {
    src1x: cover04_1x,
    src2x: cover04_2x,
    alt: 'Organic vegetables',
  },
  {
    src1x: cover05_1x,
    src2x: cover05_2x,
    alt: 'Wallet',
  },
  {
    src1x: cover06_1x,
    src2x: cover06_2x,
    alt: 'Chego jewellery',
  },
  {
    src1x: cover07_1x,
    src2x: cover07_2x,
    alt: 'Energy flow',
  },
  {
    src1x: cover08_1x,
    src2x: cover08_2x,
    alt: 'Fruitbox',
  },
  {
    src1x: cover09_1x,
    src2x: cover09_2x,
    alt: 'English excellence',
  },
  {
    src1x: cover10_1x,
    src2x: cover10_2x,
    alt: 'Starlight studio',
  },
];

const picturesLines = Array.from(document.querySelectorAll('.covers-line'));

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

picturesLines.forEach(li => {
  const shuffledCovers = shuffleArray(coversArr)
    .map(
      ({ src1x, src2x, alt }) =>
        `<img
            srcset="${src1x} 1x, ${src2x} 2x"
            src="${src1x}"
            alt="${alt}"
            class="covers-picture"
        />`
    )
    .join('');

  li.innerHTML = shuffledCovers;
});

// picturesLines.forEach(li => {
//   const covers = coversArr
//     .map(
//       ({ src1x, src2x, alt }) =>
//         `<img
//               srcset="
//                 ${src1x} 1x,
//                 ${src2x} 2x
//               "
//               src=${src1x}
//               alt="${alt}"
//               class="covers-picture"
//             />`
//     )
//     .join('');

//   li.innerHTML = covers;
// });

document.addEventListener('DOMContentLoaded', () => {
  const coversSection = document.querySelector('.covers-section');

  if (!coversSection) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          coversSection.classList.add('animate');
        } else {
          coversSection.classList.remove('animate');
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(coversSection);
});
