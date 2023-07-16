const fs = require('fs').promises;
const path = require('path');
const chalk = require('chalk');
const dataValidator = require('./helpers/dataValidator');
const checkExtension = require('./helpers/checkExtension');

const createFile = async (fileName, content) => {
  const file = {
    fileName,
    content,
  };
  const result = dataValidator(file);
  //   console.log('result:>>', result.error.details);
  if (result.error) {
    console.log(chalk.red(`please specify ${result.error.details[0]}`));
    return;
  }

  const check = checkExtension(fileName);
  if (!check.result) {
    console.log(chalk.red(`This app does not support with "${check.extension}" extension`));
    return;
  }

  const filePath = path.join(__dirname, 'files', fileName);

  try {
    await fs.writeFile(filePath, content, 'utf-8');
    console.log(chalk.bgBlue(`File created successfully`));
  } catch (error) {
    console.log(error);
  }
};

module.exports = createFile;
