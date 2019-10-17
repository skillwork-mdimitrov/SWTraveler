/* Global variables
 ============================================================== */

/**
 * Represent time units in hours
 * @type {Object}
 */
const unitToHours = {
	"year": 8760,
	"month": 730,
	"week": 168,
	"day": 24
};

/* Functions
 ============================================================== */

/**
 * Convert in hours how long will a starship consumables last
 * @param {object} ship - a single starship.
 * @return {number} consumableDuration - the duration of consumables for that ship (in hours)
 */
const consumablesDurationInHours = (ship) => {
	const consumables = ship["consumables"];
	const consumableDuration = parseInt(consumables); // extract the number from "3 years", "6 months", etc.

	if(consumables.includes("year")) {
		return consumableDuration * unitToHours.year;
	}
	else if(consumables.includes("month")) {
		return consumableDuration * unitToHours.month;
	}
	else if(consumables.includes("week")) {
		return consumableDuration * unitToHours.week;
	}
	else if(consumables.includes("day")) {
		return consumableDuration * unitToHours.day;
	}
	else {
		throw new Error('SW resupply calculator failed at converting the consumables to an hourly format');
	}
};

/**
 * Based on distance, calculate and return starships with their need for resupply stops
 * @param {number} distanceMGLT - The distance the starship needs to cover
 * @return {object} shipsResupplyNeedsArr
 */
const calculateStops = (distanceMGLT) => {
	// starShipsArr comes from starships.js
	const calculableShips = starShipsArr.filter(ship => parseInt(ship["MGLT"])); // eliminate ships with unknown MGLT
	let shipsResupplyNeedsArr = [];
	let starship;

	for(let ship of calculableShips) {
		starship = {};
		starship["name"] = ship["name"];
		starship["stops"] = Math.round(distanceMGLT / (consumablesDurationInHours(ship) * ship["MGLT"])); // formula
		shipsResupplyNeedsArr.push(starship);
	}

	return shipsResupplyNeedsArr;
};