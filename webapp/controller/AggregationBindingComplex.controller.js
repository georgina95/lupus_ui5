sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ZP04.Z_Presentation_04.controller.AggregationBindingComplex", {
		onInit: function() {
			var oModel = new sap.ui.model.json.JSONModel( );
				oModel.loadData("./model/plants.json");
			var oView = this.getView();
				oView.setModel(oModel, "foodModel");
		}

	});
});