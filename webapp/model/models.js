sap.ui.define(
	["sap/ui/model/json/JSONModel", "sap/ui/model/BindingMode", "sap/ui/Device"],
	function (JSONModel, BindingMode, Device) {
		"use strict";

		return {
			createDeviceModel: function () {
				const oModel = new JSONModel(Device);
				oModel.setDefaultBindingMode(BindingMode.OneWay);
				return oModel;
			},

			createIMGModel: function () {
				const oImages = {
					Contact: sap.ui.require.toUrl("hc/homepage/assets/contact.jpeg"),
					Deliver: sap.ui.require.toUrl("hc/homepage/assets/deliver.jpg"),
					Design: sap.ui.require.toUrl("hc/homepage/assets/design.jpg"),
					Develop: sap.ui.require.toUrl("hc/homepage/assets/develop.jpg"),
					Hero: sap.ui.require.toUrl("hc/homepage/assets/hero.jpg"),
					Logo: sap.ui.require.toUrl("hc/homepage/assets/logo.png"),
				};
				const oModel = new JSONModel(oImages);
				oModel.setDefaultBindingMode(BindingMode.OneWay);

				return oModel;
			},
		};
	}
);
