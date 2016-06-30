const vhost = require('vhost');
const config = require('config');
const devService = require('sharemyscreen-dev-service');
const loginService = require('sharemyscreen-login-service');
const apiService = require('sharemyscreen-api-service');

function registerApp (masterApp) {
  masterApp.use(vhost(config.get('devService.url'), devService.getApp()));
  masterApp.use(vhost(config.get('loginService.url'), loginService.getApp(true)));
  masterApp.use(vhost(config.get('apiService.url'), apiService.getApp(true)));
}

module.exports.registerApp = registerApp;
