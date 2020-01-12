/* Gallery */
const gallery = document.querySelector("#gallery");
const images = gallery.querySelectorAll("img");

document.body.addEventListener("click", e => {
  const elem = document.querySelector(".zoom");
  if (e.target.classList.contains("image") && elem === null) {
    let cln = e.target.cloneNode(true);
    cln.classList.add("zoom");
    document.body.appendChild(cln);
  } else if (!e.target.classList.contains("zoom")) {
    if (elem !== null && elem.classList.contains("zoom")) {
      elem.parentNode.removeChild(elem);
    }
  }
});

/* Nav Menu */
const nav = document.querySelector(".nav-links");
const burger = document.querySelector(".burger");
const links = nav.querySelectorAll("a");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-open");
  burger.classList.toggle("toggle");
});

links.forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
  });
});
