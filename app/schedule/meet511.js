const Subscription = require('egg').Subscription;
const process = require('child_process');
const fs = require('fs')
class Meet511 extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      cron: '00 50 13 * * ?', // 每天凌晨执行
      type: 'all',
      immediate:false
    };
  }
  //自动订阅511会议室
  async subscribe() {
      // this.ctx.logger.info('自动订阅511会议室')
      console.log('自动订阅511会议室')
      this.service.meet.autoMeet();
  }
}

module.exports = Meet511;
