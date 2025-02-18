document.addEventListener("DOMContentLoaded", function() {
    console.log("DOM completamente carregado!"); // Só para checar se está funcionando

    const lista = document.getElementById("lista"); // Pega a <ul> onde vamos colocar os itens

    if (lista) { // Verifica se o elemento existe antes de tentar usá-lo
        console.log("Lista encontrada, carregando dados...");
        dados.itens.forEach(item => { // Para cada item do JSON...
            let li = document.createElement("li"); // Criamos um novo <li>
            li.innerHTML = `<strong>${item.tipo}:</strong> 
                            <a href="${item.link}" target="_blank">${item.nome}</a> - ${item.autor}`;
            lista.appendChild(li); // Adicionamos o <li> dentro da <ul>
        });
    } else {
        console.error("Elemento #lista não encontrado!"); // Caso não encontre a <ul>, exibe erro no console
    }
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
