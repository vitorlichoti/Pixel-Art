const initialSelected = document.querySelector('.black');
initialSelected.className = 'color black selected';

const red1 = Math.floor(Math.random() * 256);
const green1 = Math.floor(Math.random() * 256);
const blue1 = Math.floor(Math.random() * 256);

const red2 = Math.floor(Math.random() * 256);
const green2 = Math.floor(Math.random() * 256);
const blue2 = Math.floor(Math.random() * 256);

const red3 = Math.floor(Math.random() * 256);
const green3 = Math.floor(Math.random() * 256);
const blue3 = Math.floor(Math.random() * 256);

// const inputColorDiv = document.getElementById('input-color');
// const colorInput = document.createElement('input');
// inputColorDiv.appendChild(colorInput);
// colorInput.type = 'color';

function blackColor() {
  const selectedBlack = document.querySelector('.black');
  selectedBlack.addEventListener('click', () => {
    const blackClass = document.querySelector('.black');
    blackClass.className = 'color black selected';
    const blueClass = document.querySelector('.blue');
    blueClass.className = 'color blue';
    const greenClass = document.querySelector('.green');
    greenClass.className = 'color green';
    const redClass = document.querySelector('.red');
    redClass.className = 'color red';
  });
}

blackColor();

function blueColor() {
  const selectedBlue = document.querySelector('.blue');
  selectedBlue.style.backgroundColor = `rgb(${red1}, ${green1},${blue1})`;
  selectedBlue.addEventListener('click', () => {
    const blackClass = document.querySelector('.black');
    blackClass.className = 'color black';
    const blueClass = document.querySelector('.blue');
    blueClass.className = 'color blue selected';
    const greenClass = document.querySelector('.green');
    greenClass.className = 'color green';
    const redClass = document.querySelector('.red');
    redClass.className = 'color red';
  });
}

blueColor();

function greenColor() {
  const selectedGreen = document.querySelector('.green');
  selectedGreen.style.backgroundColor = `rgb(${red2}, ${green2},${blue2})`;
  selectedGreen.addEventListener('click', () => {
    const blackClass = document.querySelector('.black');
    blackClass.className = 'color black';
    const blueClass = document.querySelector('.blue');
    blueClass.className = 'color blue';
    const greenClass = document.querySelector('.green');
    greenClass.className = 'color green selected';
    const redClass = document.querySelector('.red');
    redClass.className = 'color red';
  });
}

greenColor();

function redColor() {
  const selectedRed = document.querySelector('.red');
  selectedRed.style.backgroundColor = `rgb(${red3}, ${green3},${blue3})`;
  selectedRed.addEventListener('click', () => {
    const blackClass = document.querySelector('.black');
    blackClass.className = 'color black';
    const blueClass = document.querySelector('.blue');
    blueClass.className = 'color blue';
    const greenClass = document.querySelector('.green');
    greenClass.className = 'color green';
    const redClass = document.querySelector('.red');
    redClass.className = 'color red selected';
  });
}

redColor();

window.onload = function () {
  pixelPopulate(5);
};

const getButtonVQV = document.getElementById('generate-board');
function buttonVQV() {
  getButtonVQV.addEventListener('click', callInputValue);
}

buttonVQV();

// const size = 0;
const sizeElement = document.getElementById('board-size');
function callInputValue() {
  const size = sizeElement.value;
  if (size < 5) {
    pixelBoardRemove();
    alert('Board inválido!');
    const start = 5;
    pixelPopulate(start);
  } else if (size > 50) {
    pixelBoardRemove();
    pixelPopulate(50);
  } else {
    pixelBoardRemove();
    pixelPopulate(size);
  }
}

const getBtn = document.getElementById('clear-board');
const pixelBoard = document.getElementById('pixel-board');

function pixelPopulate(size, start) {
  pixelBoard.style.setProperty('--size', size);
  for (let index = 0; index < size * size; index += 1) {
    const pixel = document.createElement('div');
    pixelBoard.appendChild(pixel);
    pixel.className = 'pixel';
    pixel.style.border = '1px solid black';
    pixel.style.backgroundColor = 'white';
    pixel.addEventListener('click', () => {
      pixel.style.backgroundColor = pixelColor();
    });
    getBtn.addEventListener('click', () => {
      pixel.style.backgroundColor = pixelWhite();
    });
  }
}

pixelPopulate();

// função que remove os filhos do pixelBoard
function pixelBoardRemove() {
  while (pixelBoard.firstChild) {
    pixelBoard.removeChild(pixelBoard.firstChild);
  }
}

function pixelColor() {
  const color = document.getElementsByClassName('selected')[0];
  const cssValue = window.getComputedStyle(color);
  const bgColor = cssValue.getPropertyValue('background-color');
  return bgColor;
}

function pixelWhite() {
  const background = 'white';
  return background;
}
