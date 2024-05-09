import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

lista.addEventListener("click", async (event) => {
    if (event.target.classList.contains("icon__lixo")) {
        const id = event.target.dataset.id;
        try {
            await conectaApi.removeProduto(id);
            event.target.closest(".produtos__box__card").remove();
            alert("Produto removido com sucesso!");
        } catch (error) {
            alert("Erro ao remover o produto: " + error);
        }
    }
});
