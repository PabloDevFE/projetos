let pedra = document.querySelector("#pedra")
let papel = document.querySelector("#papel")
let tesoura = document.querySelector("#tesoura")
let escolha = document.querySelector("#selecionado")
let escolhaMaquina = document.querySelector("#escolhaMaquina")


let escolhaRandom = ""
let escolhaOption = ""



//O RESULTADO SÓ ESTÁ SENDO VERIFICADO NA PROXIMA RODADA

function cleanRandomize() {
    escolhaMaquina.innerHTML = ""
}


function escolhaPedra() {
    escolhaOption = "Pedra"
    escolha.innerHTML = "✊"
    cleanRandomize()
    return escolhaOption
}   

function escolhaPapel() {
    escolhaOption = "Papel"
    escolha.innerHTML = "🖐️"
    cleanRandomize()
    return escolhaOption
}    

function escolhaTesoura() {
    escolhaOption = "Tesoura"
    escolha.innerHTML = "✌️"
    cleanRandomize()
    return escolhaOption
}    




function randomize() {

    let list = [1, 2, 3]
    for (let i = 0, n = list.length; i < 4; i++) {
        escolhaRandom = list[Math.floor(Math.random() * n)];
    }

    if (escolhaRandom == 1) {
        escolhaRandom = "Pedra"
        escolhaMaquina.innerHTML = "✊"
    } else if (escolhaRandom == 2) {
        escolhaRandom = "Papel"
        escolhaMaquina.innerHTML = "🖐️"
    } else if (escolhaRandom == 3) {
        escolhaRandom = "Tesoura"
        escolhaMaquina.innerHTML = "✌️"
    }

    return escolhaRandom
}




function result() {

}






function play() {

    if (escolhaOption == "Pedra" && escolhaRandom == "Pedra") {
        console.log("Empate")
    }

    console.log(escolhaOption)

    randomize()
    console.log(escolhaRandom)

    if (escolhaOption == "") {
        alert("Selecione alguma opção!")
    } 
    escolhaOption = ""
}