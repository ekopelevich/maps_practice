function initialize() {

  var mapCanvas = document.getElementById('map');
  var mapOptions = {
      center: new google.maps.LatLng(39.7675, -105.0200),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map(mapCanvas, mapOptions);

    placePin(map);

    console.log(google.maps.LatLng);
}

function placePin(map) {
  var myLatLng = {lat: 39.7675, lng: -105.0200};

  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
    });
  console.log(marker.position);
}
 var cat = 8;

function testAddress() {
  var pinAddress = $.get('https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA&key=YAIzaSyBoXK03DpDGwohDBYYR2CdtSYnr4W0H5no');
  console.log(pinAddress);
}

// function geocodeAddress(geocoder, resultsMap) {
//   address = $('#address').value;
//   geocoder.geocode({'address': address}, function(results, status) {
//     if (status === google.maps.GeocoderStatus.OK) {
//       resultsMap.setCenter(results[0].geometry.location);
//       var marker = new google.maps.Marker({
//         map: resultsMap,
//         position: results[0].geometry.location
//       });
//     } else {
//       alert('Geocode was not successful for the following reason: ' + status);
//     }
//   });
// }

function eventListener() {
  var address;
   $( '#submit' ).click( function() {
     address = $( '#address' ).val();
     // formSubmit();
     console.log( address );
   });
}

// function formSubmit() {
//     $('#address-search').submit(submit);
// }

// function submit(n) {
//   var address = $('#address').val();
//   console.log(address);

//   preventDefault();
//   return false;
// }

function init() {
  initialize();
  testAddress();
  eventListener();
}

$( function() {
  console.log( "ready!" );
  init();
});
