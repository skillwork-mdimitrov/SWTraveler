/* Global variables
 ============================================================== */
const starShipsArr = []; // Store all starships

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
		}
		// On failure
		else {
			console.log('Retrieving the Star Wars fleet failed. \nError in network request: ' + req.statusText);
		}});
	req.onerror = function(){
		console.log("%cStar Wars API seems unreachable\n" +
		"This is an external issue. Check when https://swapi.co/api/starships/ is back and please try again.", "color: red");
	};
	req.send(null);
};

getStarShips(); // Already initiate the fleet assembly, so users don't have to wait