/***********************************************

> 应用名称：墨鱼自用12306去广告脚本
> 脚本作者：@ddgksf2013
> 微信账号：墨鱼手记
> 更新时间：2023-02-22

> 脚本说明：目前脚本是最简洁也是最完美的了（低调使用），Enjoy！
> 使用说明：请在本地添加分流 host, ad.12306.cn, direct

[filter_local]
host, ad.12306.cn, direct

[rewrite_local]
^https?:\/\/ad\.12306\.cn\/ad\/ser\/getAdList url script-analyze-echo-response https://raw.githubusercontent.com/urnuts/haproxy/main/nt/ox/12306.js

[mitm]
hostname = ad.12306.cn

***********************************************/













const version = 'V1.0.22';

var obj=JSON.parse($request.body),ddgksf2013={};"0007"==obj.placementNo?(ddgksf2013.materialsList=[{billMaterialsId:"6491",filePath:"ddgksf2013",creativeType:1}],ddgksf2013.advertParam={skipTime:1},ddgksf2013.code="00"):ddgksf2013="G0054"==obj.placementNo?{code:"00",materialsList:[{}]}:{code:"00",message:"无广告返回"},$done({body:JSON.stringify(ddgksf2013)});
