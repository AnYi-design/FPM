sap.ui.define(
    [
        'sap/fe/core/PageController'
    ],
    function(PageController) {
        'use strict';

        return PageController.extend('fpm.fpm.ext.main.Main', {
            /**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf fpm.fpm.ext.main.Main
             */
            //  onInit: function () {
            //      PageController.prototype.onInit.apply(this, arguments); // needs to be called to properly initialize the page controller
            //  },

            /**
             * Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
             * (NOT before the first rendering! onInit() is used for that one!).
             * @memberOf fpm.fpm.ext.main.Main
             */
            //  onBeforeRendering: function() {
            //
            //  },

            /**
             * Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
             * This hook is the same one that SAPUI5 controls get after being rendered.
             * @memberOf fpm.fpm.ext.main.Main
             */
            //  onAfterRendering: function() {
            //
            //  },

            /**
             * Called when the Controller is destroyed. Use this one to free resources and finalize activities.
             * @memberOf fpm.fpm.ext.main.Main
             */
            //  onExit: function() {
            //
            //  }
            onPressAction(oEvent) {
                console.log(oEvent);
                const oDH = this.byId("idDynamicPageHeader")
                const oTable = this.byId("idTable")
                const oContext = oTable.getSelectedContexts()[0]
                oDH.bindObject({
                    path: oContext.sPath
                })
            },
            onButtonTest02Press:function(oEvent){
                console.log("buttonTest02")

                this.fragmentOne = this.getExtensionAPI().loadFragment({
                    id: "dialog",
                    name: "fpm.fpm.ext.customdialog.CustomDialog",
                    controller: this
                });


				this.fragmentOne.then(function (dialog) {
					dialog.open();
                    dialog.attachAfterClose("afterClose",function() {
                        dialog._bDestroyed = true;
                        dialog.destroy();
                    });
				});
            },
            closeDialog:function(){
                this.fragmentOne && this.fragmentOne.then(function(dialog) {
                    if (dialog && !dialog.bIsDestroyed && dialog.close) {
                        dialog.close();
                    }
                });
            }
        });
    }
);
