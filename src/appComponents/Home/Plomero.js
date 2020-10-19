import React, { useState } from 'react';
import "../Home/Home.css";
import { Container } from 'reactstrap';
import firebase from "../firebase";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import * as L from 'leaflet'
import icon from '../Home/marker2.webp';
import {
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle,
    ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem
} from 'reactstrap';
import "../Home/Plomero.css";

var name;
var profession;
var mail;
var wid;
var foto;
var tel;
const axios = require('axios');
var greenIcon = L.icon({
    iconUrl: icon,
    //shadowUrl: shadow,

    iconSize: [80, 80], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [40, 40], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62],  // the same for the shadow
    popupAnchor: [-3, -76] // point from which the popup should open relative to the iconAnchor
});
const onE = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(profession);
    var user = firebase.auth().currentUser;
    //console.log(result);
    const querystring = require('querystring');
    axios.post('https://microservicio-dominio.herokuapp.com/Solicitud', querystring.stringify({
        uid: user.uid,
        wname: name,
        wprofession: profession,
        wmail: mail,
        wphoto: foto,
        wid: wid,
        wtel: tel
    }))
        .then(function (res) {
            if (res.status == 200) {
                //mensaje.innerHTML = 'El nuevo Post ha sido almacenado con id: ' + res;
                window.location.href = "/pedidos";
                console.log(res.status);
            }
        }).catch(function (err) {
            console.log(err);
        })
        .then(function () {

        });



}
function Plomero() {

    const [worker, setWorker] = React.useState([])
    const [activeWorker, setActiveWorker] = React.useState(null);
    const [btnDropright, setOpen] = useState(false);

    const toggle = () => setOpen(!btnDropright);

    React.useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore()
            const data = await db.collection('worker').where("profession", "==", "Plomero").get()
            setWorker(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))

        }
        fetchData()
    }, [])

    return (
        <div className="App">
            <Container className='text-left'>
                <ButtonDropdown direction="right" isOpen={btnDropright} toggle={toggle}>
                    <DropdownToggle caret>
                        Categorias
      </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem header>Selecciona una nueva categoria</DropdownItem>
                        <DropdownItem> <a class="nav-link" href="/albanil">Albañiles</a></DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem> <a class="nav-link" href="/Home">Electricistas</a></DropdownItem>
                        <DropdownItem divider />
                        <DropdownItem> <a class="nav-link" href="/plomero">Plomeros</a></DropdownItem>
                    </DropdownMenu>
                </ButtonDropdown>
                <Map center={[6.267417, -75.568389]} zoom={15}>
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {worker.map(element =>
                        <Marker
                            key={element.id}
                            icon={greenIcon}
                            position={[element.latitude, element.length]}
                            onDblclick={() => {
                                setActiveWorker(element);
                            }}
                        />
                    )}
                    {activeWorker && (
                        <Popup
                            position={[
                                activeWorker.latitude,
                                activeWorker.length
                            ]}
                            onClose={() => {
                                setActiveWorker(null);
                            }}
                        >
                            <div>
                                <Card style={{ width: '12rem' }}>
                                    <CardImg top width="5%" src={foto = activeWorker.photo} />
                                    <CardBody>
                                        <CardTitle>Nombre: {name = activeWorker.name}</CardTitle>
                                        <CardSubtitle>Correo: {mail = activeWorker.mail}</CardSubtitle>
                                        <CardText>Profesión: {profession = activeWorker.profession}</CardText>
                                        <CardSubtitle>Telefono: {tel = activeWorker.telephone}</CardSubtitle>
                                        <CardSubtitle>{wid = activeWorker.uId}</CardSubtitle>
                                        <button type="button" className="btn btn-outline-primary" onClick={onE} >Contactar</button>
                                    </CardBody>
                                </Card>
                            </div>
                        </Popup>
                    )}
                </Map>
            </Container>
        </div>
    );
}

export default Plomero; 
