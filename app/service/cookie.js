/**
 * 获取cookie的方法,并将cookie重写
 */
const process = require('child_process');
const fs = require('fs');
const Service = require('egg').Service;

class CookieService extends Service {
    async getCookie() {
        process.exec('curl -c cookie.txt  -d "tblOpUser.username=fanzhanao@lanxum.com&tblOpUser.pwd=IYfHUR" "http://bms.lanxum.com/Login_userLogin.action"', function (error, stdout, stderr) {
            if (error !== null) {
                console.log('cookie 获取失败: ' + error);
            }
            fs.readFile('cookie.txt', 'utf-8', function (err, data) {
                if (err) {

                }
                else {
                    const content = data.substring(188)
                    fs.writeFile('cookie.txt',content,function(err,data) {
                      console.log('cookie值为:',content)
                    })
                }
            });
        });
    }
}

module.exports = CookieService;
