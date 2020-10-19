import React from 'react';
import { Row, Col, Jumbotron } from 'reactstrap';

export default () => {
    return (
        <div>
            <Row>
                <Col xs="12">
                    <Jumbotron className='text-center'>
                        <h1 className="display-5">
                            Inicie sesión en
                    </h1>
                    <h1 className="display-5">
                            AyudaEnCasa
                    </h1>
                        <p className="lead">
                            Ingrese por alguno de los siguientes metodos
                    </p>
                    </Jumbotron>
                </Col>
            </Row>
        </div>
    )
}