// LinkedIn Modal
const modal = document.querySelector(".modal-link");
const trigger = document.querySelector(".btn-link");
const closeButton = document.querySelector(".close-link");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);


// Indeed Modal
const modal = document.querySelector(".modal-in");
const trigger = document.querySelector(".btn-in");
const closeButton = document.querySelector(".close-in");

function toggleModal() {
    modal.classList.toggle("show-modal");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
closeButton.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);
