let body = document.querySelector("body");
let cor = "#";
const listColor = "0123456789abcdef";
let result = document.querySelector("#codigo");

const corRepetidaList = [];
let clicks = document.querySelector("#clicks");
let quantidadeClicks = 0;

function cleanColor() {
    cor = "#";
}

function addColor() {
    if (corRepetidaList.includes(cor)) {
        alert("Você acabou de encontrar uma cor repetida! Demorou apenas: " + quantidadeClicks + " cliques");
        location.reload()
    } else {
        corRepetidaList.push(cor);
        console.log(`Nova cor adicionada: ${cor}`)
    }
}

function changeColor() {
    cleanColor();

    for (let i = 0, n = listColor.length; i < 6; i++) {
        cor += listColor.charAt(Math.floor(Math.random() * n));
    }

    body.style.backgroundColor = cor;
    result.innerText = cor;

    quantidadeClicks += 1;
    clicks.innerText = quantidadeClicks;

    addColor();
    console.log(corRepetidaList);
}
