import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';


const containerStyle = {
    width: '100vw',
    height: '100vh'
};

const location = {
    lat: 23.810678,
    lng: 90.421903
};

const MyLocation = () => {

    return (
        <div>
            <LoadScript
                googleMapsApiKey="AIzaSyBtBR-isanIGaB7n_BPv6PI_sm2-gfWzaE"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={location}
                    zoom={18}
                >
                    <Marker
                        position={location}
                    />
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default MyLocation;