sap.ui.define([
], function (
) {
    "use strict";

    return {
        formatFilter(sValue) {
            if (sValue === "Empty") return new sap.ui.model.Filter("GroupId","Contains", "");
            return new sap.ui.model.Filter("GroupId","EQ", sValue);
        }
    }
});