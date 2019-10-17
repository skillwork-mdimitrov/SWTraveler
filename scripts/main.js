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
console.log(`%cType in `+`%chelp()`+ `%c to get started`, cssBlackColour, cssCrimsonColour, cssBlackColour);

/* Functions
 ============================================================== */

/**
 * Based on distance, calculate and print starships with their need for resupply stops
 * @param {number} distanceMGLT - The distance the starship needs to cover
 * @return {string} - line separator
 */
const go = (distanceMGLT) => {
	const shipsResupplyNeeds = calculateStops(distanceMGLT); // see resupplyCalc.js
	shipsResupplyNeeds.forEach((ship) => {
		console.log(`%c${ship.name}` + `%c has to stop for resupply: ` + `%c${ship.stops}`, `${cssGreenColour}; ${cssUnderlineText}`, cssBlackColour, cssCrimsonColour);
	});
	console.log(
		"%cDidn't find the starship you were looking for?\n" +
		"Some aircraft were omitted due to improper record.", "color: gray");
	return `-------------------------------------------------`;
};