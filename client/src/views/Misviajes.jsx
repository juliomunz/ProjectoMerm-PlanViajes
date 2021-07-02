import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button'
import React, { useEffect, useState } from 'react';
import ViajesService from '../services/viajes.services';
import { history, useHistory } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Navigation from '../components/Nav'

const Misviajes = () => {
    const viajeService = new ViajesService;
    const [viajesList, setViajesList] = useState([]);
    const history = useHistory();
    const [viaje, SetViaje] = useState();

    const getAllViajesFromService = async ()=>{
        try {
            const list = await viajeService.findAllViajes();
            setViajesList(list);
        } catch (err) {
            return err;
        }
    }

    const deleteViajes = async (id)=>{
        try{
            await viajeService.deleteViaje(id)
            getAllViajesFromService();
        }
        catch(err){
            return err;
        } 
        // finally {
        //     history.push('/Misviajes')
        // }
    }

    useEffect(()=>{
        getAllViajesFromService();
    },[])

    return (
        <div className="container">
            <Navigation/>
            <h1>Mis Viajes</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Lugar de Viajes</th>
                        <th>Fecha</th>
                        <th>Grupo de Viaje</th>
                        <th>Estado del Viaje</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {viajesList.length > 0 && viajesList.map((item) => (
                            <tr key={item._id} value={item._id}>
                                <th>{item.lugar}</th>
                                <td>{item.date}</td>
                                <td>{item.grupo}</td>
                                <td>{item.estado}</td>
                                <td>
                                    <div>
                                    {/* <Button variant="info" onClick={() => updateViaje(item._id)}>Editar</Button> */}
                                    <Button variant="danger" onClick={() => deleteViajes(item._id)}>Borrar</Button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
            <Link to ="/create">create new travell</Link>
        </div>
    )
}

export default Misviajes