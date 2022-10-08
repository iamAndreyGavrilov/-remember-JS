const btn = document.querySelector("#myBtn");
// const btn = document.getElementById("myBtn");

const modal = document.querySelector(".modal");
// const modal = document.getElementsByClassName("modal");

btn.addEventListener("click", openModal);

function openModal() {
  modal.classList.add("open");
  attachModalEvents();
}

function attachModalEvents() {
  modal.querySelector(".close").addEventListener("click", closeModal);
  document.addEventListener("keydown", handleEscape);
  modal.addEventListener("click", handleOutside);
}

function handleEscape(event) {
  if (event.key === "Escape") {
    closeModal();
  }
}

function handleOutside(event) {
  const isClickOutside = !!event.target.closest(".modal-content");

  if (isClickOutside === false) {
    closeModal();
  }
}

function closeModal() {
  modal.classList.remove("open");
  detachModalEvents();
}

function detachModalEvents() {
  modal.querySelector(".close").removeEventListener("click", closeModal);
  document.removeEventListener("keydown", handleEscape);
  modal.removeEventListener("click", handleOutside);
}
