// function SVG takes user input to generate file
function makeSVG(logoLetters, shapes, textColor, shapeColor) {
  if (shapes === "circle") {
    return `<svg version="1.1"
width="300" height="200"
xmlns="http://www.w3.org/2000/svg">

<rect width="100%" height="100%" fill="white" />

<circle cx="150" cy="100" r="80" fill="${shapeColor}" />

<text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${logoLetters}</text>

</svg>`;
  } else if (shapes === "triangle") {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    
    <rect width="100%" height="100%" fill="white" />
    
    <polygon points="150,20 280,180 20,180" fill="${shapeColor}" />
    
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${logoLetters}</text>
    
    </svg>`;
  } else {
    return `<svg version="1.1"
    width="300" height="200"
    xmlns="http://www.w3.org/2000/svg">
    
    <rect width="100%" height="100%" fill="white" />
    
    <rect x="60" y="20" width="180" height="160" fill="${shapeColor}" />
    
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${logoLetters}</text>
    
    </svg>`;
  }
}
module.exports = makeSVG;
