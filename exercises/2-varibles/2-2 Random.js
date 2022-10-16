"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

let randomx = Math.floor(Math.random()* width;
let randomy = Math.floor(Math.random()* height);
// //console.log(randomx, randomy);

// let size = 200;


console.log(r,g,b);

drawRect(50, 50, 400);
drawRect(100, 100, 300);
drawRect(150, 150, 200);
drawRect(200, 200, 100);


function drawRect(x, y, size) {
 let r = Math.floor(Math.random() * 255);
let g = Math.floor(Math.random() * 255);
let b = Math.floor(Math.random() * 255);
let color = "rgb" + r + "," + g + "," + b + ",";
context.fillStyle = color;
context.fillRect(50, 50, size, size, )(50 , 50);
}

