sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"leap/mm/im/se/exs/tax/rep/test/integration/pages/SEExciseTaxSkatteupplagList",
	"leap/mm/im/se/exs/tax/rep/test/integration/pages/SEExciseTaxSkatteupplagObjectPage"
], function (JourneyRunner, SEExciseTaxSkatteupplagList, SEExciseTaxSkatteupplagObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('leap/mm/im/se/exs/tax/rep') + '/test/flp.html#app-preview',
        pages: {
			onTheSEExciseTaxSkatteupplagList: SEExciseTaxSkatteupplagList,
			onTheSEExciseTaxSkatteupplagObjectPage: SEExciseTaxSkatteupplagObjectPage
        },
        async: true
    });

    return runner;
});

