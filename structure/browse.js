
// Page init event


var playlist;  // variable used to remember the name of the playlist being opened

document.addEventListener('init', function(event) {
  var page = event.target; 

  if (page.matches('#playlist-page')) {  //when the playlist-page is initialized the name of the selected playlist will be written on the toolbar

    page.querySelector('#playlist_title').innerHTML = playlist;

    //the postchange event is used to change the dots indicating which carousel is currently displayed

    page.querySelector('#carousel').addEventListener("postchange", function() {
      page.querySelector('#dot1').classList.toggle("circle_current");
      page.querySelector('#dot2').classList.toggle("circle_current");
    });
    document.querySelector('ons-carousel').setAttribute('someAttribute', 'true')
  }

  if (page.matches('#play-page')) {
    page.querySelector('#from_playlist').innerHTML = playlist;

    page.querySelector('#back_button').onclick = function() {
      document.querySelector('#navigator').popPage();
    };
  }

});

// The openPlaylist is used to open the playlist screen with the proper name.

function openPlaylist(id) {
  playlist = document.querySelector('#'+id + "_name").innerHTML;
  document.querySelector('#navigator').pushPage('playlist.html');
}

function openPlaylist2(id) {
  playlist = document.querySelector('#'+id + "_name").innerHTML;
  document.querySelector('#navigator').pushPage('playlist2.html');
}

function openPlaylist3(id) {
  playlist = document.querySelector('#'+id + "_name").innerHTML;
  document.querySelector('#navigator').pushPage('playlist3.html');
}

function openPlaylist4(id) {
  playlist = document.querySelector('#'+id + "_name").innerHTML;
  document.querySelector('#navigator').pushPage('playlist4.html');
}

function openPlaylist5(id) {
  playlist = document.querySelector('#'+id + "_name").innerHTML;
  document.querySelector('#navigator').pushPage('playlist5.html');
}

function openPlaylist6(id) {
  playlist = document.querySelector('#'+id + "_name").innerHTML;
  document.querySelector('#navigator').pushPage('playlist6.html');
}

 // The shuffle_play is used to display the toast on the bottom of the screen

function shuffle_play() {
  if (document.querySelector('ons-toast').style.display == "none") {
    document.querySelector('ons-toast').show();
  }
  document.getElementById("play_icon").classList.remove("fa-play-circle-o");
  document.getElementById("play_icon").classList.add("fa-pause-circle-o");
}

function openPlayScreen() {
  document.querySelector('#navigator').pushPage('play.html', { animation: "lift" });
}

function openPlayScreen2() {
  document.querySelector('#navigator').pushPage('play2.html', { animation: "lift" });
}

function openPlayScreen3() {
  document.querySelector('#navigator').pushPage('play3.html', { animation: "lift" });
}

function openPlayScreen4() {
  document.querySelector('#navigator').pushPage('play4.html', { animation: "lift" });
}

function openPlayScreen5() {
  document.querySelector('#navigator').pushPage('play5.html', { animation: "lift" });
}

function openPlayScreen6() {
  document.querySelector('#navigator').pushPage('play6.html', { animation: "lift" });
}

// Used to togle the play/paused icon on the play screen and the toast on the playlist page

function play_toggle(id)　{
  document.getElementById(id).classList.toggle("fa-pause-circle-o");
  document.getElementById(id).classList.toggle("fa-play-circle-o"); 
}

window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

window.fn.load = function(page) {
  var content = document.getElementById('content');
  var menu = document.getElementById('menu');
  content.load(page)
    .then(menu.close.bind(menu));
};
window.fn = {};

window.fn.open = function() {
  var menu = document.getElementById('menu');
  menu.open();
};

