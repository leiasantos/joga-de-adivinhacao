<h1>Jogo de Adivinhação de Números 🎯</h1>
<p>Um jogo simples e divertido de adivinhação de números, desenvolvido com JavaScript, HTML, e CSS. 
  O objetivo do jogo é adivinhar o número secreto gerado aleatoriamente dentro de um intervalo definido. 
  Ideal para praticar lógica de programação, manipulação de DOM e estilização de páginas.</p>

  <h2>🎮 Funcionalidades</h2>
  <ul>
    <li>Geração de número aleatório: O número secreto é escolhido pelo programa.</li>
      <li>Interatividade: O jogador insere um palpite e recebe feedback imediato.</li>
      <li>Contador de tentativas: O jogo registra quantas vezes o jogador tentou adivinhar.</li>
  </ul>

  <h2>📋 Tecnologias Utilizadas</h2>
  <ul>
    <li>HTML: Estrutura do jogo.</li>
       <li>CSS: Estilo e design da interface.</li>
       <li>JavaScript: Lógica do jogo e interação com o jogador.</li>
  </ul>

<h2>📂 Estrutura de Arquivos</h2>

  ![image](https://github.com/user-attachments/assets/152ebd79-0b8b-4bab-906e-2607a68a6d44)


  <h2>🛠️ Exemplo de Código</h2>
  
  <pre>
    <code>
      function handleTryClick(event) {
  event.preventDefault();

  const numberInput = document.querySelector("#numberInput");

  if (Number(numberInput.value) == numberRandom) {
    toggleScreen()

   screen2.querySelector("h2").innerText = `Você acertou em ${attempts} tentativas`;

    console.log();
  }
  
  numberInput.value = "";
  attempts++;
}

    </code>
</pre>
