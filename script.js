// ID

// getElementById seleciona e retorna elementos do DOM

const animais = document.getElementById('animais');
console.log(animais);

const gridSection = document.getElementsByClassName('grid-section');

console.log(gridSection[1]);

const primeiraLi = document.querySelector('li');
console.log(primeiraLi);

const primeiraUl = document.querySelector('ul');
console.log(primeiraUl);

const linkInterno = document.querySelector('[href^="#"]');
console.log(linkInterno);

const animaisImg = document.querySelectorAll('.animais img');
console.log(animaisImg[2]);

const gridSectionHTML = document.getElementsByClassName('grid-section');
const gridSectionNode = document.querySelectorAll('.grid-section');

primeiraUl.classList.add('grid-section');

//console.log(gridSectionHTML);
//console.log(gridSectionNode);

gridSectionNode.forEach(function(item, index){
  console.log(item)
})

const arrayGrid = Array.from(gridSectionHTML); //Transforma em array

arrayGrid.forEach(function(item){
  console.log(item);
})
console.log('Exercícios');

// Exercícios

// Retorne no console todas as imagens do site
const retornaImagens = document.querySelectorAll('img');
console.log(retornaImagens)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagensAnimais = document.querySelectorAll('img[src^="img/imagem"]');
console.log(imagensAnimais); 

// Selecione todos os links internos (onde o href começa com #)
const linksInternos = document.querySelectorAll('[href^="#"]');
console.log(linksInternos)

// Selecione o primeiro h2 dentro de .animais-descricao
const primeiroH2 = document.querySelector('.animais-descricao h2');
console.log(primeiroH2);

// Selecione o último p do site
const paragrafos = document.querySelectorAll('p');
console.log(paragrafos[paragrafos.length - 1]);
// ou
console.log(paragrafos[--paragrafos.length]);

