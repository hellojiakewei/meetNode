'use strict';

const Controller = require('egg').Controller;
class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = '匆匆岁月';
  }
}

module.exports = HomeController;
