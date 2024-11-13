sap.ui.define(["./BaseController"], function (BaseController) {
	"use strict";

	return BaseController.extend("hc.homepage.controller.App", {
		onInit: function () {
			// apply content density mode to root view
			this.getView().addStyleClass(
				this.getOwnerComponent().getContentDensityClass()
			);

			this.getView()
				.byId("app")
				.setHomeIcon({
					icon: sap.ui.require.toUrl("hc/homepage/assets/favicon.ico"),
				});
		},
	});
});
