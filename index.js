
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');


const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'name',
      message: 'What is the name of your project?',
    },
    {
      type: 'input',
      name: 'motivation',
      message: 'What was your motivation for making this project?',
    },
    {
     type: 'input',
     name: 'why',
     message: 'why did you build this project?',
    },
    {
      type: 'input',
      name: 'problem',
      message: 'What problem does this app solve?',
    },
    {
      type: 'input',
      name: 'learn',
      message: 'what did you learn while making this project?',
    },
    {
      type: 'input',
      name: 'steps',
      message: 'what steps are required to install your project?',
    },
    {
      type: 'input',
      name: 'uses',
      message: 'please provide instructions and examples for use',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'name any co collaborators their github profiles.',
    },
    {
      type: 'input',
      name: 'thirdparty',
      message: 'did you use any links or third party sources for this project? If so, name them. ',
    },
    {
      type: 'input',
      name: 'license',
      message: 'you can follow the link [https://choosealicense.com/] if you need help with finding a license, and then enter it on this line',
    },
    {
      type: 'input',
      name: 'color',
      message: 'Enter your preferred color for a badge',
    },
    {
      type: 'input',
      name: 'features',
      message: 'name any features your project has',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub Username',
    },
    {
      type: 'input',
      name: 'linkedin',
      message: 'what is your linkedin url?',
      //validate: function(input){

     // }
    },
  ]);
};

const generateMD = (answers) => {
  return ` # ${answers.name}
  ## ${answers.github}
  ## ${answers.linkedin}
  ## Description
  Provide a short description explaining the what, why, and how of your project. Use the following questions as a guide:
  - ${answers.motivation}
  - ${answers.why}
  - ${answers.problem}
  - ${answers.learn}
  ## Table of Contents (Optional)
  If your README is long, add a table of contents to make it easy for users to find what they need.
  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)
  ## Installation
  ${answers.steps}
  ## Usage
  ${answers.uses}
 
    
  ## Credits
  ${answers.credits}
  
  ${answers.thirdparty}
  ## License
  - ${answers.license}
  ---
  🏆 The previous sections are the bare minimum, and your project will ultimately determine the content of this document. You might also want to consider adding the following sections.
  ## Badges
  (https://img.shields.io/badge/license-${answers.license}-${answers.color}.svg)
  ## Features
  - ${answers.features}
  ## How to Contribute
  If you created an application or package and would like other developers to contribute it, you can include guidelines for how to do so. The [Contributor Covenant](https://www.contributor-covenant.org/) is an industry standard, but you can always write your own if you'd prefer.
  ## Tests
  Go the extra mile and write tests for your application. Then provide examples on how to run them here.`
  
};
 




 //Bonus using writeFileAsync as a promise
const init = () => {
  promptUser()
    .then((answers) => writeFileAsync('readme.md', generateMD(answers)))
    .then(() => console.log('Successfully created README'))
    .catch((err) => console.error(err));
};

init();

