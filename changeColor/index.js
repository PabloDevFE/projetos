let body = document.querySelector("body")
let cor = "#"
const listColor = "0123456789abcdef"
let result = document.querySelector("#codigo")


const corRepetidaList = []
let clicks = document.querySelector("#clicks")
let quantidadeClicks = 0


function cleanColor() {
    cor = "#"
}

function addColor() {
    corRepetidaList.push(cor)
}

function changeColor() {

  cleanColor()

  for (let i = 0, n = listColor.length ; i < 6; i++) {
    cor += listColor.charAt(Math.floor(Math.random() * n))
  }

  //console.log(cor)  
  body.style.backgroundColor = cor
  result.innerText = cor

  quantidadeClicks += 1
  console.log(quantidadeClicks)
  clicks.innerText = quantidadeClicks


 
  console.log(corRepetidaList)

  addColor()
}

