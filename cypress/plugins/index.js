const fs = require('fs-extra');
const path = require('path');

const fetchConfigurationByFile = (file) => {
  const pathOfConfigurationFile = `./config/${file}.json`;

  return (
    file && fs.readJson(path.join(__dirname, '../', pathOfConfigurationFile))
  );
};

module.exports = (on, config) => {
  const environment = config.env.configFile || 'staging';
  const configurationForEnvironment = fetchConfigurationByFile(environment);

  return configurationForEnvironment || config;
};
