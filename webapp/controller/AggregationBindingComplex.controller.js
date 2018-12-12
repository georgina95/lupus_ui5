sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ZP04.Z_Presentation_04.controller.AggregationBindingComplex", {
		onInit: function() {
			var oModel = new sap.ui.model.json.JSONModel( );
				oModel.setData(
					{ 
					    foods: [
					        {
					            type: "Fruits",
					            icon: "sap-icon://nutrition-activity",
					            items: [
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
					        },
					        {
					            type: "Vegetables",
					            icon: "sap-icon://e-care",
					            items: [
					                {
					                    name:		"Carrot",
					                    weight:		100,
					                    uom:		"g",
					                    picture:	"https://www.wcrf-uk.org/sites/default/files/Carrots%20A-Z%20Veg8.jpg"
					                },{
					                    name:		"Beans",
					                    weight:		80,
					                    uom:		"g",
					                    picture:	"https://www.wcrf-uk.org/sites/default/files/Green%20bean%20A-Z%20Veg13_0.jpg"
					                },{
					                    name:		"Lettuce",
					                    weight:		200,
					                    uom:		"g",
					                    picture:	"https://www.wcrf-uk.org/sites/default/files/Iceberg%20A-Z%20Veg14.jpg"
					                },{
					                    name:		"Onions",
					                    weight:		120,
					                    uom:		"g",
					                    picture:	"https://www.wcrf-uk.org/sites/default/files/Onion%20A-Z%20Veg20.jpg"
					                },{
					                    name:		"Peas",
					                    weight:		3000,
					                    uom:		"g",
					                    picture:	"https://www.wcrf-uk.org/sites/default/files/Pea%20A-Z%20Veg21.jpg"
					                }
					            ]
					        }
					    ]
					}
				);
			var oView = this.getView( );
				oView.setModel(oModel, "foodModel");
		},
		
		calculateIndex: function(iHeight, iWeight) {
			var iIndex = iWeight / (Math.pow(iHeight, 2));
			return iIndex;
		}

	});
});