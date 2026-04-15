function criar_cartao(categoria, pergunta, resposta){
    let container = document.getElementById("container")
    let cartao = document.createElement("article")
    cartao.className = 'cartao'


    cartao.innerHTML = `
        <div class="conteudo">
            <h3>${categoria}</h3>
            <div class="pergunta">
                ${pergunta}
            </div>
            <div class="resposta">
                ${resposta}
            </div>
        </div>
    `

    cartao.addEventListener("click", function(){
        cartao.classList.toggle("ativo")
    })

    container.appendChild(cartao)
}

let botao = document.getElementById("botao")
botao.addEventListener("click", function(){
    let categoria = prompt("Digite uma categoria")
    let pergunta = prompt("Digite uma pergunta")
    let resposta = prompt("digite a resposta")
    criar_cartao(categoria, pergunta, resposta)
})

