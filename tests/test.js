const test = () => {
// IIFE wrappers used to create scope and avoid naming conflicts

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
		const cR90Corvette = ships[0];
		// CR90 corvette ship stops for the distance of 2000000 ↓
		if(cR90Corvette["name"] === "CR90 corvette") {
			console.log(
				cR90Corvette["stops"] === 4
				? "✅ - Stops for resupply calculator"
				: "❌ - Stops for resupply calculator"
			);
		} else {
			console.log("❓ - The CR90 corvette ship was not found, possibly not indexed [0] anymore");
		}
	})();
};
