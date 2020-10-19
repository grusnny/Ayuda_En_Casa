import React, { Component } from 'react';
import { Map as Map,TileLayer, Marker, Popup } from 'react-leaflet';
import "../MyAccount/map2.css";
const styles = {
    wrapper: { 
      height: '100%', 
      width: '100%', 
      margin: '0 auto', 
      display: 'flex' 
    },
    map: {
      flex: 1
    } 
  };
class MapExample extends Component {
    constructor(props) {
        super(props);
        this.state = {
        currentPos: null
        };
        this.handleClick = this.handleClick.bind(this);
    }
handleClick(e){
this.setState({ currentPos: e.latlng });
const { lat, lng } = e.latlng;
console.log(lat, lng);

window.localStorage.setItem("userLatDoc", lat);
window.localStorage.setItem("userLngDoc", lng);
}
    render() {
        return (
        <div style={styles.wrapper}>
                <Map    style={styles.map}
                        center={[6.26739785475676,-75.56881427764894]}
                        zoom={16}
                        maxZoom={20}
                        attributionControl={true}
                        zoomControl={true}
                        doubleClickZoom={true}
                        scrollWheelZoom={true}
                        dragging={true}
                        animate={true}
                        easeLinearity={0.35}
                        onClick={this.handleClick}>
                    <TileLayer
                    url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                    />
                    { this.state.currentPos && <Marker position={this.state.currentPos} draggable={true}>
                    <Popup position={this.state.currentPos}>
                        Current location: <pre>{JSON.stringify(this.state.currentPos, null, 2)}</pre>
                    </Popup>
                    </Marker>}
                </Map>
        </div>
        )
    }
}
export default MapExample;