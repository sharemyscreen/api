const vhost = require('vhost');
const config = require('config');
const devService = require('sharemyscreen-dev-service');
const loginService = require('sharemyscreen-login-service');

function registerApp (masterApp) {
  masterApp.use(vhost(config.get('devService.url'), devService.getApp()));
  masterApp.use(vhost(config.get('loginService.url'), loginService.getApp()));
}

module.exports.registerApp = registerApp;
