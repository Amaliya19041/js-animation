let tl = gsap.timeline();

tl.from('.hero__title', {opacity: 0, y: 100, duration: 1})
  .from('.hero__btn', {opacity: 0, y: 100, duration: 1}, "-=1")
  .from('.hero__descr', {opacity: 0, duration: 1})
  .from('.photos-wrap img:first-child', {opacity: 0, duration: 0.3}, "-=0.8")
  .from('.photos-wrap img:nth-child(2)', {opacity: 0, duration: 0.3}, "-=0.6")
  .from('.photos-wrap img:last-child', {opacity: 0, duration: 0.3}, "-=0.4")
  .from('.photos__author', {opacity: 0, duration: 1}, "-=0.4");

let tl2 = gsap.timeline();
let burger = document.querySelector('.burger');
let menu = document.querySelector('.menu');
let menuTop = document.querySelector('.menu__top');
let menuNav = document.querySelector('.menu__nav');
let social = document.querySelector('.social');
let menuRight = document.querySelector('.menu__right');
let close = menuTop.querySelectorAll('.close');

burger.addEventListener('click', function () {
  menu.classList.toggle('menu--open');
  tl2.from(menu, { opacity: 0, duration: 0.1 })
     .from(menuTop, { opacity: 0, y: -100, duration: 0.1 })
     .from(menuNav, { opacity: 0, y: 30, duration: 0.8 })
     .from(social, { opacity: 0, y: 20, duration: 0.8 })
     .from(menuRight, { opacity: 0, y: 40, duration: 0.8 }, "-=0.8");
})

close.forEach(function (el) {
  el.addEventListener('click', function () {
    tl2.reverse();
  })
})
