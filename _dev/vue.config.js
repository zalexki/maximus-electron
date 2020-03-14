const modulePath = __dirname.split('/');

module.exports = {
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks');
    config.plugins.delete('html');
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
  },
  configureWebpack: (config) => {
    config.externals = { 'child_process': 'require("electron").remote.require("child_process")' };
  },
  css: {
    extract: false,
  },
  productionSourceMap: false,
  filenameHashing: false,
  outputDir: '../views/',
  assetsDir: '',
  // publicPath: `../modules/${modulePath[modulePath.length - 2]}/views/`,
};
