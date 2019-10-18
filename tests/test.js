const test = () => {
// IIFE wrappers used to create scope and naming conflicts

	/* Check for API changes in the property naming
    ============================================================== */
	(() => {
		if(starShipsArr[0].hasOwnProperty("name") && starShipsArr[0].hasOwnProperty("MGLT")) {
			console.log("✅ - No API changes");
		} else {
			console.log("❌ - API changes present");
		}
	})();

	/* Test the consumables to hours converter
		============================================================== */
	(() => {
		const shipFiveYears = {"consumables": "5 years"};
		const shipSevenMonths = {"consumables": "7 months"};
		const shipSixThousandWeeks = {"consumables": "6000 weeks"};
		const shipOneDay = {"consumables": "1 day"};

		// 5 years => hours
		console.log(
			consumablesDurationInHours(shipFiveYears) === (8760 * 5)
				? "✅ - Convert consumables; Years to hours"
				: "❌ - Convert consumables; Years to hours"
		);

		// 7 months => hours
		console.log(
			consumablesDurationInHours(shipSevenMonths) === (730 * 7)
				? "✅ - Convert consumables; Months to hours"
				: "❌ - Convert consumables; Months to hours"
		);

		// 6000 days => hours
		console.log(
			consumablesDurationInHours(shipSixThousandWeeks) === (168 * 6000)
				? "✅ - Convert consumables; Weeks to hours"
				: "❌ - Convert consumables; Weeks to hours"
		);

		// 1 day => hours
		console.log(
			consumablesDurationInHours(shipOneDay) === 24
				? "✅ - Convert consumables; Days to hours"
				: "❌ - Convert consumables; Days to hours"
		);
	})();

	/* Test if the stops calculator runs properly overtime
		============================================================== */
	(() => {
		const distance = 2000000;
		const ships = calculateStops(distance);
		const executorShip = ships[0];
		// Executor ship stops for 2000000
		if(executorShip["name"] === "Executor") {
			console.log(
				executorShip["stops"] === 1
				? "✅ - Stops for resupply calculator"
				: "❌ - Stops for resupply calculator"
			);
		} else {
			console.log("❓ - The Executor ship was not found");
		}
	})();
};
