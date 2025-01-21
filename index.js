// Initialize and add the map
let map;

async function initMap() {
    // Locations
    const departure = { lat: 48.6015, lng: -2.8173 };
    const last_position = departure;

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
        label: { text: "09/03/2025", color: "black" },
    });

    // Set the polyline on the map
    journey.setMap(map);
}

initMap();