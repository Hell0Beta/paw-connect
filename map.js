
const fs = require('fs');

var map = L.map('map').setView([0, 0], 2);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker;

function updatePosition(position) {
    var lat = position.coords.latitude;
    var lon = position.coords.longitude;
    
    const pup = {
        la : lat,
        lo : lon
    }

    const jsonData = JSON.stringify(pup, null, 2);

    fs.writeFile('pos.json', jsonData, (err) => {
        if (err) {
            console.error('Error writing to file', err)      
        }else{
        console.log('Data successfully written to file');
        }
    });

    document.getElementById('lat').textContent = lat.toFixed(6);
    document.getElementById('lon').textContent = lon.toFixed(6);

    if (marker) {
        marker.setLatLng([lat, lon]);
    } else {
        marker = L.marker([lat, lon]).addTo(map);
    }

    map.setView([lat, lon], 13);
}

function handleError(error) {
    console.error("Error getting location:", error.message);
}

if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition(updatePosition, handleError);
} else {
    alert("Geolocation is not supported by your browser");
}
