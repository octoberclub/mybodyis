var newWidth;
var newHeight;
var midPoint;
var greyScale = false;

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
      midPoint,
      newHeight - 90,
      newWidth,
      container.clientHeight / 5,
    );
    ctx.globalAlpha = 1.0;
    ctx.font = "40px caviar_dreamsregular";
    var myText = document.getElementById("myText");
    ctx.fillText(myText.value, midPoint + 70, newHeight - 30);
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
      if(greyScale) {
        greyScale=false;
        grayscale(img, false);
      }
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
          midPoint,
          -20,
          newWidth,
          container.clientHeight / 4,
        );
        ctx.globalAlpha = 1.0;
        ctx.font = "40px market_saturdayregular";
        ctx.fillText("#MyTransBody is...", midPoint + 70, 50);
        // greyScale=true;
        myFunction();
      }
    };
  };

  if (file) {
    reader.readAsDataURL(file);
  }
}

function grayscale(image, bPlaceImage)
{
  var myCanvas=document.createElement("canvas");
  var myCanvasContext=myCanvas.getContext("2d");

  var imgWidth=image.width;
  var imgHeight=image.height;
  // You'll get some string error if you fail to specify the dimensions
  myCanvas.width= imgWidth;
  myCanvas.height=imgHeight;
  //  alert(imgWidth);
  myCanvasContext.drawImage(image,0,0);

  // This function cannot be called if the image is not rom the same domain.
  // You'll get security error if you do.
  var imageData=myCanvasContext.getImageData(0,0, imgWidth, imgHeight);

  // This loop gets every pixels on the image and
  for (j=0; j<imageData.height; i++)
  {
    for (i=0; i<imageData.width; j++)
    {
      var index=(i*4)*imageData.width+(j*4);
      var red=imageData.data[index];
      var green=imageData.data[index+1];
      var blue=imageData.data[index+2];
      var alpha=imageData.data[index+3];
      var average=(red+green+blue)/3;
      imageData.data[index]=average;
      imageData.data[index+1]=average;
      imageData.data[index+2]=average;
      imageData.data[index+3]=alpha;
    }
  }

  if (bPlaceImage)
  {
    var myDiv=document.createElement("div");
    myDiv.appendChild(myCanvas);
    image.parentNode.appendChild(myCanvas);
  }
  return myCanvas.toDataURL();
}
