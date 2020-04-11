window.onload = function () {
  initMap()
};
var map;

function initMap() {
    let armenia = {
        lat:  40.177200,
        lng:  44.503490
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: armenia,
        zoom: 8.5,
        // mapTypeId: 'roadmap',
    });
    // infoWindow = new google.maps.InfoWindow();
}