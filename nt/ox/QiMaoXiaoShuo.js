hostname = *.wtzw.com

# > 七猫小说(2022.01.18)
#▍使用说明：☝️支持商店最新版
#解锁终身会员，无任何下载、阅读、听书限制，去除所有广告（还有广告卸载重装）
^https?:\/\/(api-\w+|xiaoshuo)\.wtzw\.com\/api\/v\d\/ url script-response-body https://raw.githubusercontent.com/urnuts/haproxy/main/nt/ox/QiMaoXiaoShuo.js
