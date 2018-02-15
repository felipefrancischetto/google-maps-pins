import React from 'react';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from 'react-google-maps';

const Map = withScriptjs(withGoogleMap( props => {
  return (
    <GoogleMap 
      defaultZoom={16}
      defaultCenter={{ 
        lat: -23.6978084,
        lng: -46.5673559
      }}  
    >

    </GoogleMap>
  )
}));

export default Map;