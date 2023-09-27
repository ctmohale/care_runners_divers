import { GoogleMap } from "@capacitor/google-maps";
import { useEffect, useRef } from "react";

const Map: React.FC = () => {
  const mapRef = useRef<HTMLElement>();
  let newMap: GoogleMap;

  useEffect(() => {
    createMap();
  }, []);

  async function createMap() {
    if (!mapRef.current) return;

    newMap = await GoogleMap.create({
      id: "my-cool-map",
      element: mapRef.current,
      apiKey: "AIzaSyDNNpZLzHIO3x8w-z36vTTCG-Fqa4v5dRE",
      config: {
        center: {
          lat: 33.6,
          lng: -117.9,
        },
        zoom: 8,
      },
    });
  }

  return (
    <div className="component-wrapper">
      <capacitor-google-map
        ref={mapRef}
        style={{
          display: "inline-block",
          width: "100%",
          height: "300px",
        }}
      ></capacitor-google-map>
    </div>
  );
};

export default Map;
