// Definição do JSON com os dados
const dados = {
  "titulo": "Minhas Pesquisas",
  "descricao": "Lista de vídeos e livros interessantes.",
  "itens": [
    {
      "tipo": "Livro",
      "nome": "O Nome do Vento",
      "autor": "Patrick Rothfuss",
      "link": "https://www.estantevirtual.com.br/sebos-e-livreiros/sebo-espaco-cultural-2?sellerId=1001527&idioma=ingles&sellers=1001527&page=3"
    },
    {
      "tipo": "Vídeo",
      "nome": "Como aprender programação",
      "autor": "Canal Exemplo",
      "link": "https://youtube.com/shorts/BSp9OaAKtrU?si=KnK6-vK3QEy3VDxf"
    }
  ]
};

/* Aguarda até que o HTML esteja completamente carregado */
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM completamente carregado!");

    //  Ajustar a lista com os itens do JSON
    const lista = document.getElementById("lista");
    if (lista) {
        console.log("Lista encontrada, carregando dados...");
        dados.itens.forEach(item => {
            let li = document.createElement("li");
            li.innerHTML = `<strong>${item.tipo}:</strong> 
                            <a href="${item.link}" target="_blank">${item.nome}</a> - ${item.autor}`;
            lista.appendChild(li);
        });
    } else {
        console.error("Elemento #lista não encontrado!");
    }

    /*  Ajustar o container principal para manter o layout grid */
    const container = document.querySelector(".container");
    if (container) {
        container.style.display = "grid";
        container.style.gridTemplateColumns = "2fr 1fr"; 
    }

    /* Ajustar a posição da video-container dentro da grid */
    const videoContainer = document.querySelector(".video-container");
    if (videoContainer) {
        videoContainer.style.gridColumn = "2";
    }
});
