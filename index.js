// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: "Enter project title.",
    },
    {
        type: 'input',
        name: 'description',
        message: "Give a brief description of your project.",
    },
    {
        type: 'input',
        name: 'installation',
        message: "Provide installation instructions.",
    },
    {
        type: 'input',
        name: 'usage',
        message: "Provide usage information for this project.",
    },
    {
        type: 'input',
        name: 'contributing',
        message: "Provide guidelines for contribution.",
    },
    {
        type: 'input',
        name: 'tests',
        message: "Provide instructions for testing the application.",
    },
    {
        type: 'list',
        name: 'license',
        message: "Which license does this project use?",
        choices: ['MIT', 'GPL-2-0', 'GPL-3-0', 'LGPL-2-1', 'LGPL-3-0', 'Apache-2-0', 'MPL-2-0', 'BSD-2-Clause', 'BSD-3-Clause', 'None']
    },
    {
        type: 'input',
        name: 'github',
        message: "Enter your GitHub username.",
    },
    {
        type: 'input',
        name: 'email',
        message: "Enter your e-mail address.",
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error(err);
        } else {
            console.log('README.md file has been successfully generated!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((data) => {
        writeToFile("./Generated_README/README.md", generateMarkdown(data))
    });
}
// Function call to initialize app
init();
