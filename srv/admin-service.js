validateLifeData(req){
    const{dateOfBirth, dateOfDeath} = req.data;
    if (!dateOfBirth || !dateOfDeath) {
        return;
    }
}