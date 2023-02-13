function scrollHeader() {
  let header = document.getElementById("header");
  if (this.scrollY >= 80) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);

let swiperPopular = new Swiper(".popular__container", {
  spaceBetween: 32,
  grabCursor: true,
  centredSlides: true,
  slidesPerView: "auto",
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
////////////////////////////////////////////////////////////////////////////////

let accordionItems = document.querySelectorAll(".value__accordion-item");
accordionItems.forEach((item) => {
  let accordionHeader = item.querySelector(".value__accordion-header");
  accordionHeader.addEventListener("click", () => {
    let openItem = document.querySelector(".accordion-open");
    toggleItem(item);
    if (openItem && openItem !== item) {
      toggleItem(openItem);
    }
  });
});

let toggleItem = (item) => {
  let accordionContent = item.querySelector(".value__accordion-content");

  if (item.classList.contains("accordion-open")) {
    accordionContent.removeAttribute("style");
    item.classList.remove("accordion-open");
  } else {
    accordionContent.style.height = accordionContent.scrollHeight + "px";
    item.classList.add("accordion-open");
  }
};

/////////////////////Active Link///////////////////////////////////////////
let sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach((current) => {
    let sectionHeight = current.offsetHeight;
    let sectionTop = current.offsetTop - 58;
    let sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav__menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}
window.addEventListener("scroll", scrollActive);

////////////////////////////////////////////////////////////////////////////////
function scrollUp() {
  let scrollUp = document.getElementById("scroll-up");
  if (this.scrollY >= 350) scrollUp.classList.add("show-scroll");
  else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);
/////////////theme/////////////////////////////////////////////////////////////
let themeButton = document.getElementById("theme-button");
let darkTheme = "dark-theme";
let iconTheme = "bx-sun";

let selectedTheme = localStorage.getItem("selected-theme");
let selectedIcon = localStorage.getItem("selected-icon");

let getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";

let getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "bx bx-moon" : "bx bx-sun";

if (selectedTheme) {
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "bx bx-moon" ? "add" : "remove"](
    iconTheme
  );
}

themeButton.addEventListener("click", () => {
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
////////////////////////////////////////////////////////////////
let sr = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: 2500,
  delay: 300,
  // reset: true,
});

sr.reveal(
  `.home__title, .popular__container, .subscribe__container, .footer__container`
);
sr.reveal(`.home__description, .footer__info`, { delay: 500 });
sr.reveal(`.home__search`, { delay: 600 });
sr.reveal(`.home__value`, { delay: 700 });
sr.reveal(`.home__images`, { delay: 800, origin: "bottom" });
sr.reveal(`.logos__img`, { interval: 100 });
sr.reveal(`.value__images, .contact__content`, { origin: "left" });
sr.reveal(`.value__content, .contact__images`, { origin: "right" });
