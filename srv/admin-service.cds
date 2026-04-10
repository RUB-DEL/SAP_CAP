using de.sap.analytics as db from '../db/schema';

service AdminService @(path: '/admin') {
    entity TR_FI_CAP as projection on db.TR_FI_CAP;
    
}