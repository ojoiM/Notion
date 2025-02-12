🧙‍♂️ 1️⃣ Ajustando o tamanho da imagem do mago

O código atual:

.mago-img {

    position: absolute;
    left: 10px;
    width: 100px;
    height: auto;
}

position: absolute; → Faz com que a imagem fique fixada em um ponto específico.

left: 10px; → Define que ela fique 10px afastada da borda esquerda.

width: 100px; → Define a largura da imagem.

height: auto; → Mantém a proporção da altura.

Se quiser aumentar a imagem, basta mudar o width

Caso a imagem esteja atrás do título, pode-se mudar o position para relative ou ajustar o z-index

 z-index: 10; /* Faz a imagem ficar por cima */
 
-----------------------------------------------------

 📦 2️⃣ O que são .container, .content e .box?
Eles são responsáveis pela organização dos blocos da página.

.container → O bloco principal, que envolve todo o conteúdo.

.content → O bloco que organiza os elementos internos (vídeos, pesquisa e links de compra).

.box → Cada caixinha individual dentro do .content (como "Links de Compra").

-----------------------------------------------------

🔄 3️⃣ O que display: flex; faz?
O trecho do código:

.content {

    display: flex;
    justify-content: space-between;
    width: 100%;
    gap: 20px;
}

display: flex; → Organiza os elementos lado a lado.

justify-content: space-between; → Faz com que os elementos fiquem distantes um do outro, ocupando o máximo de espaço disponível.

gap: 20px; → Define um espaçamento de 20px entre os elementos.

--------------------------------------------------

❗ Ajustar os títulos dos blocos ("Lista de Compras", "Pesquisa"...)


.box h2, .box h3 {

    font-size: 20px; /* Aumenta o tamanho */
    font-weight: bold; /* Deixa em negrito */
    text-transform: uppercase; /* Deixa as letras maiúsculas */
    letter-spacing: 1px; /* Dá um espaçamento sutil entre as letras */
    padding-bottom: 5px; /* Dá um espaço entre o título e o conteúdo */
    border-bottom: 2px solid rgba(255, 255, 255, 0.2); /* Linha sutil abaixo do título */
}
💡 Explicação:

font-size: 20px; → Aumenta o tamanho.

font-weight: bold; → Deixa em negrito.

text-transform: uppercase; → Deixa tudo em maiúsculas.

letter-spacing: 1px; → Adiciona um espaçamento sutil.

border-bottom: 2px solid rgba(255, 255, 255, 0.2); → Adiciona uma linha separadora.

Se quiser que nem todos os títulos fiquem em negrito, pode remover font-weight: bold; e apenas adicionar <strong>Seu título</strong> no HTML quando quiser destacar algo.
