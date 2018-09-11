console.log("loadedxxx23");
document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById('step1').className += 'boldText';
});

function myFunction() {
  document.getElementById('step3').className = 'boldText';
  var myTextPlaceholder = new Image();
  myTextPlaceholder.src = "rainbow.png";
  myTextPlaceholder.setAttribute('crossOrigin', 'anonymous');
  myTextPlaceholder.onload = function() {
    console.log("loaded22");
    var canvas = document.getElementById("c");
    var ctx = canvas.getContext("2d");
    ctx.globalAlpha = 0.4;
    ctx.drawImage(
      myTextPlaceholder,
      0,
      0,
      myTextPlaceholder.width,
      myTextPlaceholder.height,
      80,
      370,
      340,
      100
    );
    ctx.globalAlpha = 1.0;
    ctx.font = "40px caviardreams_regular";
    var myText = document.getElementById("myText");
    ctx.fillText(myText.value, 140, 400);

    console.log("loaded23");
  };
}

function uploadFile() {
  document.getElementById('step1').className -= 'boldText';
  document.getElementById('step2').className += 'boldText';
  var file = document.querySelector("input[type=file]").files[0]; //sames as here
  var reader = new FileReader();

  reader.onloadend = function() {
    document.getElementById("upload-image").hidden = true;

    var profileImage = new Image();
    profileImage.src = reader.result;
    profileImage.setAttribute('crossOrigin', 'anonymous');
    profileImage.onload = function() {
      var canvas = document.getElementById("c");
      var ctx = canvas.getContext("2d");
      ctx.drawImage(
        profileImage,
        0,
        0,
        profileImage.width,
        profileImage.height,
        0,
        0,
        canvas.width,
        canvas.height
      );
      ctx.fillStyle = "white";
      ctx.textBaseline = "top";
    };
    var myTransBodyPlaceholder = new Image();
    myTransBodyPlaceholder.src = "rainbow.png";
    myTransBodyPlaceholder.setAttribute('crossOrigin', 'anonymous');
    myTransBodyPlaceholder.onload = function() {
      var canvas = document.getElementById("c");
      var ctx = canvas.getContext("2d");
      ctx.globalAlpha = 0.4;
      ctx.drawImage(
        myTransBodyPlaceholder,
        0,
        0,
        myTransBodyPlaceholder.width,
        myTransBodyPlaceholder.height,
        0,
        0,
        450,
        120
      );
      ctx.globalAlpha = 1.0;
      ctx.font = "40px market_saturdayregular";
      ctx.fillText("#MyTransBody is...", 80, 30);
    };
  };

  if (file) {
    reader.readAsDataURL(file); //reads the data as a URL
  }
}

function download() {
  var canvas = document.getElementById("c");
  var img    = canvas.toDataURL("image/png");
  document.write('<img src="'+img+'"/>');
}
