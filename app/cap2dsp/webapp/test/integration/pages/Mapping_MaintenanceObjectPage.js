sap.ui.define(['sap/fe/test/ObjectPage'], function(ObjectPage) {
    'use strict';

    var CustomPageDefinitions = {
        actions: {},
        assertions: {}
    };

    return new ObjectPage(
        {
            appId: 'dspstewardship.cap2dsp',
            componentId: 'Mapping_MaintenanceObjectPage',
            contextPath: '/Mapping_Maintenance'
        },
        CustomPageDefinitions
    );
});