import { InfoWindow, Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import React from 'react';

const coords = {
  lat: 9.00417,
  lng: 7.46609
};


export class MapContainer extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      activeMarker: {},
      selectedPlace: {},
      showingInfoWindow: false
    };
  }

  onMarkerClick = (props, marker) => {

    this.setState({
      activeMarker: marker,
      selectedPlace: props,
      showingInfoWindow: true
    });
  }

  onMapClicked = () => {

    if (this.state.showingInfoWindow) {

      this.setState({
        activeMarker: null,
        showingInfoWindow: false
      });
    }
  }

  render() {

    const { activeMarker, showingInfoWindow, selectedPlace } = this.state;
    const { google, initialCenter, name } = this.props;

    return (
      <div style={{ padding: '1rem' }}>
        <Map {...{
          containerStyle: {
            height: '300px',
            position: 'relative',
            width: '100%'
          },
          google,
          initialCenter,
          onClick: this.onMapClicked,
          zoom: 16
        }}>
          <Marker {...{
            name,
            onClick: this.onMarkerClick,
            position: coords,
          }} />
          <InfoWindow
            marker={activeMarker}
            visible={showingInfoWindow}>
            <div>
              <h1>{selectedPlace.name}</h1>
            </div>
          </InfoWindow>
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyCthJadV5TLAeYuhEipy2_fKeFfXl0Z-I0'
})(MapContainer);