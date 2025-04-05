// components/MapCard.tsx
import { GoogleMap, LoadScript } from "@react-google-maps/api";
import { useEffect, useRef } from "react";

const containerStyle = {
  width: "100%",
  height: "400px",
  borderRadius: "10px",
  overflow: "hidden",
};

interface IMapCardProps {
  pins: { lat: number; lng: number }[];
}

const libraries: "marker"[] = ["marker"];

export const MapCard = ({ pins }: IMapCardProps) => {
  const mapRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.marker.AdvancedMarkerElement[]>([]);

  const handleMapLoad = (map: google.maps.Map) => {
    mapRef.current = map;
    renderMarkers(pins); // render initial
  };

  const renderMarkers = (newPins: { lat: number; lng: number }[]) => {
    if (!mapRef.current || !window.google?.maps?.marker) return;

    // Clear old markers
    (markersRef.current as any[]).forEach((marker) => marker.setMap(null));
    markersRef.current = [];

    const { AdvancedMarkerElement } = window.google.maps.marker;

    // Add new markers
    const newMarkers = newPins.map((pin) => {
      const marker = new AdvancedMarkerElement({
        map: mapRef.current!,
        position: pin,
        title: "Pin",
      });
      return marker;
    });

    markersRef.current = newMarkers;
  };

  // 🔁 Re-render markers when pins change
  useEffect(() => {
    if (mapRef.current) {
      renderMarkers(pins);
    }
  }, [pins]);

  return (
    <LoadScript
      googleMapsApiKey="AIzaSyDhaX5caSDKfuoKMpMdEFTWF15g_vJkMh4"
      libraries={libraries}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={pins[0]}
        zoom={13}
        onLoad={handleMapLoad}
        options={{
          mapId: "ce3e98b0e0b40597", // ✅ The correct way!
        }}
      />
    </LoadScript>
  );
};
