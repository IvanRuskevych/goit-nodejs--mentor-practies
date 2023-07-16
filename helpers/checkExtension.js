const checkExtension = (fileName) => {
  const EXTENSIONS = ['js', 'json', 'html', 'css', 'txt'];

  const extension = fileName.split('.').pop();
  if (extension) {
    const file = {
      extension,
      result: EXTENSIONS.includes(extension),
    };
    return file;
  }
};

module.exports = checkExtension;
