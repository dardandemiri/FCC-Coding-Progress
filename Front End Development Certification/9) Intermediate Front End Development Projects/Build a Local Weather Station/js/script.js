$(document).ready(function () {
  $(".searchArea").hide();
  clickedSearch = true;
});



var clickedSearch = false;
$(".search").click(function() {

  if(clickedSearch){
    $(".searchArea").fadeIn(300);
    clickedSearch = false;
  }else{
    $(".searchArea").fadeOut(300);
    clickedSearch = true;
  }
});

$("#celcius").click(function(){
  $("#celcius").addClass("active");
  $("#farenheid").removeClass("active");
});
$("#farenheid").click(function(){
  $("#farenheid").addClass("active");
  $("#celcius").removeClass("active");
});



var latitude;
var longitude;

$(".myLocation").click(function() {
    $(".searchArea").fadeOut(300);
    clickedSearch = true;

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        latitude = position.coords.latitude;
        longitude = position.coords.longitude;
      });
    }




});

$(".randomWeather").click(function() {
    $(".searchArea").fadeOut(300);
    clickedSearch = true;
});
