
let alternativa1 = document.querySelector("#alternativa1")
let alternativa2 = document.querySelector("#alternativa2")
let alternativa_certa = document.querySelector("#alternativa_certa")
let alternativa4 = document.querySelector("#alternativa4")
let alternativa5 = document.querySelector("#alternativa5")
let botao_responder = document.querySelector("#botao-responder")



alternativa1.addEventListener("click", () =>{ alternativa1.classList.add('selecionada')})
alternativa2.addEventListener("click", () =>{ alternativa2.classList.add('selecionada')})
alternativa_certa.addEventListener("click", () =>{ alternativa_certa.classList.add('selecionada')})
alternativa4.addEventListener("click", () =>{ alternativa4.classList.add('selecionada')})
alternativa5.addEventListener("click", () =>{ alternativa5.classList.add('selecionada')})


botao_responder.addEventListener("click", () => {
    alternativa1.classList.add('resposta-errada')
    alternativa2.classList.add('resposta-errada')
    alternativa4.classList.add('resposta-errada')
    alternativa5.classList.add('resposta-errada')
    alternativa_certa.classList.add('resposta-certa')

}
)

let contagem_acertos = 0
nota_final
function nota_final(){
    if (alternativa_certa = "click" ){
        contagem_acertos+=1
        console.log(contagem_acertos)
    }
}