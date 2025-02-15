import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

  const accordion = new Accordion('.js-faq', {
    duration: 400,
    showMultiple: false,
    elementClass: 'js-faq-el',
    triggerClass: 'js-faq-tr',
    panelClass: 'faq-content',
    activeClass: 'is-open',
  });

document.querySelector('.faq-item').addEventListener('click', e => {
  accordion
});
