var theStreamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

var baseUrl = "https://wind-bow.gomix.me/twitch-api/";


function getChannelInfo() {
  theStreamers.forEach(function (channel) {

    function createURL(type, name) {
      return baseUrl + type + '/' + name + '?callback=?';
    };

    $.getJSON(createURL("streams", channel), function (data) {
      var game, userOnOff;

      if (data.stream === null) {
        game = "Offline";
        userOnOff = "offline";
      } else if (data.stream === undefined) {
        game = "Account Closed";
        userOnOff = "offline";
      } else {
        game = data.stream.game;
        userOnOff = "online";
      };





      $.getJSON(createURL("channels", channel), function (data) {
        var logo = data.logo != null ? data.logo : "https://dummyimage.com/50x50/ecf0e7/5c5457.jpg&text=0x3F",
          name = data.display_name != null ? data.display_name : channel,
          description = userOnOff === "online" ? ': ' + data.status : "";


        var html = '<a class="item-' + userOnOff + '" href="' + data.url + '"><div class="row text-left pb-1 pt-1 item">';
        html += '<div class="col-2 d-none d-sm-block ">';
        html += '<img class="userIMG p-2" src="' + logo + '" alt=""/></div>'

        html += '<div class="col-9 ' + userOnOff + ' pl-4"><div class="row align-items-center">';
        html += '<h4 class="m-0 mt-1 channelName">' + name + '</h4></div>';

        html += '<div class="row"><p class="mb-1">' + description + '</p></div></div>';

        html += '<div class="col-1 pt-3 pl-0"><i class="fas fa-user animated pulse infinite status-' + userOnOff + '"></i></div></div></a>'


        userOnOff === "online" ? $("#allResult").prepend(html) : $("#allResult").append(html);


      });
    });
  });
};


getChannelInfo();

var onlineBtn = document.querySelector(".btn-success");

onlineBtn.addEventListener("click", function () {
  styleToggler("none", "block");
});


var offlineBtn = document.querySelector(".btn-secondary");

offlineBtn.addEventListener("click", function () {
  styleToggler("block", "none");
});


var allBtn = document.querySelector(".all");

allBtn.addEventListener("click", function () {
  styleToggler("block", "block");
});


var online, offline;

function styleToggler(a, b) {
  online = document.querySelectorAll(".item-online");
  offline = document.querySelectorAll(".item-offline");

  offline.forEach(function (element) {
    element.style.display = a;
  });

  online.forEach(function (element) {
    element.style.display = b;
  });
}

var searchBtn = document.querySelector(".searchBtn");
searchBtn.addEventListener('click', function (event) {

});
var keys = [];
window.addEventListener("keydown", function (event) {

  if (event.key == "Backspace") {
    keys.pop();
  } else if (event.key.length == 1) {
    keys.push(event.key);
  }
  search(keys.join(""));
});

function search(inputText) {
  var test = document.getElementsByClassName("item");
  var length = inputText.length;

  for (var i = 0; i < test.length; i++) {
    if (inputText == test[i].textContent.substring(0, length)) {
      test[i].parentElement.style.display = "block";
    } else {
      test[i].parentElement.style.display = "none";
    }
  }
}