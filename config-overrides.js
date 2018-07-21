module.exports = (config, env) => {

  // enable SCSS modules
  config = require('react-app-rewire-css-modules')(config, env)

  // generate site favicon and device shortcut icons in document head
  config = require('react-app-rewire-favicons-plugin')(config, env, {
    logo: './public/icon.png',
    prefix: 'icons-[hash]/',
    background: '#fff',
    title: `Mr. Wonderful`,
    icons: {
      android: true,
      appleIcon: true,
      appleStartup: true,
      coast: false,
      favicons: true,
      firefox: true,
      opengraph: false,
      twitter: false,
      yandex: false,
      windows: false,
    },
  })

  return config

}