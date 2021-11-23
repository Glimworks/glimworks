// Import
import { openOffcanvas, closeOffcanvas } from "./offcanvas.js";

// Target DOM-Elements
const btnOpenOffcanvas = document.getElementById("openOffcanvas");
const btnCloseOffcanvas = document.getElementById("closeOffcanvas");

// EventListener
btnOpenOffcanvas.addEventListener("click", () => {
    openOffcanvas();
});
btnCloseOffcanvas.addEventListener("click", () => {
    closeOffcanvas();
});
