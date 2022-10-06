"use strict";
"use strict";

drawName();

function drawName() {

let canvas = document.querySelector('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d')
//M
context.lineWidth = 10;
context.strokeStyle = 'red';
context.beginPath();
context.moveTo(250, 200);
context.lineTo(100, 100);
context.lineTo(100, 100);
context.lineTo(100, 500);
context.moveTo(250,200);
context.lineTo(400, 100);
context.lineTo(400,500);
context.stroke();
//E
context.beginPath();
context.strokeStyle = 'black';
context.moveTo(600, 300);
context.lineTo(600, 100);
context.lineTo(600, 500);
context.moveTo(600, 100);
context.lineTo(800, 100)
context.moveTo(600, 250)
context.lineTo(800,250);
context.moveTo(600, 500)
context.lineTo(800,500);
context.stroke();
//D
context.beginPath();
context.strokeStyle = 'green';
context.moveTo(900, 100);
context.lineTo(900, 500);
context.lineTo(1100, 300);
context.lineTo(900, 100);
context.stroke();
//I
context.beginPath();
context.strokeStyle = 'blue';
context.moveTo(1300, 100);
context.lineTo(1300, 500);
context.stroke();

}