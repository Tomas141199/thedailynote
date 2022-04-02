import React, { useState } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Field from "../Field";

export const MapContainer = ({ google }) => {
  const [address, setAddress] = useState("");
  const [mapCenter, setMapCenter] = useState({
    lat: 19.0043346,
    lng: -98.20169539999999,
  });

  const handleChange = (address) => {
    setAddress(address);
  };

  const handleSelect = (address) => {
    setAddress(address);

    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        console.log("Success", latLng);

        // update center state
        setMapCenter(latLng);
      })
      .catch((error) => console.error("Error", error));
  };

  return (
    <div id="googleMaps" className="relative h-72 mb-8 overflow-y-hidden">
      <PlacesAutocomplete
        value={address}
        onChange={(value) => handleChange(value)}
        onSelect={(value) => handleSelect(value)}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="relative">
            <Field name="ubicacion" label="Ubicacion" {...getInputProps({})} />
            <div className="autocomplete-dropdown-container absolute top-10 z-30 flex flex-col w-full bg-white rounded drop-shadow-lg">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                return (
                  <div
                    key={Math.random()}
                    {...getSuggestionItemProps(suggestion)}
                  >
                    <span className="cursor-pointer">
                      {suggestion.description}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>

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
})(MapContainer);
