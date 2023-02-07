import { GoogleMap, LoadScript } from '@react-google-maps/api';
import React from 'react';


const containerStyle = {
    width: '400px',
    height: '400px'
};

const center = {
    lat: 23.810678,
    lng: 90.421903
};

const MyLocation = () => {

    return (
        <div>
            <LoadScript
                googleMapsApiKey="YOUR_API_KEY"
            >
                <GoogleMap
                    mapContainerStyle={containerStyle}
                    center={center}
                    zoom={15}
                >
                    { /* Child components, such as markers, info windows, etc. */}
                    <></>
                </GoogleMap>
            </LoadScript>
        </div>
    );
};

export default MyLocation;