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

// IMask - плагин работа с формами
IMask(document.getElementById("phone"), {
  mask: "+{7}(000)000-00-00",
});

IMask(document.getElementById("age"), {
  mask: Number,
  min: 0,
  max: 101,
});

IMask(document.getElementById("date"), {
  mask: Date,
  lazy: false,
  autofix: true,
  blocks: {
    d: {
      mask: IMask.MaskedRange,
      placeholderChar: "d",
      from: 1,
      to: 31,
      maxLength: 2,
    },
    m: {
      mask: IMask.MaskedRange,
      placeholderChar: "m",
      from: 1,
      to: 12,
      maxLength: 2,
    },
    Y: {
      mask: IMask.MaskedRange,
      placeholderChar: "y",
      from: 2000,
      to: 2023,
      maxLength: 4,
    },
  },
});
