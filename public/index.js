var newWidth;
var newHeight;
var midPoint;
var greyScale = true;

document.addEventListener("DOMContentLoaded", function(event) {
  const c=document.getElementById('c');
  c.hidden = true;

  function downloadCanvas(link, canvasId, filename) {
    link.href = document.getElementById(canvasId).toDataURL();
    link.download = filename;
  }

  document.getElementById('download').addEventListener('click', function() {
    downloadCanvas(this, 'c', 'mytransbodyis.png');
  }, false);
});

function myFunction() {
  var rainbow = new Image();
  rainbow.src = "rainbow.png";
  rainbow.onload = function() {
    var canvas = document.getElementById("c");
    var container = document.getElementById("preview-container");
    var ctx = canvas.getContext("2d");
    ctx.globalAlpha = 0.4;
    ctx.drawImage(
      rainbow,
      container.clientWidth - newWidth,
      newHeight - 70,
      newWidth,
      container.clientHeight / 5,
    );
    ctx.globalAlpha = 1.0;
    ctx.font = "40px caviar_dreamsregular";
    var myText = document.getElementById("myText");
    ctx.fillText(myText.value, container.clientWidth - newWidth + 20, newHeight - 20);
  }
}

function uploadFile() {
  document.getElementById('upload-image').hidden = true;
  document.getElementById('c').hidden = false;
  var file = document.querySelector("input[type=file]").files[0]; //sames as here
  var reader = new FileReader();

  reader.onloadend = function() {
    document.getElementById("upload-image").hidden = true;
    document.getElementById("upload-image").height = 0;
    var canvas = document.getElementById("c");
    var container = document.getElementById("preview-container");
    canvas.height=container.clientHeight;
    canvas.width=container.clientWidth;

    var img = new Image();
    img.src = reader.result;
    img.setAttribute('crossOrigin', 'anonymous');
    img.onload = function() {
      var ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      var wrh = img.width / img.height;
      newWidth = container.offsetWidth;
      newHeight = newWidth / wrh;
      if (newHeight > container.offsetHeight) {
          newHeight = container.offsetHeight;
          newWidth = newHeight * wrh;
      }
      midPoint = (container.clientWidth - newWidth) / 2;

      ctx.drawImage(img, midPoint, 0, newWidth, newHeight);
      ctx.globalAlpha = 1.0;
      var rainbow = new Image();
      rainbow.src = "rainbow.png";
      rainbow.onload = function() {
        ctx.globalAlpha = 0.4;
        ctx.drawImage(
          rainbow,
          container.clientWidth - newWidth,
          -20,
          newWidth,
          container.clientHeight / 4,
        );
        ctx.globalAlpha = 1.0;
        ctx.font = "40px market_saturdayregular";
        ctx.fillText("#MyTransBody is...", container.clientWidth - newWidth + 20, 40);
      }
    };
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}

function drawRainbow(ctx, ypos, width, height, midPoint) {
}
