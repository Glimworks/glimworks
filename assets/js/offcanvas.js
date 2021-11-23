/* Toggles active class on offCanvas and canvasOfset to add margin and show offCanvas and modalBackgroud */
function openOffcanvas() {
    document.getElementById("offCanvas").classList.toggle("active");
    document.getElementById("canvasOfset").classList.toggle("active");
}

/* Toggles active class on offCanvas and canvasOfset to remove margin and hide offCanvas and modalBackgroud */
function closeOffcanvas() {
    document.getElementById("offCanvas").classList.toggle("active");
    document.getElementById("canvasOfset").classList.toggle("active");
}

export { openOffcanvas, closeOffcanvas };
