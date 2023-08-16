const notas = document.querySelectorAll(".nota")
const titulo = document.querySelector("#titulo")
const subTitulo = document.querySelector("#subTitulo")
const divNotas = document.querySelector("#notas")
const botao = document.querySelector("#botao")
const image = document.querySelector("#image")
const text = document.querySelector("#text")



let notaFinal;


notas.forEach( (nota) => {
    nota.addEventListener("click", () =>{
        notaFinal = nota.attributes.id.value;
        console.log(notaFinal)
        selecao(notaFinal)
        return notaFinal;
    })
})

function selecao(notaFinal) {
    const elementos = document.getElementsByClassName("selecionado");

    // Remover a classe "selecionado" de todos os elementos que a possuem
    for (let i = 0; i < elementos.length; i++) {
        elementos[i].classList.remove("selecionado");
    }
    // Adicionar a classe "selecionado" ao elemento específico
    const exibirNota = document.getElementById(notaFinal);
    exibirNota.classList.add("selecionado");
}


function enviar() {

    subTitulo.classList.toggle("hidden")
    divNotas.classList.toggle("hidden")
    botao.classList.toggle("hidden")
    image.src = "midias/undraw_completed_03xt.svg"

    if (notaFinal == 1) {
        titulo.innerHTML = "Enfia no cu a avaliação, ok?"
        text.innerHTML = `Nota ${notaFinal}? Avalia direito sua vagabunda, se não fica sem best`
    } else if (notaFinal == 2) {
        titulo.innerHTML = "OTARIA em maiúsculo mesmo"
        text.innerHTML = `Nota ${notaFinal}? ainda tá baixa, quero nem papo mais`
    } else if (notaFinal == 3) {
        titulo.innerHTML = "Já é alguma coisa"
        text.innerHTML = `Nota ${notaFinal}? Pelo menos é a média`
    } else if (notaFinal == 4) {
        titulo.innerHTML = "Muito obrigado pela avaliação!"
        text.innerHTML = `Nota ${notaFinal}? você é linda`
    } else if (notaFinal == 5) {
        titulo.innerHTML = "Olha que best mais perfeita"
        text.innerHTML = `Nota ${notaFinal}? Por isso eu te amo`
    }
}