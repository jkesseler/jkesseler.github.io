const {
  override,
  addWebpackModuleRule,
  disableEsLint,
} = require("customize-cra");


module.exports = override(
  disableEsLint(),
  addWebpackModuleRule({test: /\.md$/, use: 'raw-loader'})
);
