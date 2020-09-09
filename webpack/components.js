module.exports = require('@gluecodes/components-cli').webpack.components({
  envVariables: {
    ENV: process.env.NODE_ENV
  },
  ldScripts: {
    organization: require('./ldScripts/organization.json')
  },
  port: 3636
})
