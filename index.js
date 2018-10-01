document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('text-top').hidden=true;
  document.getElementById('placeholder-top').hidden=true;
  document.getElementById('text-bottom').hidden=true;
  document.getElementById('placeholder-bottom').hidden=true;

  function downloadCanvas(link, divId, filename) {
    html2canvas(document.getElementById(divId), { useCORS: true })
      .then(function (canvas) {
        console.log('rendered');
        link.href = canvas.toDataURL();
        // link.download = filename;
      })
      .catch(function (err) { console.log(err); });
  }

  document.getElementById('download').addEventListener('click', function() {
    downloadCanvas(this, 'preview-container', 'mytransbodyis.png');
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
