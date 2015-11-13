// jQuery.ajaxPrefilter(function(options) {
//    if (options.crossDomain && jQuery.support.cors) {
//        options.url = "https://cors-anywhere.herokuapp.com/" + options.url;
//    }
// });

//function initialize() {

  var mapCanvas = document.getElementById( 'map' );
  var mapOptions = {
      center: new google.maps.LatLng( {lat: 39.7675, lng: -105.0200} ),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var map = new google.maps.Map( mapCanvas, mapOptions );

    //placePin(map, {lat: 39.7675, lng: -105.0200}); //this is a static pin

    console.log(google.maps.LatLng);
//}

function eventListener() {
  var address,
      formattedAddress;

  $( '#submit' ).click( function() {
    address = $( '#address' ).val();
    getAddressAgain( address );
    getAddressAddPin( address );
  });
}

function getAddressAddPin( address ) {

  console.log( address );
  localStorage.setItem( 'address', address );

  var mapsAPI = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

  var defferedPin = $.get( mapsAPI + address);

  defferedPin.done(function( data ) {
    localStorage.setItem( 'deferredPin', JSON.stringify(data) );
    placePin(map, data.results[0].geometry.location);
    console.log( data );
  });

  defferedPin.fail(function( data ) {
    console.log( 'Failed');
  });
}

function getAddressAgain( address ) {

  console.log( address + " gotAddressAgain");
  //localStorage.setItem( 'address', address );

  var mapsAPI = 'https://maps.googleapis.com/maps/api/geocode/json?address=';

  var defferedMap = $.get( mapsAPI + address);

  defferedMap.done(function( data ) {
    localStorage.setItem( 'defferedMap', JSON.stringify(data) );
    adjustMapCenter(map, data.results[0].geometry.location);
    console.log( data );
  });

  defferedMap.fail(function( data ) {
    console.log( 'Failed');
  });
}

// Retrieve our data and plot it
    // $.getJSON(url, function(data, textstatus) {
    //       console.log(data);
    //       $.each(data, function(i, entry) {
    //           var marker = new google.maps.Marker({
    //               position: new google.maps.LatLng(entry.location_1.latitude,
    //                                                entry.location_1.longitude),
    //               map: map,
    //               title: location.name
    //           });
    //       });
    // });

// function createMap( map, location ) {
//   var mapCanvas = document.getElementById( 'map' );
//   var myLatLng = location;
//   var mapOptions = {
//       center: myLatLng, //new google.maps.LatLng( {lat: 39.7675, lng: -105.0200} ),
//       zoom: 15,
//       mapTypeId: google.maps.MapTypeId.ROADMAP
//     };
//
//     map = new google.maps.Map( mapCanvas, mapOptions );
//
//     //placePin(map, {lat: 39.7675, lng: -105.0200}); //this is a static pin
//
//     console.log(google.maps.LatLng);
// }

function adjustMapCenter( map, location ) {
  var myLatLng = location;

  var mapOptions = {
      center: myLatLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    map = new google.maps.Map( mapCanvas, mapOptions );
}

function placePin( map, location ) {
  var myLatLng = location;

  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Test Map'
    });

  console.log( marker.position );
}

$( function() {
  console.log( "ready!" );
  eventListener();
  //initialize();
});
