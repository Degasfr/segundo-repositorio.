function criarCartao (item, pergunta, resposta) {
    //console.log(item,perrgunta, resposta)

    let flashcard = document.getElementById('flashcard');
    let cartao = document.createElement('article');

    cartao.className = 'cartao';

    cartao.innerHTML = `
           <div class="cartao__conteudo">
                <h3>${item}</h3>
                
                <div class="cartao__conteudo__pergunta">
                    <p>${pergunta}</p>
                </div>
                
                <div class="cartao__conteudo__pergunta">
                    <p>${resposta}</p>
                </div>
            </div>
    `
    flashcard.appendChild(cartao)

}