sap.ui.define([
    "sap/ui/test/opaQunit",
    "./pages/JourneyRunner"
], function (opaTest, runner) {
    "use strict";

    function journey() {
        QUnit.module("First journey");

        opaTest("Start application", function (Given, When, Then) {
            Given.iStartMyApp();

            Then.onTheSEExciseTaxSkatteupplagList.iSeeThisPage();
            Then.onTheSEExciseTaxSkatteupplagList.onFilterBar().iCheckFilterField("Posting Date");
            Then.onTheSEExciseTaxSkatteupplagList.onFilterBar().iCheckFilterField("Plant");
            Then.onTheSEExciseTaxSkatteupplagList.onFilterBar().iCheckFilterField("Storage Location");
            Then.onTheSEExciseTaxSkatteupplagList.onFilterBar().iCheckFilterField("Movement Type");
            Then.onTheSEExciseTaxSkatteupplagList.onFilterBar().iCheckFilterField("Material Number (SKU)");
            Then.onTheSEExciseTaxSkatteupplagList.onFilterBar().iCheckFilterField("Material Type");
            Then.onTheSEExciseTaxSkatteupplagList.onFilterBar().iCheckFilterField("Material Document Number");
            Then.onTheSEExciseTaxSkatteupplagList.onFilterBar().iCheckFilterField("Batch");
            Then.onTheSEExciseTaxSkatteupplagList.onTable().iCheckColumns(19, {"MaterialDocument":{"header":"Material Document Number"},"MaterialDocumentItem":{"header":"Material Document Number Item"},"MaterialDocumentYear":{"header":"Material Document Year"},"PostingDate":{"header":"Posting Date"},"GoodsMovementType":{"header":"Movement Type"},"ProductType":{"header":"Material Type"},"Plant":{"header":"Plant"},"StorageLocation":{"header":"Storage Location"},"Material":{"header":"Material Number (SKU)"},"MaterialDescription":{"header":"Material Description"},"Batch":{"header":"Batch"},"QuantityInBaseUnit":{"header":"Quantity (Base UoM)"},"MaterialBaseUnit":{"header":"Base UoM"},"ConversionFactor":{"header":"Conversion Factor"},"QuantityAlternativeUoM":{"header":"Quantity (Alternative UoM)"},"AlternativeUoM":{"header":"Alternative UoM"},"ExciseTaxAmountSEK":{"header":"Excise Tax Amount (SEK)"},"ExciseTaxRateSkattesats":{"header":"Excise Tax Rate (Skattesats)"},"ABVPercentage":{"header":"SKUs with ABV %"}});

        });


        opaTest("Navigate to ObjectPage", function (Given, When, Then) {
            // Note: this test will fail if the ListReport page doesn't show any data
            
            When.onTheSEExciseTaxSkatteupplagList.onFilterBar().iExecuteSearch();
            
            Then.onTheSEExciseTaxSkatteupplagList.onTable().iCheckRows();

            When.onTheSEExciseTaxSkatteupplagList.onTable().iPressRow(0);
            Then.onTheSEExciseTaxSkatteupplagObjectPage.iSeeThisPage();

        });

        opaTest("Teardown", function (Given, When, Then) { 
            // Cleanup
            Given.iTearDownMyApp();
        });
    }

    runner.run([journey]);
});