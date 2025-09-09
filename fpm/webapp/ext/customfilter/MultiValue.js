sap.ui.define([
], function(
) {
	"use strict";

	return{
		multiValueRatingLevels: function (values) {
			const filters = [];

			values.forEach((value) => {
				switch (value) {
					case "low":
						filters.push(new sap.ui.model.Filter({ path: "GroupName", operator: "EQ", value1: "TEST01" }));
						break;
					case "medium":
						filters.push(new sap.ui.model.Filter({ path: "GroupName", operator: "EQ", value1: "TEST02" }));
						break;
					case "high":
						filters.push(new sap.ui.model.Filter({ path: "GroupName", operator: "EQ", value1: "TEST03" }));
						break;
					default:
						return null;
				}
			});

			return new sap.ui.model.Filter({
				filters: filters
			});
		}
    }
});