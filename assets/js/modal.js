function toggleModal(id) {
    const modal = document.querySelector(`#${id}`);
    if(modal) {
        modal.classList.toggle("hidden");
    } else {
        console.warn(`Modal with id '${id}' could not be found.`);
    }
}

function initModalButtons() {
    const buttons = document.querySelectorAll(".btn-modal-toggle");
    buttons.forEach((btn) => {
        btn.addEventListener("click", () => {
            toggleModal(btn.dataset.targetModal);
        });
    });
}

function init() {
    initModalButtons();
}
init();
