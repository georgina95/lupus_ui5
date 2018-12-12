/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"ZP04/Z_Presentation_04/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"ZP04/Z_Presentation_04/test/integration/pages/Main",
	"ZP04/Z_Presentation_04/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "ZP04.Z_Presentation_04.view.",
		autoWait: true
	});
});