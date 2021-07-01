const  ViajesController = require('../controllers/viajes.controller');

module.exports = app => {
    app.get('/api/viajes', ViajesController.findAllViajes);
    app.put('/api/viajes/update/:id', ViajesController.updateExistingViaje);
    app.get('/api/viajes/:id', ViajesController.getViajeByID);
    app.post('/api/viajes/new', ViajesController.createNewViaje);
    app.delete('/api/viajes/delete/:id', ViajesController.deleteExistingViaje);
}