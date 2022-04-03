import React, { useState } from "react";
import { Map, Marker, GoogleApiWrapper } from "google-maps-react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import Field from "../Field";

export const MapContainer = ({
  google,
  address,
  setAddress,
  mapCenter,
  setMapCenter,
}) => {
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
    <div
      id="googleMaps"
      className="relative h-72 mb-8 w-11/12 mx-auto sm:w-full overflow-y-hidden"
    >
      <PlacesAutocomplete
        value={address}
        onChange={(value) => handleChange(value)}
        onSelect={(value) => handleSelect(value)}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div className="relative w-full mt-4">
            <Field name="ubicacion" label="Ubicacion" {...getInputProps({})} />
            <div className="autocomplete-dropdown-container absolute top-10 z-30 flex flex-col w-full bg-white rounded shadow-lg">
              {loading && <div>Loading...</div>}
              {suggestions.map((suggestion) => {
                return (
                  <div
                    key={Math.random()}
                    {...getSuggestionItemProps(suggestion)}
                    className="w-full"
                  >
                    <span className="block cursor-pointer w-full hover:bg-slate-100 hover:font-bold">
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
