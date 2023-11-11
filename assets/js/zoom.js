function zoom(e) {
    var zoomer = e.currentTarget;
    var offsetX, offsetY;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX;
    e.offsetY ? offsetY = e.offsetY : offsetY = e.touches[0].pageY; 
    x = offsetX / zoomer.offsetWidth * 100;
    y = offsetY / zoomer.offsetHeight * 100;
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
  }