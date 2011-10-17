window.onload = function() {
  var canvas = document.getElementById('canvas-touch1');
  make_circle(canvas, "red");
  move(canvas);
}

function make_circle(canvas, color) {
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.arc(18,18,15,0,2*Math.PI, false);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.stroke();
}

function move(obj) {
  obj.addEventListener('touchmove', function(event) {
    // If there's exactly one finger inside this element
    if (event.targetTouches.length == 1) {
      var touch = event.targetTouches[0];
      // Place element where the finger is
      obj.style.left = touch.pageX + 'px';
      obj.style.top = touch.pageY + 'px';
    }
  }, false);
}

function new_circle() {
  var colorArray = ["red", "blue", "green", "yellow"];
  var color= colorArray[Math.floor(Math.random() * colorArry.length)];
  var canvas = document.createElement('canvas');
  canvas.style.position = 'relative';
  canvas.width="50";
  canvas.height="50";
  document.body.appendChild(canvas);
  make_circle(canvas, color);
  move(canvas);
}


