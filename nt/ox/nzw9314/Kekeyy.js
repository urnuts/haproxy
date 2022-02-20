/*
脚本功能：可可英语VIP
支持版本：商店最新
测试时间：2022.2.18

***************************
QuantumultX:

[mitm] 
hostname = mob2015.kekenet.com

[rewrite_local]
^https:\/\/mob2015\.kekenet\.com\/keke\/mobile\/index\.php url script-response-body https://raw.githubusercontent.com/urnuts/haproxy/main/nt/ox/nzw9314/Kekeyy.js

***************************/
re('"is_vip":\\d@"end_time":\\d+','"is_vip":1@"end_time":1741575902')

function re() {
 var body = $response.body;
 if (arguments[0].includes("@")) {
  var regs = arguments[0].split("@");
  var strs = arguments[1].split("@");
  for (i = 0;i < regs.length;i++) {
   var reg = new RegExp(regs[i],"g");
   body = body.replace(reg, strs[i]);
 }
}
 else {
  var reg = new RegExp(arguments[0],"g");
  body = body.replace(reg, arguments[1]);
}
 $done(body);
} 
