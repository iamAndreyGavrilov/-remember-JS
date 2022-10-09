const moveTo = new MoveTo();

const buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
  moveTo.registerTrigger(btn);
});

const link = document.querySelector("a");

link.addEventListener("click", handleClick);

function handleClick(event) {
  event.preventDefault();
  const target = document.querySelector(this.getAttribute("href"));
  moveTo.move(target, {
    duration: 3000,
  });
}

// тултипы
tippy("[data-tippy-content]", {
  theme: "light",
  placement: "bottom",
});

//swiper

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  slidesPerView: 2,
  spaceBetween: 20,
  // loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // // And if we need scrollbar
  // scrollbar: {
  //   el: ".swiper-scrollbar",
  // },
});
