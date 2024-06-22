// Returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `![GitHub License](https://img.shields.io/badge/License-${license}-blue)`
  } else {
    return "";
  }
}

// Returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "None") {
    return `[${license}](https://opensource.org/license/${license})`
  } else {
    return "";
  }
}

// Returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "None") {
    return `This project is covered under the following license:
    ${renderLicenseLink(license)}

    
    `;
  }
}

// Generates markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

   ## Table of Contents 
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)
  

   ## Description
   ${data.description}

   ## Installation
   ${data.installation}

   ## Usage
   ${data.usage}

   ## Contributing
   ${data.contributing}

   ## Tests
   ${data.tests}

   ## License
   ${renderLicenseSection(data.license)}

   ## Questions
   For questions and feedback, you may contact me at [${data.email}](mailto:${data.email})

   Or visit my [GitHub](https://github.com/${data.github}) for more information.

`;
}

module.exports = generateMarkdown;
