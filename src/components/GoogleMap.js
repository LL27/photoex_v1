import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import mapbg from "../img/map-bg.png";

export class MapContainer extends React.Component {
  state = {
    showingInfoWindow: true, //Hides or the shows the infoWindow
    activeMarker: {}, //Shows the active marker upon click
    selectedPlace: {}, //Shows the infoWindow to the selected place upon a marker
  };
  fetchPlaces(mapProps, map) {
    const { google } = mapProps;
    const service = new google.maps.places.PlacesService(map);
    // ...
  }
  onMarkerClick = (props, marker, e) =>
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true,
    });

  onClose = (props) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
      });
    }
  };

  render() {
    const mapStyles = {
      width: "100%",
      height: "100%",
      position: "relative",
      display: "block",
    };
    const containerStyle = { display: "block", width: "100%", height: "100%" };

    return (
      <Map
        style={mapStyles}
        containerStyle={containerStyle}
        google={this.props.google}
        initialCenter={{
          lat: 48.8462163,
          lng: 2.3795119,
        }}
        zoom={15}
        onReady={this.fetchPlaces}
      >
        <Marker
          onClick={this.onMarkerClick}
          name={"Photo Expression"}
          address={"2 Rue Beccaria, 75012 Paris"}
          image={mapbg}
          instructions={
            "Le studio se situe en face du 128 rue de Charenton, entre les sorties de métro Gare de Lyon et Reuilly-Diderot"
          }
        />
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          onClose={this.onClose}
        >

          <div className="card" style={{ maxWidth: 240}}>
            <div className="card-image">
              <figure className="image">
                <img
                  src={this.state.selectedPlace.image}
                  alt="Photo Expression"

                />
              </figure>
            </div>
            <div className="card-content" style={{ padding: 0 }}>
              <div className="content">
                <p style={{ margin: "0.5rem 0rem", fontWeight: "600" }}>
                  {this.state.selectedPlace.name} <br />
                  <small style={{ fontWeight: "300"}}>
                    {this.state.selectedPlace.address}
                  </small>
                </p>

                <h6
                  style={{
                    marginTop: "0rem",
                    marginBottom: ".5rem",
                    fontWeight: "200",
                    fontSize: '11px'

                  }}
                >
                  {this.state.selectedPlace.instructions}
                </h6>

                <a
                  className="pull-right"
                  style={{ fontWeight: "600" }}
                  href="https://www.google.com/maps/place/Photo+Expression/@48.8462163,2.3795119,15z/data=!4m5!3m4!1s0x0:0x875bd3af8586dc20!8m2!3d48.8462163!4d2.3795119"
                >
                  <small>Ouvrir dans Google Maps</small>
                </a>
              </div>
            </div>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "",
})(MapContainer);
