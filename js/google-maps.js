function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 37.5485, lng: -121.9865};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 15,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'California, USA' // Title Location
    });
}