<<<<<<< HEAD
const rewireReactHotLoader = require('react-app-rewire-hot-loader')

module.exports = function override(config, env) {
  config = rewireReactHotLoader(config, env)
  return config
}
=======
module.exports = function override(config, env) {
    //do stuff with the webpack config...
    return config;
}
>>>>>>> 494b08d8b273866ba5b36d26c74d37fc38d6b734
