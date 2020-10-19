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
function Home() {

    const [worker, setWorker] = React.useState([])
    const [activeWorker, setActiveWorker] = React.useState(null);
    const [btnDropright, setOpen] = useState(false);

    const toggle = () => setOpen(!btnDropright);

    React.useEffect(() => {
        const fetchData = async () => {
            const db = firebase.firestore()
            const data = await db.collection('worker').where("profession", "==", "Electricista").get()
            setWorker(data.docs.map(doc => ({ ...doc.data(), id: doc.id })))

        }
        fetchData()
    }, [])

    return (
        <div className="App">
            <Container className='text-left'>
                <div class="dropdown is-active">
                    <div class="dropdown-trigger">
                        <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                        <span>Categorias</span>
                        <span class="icon is-small">
                            <i class="fas fa-angle-down" aria-hidden="true"></i>
                        </span>
                        </button>
                    </div>
                    <div class="dropdown-menu" id="dropdown-menu" role="menu">
                        <div class="dropdown-content">
                        <a href="/albanil" class="dropdown-item">
                            Albañiles
                        </a>
                        <a href="/Home" class="dropdown-item">
                            Electricista
                        </a>
                        <a href="/plomero" class="dropdown-item is-active">
                            Plomeros
                        </a>
                        </div>
                    </div>
                    </div>
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
                                <div class="card">
                                    <div class="card-image">
                                        <figure class="image is-4by3">
                                        <img src={foto = activeWorker.photo} alt="Worker"/>
                                        </figure>
                                    </div>
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-left">
                                                <figure class="image is-48x48">
                                                <img src={foto = activeWorker.photo} alt="Worker"/>
                                                </figure>
                                            </div>
                                            <div class="media-content">
                                                <p class="title is-4">{activeWorker.name}</p>
                                                <p class="subtitle is-6">{activeWorker.mail}</p>
                                                <p class="subtitle is-6">{activeWorker.profession}</p>
                                                <p class="subtitle is-6">{tel = activeWorker.telephone}</p>
                                                <p class="subtitle is-6">{wid = activeWorker.uId}</p>
                                            </div>
                                        </div>

                                        <div class="content">
                                        <div class="buttons">
                                            <button class="button is-primary" onClick={onE}>Contactar</button>
                                        </div>
                                            <a href="#">#css</a> <a href="#">#responsive</a>
                                            <br>
                                                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                                            </br>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Popup>
                    )}
                </Map>
            </Container>
        </div>
    );
}

export default Home; 
