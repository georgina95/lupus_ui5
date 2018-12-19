sap.ui.define([
	'sap/ui/model/Sorter',
	'sap/ui/model/Filter',
	'sap/ui/model/FilterOperator',
	"sap/ui/core/mvc/Controller"
], function (Sorter, Filter, FilterOperator, Controller) {
	"use strict";

	return Controller.extend("ZP04.Z_Presentation_04.controller.Filtering", {
		onInit: function() {
			var oModel = new sap.ui.model.json.JSONModel( );
				oModel.loadData("./model/people.json");
			var oView = this.getView();
				oView.setModel(oModel, "People");
				
			var oSettings = new sap.ui.model.json.JSONModel( );
				oSettings.setData({
					expression:	"",
					relation: [
						{
							text: "matches",
							selected: false
						},
						{
							text: "contains",
							selected: true
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
		
		applyFilters: function() {
			var oSettings = this.getView().getModel("settings").getData();
			
			var oList = this.byId("idPeopleListFilter");
			var oBinding = oList.getBinding("items");
			var aFilters = [];
			
			var sOperator = (oSettings.relation[1].selected)? FilterOperator.Contains : FilterOperator.EQ;
			var sExpression = oSettings.expression;
			
			var oFilter = new Filter({
			    filters: [
			      new Filter({
			        path: 'name/first',
			        operator: sOperator,
			        value1: sExpression
			      }),
			      new Filter({
			        path: 'name/last',
			        operator: sOperator,
			        value1: sExpression
			      })
			    ],
			    and: false
			  });
			aFilters.push(oFilter);
			

			// apply filter settings
			oBinding.filter(aFilters);
		}
	});
});