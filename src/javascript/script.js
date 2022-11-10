import * as dotenv from 'dotenv'
dotenv.config()
console.log(process.env)

const form = document.querySelector('form')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    mapboxgl.accessToken = process.env.MAP_API_KEY;
    const map = new mapboxgl.Map({
        container: 'map', // container ID
        // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
        style: 'mapbox://styles/mapbox/streets-v11', // style URL
        center: [4.3517103, 50.8503396], // starting position [lng, lat]
        zoom: 9, // starting zoom
        projection: 'globe' // display the map as a 3D globe
    });

    map.on('style.load', () => {
        map.setFog({}); // Set the default atmosphere style
    });

})