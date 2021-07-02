import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import {useHistory} from 'react-router-dom';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
//import Nav from '../components/Nav'

export default function Register () {
    const [nombre, setNombre]=useState('')
    const [correo, setCorreo]= useState('')
    const [contrasena, setContrasena]= useState('')
    const history = useHistory();

const registrar = async(e) =>{
    e.preventDefault()
    const usuario={nombre,correo,contrasena}
    const respuesta=await axios.post('http://localhost:8000/api/user/crear', usuario)
    const mensaje=respuesta.data.mensaje
    if (mensaje!=='Registrado'){
        alert(mensaje)
    }else {
        alert(mensaje)
    }    
   //console.log(respuesta)

}
return (
    <div className="Header mt-3">
        <h3> Planificador de Viajes</h3>
        <br />
            <div className="container-registro">
                <CardGroup>
                    <Card>
                    <Card.Header className="text-center">Regístrate</Card.Header>    
                    <Card.Body>
                        <Form onSubmit={registrar}>
                            <Form.Group>
                                <Row>
                                    <Form.Label column lg={6}>Nombre</Form.Label>
                                    <Col>
                                    <Form.Control type="text" autoFocus required onChange={(e)=>setNombre(e.target.value)}/>
                                    </Col>
                                </Row>
                                    <br />
                            </Form.Group>
                            <Form.Group>
                                <Row>
                                    <Form.Label column lg={6}>Correo</Form.Label>
                                    <Col>
                                    <Form.Control type="email" required onChange={(e)=>setCorreo(e.target.value)}/>
                                    </Col>
                                </Row>
                                    <br />
                            </Form.Group>
                            <Form.Group>
                                <Row>
                                    <Form.Label column lg={6}>Contraseña</Form.Label>
                                    <Col>
                                    <Form.Control type="password" required onChange={(e)=>setContrasena(e.target.value)}/>
                                    </Col>
                                </Row>
                                    <br />
                            </Form.Group>
                            <Form.Group>
                                <Row>
                                    <Form.Label column lg={6}>Confirmar Contraseña</Form.Label>
                                    <Col>
                                    <Form.Control type="password" required onChange={(e)=>setContrasena(e.target.value)}/>
                                    </Col>
                                </Row>
                                    <br />
                            </Form.Group>
                            <Button variant="primary" type="submit">Registrarse</Button>
                        </Form>
                        </Card.Body>
                    </Card>
            </CardGroup>
        </div>
        <br />
            Si ya tienes cuenta, haz login <Link to ="/Login"> aquí!</Link>
    </div>
    )
}