sap.ui.define([
	'sap/ui/model/Sorter',
	"sap/ui/core/mvc/Controller"
], function (Sorter, Controller) {
	"use strict";

	return Controller.extend("ZP04.Z_Presentation_04.controller.Sorting", {
		onInit: function() {
			var oModel = new sap.ui.model.json.JSONModel( );
				oModel.loadData("./model/people.json");
			var oView = this.getView();
				oView.setModel(oModel, "People");
				
			var oSettings = new sap.ui.model.json.JSONModel( );
				oSettings.setData({
					ascending:	true,
					selectedsort:	"age",
					sortingby: [
						{
							text: "eyeColor"
						},
						{
							text: "age"
						}
					]
				});
			oView.setModel(oSettings, "settings");
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
		},
		
		applySorting: function() {
			var oSettings = this.getView().getModel("settings").getData();
			
			var oList = this.byId("idPeopleList");
			var oBinding = oList.getBinding("items");
			var aSorters = [];
	
			var bDescending = !oSettings.ascending;
			var sPath = oSettings.selectedsort;
			aSorters.push(new Sorter(sPath, bDescending));
	
			oBinding.sort(aSorters);
		}
	});
});