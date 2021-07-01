import axios from 'axios';

export default class ViajesService {

    constructor (){}

    async getOneSingleViajes (id){
        try {
            const viaje = await axios.get(`http://localhost:8000/api/viajes/${id}`);
            //console.log(pet)
            return viaje.data.viajeData;
        } catch (err) {
            return err;
        }
    }
    
    async findAllViajes() {
        try {
            const viajesList = await axios.get(`http://localhost:8000/api/viajes`);
            //console.log(petsList)
            return viajesList.data.viajes;
        } catch (err) {
            return err;  
        }
    }
    async createNewViaje(viaje) {
        try {
            const newViaje = await axios.post(`http://localhost:8000/api/viajes/new`, viaje);
            console.log(newViaje)
                    return newViaje.data.viaje;
                }
        catch (err) 
        {
            //console.log(err.response)
            return err.response;
        }
    }

    async updateViaje(id, viaje){
        try {
            const updateViaje = await axios.put(`http://localhost:8000/api/viajes/update/${id}`, viaje);
            return updateViaje.data.viaje;
        } catch (err) {
            return err;
        }
    }

    async deleteViaje(id){
        try {
            const deleteViaje = await axios.delete(`http://localhost:8000/api/viajes/delete/${id}`);
            return deleteViaje.data.viajeDeleted;
        } catch (err) {
            return err;
            
        }
    }
}