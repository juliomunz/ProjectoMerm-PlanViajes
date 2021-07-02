import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'
import axios from 'axios';
import { Link, useHistory, useParams } from "react-router-dom";
import ViajesService from '../services/viajes.services'
import moment from 'moment';
import Navigation from '../components/Nav'


const Newtravell = () => {
    //const [startDate, setStartDate] = useState(new Date());
    const { id } = useParams();
    const history = useHistory()
    const viajesService = new ViajesService;
    const [viajesForm, setViajesForm] = useState({
        lugar: '',
        date: moment().format("yyyy/MM/dd"),
        grupo: '',
        estado: ''
    })

    const onSubmitHandler = (e) => {
        e.preventDefault();
        //console.log('llegué')
        if (id) {
            viajesService.updateViajes(id, viajesForm);
            history.push("/");
        } else {
            axios.post('http://localhost:8000/api/viajes/new', viajesForm)
                .then(() => history.push("/Misviajes"))
                .catch(err => console.log(err))

        }
    }

    return (
        <div className="plan-header">
             <Navigation/>
            <h3>Planifica tu viaje</h3>
        <div className="plan-form-container">
            <Form onSubmit={onSubmitHandler}>
                <Form.Group controlId="exampleForm.ControlTextarea3">
                    <Form.Label>Lugar de Viaje</Form.Label>
                    <Form.Control name="lugar" type="text" value={viajesForm.lugar} onChange={(e) => setViajesForm({ ...viajesForm, [e.target.name]: e.target.value })} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Due Date</Form.Label>
                    <Form.Control name="date" type="date" value={viajesForm.date} onChange={(e) => setViajesForm({ ...viajesForm, [e.target.name]: e.target.value })} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea3">
                    <Form.Label>Grupo Viaje</Form.Label>
                    <Form.Control name="grupo" type="text" value={viajesForm.grupo} onChange={(e) => setViajesForm({ ...viajesForm, [e.target.name]: e.target.value })} />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlTextarea3">
                    <Form.Label>Estado del Viaje</Form.Label>
                    <Form.Control name="estado" type="text" value={viajesForm.estado} onChange={(e) => setViajesForm({ ...viajesForm, [e.target.name]: e.target.value })} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Agregar
                </Button>
            </Form>
        </div>
        </div>
    )
}

export default Newtravell;