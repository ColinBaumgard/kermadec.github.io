// Initialize and add the map
let map;

async function initMap() {
    // The location of Hennebont
    const departure = { lat: 46.794, lng: -1.285 };
    const last_position = { lat: 47.794, lng: -3.285 };
    // Request needed libraries.
    //@ts-ignore
    const { Map } = await google.maps.importLibrary("maps");
    const { Marker } = await google.maps.importLibrary("marker");
    const { Polyline } = await google.maps.importLibrary("maps");

    // The map, centered at Hennebont
    map = new Map(document.getElementById("map"), {
        zoom: 4,
        center: last_position,
        mapId: "DEMO_MAP_ID",
    });

    // The marker, positioned at departure
    const dep_marker = new Marker({
        map: map,
        position: departure,
        title: "Depart",
        label: { text: "01/03/2025", color: "black" },
    });

    // The marker, positioned at last position
    const last_pos_marker = new Marker({
        map: map,
        position: last_position,
        title: "Kermadec",
        label: { text: "03/03/2025", color: "black" },
    });

    // Define the coordinates for the polyline
    const polylinePath = [
        departure,
        { lat: 48.8566, lng: 2.3522 }, // Paris
        { lat: 51.5074, lng: -0.1278 }, // London
        { lat: 40.7128, lng: -74.0060 }, // New York
        last_position,
    ];

    // Create the polyline
    const journey = new Polyline({
        path: polylinePath,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
    });

    // Set the polyline on the map
    journey.setMap(map);
}

initMap();