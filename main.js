//var operation;
//var value;
var Overall = 0.0, First=0.0, Second=0.0, Operation=null;

//function Init () {
//  Clear();
//}

//shutup jshint
//value ();
//Init ();
//Clear ();
//operation ();

function addPressed(){
  Operation = 'add';
}

function subtractPressed(){
  Operation = 'subtract';
}

function dividePressed(){
  Operation = 'divide';
}

function multiplyPressed(){
  Operation = 'multiply';
}

function equalPressed(){
  Operation = 'equal';
}

function clearPressed(event){
  event.preventDefault();
  document.getElementById('total').textContent = '';
}


function numberPressed(Number){
  var Overall = Number(document.getElementById('display').textContent);

    if(Operation === 'add') {
    Overall = First + Second;
  } else if(Operation === 'subtract') {
    Overall = First - Second;
  } else if(Operation === 'divide') {
    Overall = First / Second;
  } else if(Operation === 'multiply') {
    Overall = First * Second;
  } else if(Operation === 'equal') {
    document.getElementById('display').textContent = Overall;
  } else{
    Overall = Overall + '' + Number;
  }
  document.getElementById('display').textContent = Overall * 1;
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

document.getElementById('nine').addEventListener('click', ninePressed);
document.getElementById('eight').addEventListener('click', eightPressed);
document.getElementById('seven').addEventListener('click', sevenPressed);
document.getElementById('six').addEventListener('click', sixPressed);
document.getElementById('five').addEventListener('click', fivePressed);
document.getElementById('four').addEventListener('click', fourPressed);
document.getElementById('three').addEventListener('click', threePressed);
document.getElementById('two').addEventListener('click', twoPressed);
document.getElementById('one').addEventListener('click', onePressed);
document.getElementById('zero').addEventListener('click', zeroPressed);
document.getElementById('add').addEventListener('click', addPressed);
document.getElementById('subtract').addEventListener('click', subtractPressed);
document.getElementById('divide').addEventListener('click', dividePressed);
document.getElementById('multiply').addEventListener('click', multiplyPressed);
document.getElementById('clear').addEventListener('click', clearPressed);
document.getElementById('equals').addEventListener('click', equalPressed);
