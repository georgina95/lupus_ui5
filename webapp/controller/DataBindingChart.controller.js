sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ZP04.Z_Presentation_04.controller.DataBindingChart", {
		onInit: function() {
			var oModel = new sap.ui.model.json.JSONModel( );
				oModel.setData( { 
									Women: 0,
									Neutral: 0,
									Men: 0
								} );
			var oView = this.getView( );
				oView.setModel(oModel, "ChartModel");
		},
		
		formatPercentage: function(iNumber) {
			var oModel = this.getView().getModel("ChartModel");
			var oData = oModel.getData();
			
			var iSumma = oData.Women + oData.Men + oData.Neutral;
			
			return iNumber/iSumma || 0;
		}
	});
});