// Your JS goes here
document.body.style = "margin:0";


// function box2() {
//   var redBox = document.createElement("div");
//   redBox.style = "background-color: red; width: 11.1%; padding-bottom: 11.1%; float: left";
//   document.body.appendChild(redBox);
// }
//
// function box1() {
//   var blackBox = document.createElement("div");
//   blackBox.style = "background-color: black; width: 11.1%; padding-bottom: 11.1%; float: left";
//   document.body.appendChild(blackBox);
// }
//
// for (var i = 0; i < 81; i++) {
//   if (i % 2 ===0) {
//   box1();
// }
//   else {
//   box2();
// }
// }
//
// Randomly colored boxes
// function getRandomColor() {
//     var letters = '0123456789ABCDEF'.split('');
//     var rColor = '#';
//     for (var i = 0; i < 6; i++ ) {
//         rColor += letters[Math.floor(Math.random() * 16)];
//     }
//     return rColor;
// }
//
// function randomBox() {
//   var coloredBox = document.createElement("div");
//   coloredBox.style = "background-color:" +getRandomColor()+ "; width: 11.1%; padding-bottom: 11.1%; float: left";
//   document.body.appendChild(coloredBox);
// }
//
// for (var i = 0; i < 81; i++) {
//   if (i % 2 ===0) {
//   randomBox();
// }
//   else {
//   randomBox();
// }
// }


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var rColor = '#';
    for (var i = 0; i < 6; i++ ) {
        rColor += letters[Math.floor(Math.random() * 16)];
    }
    return rColor;
}

function randomBox() {
  var coloredBox = document.createElement("div");
  coloredBox.style = "background-color:" +getRandomColor()+ "; width: 11.1%; padding-bottom: 11.1%; float: left";
  document.body.appendChild(coloredBox);
}

function gradient() {
  var gradBox = document.createElement("div");
  gradBox.style = "background-color: pink; width: 11.1%; padding-bottom: 11.1%; float: left";
  document.body.appendChild(gradBox);
}

for (var i = 0; i < 81; i++) {
  if (i <72) {
    randomBox();
  }
  else {
    gradient();
  }
}


// * Each tile should be a `div`
// * Each tile's width is `11.1%`
// * Set each tile's `float` property to `left`
// * Each tile's paddingBottom is `11.1%`
