// app will require inquirer to operate
const inquirer = require("inquirer"); 
const generateTemplate = require("./template"); 

// Question bank
const questions = [
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    },
    {
    type: 'input',
    message: 'What is the name of your project?',
    name: 'projectName',
    },
    {
    type: 'input',
    message: 'Describe your project:',
    name: 'description',
    },
    {
      type: 'input',
      message: 'What are the instructions for installation?',
      name: 'install',
    },
    {
      type: 'input',
      message: 'What is the usage information?',
      name: 'usage',
    },
    {
      type: 'input',
      message: 'What are the contribution guidelines?',
      name: 'guidelines',
    },
    {
      type: 'input',
      message: 'What are the test instructions?',
      name: 'testing',
    },
    {
      type: 'list',
      message: 'Which license do you want to provide for your project?',
      choices: ['MIT', 'Apache', 'BSD'],
      name: 'license',
    },
    {
      type: 'input',
      message: 'Name under which license will be held?',
      name: 'holder',
    },  
]   

// Inquire to prompt questions and gather input
const inquire = () => {
    inquirer.prompt(questions).then((response) => {
      const data = response;
    /* Code is designed to generate template, and write it into a README. 
    Function is imported from template.js*/
    generateTemplate(data);
})};

// initiate
inquire();


