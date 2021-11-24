import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';

const mapStyles = {
  width: '300px',
  height: '300px'
};

export class MapSelector extends Component {
  render() {
    return (
      <Map
        google={this.props.google}
        zoom={14}
        style={mapStyles}
        initialCenter={{
         lat: 58.41086,
         lng: 15.62157
        }}
      />
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyDXgbejuXrfaTZ2LS-w-GIMZzP8ibLH6-Y"
})(MapSelector);