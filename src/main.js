import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

const btnSobre= document.querySelector('#btn-sobre')
btnSobre.addEventListener("click", function(){
    const modal=document.querySelector("#modal");
    modal.style.display = "flex";
    const main = document.querySelector("#main-content");
    main.style.display = "none";
})



function changeNavbar(x) {
    x.classList.toggle('change');
}

changeNavbar()

function acao() {
    let modal = document.querySelector('.modal');
    modal.style.display = 'block';
}
acao()

function voltar() {
    let modal = document.querySelector('.modal');
    modal.style.display = 'none';
}
voltar()
console.log(example, data);
