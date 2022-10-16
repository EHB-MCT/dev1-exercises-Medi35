"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

let marin = 75;
let spacing = 75;

drawlines();

function drawlines() {
 context.beginPath();

 context.lineWidth * 2;

context.moveTo(marin,spacing*1);
context.lineTo(width-marin,spacing*1);
context.lineTo(marin,spacing*2);
context.lineTo(width-marin,spacing*2);
context.lineTo(marin,spacing*3);
context.lineTo(width-marin,spacing*3);
context.lineTo(marin,spacing*4);
context.lineTo(width-marin,spacing*4);
context.lineTo(marin,spacing*5);
context.lineTo(width-marin,spacing*5);
context.lineTo(marin,spacing*1);
context.stroke();
}