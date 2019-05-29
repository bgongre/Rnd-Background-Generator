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

//create random button and add class 'rndBtn'
createRndBtn = () => {
    let btn = document.createElement("button");
    btn.innerHTML = "Randomize";
    btn.classList.add("rndBtn");
    return btn;
}

//append button to body
appendRndBtn = () => {
    let btn = createRndBtn();
    body.appendChild(btn);
}

//generating random number for RGB
generateRndNum = () => {
    return Math.floor(Math.random() * (255 - 0)) + 0;
}

//generate RGB with random numbers
generateRndRGB = () => {
    return `rgb(${generateRndNum()}, ${generateRndNum()}, ${generateRndNum()})`;
}

//change body background to random RGB colors
rndColors = () => {
    body.style.background = 
        `linear-gradient(to right, ${generateRndRGB()}, ${generateRndRGB()})`;
}

init();

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

//event delgation because button has been made dynamically
//if button is clicked, call 'rndColors' and update textContent
document.addEventListener("click", (e) => {
    if(e.target && e.target.matches(".rndBtn")){
        rndColors();
        css.textContent = body.style.background + `;`;
    }
});

