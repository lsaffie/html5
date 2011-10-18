window.onload = function() {
  var obj1 = document.getElementById('canvas-touch1');
  var obj2 = document.getElementById('canvas-touch2');
  var obj3 = document.getElementById('canvas-touch3');
  make_arc(obj1, "red");
  make_arc(obj2, "red");
  make_arc(obj3, "red");
}

function make_arc(canvas, color) {
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.arc(18,18,15,0,2*Math.PI, false);
  ctx.fillStyle = color;
  ctx.fill();
  ctx.stroke();
  move(canvas);
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

function new_canvas() {
  var canvas = document.createElement('canvas');
  canvas.width="70";
  canvas.height="70";
  canvas.style.position = 'relative';
  document.getElementById("circles").appendChild(canvas);
  make_arc(canvas, "green");
  move(canvas);
}

// Prevent scrolling
document.body.addEventListener('touchmove', function(event) {
  event.preventDefault();
}, false); 
