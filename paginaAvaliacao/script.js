const notas = document.querySelectorAll(".nota");

let notaFinal;

notas.forEach( (nota) => {
    nota.addEventListener("mouseenter", () =>{
        notaFinal = nota.attributes.id.value;
        console.log(notaFinal)
        selecao()
        return notaFinal;
    })
})

function selecao() {
    const exibirNota = document.getElementById(`${notaFinal}`)
    exibirNota.classList.

    console.log(exibirNota)
}