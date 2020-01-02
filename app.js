/* Gallery */

const gallery = document.querySelector('#gallery');
const images = gallery.querySelectorAll('img');
/*
images.forEach(image => {
  image.addEventListener("mouseover", () => {
    let random = Math.floor(Math.random() * 13) + 1;
    image.setAttribute("src", `./img/image${random}.jpg`);
  });
});*/

/* Nav Menu */
const nav = document.querySelector('.nav-links');
const burger = document.querySelector('.burger');
const links = nav.querySelectorAll('a');

burger.addEventListener('click', () => {
  nav.classList.toggle('nav-open');
  burger.classList.toggle('toggle');
});

links.forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    burger.classList.toggle('toggle');
  });
});
