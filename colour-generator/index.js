let colourPara = document.getElementById("colour");
colourPara.textContent="#f5f5f5";

function colourGenerator() {
    // colour represented as 6 hexadecimal letter (24 bit binary)
    let randomColourNum = Math.floor(Math.random() * (Math.pow(2,24)-1));
    let randomColour = '#' + randomColourNum.toString(16);
    colourPara.textContent = randomColour;
    document.body.style.backgroundColor = randomColour;
}

document.getElementById('generate').onclick = colourGenerator;