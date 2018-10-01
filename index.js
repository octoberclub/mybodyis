document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('text-top').hidden=true;
  document.getElementById('placeholder-top').hidden=true;
  document.getElementById('text-bottom').hidden=true;
  document.getElementById('placeholder-bottom').hidden=true;

  function downloadCanvas(divId, filename) {
    domtoimage.toJpeg(document.getElementById(divId), { quality: 0.95 })
      .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = filename;
        link.href = dataUrl;
        link.click();
      })
      .catch(function (err) { console.log(err); });
  }

  document.getElementById('download').addEventListener('click', function() {
      downloadCanvas('preview-container', 'mytransbodyis.png');
    }, false);
});

function myFunction() {
  var myText = document.getElementById("myText");
  document.getElementById('text-bottom').innerText=myText.value.toUpperCase();
}

function uploadFile() {
  var file = document.querySelector("input[type=file]").files[0]; //sames as here
  var reader = new FileReader();

  reader.onloadend = function(){
    document.getElementById('preview').style.backgroundImage
        = "url(" + reader.result + ")";

    document.getElementById('text-top').hidden=false;
    document.getElementById('placeholder-top').hidden=false;
    document.getElementById('text-bottom').hidden=false;
    document.getElementById('placeholder-bottom').hidden=false;
  }

  if (file) {
    reader.readAsDataURL(file);
  }
}
