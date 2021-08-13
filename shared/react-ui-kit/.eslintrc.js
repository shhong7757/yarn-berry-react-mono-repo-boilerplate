// eslint-disable-next-line @typescript-eslint/no-var-requires
const { join } = require('path');

module.exports = {
  extends: [
    '@config',
    '@config/react',
    '@config/typescript',
  ],
  rules: {
    'import/no-extraneous-dependencies': [
      'error',
      {
        packageDir: [__dirname, join(__dirname, '../../')],
      },
    ],
  },
};
