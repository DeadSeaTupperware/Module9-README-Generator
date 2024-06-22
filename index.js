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
        name: 'test',
        message: "Provide instructions for testing the application.",
    },
    {

    },
    {

    },
    {

    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
