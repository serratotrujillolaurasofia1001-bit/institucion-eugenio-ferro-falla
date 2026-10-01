const mountainBlue = document.querySelector("#Mesa1");
const mountainRed = document.querySelector("#Mesa2");
const treesLeft = document.querySelector("#Mesa3");
const treesBottom = document.querySelector("#Mesa4");
const man = document.querySelector("#Mesa5");
const plants = document.querySelector("#Mesa6");
const titulo = document.querySelector("#titulo");

window.addEventListener("scroll", () => {
    let scroll = window.scrollY;

    mountainBlue.style.left = scroll * 1 + "px";
    mountainRed.style.left = scroll * 0.7 + "px";

    treesLeft.style.bottom = scroll * -2 + "px";
    treesLeft.style.right = scroll * 2 + "px";

    treesBottom.style.right = scroll * 2 + "px";
    man.style.right = scroll * 1 + "px";
    plants.style.right = scroll * 2 + "px";
    titulo.style.right = scroll * 4 + "px";
})