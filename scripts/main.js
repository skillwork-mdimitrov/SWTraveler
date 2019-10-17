/* Global variables
 ============================================================== */

/**
 * CSS properties used for styling the console output
 * @type {string}
 */
const cssBlackColour = "color: black";
const cssWhiteColour = "color: white";
const cssCrimsonColour = "color: crimson";
const cssGreenColour = "color: darkgreen";
const cssUnderlineText = "text-decoration: underline";
const cssBlackBgColour = "background: black";

console.log(`%c Welcome to Star Wars resupply calculator! `, `${cssBlackBgColour}; ${cssWhiteColour}`);
console.log(`%cPass a desired distance to the ` + `%cgo()` + ` %ccommand, like so `+`%cgo(1000000)`, cssBlackColour, cssCrimsonColour, cssBlackColour, cssCrimsonColour);

/* Functions
 ============================================================== */

/**
 * User input validation
 * @param {number} distanceMGLT - The distance the starship needs to cover
 */
const checkFaultyInput = (distanceMGLT) => {
	// Empty param
	if(typeof distanceMGLT === "undefined") {
		console.log("Please pass a number to the go() function, like the example in red %cgo(1000000)", cssCrimsonColour);
		throw new Error("Empty parameter not allowed");
	}

	// Negative or 0 param
	else if(Math.sign(distanceMGLT) === -1 || Math.sign(distanceMGLT) === 0) {
		console.log("Please pass a positive and non zero parameter to the go() function");
		throw new Error("Negative or 0 parameter not allowed");
	}
};

/**
 * Based on distance, calculate and print starships with their need for resupply stops
 * @param {number} distanceMGLT - The distance the starship needs to cover
 */
const go = (distanceMGLT) => {
	checkFaultyInput(distanceMGLT);

	const shipsResupplyNeeds = calculateStops(distanceMGLT); // see resupplyCalc.js
	shipsResupplyNeeds.forEach((ship) => {
		console.log(`%c${ship.name}` + `%c has to stop for resupply: ` + `%c${ship.stops}`, `${cssGreenColour}; ${cssUnderlineText}`, cssBlackColour, cssCrimsonColour);
	});
	console.log(
		"%cDidn't find the starship you were looking for?\n" +
		"Some aircraft were omitted due to improper record.", "color: gray");
	return `-------------------------------------------------`;
};

