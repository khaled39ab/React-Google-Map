import React, { useState } from 'react';
import { DirectionsRenderer, DirectionsService, GoogleMap, LoadScript } from '@react-google-maps/api';

const Direction = ({origin, destination}) => {
    const [response, setResponse] = useState(null);

    const directionsCallback =(res)=> {    
        if (res !== null) {
          if (res.status === 'OK') {
            setResponse(res)
          } else {
            console.log('response: ', res)
          }
        }
      }
    return (
        <div>
            <LoadScript
                googleMapsApiKey="AIzaSyBtBR-isanIGaB7n_BPv6PI_sm2-gfWzaE" //fake api
            ></LoadScript>
            <GoogleMap
                // required
                id='direction-example'
                // required
                mapContainerStyle={{
                    height: '80vh',
                    width: '50vw'
                }}
                // required
                zoom={18}
                // required
                center={{
                    lat: 0,
                    lng: -180
                }}
                
            >
                {
                    (
                        destination !== '' &&
                        origin !== ''
                    ) && (
                        <DirectionsService
                            // required
                            options={{
                                destination: destination,
                                origin: origin,
                                travelMode: 'DRIVING'
                            }}
                            // required
                            callback={directionsCallback}
                        />
                    )
                }

                {
                    response !== null && (
                        <DirectionsRenderer
                            // required
                            options={{
                                directions: response
                            }}
                        />
                    )
                }
            </GoogleMap>
        </div>
    );
};

export default Direction;