sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ZP04.Z_Presentation_04.controller.DataBindingInput", {
		onInit: function() {
			var oModel = new sap.ui.model.json.JSONModel( );
				oModel.setData( { 
									input: {
										height: 0,
										weight: 0
									} 
								} );
			var oView = this.getView( );
				oView.setModel(oModel, "inputModel");
		},
		
		calculateIndex: function(iHeight, iWeight) {
			var iIndex = iWeight / (Math.pow(iHeight, 2));
			return iIndex;
		}

	});
});