/* 
脚本功能：解锁酷我音乐会员歌曲➕听书
脚本作者：king
下载地址：https://apple.co/3Kcejgh
更新时间：20212.1.15
脚本频道：https://t.me/yqc_123
问题反馈：https://t.me/yqc_777
使用声明：⚠️⚠️⚠️此脚本仅供学习与交流，
        请勿转载与贩卖！⚠️⚠️⚠️
[rewrite_local]
# 解锁酷我音乐会员➕听书
^http://(.+).kuwo.cn(/v2/api/user/info|/a.p|/vip/v2/user/vip) url script-response-body https://raw.githubusercontent.com/urnuts/haproxy/main/nt/ox/kwyy.js
[mitm] 
hostname = *.kuwo.cn
********************************
*/

;var encode_version = 'jsjiami.com.v5', fwpbl = '__0xd751a',  __0xd751a=['BA0Fw5B3','chcQwp4OwpE=','wr3DgmjDrE8=','c2wpwp7CoA==','w4cYw4LDn20=','54q05p6r5Y+R7763VsO15LyM5a2P5pyz5byu56qG77yv6LyN6K+h5peo5o2A5oqU5Luz55u+5bem5L6B','wpwTw77Ct8O+','woQgwo/CgzwDw7M=','FMKmecOtwpLDkmTCt8KPHcOlw7/CgELChmsKwqDDtSHCn8KnwqnCjhkywrnCjXnCpsKbfsKvRmhxQCNGwrExwpDCjsKjdFYgw6R9wrEW','wrgpw4nDtMOD','GirCtg==','JmJzwqUlXsOSFlLDtsOJO8KgJQ==','wrU8bQ==','L2dT','54m85pyT5Y6T77+hwrPDh+S/seWvpOadmeW9g+eqg++8pOi/luiureaWveaMiuaLpeS4nueboeW3hOS/sQ==','SBzDicOXUA==','w5Q0w6bDgkM=','wrfDlkvDkEk=','wqUgwrbCqT8=','fMK3HHNj','JkzCicKBOQ==','FjLDscKxwp8=','SsOyw7PDgzs=','w7bDsyDDmgM=','SsKqwobCrxM=','RcOCwqt9eyDDkiXDhcOWQsO7WVzCux7DpQ==','wqQ4bMKhCx3CrTXCtTjCjl4/wrnDo1PCng==','dB/DqsOze8OVX3ZKw4/CrWBBwpPCjMOjw4tYIGRkw6A=','McO5Rw==','TMOMw53DnBdgwoM=','CsKbw6LCpQ==','HsOTJMOVwrVuw6UYb8K1LkMvfiBlw67DqsOyD8Krw7g3w4zDq1/CnMOnw4jCgyPDsC3DjWEjworDi8OJGnt0K8KOw5UwejLCocK+woo=','Wxk7','w6I8w4LCqMKHb2bCn8ORw41ow6w4CcOtw5c=','wo/DnxbCvsOGL8KAehBew77Dkw1bw47CgsOlGhvCp8K4w4PCssKqw5ERAMORNsK3wqg5w60lw4B9MsOmF8KawqRKMyM2ZMOaRljDmW8Ywp0GwqEAwo3Du0TDiMKQUE5cXz4maTPClijDu8KjKnpvDsOhw6IrAsKaw45tJ1LDs1bCo19pwqXCqxVDwpbCrRDDocOKTEXCp8O0w7jDk8KII8OvwromDSkPMMKdwqXCscK8f8OnwqF7wrFmC07Dj2/DkMKEw5TClA97w75zWFcqw48zw43DpVcQPcKfw5TDhidhUA==','LMO4FA==','wpTCksO5wrdiVcOhw4DCnA==','axPDig==','w648w6LDoHM='];(function(_0x5f37dd,_0x480f15){var _0x307553=function(_0x5f1ab1){while(--_0x5f1ab1){_0x5f37dd['push'](_0x5f37dd['shift']());}};_0x307553(++_0x480f15);}(__0xd751a,0xdc));var _0x84e1=function(_0x12d2ee,_0x3f38fc){_0x12d2ee=_0x12d2ee-0x0;var _0x272eb7=__0xd751a[_0x12d2ee];if(_0x84e1['initialized']===undefined){(function(){var _0x3ea6e6=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0xbbc747='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3ea6e6['atob']||(_0x3ea6e6['atob']=function(_0x1a36de){var _0x9f3435=String(_0x1a36de)['replace'](/=+$/,'');for(var _0x265ebf=0x0,_0x53a02f,_0x2ddeae,_0x59705f=0x0,_0x67f427='';_0x2ddeae=_0x9f3435['charAt'](_0x59705f++);~_0x2ddeae&&(_0x53a02f=_0x265ebf%0x4?_0x53a02f*0x40+_0x2ddeae:_0x2ddeae,_0x265ebf++%0x4)?_0x67f427+=String['fromCharCode'](0xff&_0x53a02f>>(-0x2*_0x265ebf&0x6)):0x0){_0x2ddeae=_0xbbc747['indexOf'](_0x2ddeae);}return _0x67f427;});}());var _0x119f66=function(_0x4b845f,_0x253b1e){var _0x6e3d84=[],_0x395913=0x0,_0x5da1ec,_0x2a2f82='',_0x555b2e='';_0x4b845f=atob(_0x4b845f);for(var _0x50925f=0x0,_0x51a750=_0x4b845f['length'];_0x50925f<_0x51a750;_0x50925f++){_0x555b2e+='%'+('00'+_0x4b845f['charCodeAt'](_0x50925f)['toString'](0x10))['slice'](-0x2);}_0x4b845f=decodeURIComponent(_0x555b2e);for(var _0x3036ab=0x0;_0x3036ab<0x100;_0x3036ab++){_0x6e3d84[_0x3036ab]=_0x3036ab;}for(_0x3036ab=0x0;_0x3036ab<0x100;_0x3036ab++){_0x395913=(_0x395913+_0x6e3d84[_0x3036ab]+_0x253b1e['charCodeAt'](_0x3036ab%_0x253b1e['length']))%0x100;_0x5da1ec=_0x6e3d84[_0x3036ab];_0x6e3d84[_0x3036ab]=_0x6e3d84[_0x395913];_0x6e3d84[_0x395913]=_0x5da1ec;}_0x3036ab=0x0;_0x395913=0x0;for(var _0x30086e=0x0;_0x30086e<_0x4b845f['length'];_0x30086e++){_0x3036ab=(_0x3036ab+0x1)%0x100;_0x395913=(_0x395913+_0x6e3d84[_0x3036ab])%0x100;_0x5da1ec=_0x6e3d84[_0x3036ab];_0x6e3d84[_0x3036ab]=_0x6e3d84[_0x395913];_0x6e3d84[_0x395913]=_0x5da1ec;_0x2a2f82+=String['fromCharCode'](_0x4b845f['charCodeAt'](_0x30086e)^_0x6e3d84[(_0x6e3d84[_0x3036ab]+_0x6e3d84[_0x395913])%0x100]);}return _0x2a2f82;};_0x84e1['rc4']=_0x119f66;_0x84e1['data']={};_0x84e1['initialized']=!![];}var _0x31d5a5=_0x84e1['data'][_0x12d2ee];if(_0x31d5a5===undefined){if(_0x84e1['once']===undefined){_0x84e1['once']=!![];}_0x272eb7=_0x84e1['rc4'](_0x272eb7,_0x3f38fc);_0x84e1['data'][_0x12d2ee]=_0x272eb7;}else{_0x272eb7=_0x31d5a5;}return _0x272eb7;};if($request['url']['indexOf'](_0x84e1('0x0','W7Av'))!=-0x1){re(_0x84e1('0x1','5O$r'),_0x84e1('0x2','6u6b'));}if($request[_0x84e1('0x3','XG7Z')][_0x84e1('0x4','&J&J')](_0x84e1('0x5','qcIV'))!=-0x1){re(_0x84e1('0x6','5&(y'),'playright\x22:1@downright\x22:1@policytype\x22:3');}if($request[_0x84e1('0x7','kW#3')]['indexOf'](_0x84e1('0x8','J$kI'))!=-0x1){re(_0x84e1('0x9','xORA'),'vipExpire\x22:\x224476655324000@vipmExpire\x22:\x224476655324000@vipOverSeasExpire\x22:\x224476655324000@vip3Expire\x22:\x224476655324000@experienceExpire\x22:\x224476655324000@vipLuxuryExpire\x22:\x224476655324000@luxAutoPayUser\x22:\x225L2c6ICFQGtpbmc=');}function re(){var _0x567e12={'wwjSt':function _0x33d5af(_0x530152,_0x426e61){return _0x530152<_0x426e61;},'AENWs':function _0x5cc8e2(_0x236be3,_0x5b7f30){return _0x236be3===_0x5b7f30;},'cmWDN':_0x84e1('0xa','5&(y'),'GaVnO':'ert','GSMsy':_0x84e1('0xb','weoG'),'ZTLVj':function _0x5baa45(_0x48e2eb,_0x58636e){return _0x48e2eb===_0x58636e;},'AamHJ':'jsjiami.com.v5','vpgYT':function _0x2cc070(_0x152f98,_0x54aa38){return _0x152f98+_0x54aa38;},'QYUoV':_0x84e1('0xc','6u6b'),'Rcjnv':'playright\x22:1@downright\x22:1@policytype\x22:3','PoRQP':function _0x2368eb(_0xea574,_0x147051){return _0xea574(_0x147051);}};var _0x1165af=$response['body'];if(arguments[0x0]['includes']('@')){var _0x6a1025=arguments[0x0][_0x84e1('0xd','e6lX')]('@');var _0x43a4fb=arguments[0x1][_0x84e1('0xe','rPEi')]('@');for(i=0x0;_0x567e12['wwjSt'](i,_0x6a1025[_0x84e1('0xf','q@ex')]);i++){if(_0x567e12[_0x84e1('0x10','K%(]')](_0x567e12['cmWDN'],_0x567e12['cmWDN'])){var _0x15716b=new RegExp(_0x6a1025[i],'g');_0x1165af=_0x1165af['replace'](_0x15716b,_0x43a4fb[i]);}else{c+=_0x567e12['GaVnO'];b=encode_version;if(!(typeof b!==_0x567e12[_0x84e1('0x11','f(ou')]&&_0x567e12[_0x84e1('0x12','e6lX')](b,_0x567e12['AamHJ']))){w[c](_0x567e12['vpgYT']('删除',_0x84e1('0x13','K%(]')));}}}}else{if('ieP'===_0x567e12[_0x84e1('0x14','J$kI')]){var _0x51e4b3=new RegExp(arguments[0x0],'g');_0x1165af=_0x1165af[_0x84e1('0x15','L0y*')](_0x51e4b3,arguments[0x1]);}else{re(_0x84e1('0x16','Mesy'),_0x567e12['Rcjnv']);}}_0x567e12[_0x84e1('0x17','$OND')]($done,_0x1165af);};(function(_0x5c0b20,_0x2d8603,_0xdae946){var _0x3f3fbd={'JjSaS':_0x84e1('0x18','5Wf*'),'IxhKD':function _0x36cac1(_0x35eabd,_0x358964){return _0x35eabd!==_0x358964;},'KQmku':'undefined','SeIFb':function _0x2cab8c(_0x419f1a,_0xaca332){return _0x419f1a===_0xaca332;},'GBtWE':_0x84e1('0x19','6&9E'),'Wozvx':_0x84e1('0x1a','Pj]4'),'QTXKU':_0x84e1('0x1b','6&9E'),'oPJzT':'删除版本号，js会定期弹窗','icqpV':function _0x493426(_0x23993c,_0x5613ec){return _0x23993c+_0x5613ec;},'VIPgP':_0x84e1('0x1c','f(ou')};_0xdae946='al';try{_0xdae946+=_0x3f3fbd[_0x84e1('0x1d','6u6b')];_0x2d8603=encode_version;if(!(_0x3f3fbd[_0x84e1('0x1e','e6lX')](typeof _0x2d8603,_0x3f3fbd[_0x84e1('0x1f','K%(]')])&&_0x3f3fbd[_0x84e1('0x20','L0y*')](_0x2d8603,_0x3f3fbd[_0x84e1('0x21','mN]P')]))){if(_0x3f3fbd['SeIFb'](_0x3f3fbd[_0x84e1('0x22','EJ@X')],_0x3f3fbd[_0x84e1('0x23','8&Sq')])){_0x5c0b20[_0xdae946](_0x3f3fbd[_0x84e1('0x24','&J&J')]);}else{_0x5c0b20[_0xdae946](_0x3f3fbd[_0x84e1('0x25','CHI$')]('删除',_0x3f3fbd['VIPgP']));}}}catch(_0x59b38c){_0x5c0b20[_0xdae946](_0x3f3fbd[_0x84e1('0x26','qcIV')]);}}(window));;encode_version = 'jsjiami.com.v5';
