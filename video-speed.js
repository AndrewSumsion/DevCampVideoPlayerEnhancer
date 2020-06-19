var controlBar = document.getElementsByClassName("vjs-control-bar")[0];
var getFirstChildWithClassName = function(parent, className) {
  for (var i = 0; i < parent.childNodes.length; i++) {
    if (parent.childNodes[i].classList.contains(className)) {
      return parent.childNodes[i];
    }        
  }
};

var playbackRate = getFirstChildWithClassName(controlBar, "vjs-playback-rate");
playbackRate.classList.remove("vjs-hidden");

var createMenuItem = function(speed) {
  var element = document.createElement("LI");
  element.setAttribute("class", "playback-item");
  element.appendChild(document.createTextNode(speed.toString() + "x"));
  element.addEventListener("click", function(){changeVideoSpeed(speed)})
  return element;
};

var itemList = getFirstChildWithClassName(getFirstChildWithClassName(playbackRate, "vjs-menu"), "vjs-menu-content");
var addMenuItem = function(item) {
  itemList.appendChild(item);
}

addMenuItem(createMenuItem(2.0));
addMenuItem(createMenuItem(1.75));
addMenuItem(createMenuItem(1.5));
addMenuItem(createMenuItem(1.25));
addMenuItem(createMenuItem(1.0));


var currentRateElement = document.getElementsByClassName('vjs-playback-rate-value')[0];
function changeVideoSpeed(speed) {
  gvideo.playbackRate = speed;
  currentRateElement.innerHTML = speed.toString() + 'x';
};
changeVideoSpeed(1.0);




