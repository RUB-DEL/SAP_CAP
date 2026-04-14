using MappingService as service from '../../srv/service';
annotate service.Mapping_Maintenance with @(
    UI.FieldGroup #GeneratedGroup : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'GL_ACCOUNT',
                Value : GL_ACCOUNT,
            },
            {
                $Type : 'UI.DataField',
                Label : 'COMPANY_CODE',
                Value : COMPANY_CODE,
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'General Information',
            Target : '@UI.FieldGroup#GeneratedGroup',
        },
    ],
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'GL_ACCOUNT',
            Value : GL_ACCOUNT,
        },
        {
            $Type : 'UI.DataField',
            Label : 'COMPANY_CODE',
            Value : COMPANY_CODE,
        },
    ],
);

