const vhost = require('vhost');
const config = require('config');
const devService = require('sharemyscreen-dev-service');

function registerApp (masterApp) {
  masterApp.use(vhost(config.get('devService.url'), devService.getApp()));
}

module.exports.registerApp = registerApp;
