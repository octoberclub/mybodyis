var canvas = document.getElementById('c');
var ctx = canvas.getContext('2d');

canvas.onclick = function(){
  var preview = document.getElementById('preview');
  preview.click();
}

function myFunction(){
  var myTextPlaceholder = new Image();
  myTextPlaceholder.src = 'rainbow.png';
  myTextPlaceholder.onload = function(){
    ctx.globalAlpha = 0.4;
    ctx.drawImage(myTextPlaceholder, 0, 0, myTextPlaceholder.width, myTextPlaceholder.height, 80, 370, 340, 100);
    ctx.globalAlpha = 1.0;
    ctx.font      = '40px caviardreams_regular';
    var myText = document.getElementById('myText');
    ctx.fillText  (myText.value, 140, 400);
  };
}

function previewFile(){
  var file    = document.querySelector('input[type=file]').files[0]; //sames as here
  var reader  = new FileReader();

  reader.onloadend = function () {
    var profileImage = new Image();
    profileImage.src = reader.result;
    profileImage.onload = function(){
      ctx.drawImage(profileImage, 0, 0, profileImage.width,    profileImage.height, 0, 0, 500, 500);
      ctx.fillStyle = 'white';
      ctx.textBaseline = 'top';
    };
    var myTransBodyPlaceholder = new Image();
    myTransBodyPlaceholder.src = 'rainbow.png';
    myTransBodyPlaceholder.onload = function(){
      ctx.globalAlpha = 0.4;
      ctx.drawImage(myTransBodyPlaceholder, 0, 0, myTransBodyPlaceholder.width, myTransBodyPlaceholder.height, 0, 0, 450, 120);
      ctx.globalAlpha = 1.0;
      ctx.font      = '60px market_saturdayregular';
      ctx.fillText  ('#MyTransBody is...', 70, 30);
    };
  }

  if (file) {
    reader.readAsDataURL(file); //reads the data as a URL
  }
}
