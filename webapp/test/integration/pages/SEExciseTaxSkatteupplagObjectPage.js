sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'leap.mm.im.se.exs.tax.rep',
            componentId: 'SEExciseTaxSkatteupplagObjectPage',
            contextPath: '/SEExciseTaxSkatteupplag'
        },
        CustomPageDefinitions
    );
});