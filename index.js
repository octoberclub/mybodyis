/*
sources:
http://stackoverflow.com/questions/2608022/how-can-i-use-custom-fonts-in-an-html5-canvas-element

http://stackoverflow.com/questions/2756575/drawing-text-to-canvas-with-font-face-does-not-work-at-the-first-time
*/

var ctx = document.getElementById('c').getContext('2d');

var rainbow = new Image();
rainbow.src = 'upload.jpg';

// rainbow.onload = function(){
//   ctx.drawImage(rainbow, 0, 0, rainbow.width, rainbow.height,
//                   0, 0, 100, 100);
// };

var kitty = new Image();
kitty.src = 'upload.jpg';
kitty.onload = function(){
  // ctx.drawImage(this, 0,0,this.width, this.height);
  ctx.drawImage(kitty, 0, 0, kitty.width,    kitty.height,     // source rectangle
                   0, 0, 370, 500);
  ctx.font         = '68px market_saturdayregular';
  ctx.fillStyle = 'white';
  ctx.textBaseline = 'top';

  ctx.fillText  ('#MyTransBody is...', 0, 30);
  ctx.fillText  ('ready to code', 100, 400);
};
