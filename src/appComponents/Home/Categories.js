import React from 'react';
import {
    Container, Row, Col, Card, CardImg, CardText, CardBody
} from 'reactstrap';

function App() {
    
    return (
        <Container className='text-center'>
            <p> ¡Bienvenido!</p>
            <p> Encuentre a distintos profesionales para labores de su hogar.</p>
            <Row xs="2">
                <Col>
                    <div>
                        <Card>
                            <CardImg src="https://firebasestorage.googleapis.com/v0/b/ayudaencasa-38fe2.appspot.com/o/electricLogo.png?alt=media&token=34953d4f-b887-4657-84b1-b942598eefbc" />
                            <CardBody>
                                <CardText>Profesionales relacionados a los temas de electricidad.</CardText>
                                <form action="/Home">
                                    <button type="submit" class="btn btn-outline-primary"> Electricistas</button>
                                </form>
                            </CardBody>
                        </Card>

                    </div>
                </Col>
                <Col>
                    <div>
                        <Card>
                            <CardImg src="https://firebasestorage.googleapis.com/v0/b/ayudaencasa-38fe2.appspot.com/o/waterLogo.png?alt=media&token=d7a57e90-d23c-43f2-a6aa-9b71af37bedd" />
                            <CardBody>
                                <CardText>Profesionales relacionados a los temas de tuberia o flujo del agua.</CardText>
                                <form action="/plomero">
                                    <button type="submit" class="btn btn-outline-primary"> Plomeros</button>
                                </form>
                            </CardBody>
                        </Card>

                    </div>
                </Col>
                <Col>
                    <div>
                        <Card>
                            <CardImg src="https://firebasestorage.googleapis.com/v0/b/ayudaencasa-38fe2.appspot.com/o/wallLogo.png?alt=media&token=ae683fcf-7b7b-47e5-903d-4c11ad1958be" />
                            <CardBody>
                                <CardText>Profesionales relacionados a los temas de construcción o reforma.</CardText>
                                <form action="/albanil">
                                    <button type="submit" class="btn btn-outline-primary"> Albañiles</button>
                                </form>
                            </CardBody>
                        </Card>

                    </div>
                </Col>

            </Row>
        </Container>
    );
}

export default App;