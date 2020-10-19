import React, { Component } from 'react';
import { Map as LeafletMap,Map, TileLayer, Marker, Popup } from 'react-leaflet';

class Mapp extends React.Component {
    componentDidMount() {
    }
    handleClick = (e) => {
        const { lat, lng } = e.latlng;
        console.log(lat, lng);
    }
    render() {
        return (
            <LeafletMap
                center={[35.755229,51.304470]}
                zoom={16}
                maxZoom={20}
                attributionControl={true}
                zoomControl={true}
                doubleClickZoom={true}
                scrollWheelZoom={true}
                dragging={true}
                animate={true}
                easeLinearity={0.35}
                onclick={this.handleClick}>
                >
                <TileLayer
                url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
                />
                <Marker position={[35.755229,51.304470]}
                    draggable={true}
                    >
                    <Popup >
                     Popup for any custom information.
                    </Popup>
                </Marker>
            </LeafletMap>
        );
    }
    }
    export default Mapp;
    
    //Here is an example on how to display maker position in popup once map is clicked:
    /*Explanation:
    currentPos state is used to keep marker position
    event.latLng property of Map.onClick event handler returns mouse event location
    Here is a demo for your reference
    What did you try to achieve that?
    This will be the start:
    Use the click (see https://leafletjs.com/reference-1.4.0.html#map-click) event from the LeafletMap component and call your function, like:
    <LeafletMap
    center={[35.755229,51.304470]}
    zoom={16}
    maxZoom={20}
    attributionControl={true}
    zoomControl={true}
    doubleClickZoom={true}
    scrollWheelZoom={true}
    dragging={true}
    animate={true}
    easeLinearity={0.35}
    onclick={this.handleClick}>
    >
    ...
    </LeafletMap>
    //In your handleClick function you get the information of lat and lng like this:
    handleClick = (e) => {
    const { lat, lng } = e.latlng;
    console.log(lat, lng);
}*/