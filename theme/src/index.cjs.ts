// const typography = require('~/typography');
// const border = require('~/border');
// const opacity = require('~/opacity');
// const shadows = require('~/shadows');
const colors = require('../../colors/src/tokens.json');
const spacing = require('../../spacing/src/tokens.json');
// const zIndex = require('~/z-index');

module.exports.theme = {
  colors: { ...colors },
  spacing: { ...spacing },
  hi: 'hi',
  // extend: {
  //   ...typography,
  //   ...border,
  //   ...opacity,
  //   ...shadows,
  //   ...zIndex,
  // },
};
