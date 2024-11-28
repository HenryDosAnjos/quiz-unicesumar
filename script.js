
let alternativa1 = document.querySelector("#alternativa1")
let alternativa2 = document.querySelector("#alternativa2")
let alternativa_certa = document.querySelector("#alternativa_certa")
let alternativa4 = document.querySelector("#alternativa4")
let alternativa5 = document.querySelector("#alternativa5")
let botao_responder = document.querySelector("#botao-responder")
let contagem_alternativa1 = 0
let contagem_alternativa2 = 0
let contagem_alternativa3 = 0
let contagem_alternativa4 = 0
let contagem_alternativa5 = 0


alternativa1.addEventListener("click", () =>{ alternativa1.classList.add('selecionada')})
alternativa2.addEventListener("click", () =>{ alternativa2.classList.add('selecionada')})
alternativa_certa.addEventListener("click", () =>{ alternativa_certa.classList.add('selecionada')})
alternativa4.addEventListener("click", () =>{ alternativa4.classList.add('selecionada')})
alternativa5.addEventListener("click", () =>{ alternativa5.classList.add('selecionada')})


/*
funcionalidade pré programada para selecionar acertos e erros 
botao_responder.addEventListener("click", () => {
    alternativa1.classList.add('resposta-errada')
    alternativa2.classList.add('resposta-errada')
    alternativa4.classList.add('resposta-errada')
    alternativa5.classList.add('resposta-errada')
    alternativa_certa.classList.add('resposta-certa')
}
)
*/




/*função para contar o número de respostas e  quais respostas */ 
function contar (){
    if (alternativa1 = "click"){
        contagem_alternativa1 +=1
        console.log (contagem_alternativa1)
    }
}