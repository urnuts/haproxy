# > 闲鱼
# hostname = acs.m.goofish.com, g-acs.m.goofish.com, dinamicx.alibabausercontent.com
# 拦截广告下发
^http:\/\/amdc\.m\.taobao\.com\/amdc\/mobileDispatch %E9%97%B2%E9%B1%BC* url-and-header reject
# 我的页面横幅
^https:\/\/dinamicx\.alibabausercontent\.com\/pub\/fish_home_top_kingkong_new\/ url reject
# 开屏广告
^https:\/\/acs\.m\.goofish\.com\/gw\/mtop\.taobao\.idlecommerce\.splash\.ads\/ url reject-dict
# 搜索页面净化
^https:\/\/acs\.m\.goofish\.com\/gw\/mtop\.taobao\.idlemtopsearch\.item\.search\.activate\/ url reject-dict
^https:\/\/acs\.m\.goofish\.com\/gw\/mtop\.taobao\.idlemtopsearch\.search\.discover\/ url reject-dict
# 首页顶部标签
^https:\/\/(g-)?acs\.m\.goofish\.com\/gw\/mtop\.taobao\.idle\.home\.whale\.modulet\/ url script-response-body https://github.com/fmz200/wool_scripts/raw/main/Scripts/xianyu/xianyu_ads.js
# 搜索栏填充词
^https:\/\/(g-)?acs\.m\.goofish\.com\/gw\/mtop\.taobao\.idlemtopsearch\.search\.shade\/ url script-response-body https://github.com/fmz200/wool_scripts/raw/main/Scripts/xianyu/xianyu_ads.js
# 首页闲鱼币入口、底部发布球
^https:\/\/(g-)?acs\.m\.goofish\.com\/gw\/mtop\.taobao\.idle\.user\.strategy\.list\/ url script-response-body https://github.com/fmz200/wool_scripts/raw/main/Scripts/xianyu/xianyu_ads.js
# 商品信息流广告
^https:\/\/(g-)?acs\.m\.goofish\.com\/gw\/mtop\.taobao\.idlehome\.home\.nextfresh\/ url script-response-body https://github.com/fmz200/wool_scripts/raw/main/Scripts/xianyu/xianyu_ads.js
# 定位地区页面的信息流广告
^https:\/\/(g-)?acs\.m\.goofish\.com\/gw\/mtop\.taobao\.idle\.local\.home\/ url script-response-body https://github.com/fmz200/wool_scripts/raw/main/Scripts/xianyu/xianyu_ads.js

hostname = acs.m.goofish.com, g-acs.m.goofish.com, dinamicx.alibabausercontent.com
