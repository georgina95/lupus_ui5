sap.ui.define([
	'sap/ui/model/Sorter',
	"sap/ui/core/mvc/Controller"
], function (Sorter, Controller) {
	"use strict";

	return Controller.extend("ZP04.Z_Presentation_04.controller.AggregationBindingList", {
		onInit: function() {
			var oModel = new sap.ui.model.json.JSONModel( );
				oModel.loadData("./model/people.json");
			var oView = this.getView();
				oView.setModel(oModel, "People");
		},
		
		formatName: function(sFirst, sLast) {
			return sLast + ", " + sFirst;
		},
		
		formatEyecolor: function(sColor) {
			switch(sColor) {
				case "blue":	return "Information";
				case "green":	return "Success";
				default:		return "Error";
			} 
		}
		
	});
});