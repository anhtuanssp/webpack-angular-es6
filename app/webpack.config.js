var path = require('path');

var configs = {
  base: require(path.join(__dirname, 'configs/base'))
};

module.exports = configs.base;
