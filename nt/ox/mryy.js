/*
每日英语阅读/每日外刊
每日英语听力，欧路词典
by:chamberlen
***************************
QuantumultX:
[rewrite_local]
^https:\/\/dict\.eudic\.net\/jingting\/GetThisChapterTaskStatus? url script-response-body https://raw.githubusercontent.com/urnuts/haproxy/main/nt/ox/mryy.js

[mitm] 
mitm = dict.eudic.net
********************************
*/
let obj=JSON.parse($response.body);
obj.tasks[0].finished= true;
obj.tasks[0].task_action.user_purchase_status = "1";
//obj.tasks[0].optional = true;
//obj.tasks[0].finish_star = "1";
$done({body:JSON.stringify(obj)})
