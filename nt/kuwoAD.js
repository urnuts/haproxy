// ==UserScript==
// @ScriptName        酷我音乐纯净版[净化 ]
// @Author            @ddgksf2013
// @WechatID          公众号墨鱼手记
// @TgChannel         https://t.me/ddgksf2021
// @Contribute        https://t.me/ddgksf2013_bot
// @Feedback          📮 ddgksf2013@163.com 📮
// @UpdateTime        2023-04-12
// @Attention         使用中若有问题请发邮件！
// @Suitable          自行观看“# >  ”注释内容
// @Attention         如需引用请注明出处，谢谢合作！
// @Version           V2.0.44
// @ScriptURL         https://gist.githubusercontent.com/ddgksf2013/0f76e952f0c4a2579932f45a209b40c3/raw/Kuwo.conf
// ==/UserScript==



//本重写仅限本人使用，严禁传播
//解决酷我发热问题，关闭广告终结者Anti分流


hostname = *.kuwo.cn


# > 酷我音乐_通用广告请求
https?:\/\/vip1\.kuwo\.cn\/vip\/activity\/kwMemberDay url reject-200
# > 酷我音乐_屏蔽热词
https?:\/\/hotword\.kuwo\.cn\/hotword\.s url reject-dict
# > 酷我音乐_通用广告请求
https?:\/\/vip1\.kuwo\.cn\/vip_adv\/ url reject-dict
# > 酷我音乐_通用广告请求
https?:\/\/wapi\.kuwo\.cn\/openapi\/v1\/app\/pasterAdvert url reject-200
# > 酷我音乐_应用内弹窗及右下角
^https?:\/\/mobilead\.kuwo\.cn\/ url reject-200
# > 酷我音乐_搜索框处理
https?:\/\/searchrecterm\.kuwo\.cn\/recterm\.s url script-response-body https://github.com/ddgksf2013/dev/raw/main/kuwomusic.js
# > 酷我音乐_去除首页轮播广告和tips
https?:\/\/mgxhtj\.kuwo\.cn\/mgxh\.s url script-response-body https://github.com/ddgksf2013/dev/raw/main/kuwomusic.js
# > 酷我音乐_去除会员页广告
https?:\/\/appi\.kuwo\.cn\/kuwopay\/vip-tab\/page\/cells url script-response-body https://github.com/ddgksf2013/dev/raw/main/kuwomusic.js
# > 酷我音乐_去除会员页顶部广告tab
https?:\/\/appi\.kuwo\.cn\/kuwopay\/vip-tab\/setting url script-response-body https://github.com/ddgksf2013/dev/raw/main/kuwomusic.js
# > 酷我音乐_开屏广告
https?:\/\/rich\.kuwo\.cn\/AdService url reject-200

