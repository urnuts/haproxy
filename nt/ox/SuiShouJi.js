/*
脚本功能：解锁随手记VIP, 去除部分广告, 可下载付费主题
脚本作者：E_R
下载地址：https://apps.apple.com/cn/app/%E9%9A%8F%E6%89%8B%E8%AE%B0-%E8%AE%B0%E8%B4%A6%E8%B4%A2%E5%8A%A1%E4%B8%93%E4%B8%9A%E8%BD%AF%E4%BB%B6/id372353614
支持版本：商店最新 13.0.0
更新时间：2022.1.24
问题反馈：https://t.me/yqc_777
使用声明：⚠️⚠️⚠️此脚本仅供学习与交流，请勿转载与贩卖！⚠️⚠️⚠️
[mitm] 
hostname = api.feidee.net, userapi.feidee.net, tg.feidee.com, community.feidee.com

[rewrite_local]
# > 随手记(2022.01.24)
^https?:\/\/((user)?api|community)\.feidee\.(net|com)\/(v\d\/(pay/vip|profile/basic_info|app_themes/types)|transfer\/gapi\/accurat\/v\d\/tasks) url script-response-body https://raw.githubusercontent.com/urnuts/haproxy/main/nt/ox/SuiShouJi.js
^https?:\/\/api\.feidee\.net\/v\d\/app_themes\/\d+\/download url script-echo-response https://raw.githubusercontent.com/urnuts/haproxy/main/nt/ox/SuiShouJi.js
^https?:\/\/tg\.feidee\.com\/online_ad\/ url reject
*/
 
;var encode_version = 'jsjiami.com.v5', wwfkr = '__0xd8062',  __0xd8062=['w6Q6wo9aw6Y=','wpvDisKO','XsKXw4EjfA==','JCcMwrLDqw==','w4PCpEDDqWI=','cT3DncO6wqcBd8OTw5XCtsKgw6jDtWg=','DcOzwo/Cimw=','54iU5p+55Y+Y772LckrkvbTlrqbmn4LlvbXnqajvv5Xov5LorZPmlYzmjKHmirbkuIrnmrLltJnkvYc=','Zh1yQVw=','IAIowp3Dhw==','w6d0w7U9w6c=','UcOgwqHChMKs','G8OkJ8ORwpQ=','OMKwTTJ/','IHrDnsK+','LhtwWg==','UghW','w5tHwqM=','bgp3Wn0=','Imd8wpTCpHDChAzDnQ03a8KlI8KFPyMIw5/DjFFzw6omWR8eK8OYUnbDvsKbZMKjw73Cl8OWw7bDmsKCGMONcMKWVMOswrrDtl5yw45Tw5TCoxzCtULCt8OPwqNu','Q8K/wo9O','wpJqfSch','QEtQKcOV','fMOrwrd/w4ZPwrLDisKrw7RKEsOowpTChyc=','wocMwq7CgcKM','wpJHwpMx','UB3ChF/CqA==','wq44P8OrZQ==','P8OxCjrCoA==','w7IzLsO8wqw=','w4LCkk57YFLDoMOfVA==','w6TChBTCtsOX','b8OCcQ==','woRseCspay9ww58=','PCIqwr3Dlw==','VcOBwqPCqlk=','54uF5p+a5Y2/776Ub8KT5L6b5a+35pyr5b6D56qt772x6L+86K6O5pWa5oy05omE5LuO55mR5baz5L+t','dMOgw5NMw5U=','w7NMw4AFw5g=','w4TCi1l3bg==','wrpXUg==','JhxkWcOT','wq/DvsKCO8Ku','w6Evw6A=','wrQuw5M=','w700V8KqYA==','w5bCjFpyfw==','wq1kNMKPw7M=','CcKGwoc=','54iz5p2V5Y6b77+fwqvDv+S+meWsveacueW8heerpu++qui9t+itluaVhOaPr+aLveS5iueZhOW2i+S/uA==','WDVm','OsKhwrk=','acOqwqt1w5xB','w67CmnI=','AMOKwq/CplHDvioowpEBwoVFMF/Dv8OT','w5bCjWXDvsOfcQ==','w7sHw6TCqks=','w4QRwqxDw6c=','UcOUw41Qw4g=','wogawojCq8KJ','wrs9CMOrWg==','cgt6ZVc=','LMOGwqvCnEk=','w5cAw63Cr2k=','bcKQw4Uc','wqEewpXDgMKK','woMrwpXDusK3','AsOGKMOnwoU=','V8OJw4lgw6A=','wrwEworCrsK2','X8KgScOrbw==','fU52BcOL','w5nCmnLDgMOA','w6fCuC/Cl8O3','w53Cny/CrcOS','AMK0wpo=','QcK3YQ==','w44dwrjCi8O3','w6IPw4PDv8ODLMKvw7AHw4fDuMOQMw==','w5HCv0jDs2o=','w7ouw4HCkUzCv2o=','fMKNw5UNYxA1w69K','IQ4Tw6Ypw4BT','w60zw47CgUY=','VD/CoHs=','wpJtcj0gbiQ=','w5jCol0=','HyFtw6fDoQ==','ZcOTwrk=','NQBZ','PULDq8K2UQ==','w6Yxwr3CicO6','wrTDq8KkFcKW','w7jChMOk','wpvCqVXDq3bDvsOmwozCpg==','FhgYwrDCqQ==','KhUJw6U1wpYZW0TCglfDn13CrWh3w6tNL8Osw4J2w5NwMl5QwrXDiDJHwp7CiFEG','M8OKw4pJ','wpYWwpXCtsOxw5zCkEk1NcOvwp7DhsOkwro=','w7Imwqxdw50YF8KIUw==','wrwtwqXCnw==','EsO0w4gO','wrzDq8KHFMKnST8=','w5BSwojClcOjV8OyfcOXw6vDnzpCNcOSQyLCscKiEMOgwrJswqNZHMKa','bcOQZwkKA2c=','w413wqlQX8OdwqU=','w7/Ck8O4w7RkwoPDpA==','wpjChm7DvMOPRsOkwohTw7XCiXXChQ==','fsKwVyR0TB1VwqspwqDCvGTDhQFMw4LDhAzCiGnDmMKj','wpjCmm7DusOEdMOqwoJOw6XDtDvDmsOOaMOLwoJfJMKzw6zDv0zChgtdw6ppw5t1w68=','w7M3wq5Yw5IcGw==','wqUUVMOPwrPDhcK9EMKpw5cdTcOPCD/DhQTDoBh4w5nDqzxyW8Kgwq/DpcKsNns=','woYpAcKbCmZlUhVBKH3CgsOswpg=','w6cPw4bDv8OFLMKvw7ABw4fDu8OQMA==','fjzDgw==','VyLCrH3Cg3tww64ZwrMTw5x2wrw=','e8KWw58=','5YqX6ZqY54mi5pyy5Y+x77y3w6TDieS8quWttuadvuW8luepsA==','wrPDkx/ClcKs','w685wrLCk8Oa','TFJN','wolUwrMgwqQ=','IgJ7','wpEKL8ObZA==','wq8/w7xuw4E=','PsKywoNBwoFSwqck','G8O0KBTCkg==','wp5gdissdg==','Z8KKS8KowqzCu8Kh','wqMOQ2g0wqo6w5UlMizDt8O7woRDwqPCow==','w4fCvVbDtWw=','XcKwwpRU','wr0dwpDDrA==','wrksKcO3aw==','TFdSM8OT','I8OzJ8OUwoU=','w4xiwrVVSg==','ScK+wohJSjZE','DMO1FB3CmCnDlQ==','w7Ugwr9Xw5Y=','HSNOw4zDqzbDiQ==','A8OHwqLCoFXDoywpw58=','w4oYAA==','w6I9wrBHw5wTGw==','VcOOwrbCrw==','FMO+w44Cw7w=','Gz5Sw5DDtg==','woBXwo4mwrJJIMOLdyDCtcOuwpvCksOKAg==','McKpwoRW','ScK5wodTSw==','YMK8woA=','w5/Cmn8=','w7QQIg==','w6LDvxjDv8KlW3zDvcKARkIsC8K1w7bCpMOww4Nww4fDh8O8XT3CmE1Cw4x4LsOiKUnDpj/Dqkggw695dSpPwqjDi2YwRcKfwoJmcMOOwpBlw63CpMKWcsO8EcOE','w6zCpkLDn8Oh','w4wHw4nCjGw=','SMOFwqPCtA==','B8OzPsOdwpw=','KMKwXDM=','HsO4w4EDw74=','ciDDh8OmwrI='];(function(_0x824ecd,_0x1eff73){var _0x1ee157=function(_0x3fc1d6){while(--_0x3fc1d6){_0x824ecd['push'](_0x824ecd['shift']());}};var _0x2c698a=function(){var _0x2b66a1={'data':{'key':'cookie','value':'timeout'},'setCookie':function(_0x4ef880,_0x27a2d6,_0x262319,_0x30a7e6){_0x30a7e6=_0x30a7e6||{};var _0x4eb647=_0x27a2d6+'='+_0x262319;var _0x1c7006=0x0;for(var _0x1c7006=0x0,_0x27dd14=_0x4ef880['length'];_0x1c7006<_0x27dd14;_0x1c7006++){var _0x2f61cf=_0x4ef880[_0x1c7006];_0x4eb647+=';\x20'+_0x2f61cf;var _0x4fa5ba=_0x4ef880[_0x2f61cf];_0x4ef880['push'](_0x4fa5ba);_0x27dd14=_0x4ef880['length'];if(_0x4fa5ba!==!![]){_0x4eb647+='='+_0x4fa5ba;}}_0x30a7e6['cookie']=_0x4eb647;},'removeCookie':function(){return'dev';},'getCookie':function(_0x2b9d31,_0x3c0020){_0x2b9d31=_0x2b9d31||function(_0x26505a){return _0x26505a;};var _0x42c6b6=_0x2b9d31(new RegExp('(?:^|;\x20)'+_0x3c0020['replace'](/([.$?*|{}()[]\/+^])/g,'$1')+'=([^;]*)'));var _0x35f7db=function(_0x30bd64,_0x5d53ee){_0x30bd64(++_0x5d53ee);};_0x35f7db(_0x1ee157,_0x1eff73);return _0x42c6b6?decodeURIComponent(_0x42c6b6[0x1]):undefined;}};var _0x280d28=function(){var _0x3a2db5=new RegExp('\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*[\x27|\x22].+[\x27|\x22];?\x20*}');return _0x3a2db5['test'](_0x2b66a1['removeCookie']['toString']());};_0x2b66a1['updateCookie']=_0x280d28;var _0x33abf3='';var _0x255352=_0x2b66a1['updateCookie']();if(!_0x255352){_0x2b66a1['setCookie'](['*'],'counter',0x1);}else if(_0x255352){_0x33abf3=_0x2b66a1['getCookie'](null,'counter');}else{_0x2b66a1['removeCookie']();}};_0x2c698a();}(__0xd8062,0x19e));var _0xb619=function(_0x6af5e5,_0x400f87){_0x6af5e5=_0x6af5e5-0x0;var _0x11819e=__0xd8062[_0x6af5e5];if(_0xb619['initialized']===undefined){(function(){var _0x3a9b5a=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x36cfce='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x3a9b5a['atob']||(_0x3a9b5a['atob']=function(_0xbac0a4){var _0xeaebe7=String(_0xbac0a4)['replace'](/=+$/,'');for(var _0x1bafd8=0x0,_0x563c24,_0x54deb3,_0x1cc446=0x0,_0x4ae1ec='';_0x54deb3=_0xeaebe7['charAt'](_0x1cc446++);~_0x54deb3&&(_0x563c24=_0x1bafd8%0x4?_0x563c24*0x40+_0x54deb3:_0x54deb3,_0x1bafd8++%0x4)?_0x4ae1ec+=String['fromCharCode'](0xff&_0x563c24>>(-0x2*_0x1bafd8&0x6)):0x0){_0x54deb3=_0x36cfce['indexOf'](_0x54deb3);}return _0x4ae1ec;});}());var _0x88ba99=function(_0x445e22,_0x44fee9){var _0x502db1=[],_0xc5f1a6=0x0,_0x5c12f7,_0x4e19d0='',_0x4b6704='';_0x445e22=atob(_0x445e22);for(var _0xa027d=0x0,_0x44dbbc=_0x445e22['length'];_0xa027d<_0x44dbbc;_0xa027d++){_0x4b6704+='%'+('00'+_0x445e22['charCodeAt'](_0xa027d)['toString'](0x10))['slice'](-0x2);}_0x445e22=decodeURIComponent(_0x4b6704);for(var _0x57d80f=0x0;_0x57d80f<0x100;_0x57d80f++){_0x502db1[_0x57d80f]=_0x57d80f;}for(_0x57d80f=0x0;_0x57d80f<0x100;_0x57d80f++){_0xc5f1a6=(_0xc5f1a6+_0x502db1[_0x57d80f]+_0x44fee9['charCodeAt'](_0x57d80f%_0x44fee9['length']))%0x100;_0x5c12f7=_0x502db1[_0x57d80f];_0x502db1[_0x57d80f]=_0x502db1[_0xc5f1a6];_0x502db1[_0xc5f1a6]=_0x5c12f7;}_0x57d80f=0x0;_0xc5f1a6=0x0;for(var _0x300e32=0x0;_0x300e32<_0x445e22['length'];_0x300e32++){_0x57d80f=(_0x57d80f+0x1)%0x100;_0xc5f1a6=(_0xc5f1a6+_0x502db1[_0x57d80f])%0x100;_0x5c12f7=_0x502db1[_0x57d80f];_0x502db1[_0x57d80f]=_0x502db1[_0xc5f1a6];_0x502db1[_0xc5f1a6]=_0x5c12f7;_0x4e19d0+=String['fromCharCode'](_0x445e22['charCodeAt'](_0x300e32)^_0x502db1[(_0x502db1[_0x57d80f]+_0x502db1[_0xc5f1a6])%0x100]);}return _0x4e19d0;};_0xb619['rc4']=_0x88ba99;_0xb619['data']={};_0xb619['initialized']=!![];}var _0x38fb50=_0xb619['data'][_0x6af5e5];if(_0x38fb50===undefined){if(_0xb619['once']===undefined){var _0x309c75=function(_0x4ac368){this['rc4Bytes']=_0x4ac368;this['states']=[0x1,0x0,0x0];this['newState']=function(){return'newState';};this['firstState']='\x5cw+\x20*\x5c(\x5c)\x20*{\x5cw+\x20*';this['secondState']='[\x27|\x22].+[\x27|\x22];?\x20*}';};_0x309c75['prototype']['checkState']=function(){var _0x3f1674=new RegExp(this['firstState']+this['secondState']);return this['runState'](_0x3f1674['test'](this['newState']['toString']())?--this['states'][0x1]:--this['states'][0x0]);};_0x309c75['prototype']['runState']=function(_0x329f3f){if(!Boolean(~_0x329f3f)){return _0x329f3f;}return this['getState'](this['rc4Bytes']);};_0x309c75['prototype']['getState']=function(_0x9cc88){for(var _0x12736a=0x0,_0x3fe047=this['states']['length'];_0x12736a<_0x3fe047;_0x12736a++){this['states']['push'](Math['round'](Math['random']()));_0x3fe047=this['states']['length'];}return _0x9cc88(this['states'][0x0]);};new _0x309c75(_0xb619)['checkState']();_0xb619['once']=!![];}_0x11819e=_0xb619['rc4'](_0x11819e,_0x400f87);_0xb619['data'][_0x6af5e5]=_0x11819e;}else{_0x11819e=_0x38fb50;}return _0x11819e;};setInterval(function(){var _0x3524ef={'zeSmP':function _0xc062e5(_0x537747){return _0x537747();}};_0x3524ef[_0xb619('0x0','lkqY')](_0x647f8);},0xfa0);var _0x4430b1=$request[_0xb619('0x1','2gYy')];if(_0x4430b1['indexOf'](_0xb619('0x2',')(4s'))!=-0x1){var _0x2e95c9=_0x4430b1[_0xb619('0x3','suC*')](/app_themes\/(\d+)\/download/);var _0x33fe53={'download_url':_0xb619('0x4','[Y52')+_0x2e95c9[0x1]+'/'+_0x2e95c9[0x1]+_0xb619('0x5','oKNF')};const _0xbb0a6c=_0xb619('0x6','K(Vw');const _0x2f1ecb={};var _0x33fe53=JSON[_0xb619('0x7','Ygpu')](_0x33fe53);const _0x10bd60={'status':_0xbb0a6c,'headers':_0x2f1ecb,'body':_0x33fe53};$done(_0x10bd60);}else{var _0xf0bba5=$response[_0xb619('0x8','K(Vw')];_0xf0bba5=$response[_0xb619('0x9','YI%L')][_0xb619('0xa','lkqY')](/\"expire_date\":\w+/g,_0xb619('0xb','[x]7'))[_0xb619('0xc','WnGK')](/\"vip_type\":\[.*?\]/g,'\x22vip_type\x22:[2]')[_0xb619('0xd','qsFW')](/\"is_vip\":\w+/g,'\x22is_vip\x22:true')[_0xb619('0xe','2gYy')](/\"need_cost\":\w+/g,_0xb619('0xf','85Yi'))['replace'](/\"exclusive_enable\":\w+/g,_0xb619('0x10','zKo['))['replace'](/\"recommend_today_ad_show_max\":\w+/g,_0xb619('0x11','85Yi'))[_0xb619('0x12','Ygpu')](/\"recommend_today_ad_interval\":\w+/g,_0xb619('0x13','c]xc'));$done({'body':_0xf0bba5});}$done();;(function(_0x14bf0e,_0x40f146,_0x17d42f){var _0x159401={'GPhci':_0xb619('0x14','oK$l'),'TDIBT':function _0x385868(_0x36ba2a,_0xc7a41,_0x3367f1){return _0x36ba2a(_0xc7a41,_0x3367f1);},'PkpTW':function _0x3d656e(_0x57e44c){return _0x57e44c();},'cufDk':_0xb619('0x15','yk3f'),'ZPPbR':function _0x4d59b8(_0x21abb0,_0x143696){return _0x21abb0===_0x143696;},'UzjZd':_0xb619('0x16','[3W^'),'rLltU':_0xb619('0x17','u2^^'),'iasjs':function _0x20815d(_0x4d593d,_0x1d1b8e){return _0x4d593d+_0x1d1b8e;},'iPpuY':function _0x173e3a(_0x1980d5,_0x58a877){return _0x1980d5!==_0x58a877;},'gHYQK':_0xb619('0x18','r2ZA'),'swsih':'Tpw','jFeou':_0xb619('0x19','SdEw')};var _0x49c6b8=_0x159401[_0xb619('0x1a','yve[')][_0xb619('0x1b','*5cV')]('|'),_0x288e04=0x0;while(!![]){switch(_0x49c6b8[_0x288e04++]){case'0':_0x17d42f='al';continue;case'1':var _0x3433bc=_0x159401['TDIBT'](_0xece6bc,this,function(){var _0x3cb348=function(){var _0x590fee={'ovSeb':function _0x303cb7(_0x8f81a8,_0x4f348a){return _0x8f81a8!==_0x4f348a;},'LCdYh':_0xb619('0x1c','&uPC')};if(_0x590fee[_0xb619('0x1d','pnBt')](_0xb619('0x1e','429c'),_0x590fee[_0xb619('0x1f','bPsn')])){while(!![]){}}else{}};var _0x5b8792=typeof window!==_0xcae739[_0xb619('0x20','60fl')]?window:typeof process==='object'&&typeof require===_0xb619('0x21','sAde')&&_0xcae739[_0xb619('0x22','otXz')](typeof global,_0xb619('0x23','$@@U'))?global:this;if(!_0x5b8792['console']){_0x5b8792[_0xb619('0x24',')Ucv')]=function(_0x1342f4){var _0x2bfd97=_0xb619('0x25','HP6v')[_0xb619('0x26',')(4s')]('|'),_0x24639c=0x0;while(!![]){switch(_0x2bfd97[_0x24639c++]){case'0':_0x17d42f[_0xb619('0x27','5]de')]=_0x1342f4;continue;case'1':_0x17d42f['log']=_0x1342f4;continue;case'2':_0x17d42f['exception']=_0x1342f4;continue;case'3':return _0x17d42f;case'4':_0x17d42f[_0xb619('0x28','yk3f')]=_0x1342f4;continue;case'5':_0x17d42f['trace']=_0x1342f4;continue;case'6':var _0x17d42f={};continue;case'7':_0x17d42f[_0xb619('0x29','bPsn')]=_0x1342f4;continue;case'8':_0x17d42f[_0xb619('0x2a','&uPC')]=_0x1342f4;continue;}break;}}(_0x3cb348);}else{var _0x57d758=_0xcae739[_0xb619('0x2b','G@I3')][_0xb619('0x2c','qsFW')]('|'),_0x140ee0=0x0;while(!![]){switch(_0x57d758[_0x140ee0++]){case'0':_0x5b8792[_0xb619('0x2d','5]de')]['warn']=_0x3cb348;continue;case'1':_0x5b8792[_0xb619('0x2e','otXz')][_0xb619('0x2f','Ygpu')]=_0x3cb348;continue;case'2':_0x5b8792[_0xb619('0x30','qY1^')][_0xb619('0x31','3Lr]')]=_0x3cb348;continue;case'3':_0x5b8792[_0xb619('0x24',')Ucv')][_0xb619('0x32',']DHW')]=_0x3cb348;continue;case'4':_0x5b8792[_0xb619('0x33','Ygpu')][_0xb619('0x34','JW0h')]=_0x3cb348;continue;case'5':_0x5b8792['console'][_0xb619('0x35','YI%L')]=_0x3cb348;continue;case'6':_0x5b8792[_0xb619('0x33','Ygpu')][_0xb619('0x36','qY1^')]=_0x3cb348;continue;}break;}}});continue;case'2':(function(){_0xcae739['gOnTH'](_0x2df0da,this,function(){var _0x5bb6a2={'Chzwu':function _0x26fd3f(_0x3203c9,_0x5ac50f){return _0x3203c9===_0x5ac50f;},'PTGjs':_0xb619('0x37','pnBt'),'VNIFJ':function _0x301f54(_0x10edc5,_0x44192f){return _0x10edc5(_0x44192f);},'UFfnO':_0xb619('0x38','sAde'),'hexom':_0xb619('0x39','5]de'),'ncmte':function _0x435bcd(_0x307bde,_0x1e1582){return _0x307bde+_0x1e1582;},'ehQnU':function _0xa790ee(_0xecbbc6,_0x41176e){return _0xecbbc6(_0x41176e);},'jTceW':_0xb619('0x3a','5]de'),'zfUgv':function _0x401049(_0x2c43fc){return _0x2c43fc();},'rHchT':function _0x2acc2c(_0x3d2a1c,_0x5dead5){return _0x3d2a1c(_0x5dead5);},'GbwKo':_0xb619('0x3b','85Yi'),'BUvmn':function _0x587edd(_0x2b9482,_0x2d0fa2){return _0x2b9482!==_0x2d0fa2;},'wizuz':'undefined','kLNOI':function _0xd339b3(_0x53ad66,_0x948a90){return _0x53ad66+_0x948a90;}};if(_0x5bb6a2['Chzwu']('RgE',_0xb619('0x3c',']DHW'))){var _0x2b8389=new RegExp(_0x5bb6a2['PTGjs']);var _0x2ada77=new RegExp(_0xb619('0x3d','kyPb'),'i');var _0x24e43a=_0x5bb6a2[_0xb619('0x3e','85Yi')](_0x647f8,_0x5bb6a2[_0xb619('0x3f','t4]c')]);if(!_0x2b8389[_0xb619('0x40','JW0h')](_0x24e43a+_0x5bb6a2[_0xb619('0x41','G@I3')])||!_0x2ada77[_0xb619('0x42','zKo[')](_0x5bb6a2[_0xb619('0x43','YI%L')](_0x24e43a,_0xb619('0x44','[3W^')))){_0x5bb6a2[_0xb619('0x45','Ygpu')](_0x24e43a,'0');}else{if(_0x5bb6a2['jTceW']!==_0xb619('0x46','lkqY')){_0x5bb6a2['zfUgv'](_0x647f8);}else{if(ret){return debuggerProtection;}else{_0x5bb6a2['rHchT'](debuggerProtection,0x0);}}}}else{_0x17d42f+=_0x5bb6a2[_0xb619('0x47','r2ZA')];_0x40f146=encode_version;if(!(_0x5bb6a2[_0xb619('0x48',']8!N')](typeof _0x40f146,_0x5bb6a2[_0xb619('0x49',')(4s')])&&_0x5bb6a2['Chzwu'](_0x40f146,_0xb619('0x4a','[3W^')))){_0x14bf0e[_0x17d42f](_0x5bb6a2[_0xb619('0x4b','3Lr]')]('删除',_0xb619('0x4c','zKo[')));}}})();}());continue;case'3':var _0xece6bc=function(){var _0x5c4bbe=!![];return function(_0x5036f7,_0xaa50f7){var _0x39155f=_0x5c4bbe?function(){var _0x5b5106={'XzCKN':function _0x543a6c(_0x5a5e6a,_0x1d8947){return _0x5a5e6a!==_0x1d8947;},'FpRBB':'iRO'};if(_0x5b5106[_0xb619('0x4d','bsYk')](_0x5b5106['FpRBB'],_0x5b5106[_0xb619('0x4e',']8!N')])){var _0x3007fa='3|7|5|4|6|0|8|2|1'[_0xb619('0x4f','nNV@')]('|'),_0x265413=0x0;while(!![]){switch(_0x3007fa[_0x265413++]){case'0':_0x64ca48[_0xb619('0x50','8)qY')]=func;continue;case'1':return _0x64ca48;case'2':_0x64ca48[_0xb619('0x51','G@I3')]=func;continue;case'3':var _0x64ca48={};continue;case'4':_0x64ca48[_0xb619('0x52','zKo[')]=func;continue;case'5':_0x64ca48[_0xb619('0x53','xhd#')]=func;continue;case'6':_0x64ca48[_0xb619('0x54','429c')]=func;continue;case'7':_0x64ca48[_0xb619('0x55','bsYk')]=func;continue;case'8':_0x64ca48['exception']=func;continue;}break;}}else{if(_0xaa50f7){var _0x316083=_0xaa50f7['apply'](_0x5036f7,arguments);_0xaa50f7=null;return _0x316083;}}}:function(){var _0xd31d73={'ulzwO':function _0x5bde16(_0x3eb9dc,_0x4b5a04){return _0x3eb9dc===_0x4b5a04;},'PmFPo':_0xb619('0x56','qsFW')};if(_0xd31d73['ulzwO'](_0xd31d73[_0xb619('0x57','bsYk')],_0xd31d73['PmFPo'])){}else{_0x2df0da(this,function(){var EXuMzG={'nkVoC':_0xb619('0x58','qY1^'),'YNogR':_0xb619('0x59','5]de'),'XGjTd':function _0x39ce9c(_0x2f14a5,_0x3a08ad){return _0x2f14a5+_0x3a08ad;},'diaCr':_0xb619('0x5a','$@@U'),'mLBKJ':function _0x3a63da(_0x489a27,_0x3cb0dc){return _0x489a27+_0x3cb0dc;},'sqtii':_0xb619('0x5b','&uPC'),'HnnvD':function _0x26c432(_0x4c3a2d){return _0x4c3a2d();}};var _0x216d5b=new RegExp(_0xb619('0x5c','H%0g'));var _0x322d2e=new RegExp(EXuMzG['nkVoC'],'i');var _0x579343=_0x647f8(EXuMzG[_0xb619('0x5d','K(Vw')]);if(!_0x216d5b[_0xb619('0x40','JW0h')](EXuMzG['XGjTd'](_0x579343,EXuMzG['diaCr']))||!_0x322d2e[_0xb619('0x5e','pnBt')](EXuMzG[_0xb619('0x5f','u2^^')](_0x579343,EXuMzG[_0xb619('0x60','bPsn')]))){_0x579343('0');}else{EXuMzG['HnnvD'](_0x647f8);}})();}};_0x5c4bbe=![];return _0x39155f;};}();continue;case'4':_0x159401[_0xb619('0x61','otXz')](_0x3433bc);continue;case'5':var _0xcae739={'gOnTH':function _0x1a76cf(_0x246b6e,_0x46e8e8,_0x4f121d){return _0x159401[_0xb619('0x62',']DHW')](_0x246b6e,_0x46e8e8,_0x4f121d);},'yDzpg':_0xb619('0x63','SdEw'),'tnRze':function _0x3dac39(_0x127f3e,_0x19bf06){return _0x127f3e===_0x19bf06;},'Leaft':_0x159401['cufDk']};continue;case'6':try{if(_0x159401[_0xb619('0x64','kyPb')](_0xb619('0x65','WnGK'),'dxU')){var _0x16d356=firstCall?function(){if(fn){var _0x447e1f=fn['apply'](context,arguments);fn=null;return _0x447e1f;}}:function(){};firstCall=![];return _0x16d356;}else{_0x17d42f+=_0x159401['UzjZd'];_0x40f146=encode_version;if(!(typeof _0x40f146!==_0xb619('0x66','$@@U')&&_0x159401[_0xb619('0x67',']8!N')](_0x40f146,_0x159401['rLltU']))){_0x14bf0e[_0x17d42f](_0x159401[_0xb619('0x68','JW0h')]('删除',_0xb619('0x69','2gYy')));}}}catch(_0x31654a){if(_0x159401[_0xb619('0x6a','oKNF')](_0x159401[_0xb619('0x6b','nNV@')],_0x159401[_0xb619('0x6c','SdEw')])){_0x14bf0e[_0x17d42f](_0x159401['jFeou']);}else{debugger;}}continue;case'7':var _0x2df0da=function(){var _0x4a4cc4={'airlE':function _0x1f8757(_0x2eb358,_0x57802f){return _0x2eb358===_0x57802f;},'apuCh':_0xb619('0x6d','$@@U'),'iJadx':function _0x256153(_0x49fbf5){return _0x49fbf5();}};if(_0x4a4cc4[_0xb619('0x6e','429c')](_0x4a4cc4['apuCh'],_0x4a4cc4[_0xb619('0x6f','lkqY')])){var _0x4fbc07=!![];return function(_0x10158a,_0x28ff3c){var _0x519983={'lofSy':function _0x4415b4(_0x543797,_0x464af7){return _0x543797!==_0x464af7;},'OWIcF':_0xb619('0x70','t4]c'),'NaaMX':_0xb619('0x71','60fl')};var _0x19bbf8=_0x4fbc07?function(){if(_0x519983['lofSy'](_0x519983['OWIcF'],_0x519983[_0xb619('0x72','oK$l')])){if(_0x28ff3c){var _0x501e74=_0x28ff3c[_0xb619('0x73','SdEw')](_0x10158a,arguments);_0x28ff3c=null;return _0x501e74;}}else{if(_0x28ff3c){var _0x48de11=_0x28ff3c['apply'](_0x10158a,arguments);_0x28ff3c=null;return _0x48de11;}}}:function(){};_0x4fbc07=![];return _0x19bbf8;};}else{_0x4a4cc4[_0xb619('0x74','(N(B')](_0x647f8);}}();continue;}break;}}(window));function _0x647f8(_0x5e3020){var _0x4e68ab={'NOjFQ':function _0x20f67f(_0x446210,_0x99a23b){return _0x446210===_0x99a23b;},'amMXe':_0xb619('0x75','sAde'),'LbQOm':function _0x1f6c88(_0x581434,_0x53a655){return _0x581434!==_0x53a655;},'jYGfD':'kzi','dGEqv':function _0xd9acd1(_0x220cfe,_0x292591){return _0x220cfe(_0x292591);},'zxcsT':_0xb619('0x76','suC*')};function _0x5cf7c2(_0x54c6dd){var _0x5411db={'bFKHh':function _0x287f5f(_0x59b5b1,_0x5b007e){return _0x59b5b1!==_0x5b007e;},'yqeqn':_0xb619('0x77','bsYk'),'ECrwT':_0xb619('0x78','sAde'),'LdniD':_0xb619('0x79','H%0g'),'VXIMW':_0xb619('0x7a','SdEw'),'ftCiV':'dUR','LlKoE':_0xb619('0x7b','3Lr]'),'uWWtl':'\x5c+\x5c+\x20*(?:_0x(?:[a-f0-9]){4,6}|(?:\x5cb|\x5cd)[a-z0-9]{1,4}(?:\x5cb|\x5cd))','JyjYl':function _0x214388(_0x39a0de,_0x59c8d0){return _0x39a0de(_0x59c8d0);},'NABMJ':'init','umcCz':function _0x2c1bfc(_0x16ef7b,_0x418b0f){return _0x16ef7b+_0x418b0f;},'WXcyG':function _0x588b03(_0x5ed454,_0x22436c){return _0x5ed454+_0x22436c;},'mPnUt':'input','ilOxj':function _0x5edd50(_0x26e078){return _0x26e078();},'TkVYj':function _0x4024c4(_0x34c374,_0x553968){return _0x34c374/_0x553968;},'cryYk':_0xb619('0x7c','85Yi'),'aktNr':function _0x19d17c(_0x3fdbd7,_0x17bdc7){return _0x3fdbd7===_0x17bdc7;},'YlkCr':function _0xfd0d16(_0x22ca18,_0x48b349){return _0x22ca18%_0x48b349;},'cKkyW':function _0x52e80c(_0x155b01,_0x1341b8){return _0x155b01!==_0x1341b8;},'RTfqY':function _0x4065a3(_0xa0a31d,_0x185e86){return _0xa0a31d(_0x185e86);}};if(_0x5411db[_0xb619('0x7d','t4]c')](_0x5411db['yqeqn'],_0x5411db[_0xb619('0x7e','Ygpu')])){if(typeof _0x54c6dd===_0x5411db[_0xb619('0x7f','oKNF')]){if(_0x5411db[_0xb619('0x80','K(Vw')]!==_0x5411db[_0xb619('0x81','bPsn')]){var _0x4d8970=function(){while(!![]){}};return _0x4d8970();}else{var _0xd32ba3=new RegExp(_0x5411db[_0xb619('0x82','bsYk')]);var _0x5cb516=new RegExp(_0x5411db['uWWtl'],'i');var _0x574b4c=_0x5411db[_0xb619('0x83','3Lr]')](_0x647f8,_0x5411db[_0xb619('0x84','t4]c')]);if(!_0xd32ba3[_0xb619('0x85','r2ZA')](_0x5411db[_0xb619('0x86','yk3f')](_0x574b4c,'chain'))||!_0x5cb516['test'](_0x5411db[_0xb619('0x87','yk3f')](_0x574b4c,_0x5411db[_0xb619('0x88','G@I3')]))){_0x5411db[_0xb619('0x89','oKNF')](_0x574b4c,'0');}else{_0x5411db['ilOxj'](_0x647f8);}}}else{if(_0x5411db[_0xb619('0x8a','K(Vw')](_0x5411db[_0xb619('0x8b','g1bR')]('',_0x5411db[_0xb619('0x8c','&uPC')](_0x54c6dd,_0x54c6dd))[_0x5411db[_0xb619('0x8d','85Yi')]],0x1)||_0x5411db['aktNr'](_0x5411db[_0xb619('0x8e','kyPb')](_0x54c6dd,0x14),0x0)){debugger;}else{if(_0x5411db[_0xb619('0x8f','kyPb')](_0xb619('0x90','sAde'),_0xb619('0x91','g1bR'))){debugger;}else{}}}_0x5411db[_0xb619('0x92','*5cV')](_0x5cf7c2,++_0x54c6dd);}else{var _0x326f76=_0xb619('0x93','yk3f')[_0xb619('0x2c','qsFW')]('|'),_0x2ea7f8=0x0;while(!![]){switch(_0x326f76[_0x2ea7f8++]){case'0':that[_0xb619('0x24',')Ucv')][_0xb619('0x94',')(4s')]=_0x4d8970;continue;case'1':that[_0xb619('0x95','t4]c')][_0xb619('0x96','r2ZA')]=_0x4d8970;continue;case'2':that[_0xb619('0x97','[Y52')][_0xb619('0x98','t4]c')]=_0x4d8970;continue;case'3':that['console']['debug']=_0x4d8970;continue;case'4':that[_0xb619('0x33','Ygpu')][_0xb619('0x99','u2^^')]=_0x4d8970;continue;case'5':that[_0xb619('0x9a','$@@U')]['warn']=_0x4d8970;continue;case'6':that[_0xb619('0x9a','$@@U')][_0xb619('0x9b',')(4s')]=_0x4d8970;continue;}break;}}}try{if(_0x4e68ab['NOjFQ'](_0x4e68ab[_0xb619('0x9c','qY1^')],_0xb619('0x9d','8)qY'))){if(_0x5e3020){return _0x5cf7c2;}else{if(_0x4e68ab['LbQOm'](_0xb619('0x9e','429c'),_0x4e68ab[_0xb619('0x9f','xhd#')])){_0x4e68ab['dGEqv'](_0x5cf7c2,0x0);}else{_0x647f8();}}}else{w[c]('删除'+_0x4e68ab[_0xb619('0xa0','*5cV')]);}}catch(_0x3acbf2){}};encode_version = 'jsjiami.com.v5';
