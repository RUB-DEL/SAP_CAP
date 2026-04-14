sap.ui.define([
    "sap/fe/test/JourneyRunner",
	"dspstewardship/cap2dsp/test/integration/pages/Mapping_MaintenanceList",
	"dspstewardship/cap2dsp/test/integration/pages/Mapping_MaintenanceObjectPage"
], function (JourneyRunner, Mapping_MaintenanceList, Mapping_MaintenanceObjectPage) {
    'use strict';

    var runner = new JourneyRunner({
        launchUrl: sap.ui.require.toUrl('dspstewardship/cap2dsp') + '/test/flp.html#app-preview',
        pages: {
			onTheMapping_MaintenanceList: Mapping_MaintenanceList,
			onTheMapping_MaintenanceObjectPage: Mapping_MaintenanceObjectPage
        },
        async: true
    });

    return runner;
});

