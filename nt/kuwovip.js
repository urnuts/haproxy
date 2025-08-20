# > 酷我音乐VIP
hostname = audiobookpay.kuwo.cn, mgxhtj.kuwo.cn, nmobi.kuwo.cn, searchrecterm.kuwo.cn, musicpay.kuwo.cn, vip1.kuwo.cn
# 广告
^https?:\/\/audiobookpay\.kuwo\.cn\/a\.p\?op=get_advertright_endtime url reject-dict
^https?:\/\/(mgxhtj|nmobi|searchrecterm)\.kuwo\.cn\/(mgxh|mobi|recterm)\.s url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/kuwo/kuwo.js
# 会员
^https?:\/\/audiobookpay\.kuwo\.cn\/a\.p url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/kuwo/kuwo.js
^https?:\/\/musicpay\.kuwo\.cn\/music\.pay url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/kuwo/kuwo.js
^https?:\/\/vip1\.kuwo\.cn\/vip\/(enc\/user\/vip\?op=ui|v\d\/theme\?op=gd) url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/kuwo/kuwo.js
^https?:\/\/vip1\.kuwo\.cn\/vip\/v\d\/user\/vip\?op=ui url script-response-body https://raw.githubusercontent.com/fmz200/wool_scripts/main/Scripts/kuwo/kuwo.js
