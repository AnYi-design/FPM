sap.ui.define([
    "sap/m/MessageToast"
], function(MessageToast) {
    'use strict';

    return {
        onApp: function(oEvent) {
            MessageToast.show("Custom handler invoked.");
        }
    };
});
