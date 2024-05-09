async function listaProdutos(){
    const conexao = await fetch("http://localhost:3000/produtos");
    const conexaoConvertida = await conexao.json();
    
    return conexaoConvertida;
}

async function criaProduto(nome, valor, imagem){
    const conexao = await fetch("http://localhost:3000/produtos", {    
        method:"POST", 
        headers:{
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            nome:nome, 
            valor:valor,
            imagem: imagem
        })
    });

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

async function removeProduto(id){
    const conexao = await fetch (`http://localhost:3000/produtos/${id}`, {
        method: "DELETE"
    });
    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

//Para importa para outros arquivos
export const conectaApi = {
    listaProdutos,
    criaProduto,
    removeProduto
}
