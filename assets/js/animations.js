const animationSelectContainer = document.getElementById("animationSelect");
const btnCopyClipboard = document.getElementById("btnCopyClipboard");

let storedClassInMemory;

animationSelectContainer.addEventListener("change", (e) => {
    const animationElement = document.getElementById("animationDiv");
    const TargetValue = e.target.value;
    if (!storedClassInMemory) {
        storedClassInMemory = TargetValue;
        animationElement.classList.add(TargetValue);
        return;
    }
    animationElement.classList.replace(storedClassInMemory, TargetValue);
    storedClassInMemory = TargetValue;
})

btnCopyClipboard.addEventListener("click", () => {
    if (!storedClassInMemory) {
        return
    }
    navigator.clipboard.writeText(storedClassInMemory);
    alert("animation code " + storedClassInMemory + "(PS: It's just the name!")
})