/* Toggles active class on offCanvas and canvasOfset to add margin and show offCanvas and modalBackgroud */
function toggleOffcanvas() {
    let canvas = document.getElementById("offcanvas");
    canvas.classList.toggle("active");
    let offset = document.getElementById("canvasOfset");
    offset.classList.toggle("active");
}
