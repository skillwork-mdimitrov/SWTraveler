/* Global variables
 ============================================================== */
let starShipsArr = []; // Store all starships

/* Functions
 ============================================================== */
const getStarShips = (url = `https://swapi.co/api/starships/`) => {
	const req = new XMLHttpRequest();

	req.open('GET', url, true);
	req.addEventListener('load', function(){
		// On success
		if(req.status >= 200 && req.status < 400){
			const response = JSON.parse(req.responseText);
			const ships = response["results"];
			const anotherFleet = response["next"];

			// Fill in all ships from this response
			ships.forEach((ship) => {
				starShipsArr.push(ship);
			});

			// Recursively call this function until all ships have been accounted
			if(anotherFleet !== null) {
				getStarShips(anotherFleet);
			}
			// There is no more unaccounted ships, proceed to calculate their need for resupply
			else {
				calculateStops(starShipsArr); // see resupplyCalc.js
			}
		}
		// On failure
		else {
			console.log('Retrieving the Star Wars fleet failed. \nError in network request: ' + req.statusText);
		}});
	req.send(null);
};

getStarShips(); // Initiate the fleet assembly, so users don't wait