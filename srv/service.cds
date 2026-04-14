using {de.sap.analytics} from '../db/schema';

service MappingService {
  entity Mapping_Maintenance as projection on analytics.Mapping_Maintenance
}
annotate MappingService.Mapping_Maintenance with @odata.draft.enabled;
