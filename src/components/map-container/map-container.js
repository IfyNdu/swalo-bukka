import { google_api_key } from 'config';
import { InfoWindow, Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import PropTypes from 'prop-types';
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

    const { activeMarker, selectedPlace, showingInfoWindow } = this.state;
    const { height, google, initialCenter, name, zoom } = this.props;

    return (
      <div style={{ padding: '1rem' }}>
        <Map {...{
          containerStyle: {
            height,
            position: 'relative'
          },
          google,
          initialCenter,
          onClick: this.onMapClicked,
          zoom
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

MapContainer.propTypes = {
  height: PropTypes.string,
  initialCenter: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number
  }),
  name: PropTypes.string,
  zoom: PropTypes.number
};

export default GoogleApiWrapper({
  apiKey: google_api_key
})(MapContainer);