var operation;
var value;

function addPressed(){
  operation = 'add';
}

function subtractPressed(){
  operation = 'subtract';
}

function dividePressed(){
  operation = 'divide';
}

function multiplyPressed(){
  operation = 'multiply';
}

function equalPressed(){
  operation = 'equal';
}

function clearPressed(event){
  event.preventDefault();
  operation = null;
  document.getElementById('display').textContent = '';
}


function numberPressed(number){
  var displayedNumber = Number(document.getElementById('display').textContent);
  // var displayedValue =

  // if(operation == 'clear') {
  //   document.getElementById('display').textContent = displayedNumber * 0;
  // } else
    if(operation == 'add') {
    displayedNumber = displayedNumber + number;
  } else if(operation == 'subtract') {
    displayedNumber = displayedNumber - number;
  } else if(operation == 'divide') {
    displayedNumber = displayedNumber / number;
  } else if(operation == 'multiply') {
    displayedNumber = displayedNumber * number;
  } else if(operation == 'equal') {
    document.getElementById('display').textContent = displayedNumber;
  } else{
    displayedNumber = displayedNumber + '' + number;
  }
  document.getElementById('display').textContent = displayedNumber * 1;
}


function ninePressed(event) {
  event.preventDefault();
  numberPressed(Number(9));
}

function eightPressed(event) {
  event.preventDefault();
  numberPressed(Number(8));
}

function sevenPressed(event) {
  event.preventDefault();
  numberPressed(Number(7));
}

function sixPressed(event) {
  event.preventDefault();
  numberPressed(Number(6));
}

function fivePressed(event) {
  event.preventDefault();
  numberPressed(Number(5));
}

function fourPressed(event) {
  event.preventDefault();
  numberPressed(Number(4));
}

function threePressed(event) {
  event.preventDefault();
  numberPressed(Number(3));
}

function twoPressed(event) {
  event.preventDefault();
  numberPressed(Number(2));
}

function onePressed(event) {
  event.preventDefault();
  numberPressed(Number(1));
}

function zeroPressed(event) {
  event.preventDefault();
  numberPressed(Number(0));
}

document.getElementById('9').addEventListener('click', ninePressed);
document.getElementById('8').addEventListener('click', eightPressed);
document.getElementById('7').addEventListener('click', sevenPressed);
document.getElementById('6').addEventListener('click', sixPressed);
document.getElementById('5').addEventListener('click', fivePressed);
document.getElementById('4').addEventListener('click', fourPressed);
document.getElementById('3').addEventListener('click', threePressed);
document.getElementById('2').addEventListener('click', twoPressed);
document.getElementById('1').addEventListener('click', onePressed);
document.getElementById('0').addEventListener('click', zeroPressed);
document.getElementById('add').addEventListener('click', addPressed);
document.getElementById('subtract').addEventListener('click', subtractPressed);
document.getElementById('divide').addEventListener('click', dividePressed);
document.getElementById('multiply').addEventListener('click', multiplyPressed);
document.getElementById('clear').addEventListener('click', clearPressed);
document.getElementById('equal').addEventListener('click', equalPressed);
