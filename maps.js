function initialize() {
  console.log('something');
  var mapCanvas = document.getElementById('map');
  var mapOptions = {
      center: new google.maps.LatLng(39.7675, -105.0200),
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }
    var map = new google.maps.Map(mapCanvas, mapOptions);
}

function eventListener() {
  var address;
   $( '#submit' ).click( function() {
     address = $( '#address' ).val();
     // formSubmit();
     console.log( address );
   });
}

// function submit(n) {
//   var text = $("#input").val();
//   console.log(text);
//
//   preventDefault();
//   return false;
// };

function init() {
    eventListener();
}

$( function() {
    console.log( "ready!" );
    init();
});

// function formSubmit() {
//     $('#form').submit(submit);
// };

google.maps.event.addDomListener(window, 'load', initialize);
