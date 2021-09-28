/** 
 * Toggle the specified modal's "hidden" class on or off.
 * @param {String} id The id of the target modal element.
 */
function toggleModal(id) {
    const modal = document.querySelector(`#${id}`);

    if(modal) {
        modal.classList.toggle("hidden");
    } else {
        console.warn(`Modal with id '${id}' could not be found.`);
    }
}

/**
 * Automatically add X buttons in the corners of each modal that has the x-btn
 * class.
*/
function initModalCloseButtons() {
    const modals = document.querySelectorAll(".modal");

    modals.forEach((el) => {
        const buttonDiv = document.createElement("div");
        const buttonDivContent = document.createElement("p");

        // TODO: This should probably include an inline icon instead, this is
        // just a placeholder.
        buttonDivContent.textContent = "X";
        buttonDiv.appendChild(buttonDivContent);
        
        // TODO: Is this an appropriate name?
        buttonDiv.className = "btn-modal-x";

        buttonDiv.dataset.targetModal = el.id;
        buttonDiv.addEventListener("click", () => {
            toggleModal(el.id);
            toggleModalBackground();
        });

        el.appendChild(buttonDiv);
    });
}

/**
 * Initialize all modal trigger buttons and bind them to their target modals.
*/
function initModalTriggers() {
    const triggers = document.querySelectorAll(".modal-toggle");

    triggers.forEach((el) => {
        el.addEventListener("click", () => {
            if(el.dataset.targetModal) {
                toggleModal(el.dataset.targetModal);
            } else {
                console.warn("Modal trigger: ", el, "does not have a target modal!");
            }

            toggleModalBackground();
        });
    });
}

/**
 * Creates a dark transparent background that triggers when a modal is opened,
 * and can be clicked to close the modal and return to the previous view.
*/
function initModalBackground() {
    const modalBackground = document.createElement("div");
    modalBackground.className = "modal-background";

    modalBackground.addEventListener("click", () => {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((el) => {
            if(!el.classList.contains("hidden")) {
                el.classList.toggle("hidden");
            }
        });

        toggleModalBackground();
    });

    document.body.appendChild(modalBackground);
}

/**
 * Finds the dark background in the DOM and toggles it on and off.
*/
function toggleModalBackground() {
    const modalBackground = document.querySelector(".modal-background");
    if (!modalBackground) {
        console.warn("Could not find Modal Background element.");
    }

    modalBackground.classList.toggle("hidden");
}

/**
 * Finds the dark background in the DOM and disables it.
*/
function disableModalBackground() {
    const modalBackground = document.querySelector(".modal-background");
    if (!modalBackground) {
        console.warn("Could not find Modal Background element.");
    }

    if (!modalBackground.classList.contains("hidden")) {
        modalBackground.classList.add("hidden");
    }
}

function init() {
    initModalTriggers();
    initModalCloseButtons();
    initModalBackground();
}
init();
