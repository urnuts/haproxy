/*
扫描全能王CamScanner.
解锁部分高级特权至2099,OCR不可用无需登录
野比大佬
***************************
Quantumult X:

[rewrite_local]
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/urnuts/haproxy/main/nt/ox/CamScanner.js
[mitm]
hostname = ap*.intsig.net


***************************
Surge4 or Loon:

[Script]
http-response ^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/urnuts/haproxy/main/nt/ox/CamScanner.js
[mitm]
hostname = ap*.intsig.net

**************************
*/
let obj = JSON.parse($response.body);
obj = {"data":{"psnl_vip_property":{"expiry":"4073275762"}}};
$done({body: JSON.stringify(obj)});
