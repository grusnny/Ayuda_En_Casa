import React from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';

export default () => {
    return (
        <div>
            <Row>
                <Col xs="12">
                    <Jumbotron className='text-center'>
                        <h1 className="display-5">
                            Registro mediante correo
                    </h1>
                        <p className="lead">
                            Todos los campos son obligatorios
                    </p>
                    </Jumbotron>
                </Col>
            </Row>
        </div>
    )
}