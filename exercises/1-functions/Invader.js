"use strict";
"use strict";

drawInvader();

function drawInvader() {

let canvas = document.querySelector('canvas')
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d')
//vierkant zwart groot
context.fillStyle = 'black';
context.fillRect(125,125,150,150) ;
context.beginPath();
context.moveTo(125 , 125);
context.lineTo(275 , 125);
context.moveTo(125 , 125);
context.lineTo(125, 275);
context.moveTo(275 , 125);
context.lineTo(275, 275);
context.moveTo( 125, 275);
context.lineTo(275, 275);
context.stroke();

//vierkant groen
context.fillStyle = 'green';
context.fillRect(190,125,25,25) ;
context.fillStyle = 'green';
context.fillRect(190,180,25,25) ;
context.fillStyle = 'green';
context.fillRect(162,150,25,25) ;
context.fillStyle = 'green';
context.fillRect(220,150,25,25) ;
}