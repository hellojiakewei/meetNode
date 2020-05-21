const Subscription = require('egg').Subscription;
const process = require('child_process');
const fs = require('fs')
class Meet511 extends Subscription {
  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  static get schedule() {
    return {
      cron: '0 0 0 * * ?', // 每天凌晨执行
      type: 'all',
      immediate:false
    };
  }

  /**
   * 执行订阅任务
   * @returns {Promise<void>}
   */
  async subscribe() {
      console.log('开始订阅会议室')
      this.service.meet.autoMeet();
  }
}

module.exports = Meet511;
