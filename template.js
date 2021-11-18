const fs = require("fs");

const generateTemplate = (data) => {
    // Basis for the README 
    let template = 
`# READ ME
${data.username} and projects is: ${data.projectName}

`   ;
    // Adds section for project description, if provided
    if(data.description != "") {
        template = template + 
` ## Project description
${data.description}

`   ;};
    // Adds section for installation instructions, if provided
    if(data.install != "") {
        template = template + 
`## Installation Instructions
${data.install}

`   ;};
    // Adds section for Usage Info, if provided
    if(data.usage != "") {
        template = template + 
`## Usage Information
${data.usage}

`
    ;};
    // Adds section for contribution guidelines, if provided
    if(data.guidelines != "") {
        template = template + 
`## Contribution Guidelines
${data.guidelines}

`   ;};
    // Adds section for testing instructions, if provided
    if(data.testing != "") {
        template = template + 
`## Testing Instructions
${data.testing}
`   ;};
    writeTemplate(template);   
};
  
// Write generated template into README.  
const writeTemplate = (template) => {
console.log(template);
fs.writeFile("./generate-me/README.md", template, (error) => 
error ? console.error(error) : console.info('README generated!'));  
};

// Exports the function for template generation
module.exports = generateTemplate; 