//Capturando as sections
const color = document.getElementsByTagName('section')[0];
const options = document.getElementsByTagName('section')[1];

//Cor a ser adivinhada
const answer = document.createElement('p');
answer.id = 'rgb-color';
color.appendChild(answer);

//Criando as opções
for (let index = 0; index < 6; index+=1){
    const item = document.createElement('div');
    item.className = 'ball';
    options.appendChild(item);
}

