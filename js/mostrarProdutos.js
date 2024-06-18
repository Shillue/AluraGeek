import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

function controiCard(produto){
    const produtoElemento = document.createElement("div");
    produtoElemento.className = "produtos__box__card";
    produtoElemento.innerHTML = `<img class="produtos__box__card__image" src="${produto.imagem}" alt="Imagem do Produto">
        <div class="produtos__box__card__info">
            <p>${produto.nome}</p>
            <div class="produtos__box__card__descrition">
                <p>R$ ${produto.valor}</p>
                <img class="icon__lixo" src="./images/icon_lixo.png" alt="ícone de eliminação" data-id="${produto.id}">
            </div>
        </div>`;
    
    return produtoElemento;
}

async function listaProdutos(){
    try {
        const listaApi = await conectaApi.listaProdutos();
        listaApi.forEach(produto => {
            const card = controiCard(produto);
            lista.appendChild(card);
        });
    } catch (error) {
        lista.innerHTML = `<h2 class="formulario__add__produto__title"> Não foi possível carregar a lista de Produtos </h2>`;
    }
}

listaProdutos();