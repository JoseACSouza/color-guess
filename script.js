let score;
if (localStorage.getItem('score')) {
  score = JSON.parse(localStorage.getItem('score'));
} else { score = 0; }

// Capturando as sections
const color = document.getElementsByTagName('section')[0];
const options = document.getElementsByTagName('section')[1];

// Criando a tag da cor a ser adivinhada
const colorAnswer = document.createElement('p');
colorAnswer.id = 'rgb-color';
color.appendChild(colorAnswer);

// Criando as opções
for (let index = 0; index < 6; index += 1) {
  const item = document.createElement('div');
  item.className = 'ball';
  options.appendChild(item);
}

// Gerando cores automaticamente
const itemArray = document.getElementsByClassName('ball');
for (let index = 0; index < itemArray.length; index += 1) {
  itemArray[index]
    .style.backgroundColor = `rgb(
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)},
        ${Math.floor(Math.random() * 255)})`;
}

// Cor a ser advinhada
colorAnswer.innerHTML = itemArray[Math.floor(Math.random() * 5)].style.backgroundColor;

// Criando botão next game
const createButtons = document.createElement('div');
createButtons.id = 'buttons';
options.appendChild(createButtons);
const nextButton = document.createElement('button');
nextButton.id = 'next-game';
nextButton.classList.add('btn', 'btn-primary');
nextButton.innerHTML = 'Próximo';
createButtons.appendChild(nextButton);
nextButton.addEventListener('click', () => {
  window.location.reload();
});

// Criando botão reset game

const resetButton = document.createElement('button');
resetButton.id = 'reset-game';
resetButton.classList.add('btn', 'btn-primary');
resetButton.innerHTML = 'Reiniciar';
resetButton.style.marginLeft = '6px';
createButtons.appendChild(resetButton);
resetButton.addEventListener('click', () => {
  window.location.reload();
  localStorage.setItem('score', 0);
});

// Criando Score
const scoreMessage = document.createElement('p');
scoreMessage.id = 'mensagem';
scoreMessage.innerHTML = 'Placar: ';
scoreMessage.style.display = 'inline-block';
scoreMessage.style.marginRight = '12px';
color.appendChild(scoreMessage);
const scoreTable = document.createElement('p');
scoreTable.id = 'score';
scoreTable.innerHTML = score;
scoreTable.style.display = 'inline-block';
color.appendChild(scoreTable);
const answer = document.createElement('p');
answer.id = 'answer';
answer.innerHTML = 'Escolha uma cor';
color.appendChild(answer);

// Função aos círculos
for (let index = 0; index < itemArray.length; index += 1) {
  // eslint-disable-next-line no-loop-func
  itemArray[index].addEventListener('click', (target) => {
    if (target.target.style.backgroundColor === colorAnswer.innerHTML) {
      answer.innerHTML = 'Acertou!';
      score += 3;
      scoreTable.innerHTML = score;
      localStorage.setItem('score', score);
    } else { answer.innerHTML = 'Errou! Tente novamente!'; }
  });
}
