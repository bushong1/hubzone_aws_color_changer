// ==UserScript==
// @name          Hubzone Upper vs Lower
// @description	  Change the color of the AWS Console between lower and upper
// @namespace     http://hubzone.sba.gov/
// @include       http://console.aws.amazon.com*

//by Charles Bushong (@totalnerd)
// ==/UserScript==
//
// In Chrome, Navigate to "chrome://extensions/", then drag this file into the browser

function hubzone_change_color(color) {
  document.getElementById("nav-menubar").style.background = "linear-gradient(to bottom,#444 0,#"+color+" 100%)";

  var navs = document.getElementsByClassName("nav-elt");
  for(var i = 0; i < navs.length; i++)
  {
    navs[i].style.background = "linear-gradient(to bottom,#444 0,#"+color+" 100%)"
  }
}

(function (){
	window.addEventListener('load', function() {
    var color_map = {"sba-one": "0ca702",
                     "sbaone-prod": "ef0d0d"}
    var current_zone = document.getElementById("awsc-login-display-name-account").innerHTML;
		hubzone_change_color(color_map[current_zone]);
	}, false);
})();

