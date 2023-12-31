var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomBtn = document.getElementById("random");

window.onload = setGradient();

function setGradient() {
    var bodyGradient = body.style.background = 
        "linear-gradient(to right, " 
        + color1.value 
        + ", " 
        + color2.value 
        + ")";
    css.textContent = bodyGradient;
    
}

function getRandomColor() {
    let color1 = "#" + Math.floor(Math.random()*16777215).toString(16);
    let color2 = "#" + Math.floor(Math.random()*16777215).toString(16);
    setGradient();
}

randomBtn.addEventListener("click", getRandomColor);

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);