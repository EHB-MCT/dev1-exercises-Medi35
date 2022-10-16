"use strict";

let canvas = document.querySelector('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext('2d');

let width = context.canvas.width;
let height = context.canvas.height;

console.log(context.canvas);


let sizeW = width/6;
let sizeH = height/8;

Pattern(0,0,sizeW,sizeH*4,'black')
Pattern(sizeW*2,0,sizeW,sizeH*4,'black')

Pattern(0,sizeH*4,sizeW,sizeH*2,'red')
Pattern(sizeW*2,sizeH*4,sizeW,sizeH*2,'red')


Pattern(0,sizeH,sizeW*3,sizeW*2,'blue')



function Pattern(x, y, w, h, color){  
context.beginPath();
context.fillStyle = color;
context.fillRect(x,y,w,h);
}