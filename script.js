var map;
var searchValue = searchInput.value;

function initMap() {
    let armenia = {
        lat:  40.177200,
        lng:  44.503490
    };
    map = new google.maps.Map(document.getElementById('map'), {
        center: armenia,
        zoom: 8.5,
        mapTypeId: 'roadmap',
    });
    infoWindow = new google.maps.InfoWindow();
}

searchBotton.onclick = function () {
    $.ajax({
        dataType: "json",
        url: "https://api.foursquare.com/v2/venues/explore?client_id=PH3VTX3HUG5A0LASL1G5V22QCZ4QHW5MMNCJ5Z4ONW2RUMVQ&client_secret=GJEUCYV1KGBBCCCY2KSCGVKQRAK4RTBIZ2MLJRYVXBPCYTXH&v=20180323&limit=10&ll=40.177200,44.503490&query="+searchValue,
        data: {},
        success: function( data ) {                           // console.log(data.response.groups[0].items);
            let arr= data.response.groups[0].items;
            console.log(arr.map(x=>x.venue.name +" "+ x.venue.location.address));
        },
        error: function(jqXHR, textStatus, errorThrown) {
            // Code for handling errors
        }
    });

};

// function showStoresMark(stores) {
//     var bounds = new google.maps.LatLngBounds();
//     for (var [index, store] of stores.entries()){
//         var latlng = new google.maps.LatLng(
//         );
//         let name = store["name"];
//             store["coordinates"]["latitude"],
//             store["coordinates"]["longitude"],
//         let address = store["addressLines"][0];
//         var openStatusText = store["openStatusText"];
//         var phoneNumber = store["phoneNumber"];
//         bounds.extend(latlng);
//         createMarker(latlng, name, address, openStatusText , phoneNumber, index+1)
//     }
//     map.fitBounds(bounds);
// }
