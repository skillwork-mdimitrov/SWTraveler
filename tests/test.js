const test = () => {
// IIFE used to create scope and prevent leaks

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
				? "✅ - Convert consumables; 5 years to hours"
				: "❌ - Convert consumables; 5 years to hours"
		);

		// 7 months => hours
		console.log(
			consumablesDurationInHours(shipSevenMonths) === (730 * 7)
				? "✅ - Convert consumables; 7 months to hours"
				: "❌ - Convert consumables; 7 months to hours"
		);

		// 6000 days => hours
		console.log(
			consumablesDurationInHours(shipSixThousandWeeks) === (168 * 6000)
				? "✅ - Convert consumables; 6000 weeks to hours"
				: "❌ - Convert consumables; 6000 weeks to hours"
		);

		// 1 day => hours
		console.log(
			consumablesDurationInHours(shipOneDay) === (24)
				? "✅ - Convert consumables; 1 day to hours"
				: "❌ - Convert consumables; 1 day to hours"
		);
	})();
};
