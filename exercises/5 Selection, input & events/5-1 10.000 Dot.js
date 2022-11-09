"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let width = context.canvas.width;
let height = context.canvas.height;

drawDots();

function drawDots() {
	for (let i = 0; i < 1000000; i++) {
		let x = Math.random() * width;
		let y = Math.random() * height;
		let distance = Utils.calculateDistance(width / 2, height / 2, x, y);
		if (distance < 0 || distance > 200) {
			context.fillStyle = "white";
		} else {
			context.fillStyle = "red";
		}

		Utils.fillCircle(x, y, 25);
	}
}
