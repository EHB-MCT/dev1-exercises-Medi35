"use strict";
"use strict";

drawbox();

function drawbox() {

let canvas = document.querySelector('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d')
//vierkant
context.lineWidth = 3;
context.strokeStyle = 'black';
context.beginPath();
context.moveTo(100, 50);
context.lineTo(50, 50);
context.lineTo(50, 100);
context.lineTo(100, 100);
context.lineTo(50, 50);
context.lineTo(100, 50);
context.lineTo(50, 100);
context.moveTo(100, 50);
context.lineTo(100, 100);
context.stroke();
}