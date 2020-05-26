/**
 * 自动订阅会议室
 */
const fs = require('fs');
const Initparams = require('../params');
const Initparams306 = require('../params/meet306');
const Initparams307 = require('../params/meet307');
const Initparams308 = require('../params/meet308');
const Initparams326 = require('../params/meet326');
const Initparams403 = require('../params/meet403');
const Initparams405 = require('../params/meet405');
const Initparams406 = require('../params/meet406');
const Initparams408 = require('../params/meet408');
const Service = require('egg').Service;
const monment = require('moment')
const url = 'http://bms.lanxum.com/query.action?m=save&obj=a55&rtnURL=%2Fcontroller.action%3Fname%3DScheduledConference';

class MeetService extends Service {
  async autoMeet() {
    const {ctx} = this;
    fs.readFile('cookie.txt', 'utf-8', async (err, data) => {
      if (err) {
        ctx.logger.info('cookie文件服务成功')
      } else {
        //发起 自动请求
        const today = monment().format('YYYY-MM-DD')
        const after2week = monment().add(14,'days').format('YYYY-MM-DD')
        console.log(data)
        const cookie = data.toString().substring(0,32)
        console.log(cookie)
        Initparams(ctx,cookie.replace('/\n',''),today,after2week)
        // Initparams306(ctx,cookie,today,after2week)
        // Initparams307(ctx,cookie,today,after2week)
        // Initparams308(ctx,cookie,today,after2week)
        // Initparams326(ctx,cookie,today,after2week)
        // Initparams403(cookie,today,after2week)
        // Initparams405(cookie,today,after2week)
        // Initparams406(cookie,today,after2week)
        // Initparams408(ctx,cookie,today,after2week)
      }
    });
  }
}

module.exports = MeetService;
