const css = document.querySelector("h3");
const color1 = document.querySelector(".color1");
const color2 = document.querySelector(".color2");
const body = document.getElementById("gradient");

init = () => {
    setGradient();
    appendRndBtn();
}

setGradient = () => {
    body.style.background = 
    `linear-gradient(to right, ${color1.value}, ${color2.value})`;

    css.textContent = body.style.background + `;`;
}

createRndBtn = () => {
    let btn = document.createElement("button");
    btn.innerHTML = "Randomize";
    btn.classList.add("rndBtn");
    return btn;
}

appendRndBtn = () => {
    let btn = createRndBtn();
    color1.parentNode.appendChild(btn);
}

generateRndNum = () => {
    return Math.floor(Math.random() * (255 - 0)) + 0;
}

generateRndRGB = () => {
    return `rgb(${generateRndNum()}, ${generateRndNum()}, ${generateRndNum()})`;
}

rndColors = () => {
    body.style.background = 
        `linear-gradient(to right, ${generateRndRGB()}, ${generateRndRGB()})`;
}

init();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

document.addEventListener("click", (e) => {
    if(e.target && e.target.matches(".rndBtn")){
        rndColors();
        css.textContent = body.style.background + `;`;
    }
});

