/**
 * @param config {import('@arco-design/arco-scripts').JestConfig}
 */
exports.node = (config) => {
  config.moduleNameMapper = {
    '^arco-pro-radio/(.+)$': '<rootDir>/$1',
    '^arco-pro-radio$': '<rootDir>',
  };
};

/**
 * @param config {import('@arco-design/arco-scripts').JestConfig}
 */
exports.client = (config) => {
  config.moduleNameMapper = {
    '^arco-pro-radio/(.+)$': '<rootDir>/$1',
    '^arco-pro-radio$': '<rootDir>',
  };
};
