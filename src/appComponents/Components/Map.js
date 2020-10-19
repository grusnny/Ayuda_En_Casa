import React from 'react';
import {
    GoogleMap,
    withScriptjs,
    withGoogleMap
} from 'react-google-maps';

const Map =(props)=>{
    return(
        <GoogleMap 
        defaultZoom={10}
        defaultCenter={{lat: 6.268178, lng: -75.567699}}
        />
    );
};
export default withScriptjs(
    withGoogleMap(
        Map
    )
)