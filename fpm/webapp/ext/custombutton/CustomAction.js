sap.ui.define([
], function(
) {
	"use strict";

	return {
        onPressChangeAll:function(oEvent){
            const oSelect = new sap.m.Select({
                width: "10rem",
                items: [
                    new sap.ui.core.Item({
                        text: "MRP유형",
                        key: "MRPType"
                    }),
                    new sap.ui.core.Item({
                        text: "MRP관리자",
                        key: "MRPController"
                    }),
                    new sap.ui.core.Item({
                        text: "MRP그룹",
                        key: "MRPGroup"
                    })
                ]
            });
            const oInput = new sap.m.Input({
                width: "10rem"
            });
            const oDialog = new sap.m.Dialog({
                title:"Change All",
                beginButton: new sap.m.Button({
                    text:"确认",
                    press:()=>{
                        sap.m.MessageToast.show("确认");
                        oDialog.close();
                    }
                }),
                endButton: new sap.m.Button({
                    text:"关闭",
                    press:()=>{
                        oDialog.close();
                    }
                }),
                content: [
                    new sap.m.HBox({
                        alignContent: "Center",
                        alignItems: "Center",
                        justifyContent: "Center",
                        items: [
                            new sap.m.Label({
                                width: "5rem",
                                text: "필드선택:",
                                Design:"Standard"
                            }),
                            oSelect
                        ]
                    }),
                    new sap.m.HBox({
                        alignContent: "Center",
                        alignItems: "Center",
                        justifyContent: "Center",
                        items: [
                            new sap.m.Label({
                                width: "5rem",
                                text: "값:",
                                Design:"Standard"
                            }),
                            oInput
                        ]
                    })
                ]
            });
            oDialog.open();
        }
    }
});