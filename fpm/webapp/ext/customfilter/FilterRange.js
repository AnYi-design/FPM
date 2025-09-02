sap.ui.define([
], function(
) {
	"use strict";

	return {
        onRatingRangeReset: function (oEvent) {
				this.byId("idFilterBar").setFilterValues("RatingRange");
			}
    }
});