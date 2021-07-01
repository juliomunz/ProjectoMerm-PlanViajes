import Button from 'react-bootstrap/Button'
import React, { useEffect, useState } from 'react';
import ViajesService from '../services/viajes.services'
import { useHistory, useParams } from 'react-router-dom';
//import Navigation from './Navigation';

const ViajesDetail = () => {

    const { id } = useParams();
    const viajesService = new ViajesService;
    const [viaje, setViaje] = useState('');
    const history = useHistory();

    const getASingleViajesFromService = async () => {
        try {
            const singleViaje = await viajesService.getOneSingleViajes(id);
            setViaje(singleViaje);
        } catch (err) {
            return err;
        }
    }

    useEffect(() => {
        getASingleViajesFromService();
    }, [])

    
    return (
    <div className="wrapper">
        {/* <div className="nav-bar">
            <Navigation/>
        </div> */}
        <div class="card">
            {/* <h3>Detalle del viaje</h3> */}
            <h3>Details About: {viaje.name}</h3>
            {/* <div className="btn">
                <Button variant="danger" onClick={() => deletePet(pet._id)}>Adoptar {pet.name}</Button>
            </div>     */}
        </div>
        <div className="container-body">
            <h5>Name:  {viaje.lugar}</h5> 
            <h5>Fecha: {viaje.date}</h5>
            <h5>Grupo: {viaje.grupo}</h5>
            {/* <div className="btn">
                <Button variant="success" onClick={addLike}>Like {pet.name} </Button> like(s): {pet.likes}
            </div> */}
        </div>
        <Button variant="primary" type="submit">Editar</Button>
    </div>
    )
}

export default ViajesDetail