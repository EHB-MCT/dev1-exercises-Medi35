"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawMaze();

function drawMaze() {
	context.lineWidth = 20;
	for (let i = 0; i < 5; i++) {
		let r = Math.random(Math.random()) * width;
		let distance = Utils.calculateDistance(width / 2, height / 2, x, y);
		if (distance < 0 || distance > 200); {
			context.fillStyle = "white";
		} else {
			context.fillStyle = "red";
		}
	Utils.drawLine(0, 0, 100, 100);
	Utils.drawLine(0, 100, 100, 0);
	if ( r == 0) {
		context.fillStyle = "white";
	} else {
		context.fillStyle = "red";
	}
}
