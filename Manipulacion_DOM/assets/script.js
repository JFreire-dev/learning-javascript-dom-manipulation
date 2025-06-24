const body = document.querySelector("body");
const ul = document.querySelector("ul");
const container = document.querySelectorAll('.container');

// Estilo Body
body.style.width = "50%";
body.style.textAlign = "center";
body.style.marginRight = "auto";
body.style.marginLeft = "auto";
body.style.backgroundColor = "white";
body.style.fontFamily = 'verdana'

// Estilo ul
ul.style.textAlign = 'left';
ul.style.width = '100%';

// Estilo container
container.forEach(element =>{
    element.style.display = "flex";
    element.style.alignItems = 'center';
})

// Capturar cuadros colores
const botones = document.querySelectorAll(".buttonColors");

// Definir colores
const colores = ["red", "green", "blue", "white"];

botones.forEach((element, index) => {
  element.style.width = "50px";
  element.style.height = "50px";
  element.style.backgroundColor = colores[index];
  element.style.border = "solid 5px black";
  element.style.cursor = 'pointer';
  element.onclick = function () {backgroundColorChange(colores[index])};
});

// Función de cambio de color
function backgroundColorChange(color) {
  body.style.backgroundColor = color;
}

// Capturar contador
const contador = document.querySelector('#counter')
const contadorChangers = document.querySelectorAll('.counterButton');

// Funciones variar contador
function increaseFunction(){
    contador.textContent++;
    console.log(contador.textContent);
}

function decreaseFunction(){
    contador.textContent--;
    console.log(contador.textContent);
}

// Capturar botones
const increaseButton = document.querySelector('#increase');
const decreaseButton = document.querySelector('#decrease');

// Definir acción
increaseButton.onclick = function(){increaseFunction()};
decreaseButton.onclick = function(){decreaseFunction()};




