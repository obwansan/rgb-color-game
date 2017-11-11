var colors = generateRandomColors(6);
var pickedColor = pickColor();

var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.getElementById('reset');

// set color displayed in heading
colorDisplay.textContent = pickedColor;

// loop applies color and event listener to each square
for (var i = 0; i < squares.length; i++) {
    
    // add initial colors to squares
    squares[i].style.background = colors[i];
    
    // add click listeners to squares
    squares[i].addEventListener('click', function() {
        // grab color of clicked square
        var clickedColor = this.style.background;
        //compare color to picked color
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct!';
            h1.style.backgroundColor = clickedColor;
            changeColors(clickedColor);
        } else {
            this.style.background = '#232323';
            messageDisplay.textContent = 'Try Again';
        }  
    });
}

resetButton.addEventListener('click', function() {
    // apply new random colors to squares
    colors = generateRandomColors(6);
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
    // reset random color in heading
    colorDisplay.textContent = pickColor(); 
});

// make all squares the same same (argument) color
function changeColors(color) {
  squares.forEach(function(element) {
    element.style.background = color;
  });
}

function pickColor() {
    // get random number between 0 and length of array
    var random = Math.floor(Math.random() * colors.length);
    // use it to select a color from the array
    return colors[random];
}

function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomRGBColor());
    }
    return arr;
}

function randomRGBColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}


















