/*
脚本功能：增加微信读书免费时长
脚本作者：R·E
下载地址：https://apps.apple.com/cn/app/%E5%BE%AE%E4%BF%A1%E8%AF%BB%E4%B9%A6/id952059546
支持版本：商店旧版 6.0.1-5.4.3
更新时间：2022.1.28
问题反馈：https://t.me/yqc_777
使用声明：⚠️⚠️⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️




***************************
QuantumultX:
[rewrite_local]
^https?:\/\/i\.weread\.qq\.com\/pay\/memberCardSummary url script-response-body https://raw.githubusercontent.com/urnuts/haproxy/main/nt/ox/F.E/WeRead.js

[mitm] 
hostname = i.weread.qq.com,101*.*.*,116.*.*.*,117.*.*.*,120.*.*.*,121.*.*.*,140.*.*.*,183.*.*.*,203*.*.*

***************************

*/

;var encode_version = 'jsjiami.com.v5', thwzo = '__0xd765c',  __0xd765c=['w4kST8KHbj46wotjQnrCmwrDjgrDlMKW','w4DCtsO/ccOPdMKVwprCqcKdw73CvHUTwqsM','WMK9a8KoSj7CtsK5w6rDssKM','w5nDo8OFw5BwHXU9fcO2wozDhk/Du8OxUhXCjMKA','w5zCsMOlZMOQdMKIwo3CnsKqw7vCtXAlwq0Q','WlXDqwTDgMOrwoILFD/DqkIzbQDDmcKQecOLL8K9','UHwGJsKFZA/Do0tSwptFZAvDgxw=','w4t0w5VPwr/CmiN+ThB5wqfCtw==','QcKSRxzDmBjCh2rCoXtDK0bCu8OswpI=','w5sCVcKMfzQhwp57TWs=','wp/CvsODw7rCuADCkwBBKsOOH8KKw4DDgcKQ','5Lii6LSJ5pev6Zm55Y+OJuWHp8K35pyQHAVI6ZuG5pWz54qH5oCR','wqQRw7zDpQHDkcO2EsKQwqYWw7LDi8KTw57CnQ==','5L6Z5qyO5Z285Lyv55ac5YW46Leu5pWd6Zu85Yy0w7nClWfljI/nuJTkuJXot43ml5rpmrrljZfljaPlj4fpm5TorK0=','wqs0wpY+wpPDi0RMwoM=','XWcc','w45ow5hJwrzCoyhpZw==','K8O3wpckw4XDqlIrwrV9w4lKL28=','54uS5pyv5Y2p776Ew5VN5Ly05a+Y5p+t5b2I56m077+Y6L2X6K+z5pee5o+i5oia5LmG55uz5bWf5L+8','XsKYfg==','w6s/SQ==','5YiY6Zmx54ig5p2+5YyB77yuCsOi5LyD5a6t5p+n5byU56qS','T3wdBsKk','wp1RTcKENg==','RsK9ccKKaw==','wrNYWsK/Fg==','TMOrwojDkcKX','w5jCums6PQ==','wrLCs8OYw4jChQ==','c8KbOcKSJg==','wq/CpcOPIEs=','w4rCjnAcw50=','wrnDucOQIEDDnA==','wox5dw==','XsKaTA==','woMmw60=','wrMoEw==','DiMrBcKV','OsKQRUHCiQ==','MT5pwqrChw==','w49ow4tPwrw=','QsKqccK6RA==','w6zCs0gsHQ==','Hxt+wr/Cvw==','IMKlZVHCmw==','dcKxcgd7','TsKdO8K7Ow==','TcKrWRHDuA==','w5Rsw59uwrU=','ES9gwrnChg==','wrQjwrQfwpw=','cmcsHMKw','w5xhw61HwrI=','wpsJw7o=','L8OtwrjDmMKP','cht9en8=','w7PCs30DLw==','w4xmw6nDm8Ov','w7tzw67DpMOG','w77CoF0nNw==','w5xiw70=','YsK0PcKwIg==','w57CjD8=','w67CkkgJIw==','wrcCZ8KgIsKlwpzClXlNwp/DlEp+wqhQR8K/VsOUZMKGKBhBJ8O+w4F+wpXCjxdow6QYXMOhYMO3Bk/DhcO3w5AYYA1wAMKzwoXDt8KtwqzCg8KsesKPaxnCk0I=','w7lrw7/DocOR','w7bCvl0+Og==','JsOowqU=','w6d+WChM','IgItAsK0N8K/cyQSwpPDikzClH7Cmw==','wr/CuMOqw6PCnQ==','wpPCoxPCh8Or','Q8KjIsK2','wqvCnkVp','w4jCoRAZcg==','w45/w7Zbwr4=','aFDCscOKw6Q=','UMKpbsKqRQ==','b8KOBcKATQ==','wqHDvT0=','XlTDvwjDgA==','wrsGwokiwrc=','wpl2YlzDpQ==','w6vCo1wjJw==','w5/CgcOeZMOU','wqXCrsOow7vCjw==','JUzChB4u','wq7CrMOIBnA3bQ==','JMOhwps=','fl7CvsOqw68=','w7Ntw7jDpw==','wqIdw7RqwqvCoQbCljU=','XsKqZ8KqRg==','w7HDrW4ecA==','wpU2wrQ=','wqNbXkjDmQ==','w6DCvB4GSQ==','wq/CjwnCgcOqOQ==','w4XCpk4BGQ==','w6ZDSQxR','YmMLGMKh','w7DCskcuLcO9','PUbDtibCs1PDvw==','HMKHHhTCnyLDmWTDhWIYPxXCtcK4wovCpQ==','w4jCkmA7Kg==','esOGw5TCkVQ=','wpQHw4krNQ==','wrgKw7PDshc=','RnrDoEA=','CsKHE2d2','S2UEO8KC','DMKaD3trwp3DsA==','w4XDvsOH','NGrCr8KzXcKCfMK1wrE=','d8K4bTJGKcOk','LcO8wo7DhsKa','ScK3aMK6TDzCkA==','wqfCrTNA','IsOrwpM+w4vDq14=','LMOrwp7DnMKP','wp0yPMOT','w71bQxBn','Iyx5wp7CoWjDqsOqwoA=','McOhwo8gw4XDqV5rwqI=','UMOuwqY=','w6piw6fDocORWXwnwp8QworCusObbcKcwoY=','N1rDmSDCqFDDiFHCnsKDw5ptw4MMAA==','w73CiTHChsO0S8KLwrbClGTCu8KCwpjDvAxAwrNVw4XDoQ=='];(function(_0xa0821c,_0x440314){var _0x1d4556=function(_0x332efd){while(--_0x332efd){_0xa0821c['push'](_0xa0821c['shift']());}};var _0x4d1d7a=function(){var _0x449c66={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4461f0,_0x1978c9,_0x2483ad,_0x163d67){_0x163d67=_0x163d67||{};var _0xc6a077=_0x1978c9+'='+_0x2483ad;var _0x2a4fc4=0x0;for(var _0x2a4fc4=0x0,_0x1eeee1=_0x4461f0['length'];_0x2a4fc4<_0x1eeee1;_0x2a4fc4++){var _0x2ab311=_0x4461f0[_0x2a4fc4];_0xc6a077+=';\x20'+_0x2ab311;var _0x1e8578=_0x4461f0[_0x2ab311];_0x4461f0['push'](_0x1e8578);_0x1eeee1=_0x4461f0['length'];if(_0x1e8578!==!![]){_0xc6a077+='='+_0x1e8578;}}_0x163d67['cookie']=_0xc6a077;},'removeCookie':function(){return'dev';},'getCookie':function(_0x328589,_0xb5c7a9){_0x328589=_0x328589||function(_0x10edba){return _0x10edba;};var _0x45691d=_0x328589(new RegExp('(?:^|;\x20)'+_0xb5c7a9['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x31305c=function(_0x4b70fb,_0xa4a6d0){_0x4b70fb(++_0xa4a6d0);};_0x31305c(_0x1d4556,_0x440314);return _0x45691d?decodeURIComponent(_0x45691d[0x1]):undefined;}};var _0x757a97=function(){var _0x36a8c6=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x36a8c6['test'](_0x449c66['removeCookie']['toString']());};_0x449c66['updateCookie']=_0x757a97;var _0xce5986='';var _0x1e134f=_0x449c66['updateCookie']();if(!_0x1e134f){_0x449c66['setCookie'](['*'],'counter',0x1);}else if(_0x1e134f){_0xce5986=_0x449c66['getCookie'](null,'counter');}else{_0x449c66['removeCookie']();}};_0x4d1d7a();}(__0xd765c,0x13b));var _0x3163=function(_0x3fb059,_0x5e6274){_0x3fb059=_0x3fb059-0x0;var _0x405686=__0xd765c[_0x3fb059];if(_0x3163['initialized']===undefined){(function(){var _0x294c21=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x1703d5='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x294c21['atob']||(_0x294c21['atob']=function(_0x517d3a){var _0x47625b=String(_0x517d3a)['replace'](/=+$/,'');for(var _0x11d2c4=0x0,_0x4524ff,_0x36ab90,_0x5dbf04=0x0,_0x290172='';_0x36ab90=_0x47625b['charAt'](_0x5dbf04++);~_0x36ab90&&(_0x4524ff=_0x11d2c4%0x4?_0x4524ff*0x40+_0x36ab90:_0x36ab90,_0x11d2c4++%0x4)?_0x290172+=String['fromCharCode'](0xff&_0x4524ff>>(-0x2*_0x11d2c4&0x6)):0x0){_0x36ab90=_0x1703d5['indexOf'](_0x36ab90);}return _0x290172;});}());var _0x12d1b0=function(_0x24cd67,_0x1f943f){var _0x5ad75b=[],_0x213ebc=0x0,_0x228f6b,_0x1d0741='',_0x190a7a='';_0x24cd67=atob(_0x24cd67);for(var _0x4ba197=0x0,_0x558857=_0x24cd67['length'];_0x4ba197<_0x558857;_0x4ba197++){_0x190a7a+='%'+('00'+_0x24cd67['charCodeAt'](_0x4ba197)['toString'](0x10))['slice'](-0x2);}_0x24cd67=decodeURIComponent(_0x190a7a);for(var _0x29edb2=0x0;_0x29edb2<0x100;_0x29edb2++){_0x5ad75b[_0x29edb2]=_0x29edb2;}for(_0x29edb2=0x0;_0x29edb2<0x100;_0x29edb2++){_0x213ebc=(_0x213ebc+_0x5ad75b[_0x29edb2]+_0x1f943f['charCodeAt'](_0x29edb2%_0x1f943f['length']))%0x100;_0x228f6b=_0x5ad75b[_0x29edb2];_0x5ad75b[_0x29edb2]=_0x5ad75b[_0x213ebc];_0x5ad75b[_0x213ebc]=_0x228f6b;}_0x29edb2=0x0;_0x213ebc=0x0;for(var _0x2f2ea0=0x0;_0x2f2ea0<_0x24cd67['length'];_0x2f2ea0++){_0x29edb2=(_0x29edb2+0x1)%0x100;_0x213ebc=(_0x213ebc+_0x5ad75b[_0x29edb2])%0x100;_0x228f6b=_0x5ad75b[_0x29edb2];_0x5ad75b[_0x29edb2]=_0x5ad75b[_0x213ebc];_0x5ad75b[_0x213ebc]=_0x228f6b;_0x1d0741+=String['fromCharCode'](_0x24cd67['charCodeAt'](_0x2f2ea0)^_0x5ad75b[(_0x5ad75b[_0x29edb2]+_0x5ad75b[_0x213ebc])%0x100]);}return _0x1d0741;};_0x3163['rc4']=_0x12d1b0;_0x3163['data']={};_0x3163['initialized']=!![];}var _0x41a514=_0x3163['data'][_0x3fb059];if(_0x41a514===undefined){if(_0x3163['once']===undefined){var _0x348a73=function(_0x2a2223){this['rc4Bytes']=_0x2a2223;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x348a73['prototype']['checkState']=function(){var _0x42435c=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x42435c['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x348a73['prototype']['runState']=function(_0x3e934b){if(!Boolean(~_0x3e934b)){return _0x3e934b;}return this['getState'](this['rc4Bytes']);};_0x348a73['prototype']['getState']=function(_0x3c07f3){for(var _0x325035=0x0,_0x2fe8ab=this['states']['length'];_0x325035<_0x2fe8ab;_0x325035++){this['states']['push'](Math['round'](Math['random']()));_0x2fe8ab=this['states']['length'];}return _0x3c07f3(this['states'][0x0]);};new _0x348a73(_0x3163)['checkState']();_0x3163['once']=!![];}_0x405686=_0x3163['rc4'](_0x405686,_0x5e6274);_0x3163['data'][_0x3fb059]=_0x405686;}else{_0x405686=_0x41a514;}return _0x405686;};var _0x5595bf=function(){var _0x2aa86c=!![];return function(_0x382896,_0x38fde0){var _0x437dcf=_0x2aa86c?function(){if(_0x38fde0){var _0x37b1e7=_0x38fde0['apply'](_0x382896,arguments);_0x38fde0=null;return _0x37b1e7;}}:function(){};_0x2aa86c=![];return _0x437dcf;};}();var _0xbede56=_0x5595bf(this,function(){var _0x49b7f7=function(){return'\x64\x65\x76';},_0x53aec5=function(){return'\x77\x69\x6e\x64\x6f\x77';};var _0x396bfb=function(){var _0x153154=new RegExp('\x5c\x77\x2b\x20\x2a\x5c\x28\x5c\x29\x20\x2a\x7b\x5c\x77\x2b\x20\x2a\x5b\x27\x7c\x22\x5d\x2e\x2b\x5b\x27\x7c\x22\x5d\x3b\x3f\x20\x2a\x7d');return!_0x153154['\x74\x65\x73\x74'](_0x49b7f7['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x526a9e=function(){var _0x53feb2=new RegExp('\x28\x5c\x5c\x5b\x78\x7c\x75\x5d\x28\x5c\x77\x29\x7b\x32\x2c\x34\x7d\x29\x2b');return _0x53feb2['\x74\x65\x73\x74'](_0x53aec5['\x74\x6f\x53\x74\x72\x69\x6e\x67']());};var _0x585753=function(_0x3d1577){var _0x13335a=~-0x1>>0x1+0xff%0x0;if(_0x3d1577['\x69\x6e\x64\x65\x78\x4f\x66']('\x69'===_0x13335a)){_0x21adbb(_0x3d1577);}};var _0x21adbb=function(_0x24f3f4){var _0x54f8fa=~-0x4>>0x1+0xff%0x0;if(_0x24f3f4['\x69\x6e\x64\x65\x78\x4f\x66']((!![]+'')[0x3])!==_0x54f8fa){_0x585753(_0x24f3f4);}};if(!_0x396bfb()){if(!_0x526a9e()){_0x585753('\x69\x6e\x64\u0435\x78\x4f\x66');}else{_0x585753('\x69\x6e\x64\x65\x78\x4f\x66');}}else{_0x585753('\x69\x6e\x64\u0435\x78\x4f\x66');}});_0xbede56();var _0x20ad77=function(){var _0x1d8323=!![];return function(_0x31bdd7,_0x216076){var _0xc7e6e5=_0x1d8323?function(){if(_0x216076){var _0x2900f3=_0x216076[_0x3163('0x0','[T^w')](_0x31bdd7,arguments);_0x216076=null;return _0x2900f3;}}:function(){var _0x2cd8f8={'HyvrJ':_0x3163('0x1','Xp[x')};if(_0x2cd8f8[_0x3163('0x2','*$Tj')]!==_0x3163('0x3','^aba')){}else{}};_0x1d8323=![];return _0xc7e6e5;};}();(function(){var _0x228dd9={'qBeBm':function _0x8ec9b3(_0x5bf912,_0xdab3ec,_0x18a8cf){return _0x5bf912(_0xdab3ec,_0x18a8cf);}};_0x228dd9[_0x3163('0x4','[T^w')](_0x20ad77,this,function(){var _0x3e4ede={'XMGRz':function _0x356526(_0x1173ab,_0x47def1){return _0x1173ab!==_0x47def1;},'jDiKN':'ufN','HoGmV':_0x3163('0x5','R1l#'),'SNpcb':function _0x19a6da(_0x2f9376,_0x1c1935){return _0x2f9376(_0x1c1935);},'rkmUl':function _0x1d2a18(_0x1f3c47,_0x454516){return _0x1f3c47+_0x454516;},'uyJwd':_0x3163('0x6','ysW&'),'zqhcf':_0x3163('0x7','[T^w'),'nQqtO':function _0x39baa1(_0x4239df,_0x198292){return _0x4239df(_0x198292);},'lwKwI':function _0x523f5e(_0x4fbb4c){return _0x4fbb4c();}};if(_0x3e4ede['XMGRz'](_0x3163('0x8','tV$1'),_0x3e4ede[_0x3163('0x9','RZo7')])){var _0x94faac=new RegExp(_0x3163('0xa','[2ns'));var _0x331b22=new RegExp(_0x3e4ede[_0x3163('0xb','c]9h')],'i');var _0x504f58=_0x3e4ede[_0x3163('0xc','3Kef')](_0xe9030b,_0x3163('0xd','*$Tj'));if(!_0x94faac[_0x3163('0xe','Vzq9')](_0x3e4ede[_0x3163('0xf','^aba')](_0x504f58,_0x3e4ede[_0x3163('0x10','Xp[x')]))||!_0x331b22['test'](_0x3e4ede[_0x3163('0x11','XrKR')](_0x504f58,_0x3e4ede[_0x3163('0x12','XGQ2')]))){_0x3e4ede[_0x3163('0x13','nRqR')](_0x504f58,'0');}else{_0x3e4ede['lwKwI'](_0xe9030b);}}else{while(!![]){}}})();}());var _0x50bd2c=function(){var _0x192220=!![];return function(_0x3ca61d,_0x5c6dd9){var _0x360627=_0x192220?function(){var _0x33cb25={'tsqhi':function _0x245ae9(_0x2ce33a,_0x5fc10d){return _0x2ce33a!==_0x5fc10d;},'cFmuJ':'Sdv','kXUtw':_0x3163('0x14','MreU'),'RyEuD':'Rbl'};if(_0x33cb25[_0x3163('0x15','%fcU')](_0x33cb25[_0x3163('0x16','l)4!')],_0x33cb25[_0x3163('0x17','zOD2')])){var _0x4fdf93=_0x192220?function(){if(_0x5c6dd9){var _0xfb0b98=_0x5c6dd9['apply'](_0x3ca61d,arguments);_0x5c6dd9=null;return _0xfb0b98;}}:function(){};_0x192220=![];return _0x4fdf93;}else{if(_0x5c6dd9){if(_0x33cb25[_0x3163('0x18','[T^w')](_0x33cb25[_0x3163('0x19','^lrA')],_0x33cb25[_0x3163('0x1a','c]9h')])){var _0x136946=_0x5c6dd9[_0x3163('0x1b','GTZD')](_0x3ca61d,arguments);_0x5c6dd9=null;return _0x136946;}else{that[_0x3163('0x1c','bFJz')]=function(_0x3649e9){var _0x2009ca={};_0x2009ca[_0x3163('0x1d','AQ5m')]=_0x3649e9;_0x2009ca['warn']=_0x3649e9;_0x2009ca[_0x3163('0x1e','XrKR')]=_0x3649e9;_0x2009ca[_0x3163('0x1f','ysW&')]=_0x3649e9;_0x2009ca['error']=_0x3649e9;_0x2009ca[_0x3163('0x20','WDHl')]=_0x3649e9;_0x2009ca[_0x3163('0x21','XGQ2')]=_0x3649e9;return _0x2009ca;}(func);}}}}:function(){var _0x5223f3={'rCrsx':function _0x1ae09d(_0x511be9,_0x31e056){return _0x511be9===_0x31e056;},'YkQav':'MvP'};if(_0x5223f3[_0x3163('0x22','d^g0')](_0x3163('0x23','l)4!'),_0x5223f3[_0x3163('0x24','zOD2')])){}else{}};_0x192220=![];return _0x360627;};}();var _0x1d967b=_0x50bd2c(this,function(){var _0x25a468={'bNqtt':function _0x305a50(_0x4585de,_0x2f0832){return _0x4585de!==_0x2f0832;},'ZjhFK':'undefined','ZvcJW':function _0x4e1b38(_0x3dcae6,_0x416d4e){return _0x3dcae6===_0x416d4e;},'kyxoS':'function'};var _0x55f8fd=function(){};var _0xb28e01=_0x25a468['bNqtt'](typeof window,_0x25a468['ZjhFK'])?window:_0x25a468[_0x3163('0x25','^aba')](typeof process,_0x3163('0x26','3Kef'))&&_0x25a468[_0x3163('0x27','[T^w')](typeof require,_0x25a468[_0x3163('0x28','RZo7')])&&_0x25a468[_0x3163('0x29','5DDc')](typeof global,_0x3163('0x2a','[T^w'))?global:this;if(!_0xb28e01[_0x3163('0x2b','Dyyo')]){_0xb28e01['console']=function(_0x230c2a){var _0x2cf21b={'WBMpd':_0x3163('0x2c','dMfS')};var _0x28c2d2=_0x2cf21b[_0x3163('0x2d','[T^w')][_0x3163('0x2e','OX9v')]('|'),_0x1e6957=0x0;while(!![]){switch(_0x28c2d2[_0x1e6957++]){case'0':return _0x12949b;case'1':_0x12949b[_0x3163('0x2f','Mh8z')]=_0x230c2a;continue;case'2':_0x12949b['exception']=_0x230c2a;continue;case'3':_0x12949b[_0x3163('0x30','C6h9')]=_0x230c2a;continue;case'4':_0x12949b[_0x3163('0x31','%DFp')]=_0x230c2a;continue;case'5':var _0x12949b={};continue;case'6':_0x12949b['info']=_0x230c2a;continue;case'7':_0x12949b['log']=_0x230c2a;continue;case'8':_0x12949b[_0x3163('0x32','Pf6V')]=_0x230c2a;continue;}break;}}(_0x55f8fd);}else{var _0xb0d228='0|4|5|6|3|1|2'[_0x3163('0x33','5DDc')]('|'),_0x7f0bd0=0x0;while(!![]){switch(_0xb0d228[_0x7f0bd0++]){case'0':_0xb28e01[_0x3163('0x34','Pf6V')][_0x3163('0x35','m)7I')]=_0x55f8fd;continue;case'1':_0xb28e01['console'][_0x3163('0x36','T6*v')]=_0x55f8fd;continue;case'2':_0xb28e01[_0x3163('0x37','7x6g')]['trace']=_0x55f8fd;continue;case'3':_0xb28e01['console'][_0x3163('0x38','AQ5m')]=_0x55f8fd;continue;case'4':_0xb28e01[_0x3163('0x39','XGQ2')][_0x3163('0x3a','pO7B')]=_0x55f8fd;continue;case'5':_0xb28e01[_0x3163('0x3b','3yFo')][_0x3163('0x3c','AQ5m')]=_0x55f8fd;continue;case'6':_0xb28e01['console'][_0x3163('0x3d','XuAG')]=_0x55f8fd;continue;}break;}}});_0x1d967b();var _0x22c7b1=$response['body'];var _0x2237d3=JSON[_0x3163('0x3e','RZo7')](_0x22c7b1);_0x2237d3[_0x3163('0x3f','Huaj')]=0xe6e0335b24;_0x2237d3['expiredTime']=0xe6e038077f;_0x2237d3['expired']=0x0;_0x2237d3['isPaying']=0x0;_0x2237d3[_0x3163('0x40','3yFo')]=0x0;_0x2237d3[_0x3163('0x41','Z4Be')]=0x5b;_0x2237d3['remainTime']=0x5eb4ad4;_0x2237d3[_0x3163('0x42','ysW&')]=0x6;setInterval(function(){var _0x5b6290={'buAyF':function _0x6aefef(_0x158815){return _0x158815();}};_0x5b6290['buAyF'](_0xe9030b);},0xfa0);_0x2237d3[_0x3163('0x43','Dyyo')]=0x6;_0x2237d3[_0x3163('0x44','LM9U')]=0x6;_0x2237d3['autoRenewableChannel']=0x6;_0x2237d3[_0x3163('0x45','Bc#]')]=0x6;_0x2237d3['autoRenewablePrice']=0xf229c;_0x2237d3['savedMoney']=0x977b09;_0x2237d3[_0x3163('0x46','^lrA')]=0x1a0a;_0x2237d3['remainCoupon']=0x1a0a;_0x2237d3[_0x3163('0x47','XGQ2')]=0x1a0a;_0x2237d3['hintsForRecharge'][_0x3163('0x48','m)7I')]=0x97382b;_0x2237d3[_0x3163('0x49','^lrA')][_0x3163('0x4a','%fcU')]=0xf;_0x2237d3[_0x3163('0x4b','5DDc')][_0x3163('0x4c','Xp[x')]=0x1863c;_0x2237d3[_0x3163('0x4d','dMfS')][_0x3163('0x4e','Bc#]')]=0x1a0a;_0x2237d3[_0x3163('0x4f','c]9h')]['buttonTitle']=_0x3163('0x50','zOD2');_0x2237d3[_0x3163('0x51','C6h9')]['buttonSubtitle']=_0x3163('0x52','h*E&');_0x22c7b1=JSON[_0x3163('0x53','l)4!')](_0x2237d3);$done({'body':_0x22c7b1});;(function(_0x333085,_0xefb78e,_0x576ee6){var _0x2d02e3={'wiuTR':_0x3163('0x54','5DDc'),'BZSZo':function _0x47d7b4(_0x2dc5db,_0x2bd7f5){return _0x2dc5db!==_0x2bd7f5;},'lewCH':_0x3163('0x55','Xp[x'),'lSDaO':function _0x5fbf95(_0x3e6676,_0x31af15){return _0x3e6676===_0x31af15;},'HjhrG':_0x3163('0x56','3yFo'),'xdWag':'njv','yTYxr':_0x3163('0x57','ysW&'),'GjFqs':function _0x58a967(_0x5e177f,_0x5a1239){return _0x5e177f===_0x5a1239;},'EduFN':_0x3163('0x58','dMfS'),'YVrPN':_0x3163('0x59','Bc#]'),'bfiUT':function _0x3d936d(_0xaff401){return _0xaff401();},'SOXSH':_0x3163('0x5a','5DDc')};_0x576ee6='al';try{_0x576ee6+=_0x2d02e3[_0x3163('0x5b','5DDc')];_0xefb78e=encode_version;if(!(_0x2d02e3[_0x3163('0x5c','ot1!')](typeof _0xefb78e,_0x2d02e3[_0x3163('0x5d','XGQ2')])&&_0x2d02e3[_0x3163('0x5e','ot1!')](_0xefb78e,_0x2d02e3['HjhrG']))){if(_0x2d02e3[_0x3163('0x5f','Z4Be')]!=='Vjn'){_0x333085[_0x576ee6]('删除'+_0x2d02e3['yTYxr']);}else{}}}catch(_0x2abaa8){if(_0x2d02e3[_0x3163('0x60','[T^w')](_0x2d02e3[_0x3163('0x61','c]9h')],_0x2d02e3[_0x3163('0x62','*$Tj')])){_0x2d02e3[_0x3163('0x63','bFJz')](_0xe9030b);}else{_0x333085[_0x576ee6](_0x2d02e3[_0x3163('0x64','5zty')]);}}}(window));function _0xe9030b(_0x4ead41){var _0x2bb071={'JThdU':function _0x1ac6d2(_0x52e2c6,_0x1c3d82){return _0x52e2c6===_0x1c3d82;},'nTUbq':_0x3163('0x65','Grr3'),'iMavH':_0x3163('0x66','zOD2'),'afqFR':function _0x484e8e(_0xc9aecc,_0xbad808){return _0xc9aecc!==_0xbad808;},'tnwcf':function _0x462788(_0x5cbe52,_0x49c501){return _0x5cbe52+_0x49c501;},'AwxUS':function _0x48a9c1(_0x314bd0,_0x11ec60){return _0x314bd0/_0x11ec60;},'hrwsg':'length','scegS':function _0x348674(_0x1b92c4,_0x28fed4){return _0x1b92c4===_0x28fed4;},'OCfSj':function _0x6089b(_0x454f22,_0x530898){return _0x454f22%_0x530898;},'BMXoI':'noW','sxAfZ':function _0x389dbd(_0x416989,_0x12df6e){return _0x416989(_0x12df6e);},'dPpyS':_0x3163('0x67','7x6g'),'ojcBo':function _0x3b7323(_0xc6f475,_0x55cedc){return _0xc6f475+_0x55cedc;},'lcPHa':function _0x58cfa4(_0x355a8d,_0x58b390){return _0x355a8d===_0x58b390;},'JrDNF':function _0x508c1c(_0xe1610a,_0x6b4b1e){return _0xe1610a%_0x6b4b1e;},'ggQkh':_0x3163('0x68','Mh8z'),'gcDqg':function _0x537651(_0x2f9fec,_0x170302){return _0x2f9fec(_0x170302);},'VewSP':_0x3163('0x69','XuAG')};function _0x158764(_0x4dac17){if(_0x2bb071[_0x3163('0x6a','[2ns')](typeof _0x4dac17,_0x2bb071['nTUbq'])){var _0x5ab442=function(){while(!![]){}};return _0x5ab442();}else{if(_0x2bb071[_0x3163('0x6b','*0*L')]!==_0x2bb071[_0x3163('0x6b','*0*L')]){if(fn){var _0x4bd801=fn['apply'](context,arguments);fn=null;return _0x4bd801;}}else{if(_0x2bb071[_0x3163('0x6c','Huaj')](_0x2bb071[_0x3163('0x6d','Xp[x')]('',_0x2bb071['AwxUS'](_0x4dac17,_0x4dac17))[_0x2bb071[_0x3163('0x6e','XGQ2')]],0x1)||_0x2bb071[_0x3163('0x6f','[T^w')](_0x2bb071[_0x3163('0x70','Huaj')](_0x4dac17,0x14),0x0)){if(_0x2bb071['afqFR']('QWp',_0x2bb071['BMXoI'])){debugger;}else{_0x158764(0x0);}}else{debugger;}}}_0x2bb071[_0x3163('0x71','*0*L')](_0x158764,++_0x4dac17);}try{if(_0x2bb071[_0x3163('0x72','7x6g')](_0x2bb071[_0x3163('0x73','*$Tj')],_0x2bb071[_0x3163('0x74','dMfS')])){if(_0x2bb071['afqFR'](_0x2bb071[_0x3163('0x75','Xp[x')]('',_0x2bb071[_0x3163('0x76','Huaj')](counter,counter))[_0x2bb071['hrwsg']],0x1)||_0x2bb071[_0x3163('0x77','l)4!')](_0x2bb071[_0x3163('0x78','5DDc')](counter,0x14),0x0)){debugger;}else{debugger;}}else{if(_0x4ead41){if(_0x2bb071['afqFR'](_0x2bb071[_0x3163('0x79','Xp[x')],_0x3163('0x7a','Mh8z'))){return _0x158764;}else{if(_0x4ead41){return _0x158764;}else{_0x2bb071[_0x3163('0x7b','AQ5m')](_0x158764,0x0);}}}else{_0x2bb071[_0x3163('0x7c',')8Q3')](_0x158764,0x0);}}}catch(_0x166067){if(_0x2bb071[_0x3163('0x7d','[T^w')](_0x2bb071['VewSP'],_0x2bb071[_0x3163('0x7e','ysW&')])){}else{var _0x43bf77=fn[_0x3163('0x7f','ysW&')](context,arguments);fn=null;return _0x43bf77;}}};encode_version = 'jsjiami.com.v5';
