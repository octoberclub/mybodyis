/*
sources:
http://stackoverflow.com/questions/2608022/how-can-i-use-custom-fonts-in-an-html5-canvas-element

http://stackoverflow.com/questions/2756575/drawing-text-to-canvas-with-font-face-does-not-work-at-the-first-time
*/

var ctx = document.getElementById('c').getContext('2d');

var myTransBodyPlaceholder = new Image();
myTransBodyPlaceholder.src = 'rainbow.png';
myTransBodyPlaceholder.onload = function(){
  ctx.globalAlpha = 0.4;
  ctx.drawImage(myTransBodyPlaceholder, 0, 0, myTransBodyPlaceholder.width, myTransBodyPlaceholder.height, 0, 0, 450, 120);
  ctx.globalAlpha = 1.0;
  ctx.font      = '60px market_saturdayregular';
  ctx.fillText  ('#MyTransBody is...', 70, 30);
};

var profileImage = new Image();
profileImage.src = 'upload.jpg';
profileImage.onload = function(){
  ctx.drawImage(profileImage, 0, 0, profileImage.width,    profileImage.height, 0, 0, 500, 500);
  ctx.fillStyle = 'white';
  ctx.textBaseline = 'top';
};

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
