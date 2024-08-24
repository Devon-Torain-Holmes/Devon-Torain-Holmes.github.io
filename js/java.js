// Jokes function*

function joke1() {
  var image = document.createElement('img');
  var div = document.getElementById('flex-joke');
  image.src = "Media\Green.jpg";

  div.appendChild(image);
}

//Side Nav Bar 

function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

//Loader

var loader;
function loadNow(opacity) {
   
      if (opacity <=0) {
       displayContent();
      }
      else {
        loader.style.opacity = opacity;
        window.setTimeout(function() {
          loadNow(opacity -0.03)
        }, 100)

      }
}

function displayContent() {
  loader.style.display = 'none';
  document.getElementById('content').style.display = 'block';

}

document.addEventListener("DOMContentLoaded", function(){

  loader = document.getElementById('loader');
  loadNow(1);
});