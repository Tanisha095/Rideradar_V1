import { useEffect, useRef, useState } from "react";
import "leaflet/dist/leaflet.css";
import type L from "leaflet";
import type { TrackerLocation } from "@/types/telemetry";
export const SURAT_CENTER: [number, number] = [21.1702, 72.8311];
export function TrackerMap({ location }: { location: TrackerLocation | null }) {
  const mapNode = useRef<HTMLDivElement>(null); const mapRef = useRef<L.Map | null>(null); const markerRef = useRef<L.Marker | null>(null); const [mapReady, setMapReady] = useState(false);
  useEffect(() => { let disposed = false; void import("leaflet").then(({ default: leaflet }) => { if (disposed || !mapNode.current || mapRef.current) return; const map = leaflet.map(mapNode.current, { zoomControl: true }).setView(SURAT_CENTER, 12); leaflet.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap contributors" }).addTo(map); mapRef.current = map; setMapReady(true); window.setTimeout(() => map.invalidateSize(), 0); }); return () => { disposed = true; mapRef.current?.remove(); mapRef.current = null; }; }, []);
  useEffect(() => { if (!mapReady || !location) return; const point: [number, number] = [location.latitude, location.longitude]; void import("leaflet").then(({ default: leaflet }) => { const map = mapRef.current; if (!map) return; if (!markerRef.current) { markerRef.current = leaflet.marker(point, { icon: leaflet.divIcon({ className: "tracker-marker", html: "<span></span>", iconSize: [30, 30], iconAnchor: [15, 15] }) }).addTo(map); map.setView(point, 15, { animate: true }); } else markerRef.current.setLatLng(point); }); }, [location, mapReady]);
  return <div className="map-frame"><div ref={mapNode} className="map-canvas" /><div className="map-caption"><span className="map-key" /> Surat operations view</div>{location && <button className="recenter-button" onClick={() => mapRef.current?.flyTo([location.latitude, location.longitude], 15)} type="button">Recenter on tracker</button>}</div>;
}