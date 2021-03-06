/**
 * 获取cookie的方法,并将cookie重写
 */
const process = require('child_process');
const fs = require('fs');
const Service = require('egg').Service;
const monment = require('moment')

class CookieService extends Service {
    async getCookie() {
    const { ctx } = this;
        process.exec('curl -c cookie.txt  -d "tblOpUser.username=fanzhanao@lanxum.com&tblOpUser.pwd=IYfHUR" "http://bms.lanxum.com/Login_userLogin.action"', function (error, stdout, stderr) {
            if (error !== null) {
                ctx.logger.error(`cookie获取失败${monment().format('YYYY-MM-DD')}`)
            }
            fs.readFile('cookie.txt', 'utf-8', function (err, data) {
                if (err) {
                    ctx.logger.error(`cookie写入文件失败${monment().format('YYYY-MM-DD')}`)
                }
                else {
                    const content = data.substring(188)
                    fs.writeFile('cookie.txt',content,function(err,data) {
                      ctx.logger.info(`cookie成功写入文件${monment().format('YYYY-MM-DD')}`)
                    })
                }
            });
        });
    }
}

module.exports = CookieService;
