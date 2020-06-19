let gvideo = document.getElementById("my-video_html5_api");

var container = document.getElementsByClassName("guide-title")[0];
var watermark = document.createElement("span");
watermark.classList.add("dvpe-watermark");
watermark.innerHTML = "You are using <b>DevCamp Video Player Enhancer</b> by Andrew Sumsion";
container.insertBefore(watermark, container.childNodes[0]);
