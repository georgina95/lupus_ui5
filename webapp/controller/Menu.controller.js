sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("ZP04.Z_Presentation_04.controller.Menu", {
		onInit: function() {
			this.setMasterView(this.getView());

			var oSelectedItem = {
				masterId: "master",
				projectId: "home"
			};
			this.showDetail(oSelectedItem);
		},
		
		onSelectMenu: function(oEvent){
			var sId = oEvent.getParameter("item").getProperty("key");
						
			this.onNavDetail(sId);
		},

		onNavMaster: function(oEvent) {
			this.getSplitAppObj().toMaster(this.createId("masterSecond"));
		},

		onNavDetail: function(sPageId){
		var oSelectedItem = {
					masterId: "master",
					projectId: sPageId
			};
			this.showDetail(oSelectedItem);
		},
		
		showDetail: function(oSelectedItem) {
			//var bReplace = !Device.system.phone;
			var bReplace = true;

			this.getRouter().navTo(oSelectedItem.projectId, {
				masterId: oSelectedItem.masterId,
				projectId: oSelectedItem.projectId
			}, bReplace);
		},
		
		getMainController: function() {
			return this.getOwnerComponent().getAggregation("rootControl").getController();
		},

		setMasterView: function(oView) {
			this.getMainController().oMasterView = oView;
		},
		setDetailView: function(oView) {
			this.getMainController().oDetailView = oView;
		},
		
		getRouter: function() {
			return this.getOwnerComponent().getRouter();
		}

	});
});