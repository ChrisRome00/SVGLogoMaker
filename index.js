// Going to be asking questions so import Inquirer
const inquirer = require("inquirer");
// Also going to need file creation
const fs = require("fs");

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