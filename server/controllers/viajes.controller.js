const Viajes = require('../model/planviajes.model');

module.exports.findAllViajes = (req, res) => {
    Viajes.find()
    .then(allViajes => res.json({viajes: allViajes}))
    .catch(err => res.json({viajes: null}));
}

module.exports.createNewViaje = (req, res) => {
    //console.log('llegue aqui',req.body);
    Viajes.create(req.body)
    .then(newViaje => res.send({viaje: newViaje}))
    .catch(err => res.send({errors: err}));
}

module.exports.getViajeByID = (req, res) => {
    Viajes.findById(req.params.id)
    .then(singleViaje => res.json({viajeData: singleViaje}))
    .catch(error => res.json({viajesData: null}));
}

module.exports.updateExistingViaje = (req, res) => {
    Viajes.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updateViaje => res.json({ viaje: updateViaje }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteExistingViaje = (req, res) => {
    Viajes.findByIdAndDelete({ _id: req.params.id })
        .then(deleteViaje => res.json({ viajeDeleted: deleteViaje }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
