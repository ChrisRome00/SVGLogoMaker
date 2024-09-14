// Going to be asking questions so import Inquirer
const inquirer = require("inquirer");
// Also going to need file creation
const fs = require("fs");

// Import classes
const { Circle, Square, Triangle } = require('./lib/shapes.js')

const questions = [
    {
        // Name of logo
        type: "input",
        name: 'name',
        message: 'Enter The characters of the logo: '
    },
    {
        //text color
        type: 'input',
        name: 'text_color',
        message: "What do you want the color of the text to be? "
    },
    {
        //shape
        type: 'list',
        name: 'shape',
        choices: ['square', 'circle', 'triangle'],
        message: 'Enter the format of your shape: '
    },
    {
        //shapes color
        type: 'input',
        name: 'shape_color',
        message: 'What is the color of the shape: '
    }

]

function generateSVG(data) {
    let shape;

    if (data.shape == 'square') {
      shape = new Square(data.shape_color)
    }
    else if (data.shape == 'circle') {
      shape = new Circle(data.shape_color)
    } else {
      shape = new Triangle(data.shape_color)
    }
  
    return `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
            ${shape.render()}
            <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.text_color}">${data.name}</text>
        </svg>`
}

//After quiestions are filled
// Create a function to write svg file
// After a successful creation, insert "Generated logo.svg" into console
function writeToFile(fileName, data){
    fs.writeFile(fileName, generateSVG(data) , (err) => {
        err ? console.error(err) : console.log("Generated logo.svg")
    })
}

function init() {
    inquirer
        .prompt(questions)
            .then((response) => {
                const fileName = "logo.svg";
                writeToFile(fileName, response);
            })
}

//do an init call to start the application
init();

//upon opening the svg file in a browser, there is a 200x200 image that matches the criteria entered