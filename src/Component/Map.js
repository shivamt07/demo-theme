import React, { PureComponent } from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const mapStyles = {        
    height: "100vh",
    width: "100%"};
  
  const defaultCenter = {
    lat: 29.472561, lng: 77.707130
  }
export default class Example extends PureComponent {
  render() {
    return (
        <LoadScript
        googleMapsApiKey='AIzaSyBCG9hQmn5jfStorZwFX-tHKvLG_5HCafo'>
         <GoogleMap
           mapContainerStyle={mapStyles}
           zoom={13}
           center={defaultCenter}
         />
      </LoadScript>
    );
  }
}
