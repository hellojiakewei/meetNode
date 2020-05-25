'use strict';

const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.logger.info('hello')
    ctx.logger.error('报错')
    ctx.body = '匆匆岁月';
  }
}

module.exports = HomeController;
