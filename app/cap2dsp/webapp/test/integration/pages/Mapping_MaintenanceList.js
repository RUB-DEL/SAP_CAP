sap.ui.define(['sap/fe/test/ListReport'], function(ListReport) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ListReport(
        {
            appId: 'dspstewardship.cap2dsp',
            componentId: 'Mapping_MaintenanceList',
            contextPath: '/Mapping_Maintenance'
        },
        CustomPageDefinitions
    );
});