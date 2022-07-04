import React from "react";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";

import "../App.css";

// *** REMEMBER TO RESTRICT CALLS TO API FROM SETTINGS IN GOOGLE

const containerStyle = {
  width: "600px",
  height: "400px",
};

const center = {
  lat: 33.586419097249845,
  lng: -111.84726330310988,
};

const API_KEY = process.env.REACT_APP_API_KEY;

const Location = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: API_KEY,
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div>
      <h3 className="mt-3 mb-2 w-1/2 text-2xl container flex border-bottom border-dark justify-content-center">
        10810 E. Via Linda, Scottsdale, AZ, 85259
      </h3>
      <div className="container flex justify-content-center mb-2 ">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={4}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          {/* Child components, such as markers, info windows, etc. */}
          <>
            <h1>Couldn't get location</h1>
          </>
        </GoogleMap>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default Location;
