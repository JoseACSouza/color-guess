//Capturando as sections
const color = document.getElementsByTagName('section')[0];
const options = document.getElementsByTagName('section')[1];

//Criando a tag da cor a ser adivinhada
const colorAnswer = document.createElement('p');
colorAnswer.id = 'rgb-color';
color.appendChild(colorAnswer);

//Criando as opções
for (let index = 0; index < 6; index+=1){
    const item = document.createElement('div');
    item.className = 'ball';
    options.appendChild(item);
}

//Gerando cores automaticamente
const itemArray = document.getElementsByClassName('ball');
for (let index = 0; index < itemArray.length ; index+=1){
    itemArray[index].style.backgroundColor = `rgb(${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)},${Math.floor(Math.random() * 255)})`
}

//Cor a ser advinhada
colorAnswer.innerHTML = itemArray[Math.floor(Math.random() * 5)].style.backgroundColor; 


//Função aos círculos
const answer = document.createElement('p');
answer.id = 'answer';
answer.innerHTML = 'Escolha uma cor';
color.appendChild(answer);

for (let index = 0; index < itemArray.length ; index+=1){
    itemArray[index].addEventListener('click',(target)=>{
        if (target.style.backgroundColor === colorAnswer.innerHTML){
            answer.innerHTML = 'Acertou!';
        } else {answer.innerHTML = "Errou! Tente novamente!"}
    })
}