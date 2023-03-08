const fs = require("fs");
const inquirer = require("inquirer");
const Color = require("color");
const makeSVG = require("./lib/makeSVG");
const jest = require("jest");

// user prompts for custom logo
inquirer
  .prompt([
    {
      type: "input",
      name: "logoLetters",
      message: "Please enter up to 3 characters for your logo",
      validate: (input) => {
        return input.length > 0 && input.length <= 3;
      },
    },
    {
      type: "list",
      name: "shapes",
      message: "Please choose a shape for your logo",
      choices: ["circle", "triangle", "square"],
    },
    {
      type: "input",
      name: "textColor",
      message:
        "Choose the color of your logo text with the color keyword or a valid hexadecimal number",
        validate: (input) => {
            try {
                Color(input)
                return true
            } catch {
                return "Please enter a VALID color keyword or hexidecimal, try 'white' or '#fff'"
            }
        }
    },
    {
      type: "input",
      name: "shapeColor",
      message:
        "Choose the color of your logo shape with the color keyword or a valid hexadecimal number",
        validate: (input) => {
            try {
                Color(input)
                return true
            } catch {
                return "Please enter a VALID color keyword or hexidecimal, try 'yellow' or '#ffff00'"
            }
        }

    },
  ])
  .then((information) => {
    const { logoLetters, shapes, textColor, shapeColor } = information;
    const svg = makeSVG(logoLetters, shapes, textColor, shapeColor);
    fs.writeFile("logo.svg", svg, (err) =>
      err ? console.error(err) : console.log("Generated logo.svg")
    );
  });

// module.exports = LogoPrompt;

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for text
// THEN I can enter up to three characters
// WHEN I am prompted for the text color
// THEN I can entter a color keyword (OR a hexadecimal number)
// WHEN I am prompted for a shape
// THEN I am presented with a list of shapes to choose from: circle, triangle, and square
// WHEN I am prompted for he shape's color
// THEN I can enter a color keyword (OR a hexadecimal number)
// WHEN I have entered input for all the prompts
// THEN an SVG file is created named `logo.svg`
// AND the output text "Generated logo.svg" is printed in the command line
// WHEN I open the `logo.svg` file in a browser
// THEN I am shown a 300x200 pixel image that matches the criteria I entered
