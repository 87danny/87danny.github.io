//declares map with a default location
let mymap = L.map("mapid");
mymap.setView([40.61, -73.99], 13);

//https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png
//https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png
L.tileLayer("http://tile.stamen.com/toner/{z}/{x}/{y}{r}.png", {
  attribution: 'Map data &copy; <a href="http://maps.stamen.com">Stamen</a>',
  maxZoom: 18,
  tileSize: 512,
  zoomOffset: -1,
}).addTo(mymap);

let marker = L.marker;

let circle = L.circle([40.61, -73.99], {
  color: "black",
  fillColor: "grey",
  fillOpacity: 0.5,
  radius: 800,
});
circle.addTo(mymap);

/*
//button onclick to map to your location
document
  .querySelector("#location_share")
  .addEventListener("click", function () {
    let options = {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0,
    };

    //getCurrentPosition - Success
    function success(pos) {
      //flyTo (animates setView)
      mymap.flyTo([pos.coords.latitude, pos.coords.longitude], 14);

      marker([pos.coords.latitude, pos.coords.longitude])
        .addTo(mymap)
        .bindPopup("Your Location")
        .openPopup();

      circle.remove(mymap);
    }

    //getCurrentPosition - Fail
    function error(err) {
      console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    navigator.geolocation.getCurrentPosition(success, error, options);
  }); */
