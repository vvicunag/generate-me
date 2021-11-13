// app will require file system and inquirer to operate
const fs = require("fs");
const inquirer = require("inquirer"); 

// Question bank
const questions = [
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    }
  ]

const inquire = () => {
    inquirer.prompt(questions).then((response) => {
    const data = (response);
    writeTemplate(data);
   })};

inquire();
// README template
const writeTemplate = (data) => {
    let template = 
    `
    ##README test
    ${data.username}
    `;
    console.log(data);
    fs.writeFile("myREADME", template, (error) => 
    error ? console.error(error) : console.log('README generated!'));  
}