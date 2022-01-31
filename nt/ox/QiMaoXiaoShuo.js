
# > 七猫小说(2022.01.18)
#▍使用说明：☝️支持商店最新版
#解锁终身会员，无任何下载、阅读、听书限制，去除所有广告（还有广告卸载重装）

***************************
QuantumultX:
  
[mitm]
hostname = *.wtzw.com

[rewrite_local]
^https?:\/\/(api-\w+|xiaoshuo)\.wtzw\.com\/api\/v\d\/ url script-response-body https://raw.githubusercontent.com/urnuts/haproxy/main/nt/ox/QiMaoXiaoShuo.js

***************************
Surge4 or Loon:
[mitm]
hostname = *.wtzw.com

[Script]
http-response ^https?:\/\/(api-\w+|xiaoshuo)\.wtzw\.com\/api\/v\d\/ requires-body=1,max-size=-1,script-path=https://raw.githubusercontent.com/urnuts/haproxy/main/nt/ox/QiMaoXiaoShuo.js

***************************
