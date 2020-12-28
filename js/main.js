// Get modal elements
const modal = document.getElementById("simpleModal");

// Get open modal button
const modalBtn = document.getElementById("modal-btn");

// Get close modal element
const closeBtn = document.querySelector(".closeBtn");

//Event listeners
modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", outsideClick);

// Open modal function
function openModal() {
  modal.style.display = "block";
}
function closeModal() {
  modal.style.display = "none";
}
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
