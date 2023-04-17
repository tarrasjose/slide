// import Slide from './slide.js';
import SlideNav from './slide.js'

// const slide = new Slide('.slide', '.slide-wrapper');
const slide = new SlideNav('.slide', '.slide-wrapper');
slide.init();
slide.addArrow('.prev', '.next');
// console.log(slide);
slide.addControl('.custom-controls');
// console.log(slide);


// console.log(slide);
// slide.changeSlide(3);
// slide.activePrevSlide()
