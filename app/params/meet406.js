const request = require('request');
const fs = require('fs')
module.exports=function(ctx,cookie,appTime,meetTime) {
  var options = {
    'method': 'POST',
    'url': 'http://bms.lanxum.com/query.action?m=save&obj=a55&rtnURL=%2Fcontroller.action%3Fname%3DScheduledConference',
    'headers': {
      'Host': 'bms.lanxum.com',
      'Cache-Control': 'max-age=0',
      'Upgrade-Insecure-Requests': '1',
      'Origin': 'http://bms.lanxum.com',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_3) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.138 Safari/537.36',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
      'Referer': `http://bms.lanxum.com/query.action?obj=a55&m=newpage&ffe201201985874qTZS4_lkid=a512017000B37449wRDl&ffe201201985874qTZS4=406%E4%BC%9A%E8%AE%AE%E5%AE%A4%EF%BC%88%E7%AB%8B%E6%80%9D%E8%BE%B0%E5%A4%A7%E5%8E%A6%EF%BC%89&ffe2012005369413Ogl4=${meetTime}&rtnURL=/controller.action?name=ScheduledConference`,
      'Accept-Language': 'zh-CN,zh;q=0.9',
      'Cookie': `JSESSIONID=${cookie}`,
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    form: {
      'geturl': `/query.action?obj=a55&m=newpage&ffe201201985874qTZS4_lkid=a512017000B37449wRDl&ffe201201985874qTZS4=406会议室（立思辰大厦）&ffe2012005369413Ogl4=${meetTime}&rtnURL=%2Fcontroller.action%3Fname%3DScheduledConference`,
      'ffe201201985828so4wO': `${appTime} 00:05:00`,
      'ffe201201985874qTZS4': '406会议室（立思辰大厦）',
      'ffe201201985874qTZS4_lkid': 'a512017000B37449wRDl',
      'ffe201201985874qTZS4_lkold': '',
      'ffe201201985874qTZS4_lktp': 'a51',
      'ffe201201985874qTZS4_lspf': '0',
      'ffe201201985874qTZS4_lspfsub': '0',
      'ffe201201985874qTZS4_mod': '0',
      'ffe201201985849UOmjV': '中文未来',
      'ffe201201985849UOmjV_lkid': '',
      'ffe201201985849UOmjV_lkold': '',
      'ffe201201985849UOmjV_lktp': 'a08',
      'ffe201201985849UOmjV_lspf': '0',
      'ffe201201985849UOmjV_lspfsub': '0',
      'ffe201201985849UOmjV_mod': '1',
      'ffe201201985891uzFdO': `${meetTime} 00:00:00`,
      'entity.ownerid': '005201888A301F7OYLmi',
      'ffe201201985908pwO5x': `${meetTime} 20:00:00`,
      'ffe201202987010GWq6u': '13681144008',
      'ffe2012019859284WfpM': '公司例会',
      'ffe201203093577hx3Sm': '范占鳌',
      'ffe201203093577hx3Sm_lkid': '005201888A301F7OYLmi',
      'ffe201203093577hx3Sm_lkold': '范占鳌',
      'ffe201203093577hx3Sm_lktp': '005',
      'ffe201203093577hx3Sm_lspf': '0',
      'ffe201203093577hx3Sm_lspfsub': '0',
      'ffe201203093577hx3Sm_mod': '1',
      'ffe201201986002qageS': '8',
      'ffe201201985987A3WVS': '',
      'ffe201201985964iXTDQ': '中文未来',
      'ffe201201986049ITUvm': '',
      'struts.token.name': 'token',
      'token': 'PY4MSRZOFWBYMS65M2Q4AAE5S36J2J3U',
      'id': '',
      'fieldReltaion': '[{"id":"ffe201201985828so4wO","apiName":"sqsj","isenableFilter":"false","length":"255","fieldEntityName":"timeField1","type":"F"},{"id":"ffe201201985849UOmjV","apiName":"sqbm","isenableFilter":"false","length":"255","fieldEntityName":"lookupField1","type":"Y","lookupObj":"a08"},{"id":"ffe2012019848730zNik","apiName":"ownerid","isenableFilter":"false","length":null,"fieldEntityName":"ownerid","type":"Y","lookupObj":"005"},{"id":"ffe201201985874qTZS4","apiName":"hys","isenableFilter":"false","length":"255","fieldEntityName":"lookupField2","type":"Y","lookupObj":"a51"},{"id":"ffe201201985891uzFdO","apiName":"sykssj","isenableFilter":"false","length":"255","fieldEntityName":"timeField2","type":"F"},{"id":"ffe201201985908pwO5x","apiName":"syjssj","isenableFilter":"false","length":"255","fieldEntityName":"timeField3","type":"F"},{"id":"ffe201202987010GWq6u","apiName":"lxdh","isenableFilter":"false","length":"50","fieldEntityName":"strField5","type":"S"},{"id":"ffe2012019859284WfpM","apiName":"hyzt","isenableFilter":"false","length":"200","fieldEntityName":"strField1","type":"S"},{"id":"ffe201201986002qageS","apiName":"chrs","isenableFilter":"false","length":"11","fieldEntityName":"strField3","type":"N","decimalPlaces":"0"},{"id":"ffe201203093577hx3Sm","apiName":"zcrr","isenableFilter":"false","length":"255","fieldEntityName":"lookupField3","type":"Y","lookupObj":"005"},{"id":"ffe201201985987A3WVS","apiName":"chld","isenableFilter":"false","length":"255","fieldEntityName":"longtextField2","type":"S"},{"id":"ffe201201985964iXTDQ","apiName":"chbm","isenableFilter":"false","length":"255","fieldEntityName":"longtextField1","type":"X"},{"id":"ffe201201986049ITUvm","apiName":"bz","isenableFilter":"false","length":"255","fieldEntityName":"longtextField3","type":"X"},{"id":"ffe20120198487068lJm","apiName":"createbyid","isenableFilter":"false","length":null,"fieldEntityName":"createbyid","type":"Y","lookupObj":"005"},{"id":"ffe201201984872KApUP","apiName":"lastmodifybyid","isenableFilter":"false","length":null,"fieldEntityName":"lastmodifybyid","type":"Y","lookupObj":"005"}]',
      'fieldList': '',
      'lkValue': '{ffe201201985849UOmjV:\'中文未来\',ffe201201985849UOmjV_lkid:\'\',ffe2012019848730zNik:\'范占鳌\',ffe2012019848730zNik_lkid:\'005201888A301F7OYLmi\',ffe201201985874qTZS4:\'406会议室（立思辰大厦）\',ffe201201985874qTZS4_lkid:\'a512017000B37449wRDl\',ffe201203093577hx3Sm:\'范占鳌\',ffe201203093577hx3Sm_lkid:\'005201888A301F7OYLmi\'}',
      'jsonlist': '[]',
      'ylgxjsonlist': '[]',
      'jsonMasterlist': '[]',
      'lkmutiValue': '{}',
      'fenzhong': '',
      'starttime': '',
      'nyr': '',
      'relateid': '',
      'relatename': '',
      'whoname': '',
      'whoid': '',
      'belongtoid': '',
      'belongtoname': '',
      'returntaskurl': '/controller.action?name=ScheduledConference',
      'ismainpage': '',
      'selectedRecordType': '',
      'entity.id': '',
      'userarrayname': '',
      'entity.timeField1': `${appTime} 00:05:00`,
      'entity.lookupField1': '',
      'entity.ownerid': '005201888A301F7OYLmi',
      'entity.lookupField2': 'a512017000B37449wRDl',
      'entity.timeField2': `${meetTime} 00:00:00`,
      'entity.timeField3': `${meetTime} 20:00:00`,
      'entity.strField5': '13681144008',
      'entity.strField1': '公司例会',
      'entity.strField3': '8',
      'entity.lookupField3': '005201888A301F7OYLmi',
      'entity.longtextField2': '',
      'entity.longtextField1': '中文未来',
      'entity.longtextField3': ''
    }
  };
  request(options, function (error, response) {
    ctx.logger.info('params:406发送请求')
    if (error) {
      throw new Error(error)
    }else{
      fs.writeFile('index406.html',response.body,function(err,data) {
      })
    }

  });
}
