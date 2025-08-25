/*************************************

项目名称：山丘阅读
下载地址： https://t.cn/A6o2bCq7
更新日期：2024-06-03
脚本作者：chxm1023
电报频道：https://t.me/chxm1023
使用声明：⚠️仅供参考，🈲转载与售卖！
版本支持:  5.18
更新日期:  2024-06-03
解锁会员 特别说明:  非一次性解锁，先开启规则，在进入软件即可！如果没有解锁重新打开APP即可。


**************************************

[rewrite_local]
^http:\/\/(m\.815616\.xyz|175\.178\.52\.149:88)\/api\/v\d\/myinfo url script-response-body https://raw.githubusercontent.com/chxm1023/Rewrite/main/shanqiuyuedu.js

[mitm]
hostname = m.815616.xyz

*************************************/


var chxm1023 = JSON.parse($response.body);

chxm1023.data[0].type = "9";
chxm1023.data[0].vipto = "2099-09-09 09:09:09";

$done({body : JSON.stringify(chxm1023)});
