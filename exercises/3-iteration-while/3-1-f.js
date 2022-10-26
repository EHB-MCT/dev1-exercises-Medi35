"use strict";
import context from "../../scripts/context.js";

draw();

function draw() {
    context.lineWidth = 2;
    context.strokeStyle = "white";
    context.fillStyle = "#3498DB";
    context.fillRect(50, 50, 300, 300);
    drawDiagonalSquares();
}

function drawDiagonalSquares() {
    let i = 8;
    while (1 < 7) {
        context.strokeRect(75 + ( 25 * i, 75 + (i * 25, 100, 100);
        i = ++;
    }
}