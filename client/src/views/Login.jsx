import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import React, { useState } from 'react';


export default function Login () {
    const [correo, setCorreo]= useState('')
    const [contrasena, setContrasena]= useState('')
    const history = useHistory();

    const ingresar = async(e) =>{
        e.preventDefault()
        const usuario={correo,contrasena}
        const respuesta=await axios.post('http://localhost:8000/api/user/login', usuario)
        const mensaje=respuesta.data.mensaje
        history.push('/Misviajes')
        if (mensaje!=='Bienvenido'){
            alert(mensaje)
        }else {
            alert(mensaje)
        }
        //console.log(respuesta)
    }
    return (
        <div className="Header">
        <h3>Planificador de Viajes</h3>
        <br />
            <div className="container-login">
                <CardGroup>
                    <Card>
                <Card.Header className="text-center">Login</Card.Header>  
                <Card.Body>
                    <Form onSubmit={ingresar}>
                    <Form.Group>
                            <Row>
                                <Form.Label column lg={6}>Email</Form.Label>
                                <Col>
                                <Form.Control type="email" required onChange={(e)=>setCorreo(e.target.value)}/>
                                </Col>
                            </Row>
                                <br />
                        </Form.Group>
                        <Form.Group>
                            <Row>
                                <Form.Label column lg={6}>Password</Form.Label>
                                <Col>
                                <Form.Control type="password" required onChange={(e)=>setContrasena(e.target.value)}/>
                                </Col>
                            </Row>
                                <br />
                        </Form.Group>
                        <Button variant="primary" type="submit">Login</Button>
                    </Form>
                </Card.Body>
                </Card>
                </CardGroup>
        </div>
        <br />
            Si aún no tienes cuenta, regístrate  <Link to ="/"> aquí!</Link>
    </div>               
    )
}
