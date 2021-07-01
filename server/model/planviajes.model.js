const mongoose = require('mongoose');

const ViajesSchema = new mongoose.Schema({
    lugar: {
        type: String,
        required: [true, 'No puede enviar un producto sin titulo']
    },
    date: {
        type: Date,
        required: [true, 'No se puede crear un producto sin precio']
    },
    grupo: {
        type: String,
        required: [true, 'No puede enviar un producto descripcion']
    },
    estado: {
        type: String,
        required: [true, 'No puede enviar un producto descripcion']
    }, 
},
{timestamps: true}
);

const Viajes = mongoose.model('Viajes', ViajesSchema);
module.exports = Viajes;
