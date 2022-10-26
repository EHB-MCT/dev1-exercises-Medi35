"use strict";
import context from "../../scripts/context.js";
import * as Utils from "../../scripts/utils.js";

let horizonaLines = 120;
let vertalLines = 30;

let width = 600;
let height = 300;

drawLines();

function drawLines() {
	for (let i = 0; i < horhorizonaLines; i++) {
		Utils.drawLines(0 + 10 * 1, 0, width - 10 * 1, height);
	}
}
