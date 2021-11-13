// app will require file system and inquirer to operate
const fs = require("fs");
const inquirer = require("inquirer"); 

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your user name?',
      name: 'username',
    }
  ])
  .then((response) => {
    let data = JSON.stringify(response);
    console.log(data);
  }

  );