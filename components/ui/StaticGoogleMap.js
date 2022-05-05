import { Map, Marker, GoogleApiWrapper } from "google-maps-react";

const StaticGoogleMap = ({ google, mapCenter }) => {
  return (
    <div
      id="googleMaps"
      className="relative h-48 mb-8 mt-1 w-11/12 mx-auto sm:w-full overflow-y-hidden"
    >
      <Map
        style={{
          overflow: "hidden",
          height: "250px",
          width: "100%",
        }}
        google={google}
        initialCenter={{
          lat: mapCenter.lat,
          lng: mapCenter.lng,
        }}
        center={{
          lat: mapCenter.lat,
          lng: mapCenter.lng,
        }}
        zoom={16}
      >
        <Marker
          position={{
            lat: mapCenter.lat,
            lng: mapCenter.lng,
          }}
        />
      </Map>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyChVyb2nPgMzs1jsi7c-2y_j7pMZw6YU-E",
})(StaticGoogleMap);
