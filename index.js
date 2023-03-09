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
          Color(input);
          return true;
        } catch {
          return "Please enter a VALID color keyword or hexidecimal, try 'white' or '#fff'";
        }
      },
    },
    {
      type: "input",
      name: "shapeColor",
      message:
        "Choose the color of your logo shape with the color keyword or a valid hexadecimal number",
      validate: (input) => {
        try {
          Color(input);
          return true;
        } catch {
          return "Please enter a VALID color keyword or hexidecimal, try 'yellow' or '#ffff00'";
        }
      },
    },
  ])
  .then((information) => {
    const { logoLetters, shapes, textColor, shapeColor } = information;
    const svg = makeSVG(logoLetters, shapes, textColor, shapeColor);
    fs.writeFile("logo.svg", svg, (err) =>
      err ? console.error(err) : console.log("Generated logo.svg")
    );
  });

