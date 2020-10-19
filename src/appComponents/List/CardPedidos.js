import React from 'react'
import {
    Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle
} from 'reactstrap';
import firebase from "../firebase";
import MD5 from 'crypto-js/md5';



export const CardPedidos = ({ pedido }) => {

    const [wname, setWName] = React.useState(pedido.wname)
    const [wmail, setWMail] = React.useState(pedido.wmail)
    const [wtel, setWTel] = React.useState(pedido.wtel)
    const [wprofession, setfechaPet] = React.useState(pedido.wprofession)
    const [state, setState] = React.useState(pedido.state)
    const [wphoto, setWPhoto] = React.useState(pedido.wphoto)
    var user = firebase.auth().currentUser;
    var hash = MD5("4Vj8eK4rloUd272L48hsrarnUA~508029~Ayudaencasa~20000~COP");
    console.log(hash + " codigo");
    return (
        <>
            <div>
                <Card style={{ width: '18rem' }}>
                    <CardImg top width="100%" src={wphoto} />
                    <CardBody>
                        <CardTitle>Nombre: {wname}</CardTitle>
                        <CardSubtitle>Correo: {wmail}</CardSubtitle>
                        <CardSubtitle>Telefono: {wtel}</CardSubtitle>
                        <CardSubtitle>Profesión: {wprofession}</CardSubtitle>
                        <CardText>Estado de la petición {state}</CardText>
                        <form method="post" action="https://sandbox.checkout.payulatam.com/ppp-web-gateway-payu/">
                            <input name="merchantId" type="hidden" value="508029" />
                            <input name="accountId" type="hidden" value="512321" />
                            <input name="description" type="hidden" value="Pago Ayuda en casa" />
                            <input name="referenceCode" type="hidden" value="Ayudaencasa" />
                            <input name="amount" type="hidden" value="20000" />
                            <input name="tax" type="hidden" value="0" />
                            <input name="taxReturnBase" type="hidden" value="0" />
                            <input name="currency" type="hidden" value="COP" />
                            <input name="signature" type="hidden" value={hash} />
                            <input name="test" type="hidden" value="1" />
                            <input name="buyerEmail" type="hidden" value={user.email} />
                            <input name="responseUrl" type="hidden" value="http://www.test.com/response" />
                            <input name="confirmationUrl" type="hidden" value="http://www.test.com/confirmation" />
                            <input name="Submit" type="submit" className="btn btn-outline-primary" value="Pagar" />
                        </form>
                    </CardBody>
                </Card>
            </div>
        </>
    )
}