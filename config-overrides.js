const {
  override,
  disableEsLint,
  overrideDevServer,
  watchAll
} = require("customize-cra");

const ignoredFiles = require('./node_modules/react-dev-utils/ignoredFiles');
const paths = require('./node_modules/react-scripts/config/paths')

const path = require('path');
const fs = require('fs');
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = relativePath => path.resolve(appDirectory, relativePath);

const devServerConfig = () => (config) => {
	return {
		...config,
		watchOptions : { 
      ignored: [ignoredFiles(paths.appSrc), resolveApp('public/biki-img'), resolveApp('db/biki')]
    },
	};
};

module.exports = {
	devServer : overrideDevServer(devServerConfig())
};