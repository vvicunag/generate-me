const fs = require("fs");
const moment = require("moment");
const licenseText = require("./licenses")

const generateTemplate = (data) => {
    // Basis for the README 
    let template = 
    "# " + data.projectName + " - a Project by " + `[${data.username}](http://github.com/${data.username})` +"\n";
    // Adds license badge, according to selected option
    if(data.license === "MIT") {
        template = template + "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)\n";
    }
    else if(data.license === "Apache") {
        template = template + "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)\n";
    }
    else {
        template = template + "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)\n";
    }
    template = template + "\n## Table of Contents\n";
    // Adds table of contents elements, if corresponding section is provided  
    if(data.description != "") {
        template = template + 
`- [Project Description](#project-description)
`   };
    if(data.install != "") {
        template = template + 
`- [Installation Instructions](#installation-instructions)
`   };
    if(data.usage != "") {
        template = template + 
`- [Usage Information](#usage-information)
`   };
    if(data.guidelines != "") {
        template = template + 
`- [Contribution Guidelines](#contribution-guidelines)
`   };
    if(data.testing != "") {
        template = template + 
`- [Testing Instructions](#testing-instructions)
`   };
    // Adds section for project description, if provided
    if(data.description != "") {
        template = template + 
`
<a name='project-description'></a> 
## Project description
${data.description}

`   };
    // Adds section for installation instructions, if provided
    if(data.install != "") {
        template = template + 
`<a name='installation-instructions'></a>
## Installation Instructions
${data.install}

`   };
    // Adds section for Usage Info, if provided
    if(data.usage != "") {
        template = template + 
`<a name='usage-information'></a>
## Usage Information
${data.usage}

`
    };
    // Adds section for contribution guidelines, if provided
    if(data.guidelines != "") {
        template = template + 
`<a name='contribution-guidelines'></a>
## Contribution Guidelines
${data.guidelines}

`   };
    // Adds section for testing instructions, if provided
    if(data.testing != "") {
        template = template + 
`<a name='testing-instructions'></a>
## Testing Instructions
${data.testing}
`   };
    template = template + 
    // Adds copyright info and corresponding license
    "\n---\nCopyright " + moment().format("YYYY")+ ", " + data.holder + ".\n";
    if(data.license === "MIT") {
        template = template + licenseText.MIT;
    }
    else if(data.license === "Apache") {
        template = template + licenseText.apache;
    }
    else {
        template = template + licenseText.BSD;
    }
    writeTemplate(template);   
};
  
// Write generated template into README.  
const writeTemplate = (template) => {
fs.writeFile("./generate-me/README.md", template, (error) => 
error ? console.error(error) : console.info('README generated!'));  
};

// Exports the function for template generation
module.exports = generateTemplate;