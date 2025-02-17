document.addEventListener("DOMContentLoaded", function () {
    fetch('pesquisas.txt')
        .then(response => response.text()) // Pega o conteúdo como texto
        .then(text => JSON.parse(text)) // Converte para JSON
        .then(data => {
            let container = document.getElementById("pesquisas-container");
            if (!container) {
                console.error("Elemento #pesquisas-container não encontrado.");
                return;
            }

            data.pesquisas.forEach(pesquisa => {
                let divPesquisa = document.createElement("div");
                divPesquisa.classList.add("pesquisa-box");

                divPesquisa.innerHTML = `
                    <h2>${pesquisa.titulo}</h2>
                    <p>${pesquisa.descricao}</p>
                `;

                if (pesquisa.livros) {
                    pesquisa.livros.forEach(livro => {
                        divPesquisa.innerHTML += `
                            <h3>${livro.titulo}</h3>
                            <p>${livro.descricao}</p>
                            <a href="${livro.link_compra}" target="_blank">Comprar</a>
                        `;
                    });
                }

                if (pesquisa.imagens) {
                    pesquisa.imagens.forEach(imagem => {
                        divPesquisa.innerHTML += `<img src="${imagem}" width="200px">`;
                    });
                }

                container.appendChild(divPesquisa);
            });
        })
        .catch(error => console.error("Erro ao carregar JSON:", error));
});
