var numSquares = 6;
var colors = generateRandomColors(numSquares);
var pickedColor;

var squares = document.querySelectorAll('.square');
var colorDisplay = document.getElementById('colorDisplay');
var messageDisplay = document.querySelector('#message');
var h1 = document.querySelector('h1');
var resetButton = document.getElementById('reset');
var easyButton = document.getElementById('easyBtn');
var hardButton = document.getElementById('hardBtn');

init();

function init() {
  setSquareColors(6);
  setHeadingText();
  setEventListeners();
}

// initialise squares and heading
function setSquareColors(num) {
    // get array of random colors
    colors = generateRandomColors(num);
    // apply color to each square
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.background = colors[i];
    }
}

function setHeadingText() {
    // get random color from array
    pickedColor = pickColor();
    // set color displayed in heading
    colorDisplay.textContent = pickedColor;
}

// set up functionality on event listeners
function setEventListeners() {
    for (var i = 0; i < squares.length; i++) {
      squares[i].addEventListener('click', function() {
        // grab color of clicked square
        var clickedColor = this.style.background; // 'this' is squares[i]
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct!';
            resetButton.textContent = 'Play Again?';
            h1.style.backgroundColor = clickedColor;
            // make all squares same color as clicked square
            changeColors(clickedColor);
        } else {
            // make square disappear
            this.style.background = '#232323';
            messageDisplay.textContent = 'Try Again';
        }  
      });
  }
}

easyButton.addEventListener('click', function() {
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    // get 3 new colors
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    // set pickedColor
    setHeadingText();
    // set new colors to first 3 squares and hide last 3 (use if)
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) { // if there's a color at colors array index
            squares[i].style.background = colors[i];
        } else {
            squares[i].style.display = 'none';
        }
    }
});

hardButton.addEventListener('click', function() {
    hardButton.classList.add("selected");
    easyButton.classList.remove("selected");
    numSquares = 6;
    setSquareColors(numSquares);
    setHeadingText();
    // display all 6 squares ('easy' mode only displays 3)
    for (var i = 0; i < squares.length; i++) {
        squares[i].style.display = 'block';
    }
});

// new colors / play again
resetButton.addEventListener('click', function() {
    // reset square colors and heading RGB
    setSquareColors(numSquares);
    setHeadingText();
    // remove 'Correct!' 
    messageDisplay.textContent = '';
    // reset button text
    this.textContent = 'New Colors?';
    // remove h1 background color
    h1.style.backgroundColor = 'steelblue';
});

// make all squares the same as argument color
function changeColors(color) {
  squares.forEach(function(element) {
    element.style.background = color;
  });
}

// get random color from array
function pickColor() {
    // get random number between 0 and length of array
    var random = Math.floor(Math.random() * colors.length);
    // use it to select a color from the array
    return colors[random];
}

//create an array of random colors
function generateRandomColors(num) {
    var arr = [];
    for (var i = 0; i < num; i++) {
        arr.push(randomRGBColor());
    }
    return arr;
}

// create a random RGB color for generateRandomColors()
function randomRGBColor() {
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}
