var donePressing = true;
$(window).keydown(function(e){
  if(e.which == 32) {
    e.preventDefault();
    if (e.which == 32 && donePressing) {
      if (gvideo.paused)
        gvideo.play();
      else
        gvideo.pause();
      donePressing = false;
    }
  }
});

$(window).keyup(function(e){
  if(e.which == 32 && !donePressing) {
    donePressing = true;
  }
});

$(window).keydown(function(e){
  if(e.which == 37 && !e.shiftKey) {
    e.preventDefault();
    gvideo.currentTime = gvideo.currentTime - 5;
  }
  if(e.which == 39 && !e.shiftKey) {
    e.preventDefault();
    gvideo.currentTime = gvideo.currentTime + 5;
  }
  if(e.which == 37 && e.shiftKey) {
    document.getElementsByClassName("b3")[0].click();
  }
  if(e.which == 39 && e.shiftKey) {
    document.getElementsByClassName("b3")[1].click();
  }
});




