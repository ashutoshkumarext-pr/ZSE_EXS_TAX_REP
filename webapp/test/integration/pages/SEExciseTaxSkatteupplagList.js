sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'leap.mm.im.se.exs.tax.rep',
            componentId: 'SEExciseTaxSkatteupplagList',
            contextPath: '/SEExciseTaxSkatteupplag'
        },
        CustomPageDefinitions
    );
});