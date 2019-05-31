const path = require('path');
const WebpackUserscript = require('webpack-userscript');

module.exports = env => {
  return {
  entry: './src/inject.js',
  plugins: [
    new WebpackUserscript({
      headers: {
        'name': 'InjectJS',
        'version': env.NODE_ENV === 'development' ? '[version].build[buildNo]' : '[version]',
        'author': '[author]',
        'include': 'http*://*',
        'require': 'https://greasyfork.org/scripts/371339-gm-webextpref/code/GM_webextPref.js?version=623327',
        'grant': [
          'GM_getValue',
          'GM_setValue',
          'GM_deleteValue',
          'GM_registerMenuCommand',
          'GM_addValueChangeListener',
          'unsafeWindow'],
        'run-at': 'document-start',
        'noframes': true
      }
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist')
  },
  output: {
    filename: 'inject.user.js',
    path: path.resolve(__dirname, 'dist')
  }
  }
};
