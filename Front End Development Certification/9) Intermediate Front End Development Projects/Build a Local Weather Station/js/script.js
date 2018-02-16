var cities = [
  "Venice",
  "Hong+Kong",
  "Istanbul",
  "New+York",
  "London",
  "Paris",
  "Cape+Town",
  "Amsterdam",
  "Beirut",
  "Kyoto",
  "Queenstown",
  "Barcelona",
  "Singapore",
  "Havana",
  "Florence",
  "Sydney",
  "Lisbon",
  "Rio+de+Janeiro",
  "Jaipur",
  "Lucerne",
  "Shanghai",
  "San+Francisco",
  "Rome",
  "Bruges",
  "Stockholm",
  "Cartagena",
  "Budapest",
  "Prague",
  "Edinburgh",
  "Busan",
  "Mexico+City",
  "Charleston",
  "Dubrovnik",
  "Riga",
  "Quito",
  "Vienna",
  "Quebec City",
  "Jerusalem",
  "Buenos+Aires",
  "Isfahan",
  "Seville",
  "Chicago",
  "Kiev",
  "Hamburg",
  "Krakow"
];


var tempValueC;
var tempValueF;
var latANDlon;
var cityEntered;

var searchURL = "https://api.openweathermap.org/data/2.5/forecast?q=";
var locationURL = "https://api.openweathermap.org/data/2.5/find?";
var apiKey = "&APPID=f0c7f1a6071bf1c3e32c2e120091a56a&units=imperial";


$(document).ready(function() {
  $(".searchArea").hide();
  $(".results").hide();
  $(".results2").hide();

  function tempConverter(temp) {
    tempValueF = temp;
    tempValueC = Math.round(5 / 9 * (temp - 32));
    return tempValueC;
  }

  clickedSearch = true;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      latANDlon =
        "lat=" +
        position.coords.latitude +
        "&lon=" +
        position.coords.longitude +
        "&cnt=1";
    });
  }

  var clickedSearch = true;
  $(".search").click(function() {
    if (clickedSearch) {
      $(".searchArea").fadeIn(300);
      clickedSearch = false;
    } else {
      $(".searchArea").fadeOut(300);
      clickedSearch = true;
    }
  });

  $("#celcius").click(function() {
    $("#celcius").addClass("active");
    $("#farenheid").removeClass("active");
    $("#tempVal").text(tempValueC);
  });

  $("#farenheid").click(function() {
    $("#farenheid").addClass("active");
    $("#celcius").removeClass("active");
    $("#tempVal").text(tempValueF);
  });

  $(".randomWeather").click(function() {
    $(".searchArea").fadeOut(300);
    clickedSearch = true;
    var randomNr = Math.round(Math.random() * cities.length);

    function getWeather(locationURL) {
      $.ajax({
        url: searchURL + cities[randomNr] + apiKey,
        success: function(result) {
          var city = result.city.name;
          var temp = tempConverter(result.list[0].main.temp);
          var wind = result.list[0].wind.speed + " km/h";
          var humidity = result.list[0].main.humidity;
          var description = result.list[0].weather[0].description;

          valUpdater(city, temp, wind, humidity, description);
        }
      });
    }
    getWeather(locationURL);
    $(".results").show();
    $(".results2").show();
  });



  $(".myLocation").click(function() {
    $(".searchArea").fadeOut(300);
    clickedSearch = true;
    $(".results").show();
    $(".results2").show();

    function getWeather(searchURL) {
      $.ajax({
        url: locationURL + latANDlon + apiKey,
        success: function(result) {
          var city = result.list[0].name;
          var temp = tempConverter(result.list[0].main.temp);
          var wind = result.list[0].wind.speed + " km/h";
          var humidity = result.list[0].main.humidity;
          var description = result.list[0].weather[0].description;

          valUpdater(city, temp, wind, humidity, description);
        }
      });
    }
    getWeather(locationURL);
  });

  $("#searchBTN").click(function() {
    cityEntered = $("#searchIn").val();

    function getWeather(searchURL) {
      $.ajax({
        url: searchURL + cityEntered + apiKey,
        success: function(result) {
          var city = result.city.name;
          var temp = tempConverter(result.list[0].main.temp);
          var wind = result.list[0].wind.speed + " km/h";
          var humidity = result.list[0].main.humidity;
          var description = result.list[0].weather[0].description;
          console.log(city);
          valUpdater(city, temp, wind, humidity, description);
        }
      });
    }
    getWeather(searchURL);
    $(".results").show();
    $(".results2").show();
  });

  function valUpdater(city, temp, wind, humidity, description) {
    $("#city").text(city);
    $("#tempVal").text(temp);
    $("#wind").text(wind);
    $("#humidity").text(humidity);
    $("#description").text(titleCase(description));
  }

  function titleCase(str) {
    var strToArr = str.toLowerCase().split(" ");

    var result = strToArr.map(function(val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });

    return result.join(" ");
  }


});
