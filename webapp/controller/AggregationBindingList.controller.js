sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ZP04.Z_Presentation_04.controller.AggregationBindingList", {
		onInit: function() {
			var oModel = new sap.ui.model.json.JSONModel( );
				oModel.setData( { 
								fruits: [
									{
										name:		"Apple",
										weight:		100,
										uom:		"g",
										picture:	"https://www.wcrf-uk.org/sites/default/files/Apple_A-Z%20Fruit1.jpg"
									},{
										name:		"Pear",
										weight:		80,
										uom:		"g",
										picture:	"https://www.wcrf-uk.org/sites/default/files/Pear_A-Z%20Fruit20.jpg"
									},{
										name:		"Grapes",
										weight:		200,
										uom:		"g",
										picture:	"https://www.wcrf-uk.org/sites/default/files/Grape_A-Z%20Fruit10.jpg"
									},{
										name:		"Banana",
										weight:		120,
										uom:		"g",
										picture:	"https://www.wcrf-uk.org/sites/default/files/Banana_A-Z%20Fruit4.jpg"
									},{
										name:		"Watermelon",
										weight:		3000,
										uom:		"g",
										picture:	"https://www.wcrf-uk.org/sites/default/files/Watermelon_A-Z%20Fruit30.jpg"
									},{
										name:		"Plum",
										weight:		20,
										uom:		"g",
										picture:	"https://www.wcrf-uk.org/sites/default/files/Victoria%20Plum_A-Z%20Fruit29.jpg"
									}	
								]
							} );
			var oView = this.getView( );
				oView.setModel(oModel, "fruitModel");
		},
		
		calculateIndex: function(iHeight, iWeight) {
			var iIndex = iWeight / (Math.pow(iHeight, 2));
			return iIndex;
		}

	});
});