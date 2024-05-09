import {conectaApi} from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

async function criarProduto(evento){
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const valor = document.querySelector("[data-valor]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    try{
        await conectaApi.criaProduto(nome, valor, imagem);
        alert("Produto Adicionado com Sucesso!");
    }catch(e){
        alert(e);
    }
}

formulario.addEventListener("submit", evento => criarProduto(evento));

//mensagem de número maximos de caracteres para o nome do produto
const inputNome = document.getElementById('nome');
  const mensagemCaracteresNome = document.getElementById('mensagemCaracteresNome');

  inputNome.addEventListener('input', function() {
    const maxLength = parseInt(inputNome.getAttribute('maxlength'));
    const currentLength = inputNome.value.length;
    if (currentLength >= maxLength) {

      mensagemCaracteresNome.textContent = 'Máximo de caracteres atingido';
    } else {
      mensagemCaracteresNome.textContent = '';
    }
  });