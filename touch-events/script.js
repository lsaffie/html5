window.onload = function() {
  var canvas = document.getElementById('canvas-touch1');
  make_circle(canvas, "red");
  move(canvas);
  //var canvas = document.getElementById('canvas-touch1');
  //canvas.width = "300";
  //canvas.height = "300";
  //canvas.addEventListener('touchmove', function(event) {
  //  for (var i=0; i< event.touches.length; i++) {
  //    var touch = event.touches[i];
  //    ctx.beginPath();
  //    ctx.arc(touch.pageX, touch.pageY, 20, 0, 2*Math.PI, true);
  //    ctx.fill();
  //    ctx.stroke();
  //  }
  //},false);
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
      //obj.style.left = touch.pageX + 'px';
      //obj.style.top = touch.pageY + 'px';
      obj.style.left = touch.pageX;
      obj.style.top = touch.pageY;
    }
  }, false);
}

function new_circle() {
  var canvas = document.createElement('canvas');
  canvas.width="70";
  canvas.height="70";
  canvas.style.position = 'relative';
  //document.getElementById("circles").appendChild(canvas);
  //make_circle(canvas, "green");
  
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.arc(18,18,15,0,2*Math.PI, false);
  ctx.closePath();
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.stroke();

  document.getElementById("circles").appendChild(canvas);

  move(canvas);
}

// Prevent scrolling
document.body.addEventListener('touchmove', function(event) {
    event.preventDefault();
}, false); 
