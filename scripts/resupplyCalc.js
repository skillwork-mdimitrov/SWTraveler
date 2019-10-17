const unitToHours = {
	"year": 8760,
	"month": 730,
	"week": 168,
	"day": 24
};

const consumablesDurationToHours = (starShips) => {
	const consumables = starShips[0]["consumables"];
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
		throw new Error('SW resupply calculator failed at converting the consumables to an hour format');
	}
};

const calculateStops = (starShips) => {
	const calculableShips = starShips.filter(ship => parseInt(ship["MGLT"])); // eliminate ships with unknown MGLT
	console.log(calculableShips);
	console.log(
		"%cDidn't find the starship you were looking for?\n" +
		"Some aircraft couldn't get checks due to improper record", "color: gray");
};