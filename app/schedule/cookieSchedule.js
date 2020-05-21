'use strict';
const Subscription = require('egg').Subscription;
const monment = require('moment');

class Meet511 extends Subscription {
  static get schedule() {
    return {
      cron: '0 58 23 * * ?',
      type: 'all',
      immediate:false
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  async subscribe() {
    this.ctx.logger.info('获取cookie', monment()
      .format('YYYY-MM-DD+HH:mm:ss'));
    await this.ctx.service.cookie.getCookie();
  }
}

module.exports = Meet511;
