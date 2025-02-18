document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM carregado!");

    
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
                "link": "https://youtube.com/embed/Q4uWd9lyCxQ"
            }
        ]
    };

    
    const lista = document.getElementById("lista");
    if (lista) {
        lista.innerHTML = ""; 
        dados.itens.forEach(item => {
            let li = document.createElement("li");
            li.innerHTML = `<strong>${item.tipo}:</strong> 
                            <a href="${item.link}" target="_blank">${item.nome}</a> - ${item.autor}`;
            lista.appendChild(li);
        });
    } else {
        console.error("Elemento #lista não encontrado!");
    }

    
    const videoContainer = document.querySelector(".video-container");
    if (videoContainer) {
        videoContainer.innerHTML = "<h3>Vídeos</h3>"; 
        dados.itens.forEach(item => {
            if (item.tipo === "Vídeo") {
                let iframe = document.createElement("iframe");
                iframe.src = item.link;
                iframe.width = "100%";
                iframe.height = "200";
                iframe.frameBorder = "0";
                iframe.allowFullscreen = true;
                videoContainer.appendChild(iframe);
            }
        });

        /
        videoContainer.style.gridColumn = "2";
    } else {
        console.error("Elemento .video-container não encontrado!");
    }

   
    const container = document.querySelector(".container");
    if (container) {
        container.style.display = "grid";
        container.style.gridTemplateColumns = "2fr 1fr"; 
    }
});
