/******************************************
 * @name 酷我音乐
 * @description 解锁会员皮肤、会员音频(最高无损)、听书权限, 配合其他去广告脚本达到最佳效果
 * @channel https://t.me/yqc_123
 * @feedback https://t.me/yqc_777
 * @version 1.0.2
******************************************
脚本声明:
1. 本脚本仅用于学习研究，禁止用于商业用途
2. 本脚本不保证准确性、可靠性、完整性和及时性
3. 任何个人或组织均可无需经过通知而自由使用
4. 作者对任何脚本问题概不负责，包括由此产生的任何损失
5. 如果任何单位或个人认为该脚本可能涉嫌侵犯其权利，应及时通知并提供身份证明、所有权证明，我将在收到认证文件确认后删除
6. 请勿将本脚本用于商业用途，由此引起的问题与作者无关
7. 本脚本及其更新版权归作者所有
******************************************
hostname = *.kuwo.cn

# 解锁会员皮肤
^https?:\/\/vip1\.kuwo\.cn\/vip\/v2\/theme\?op=gd url script-response-body https://gist.githubusercontent.com/Cyb3rF1r3/efcee66b5d57a41af432f85e59256f0a/raw/kuwo.vip.js
# 解锁听书所有权限
^https?:\/\/audiobookpay\.kuwo\.cn\/a\.p url script-response-body https://gist.githubusercontent.com/Cyb3rF1r3/efcee66b5d57a41af432f85e59256f0a/raw/kuwo.vip.js
# 伪造听书会员
^https?:\/\/tingshu\.kuwo\.cn\/v2\/api\/pay\/user\/info url script-response-body https://gist.githubusercontent.com/Cyb3rF1r3/efcee66b5d57a41af432f85e59256f0a/raw/kuwo.vip.js


^https?:\/\/(?:musicpay|nmobi|vip1|audiobookpay|tingshu)\.kuwo\.cn\/(?:music\.pay\?newver=\d+|mobi.s\?f=kwxs|vip\/(?:enc\/user\/vip\?op=ui&uid=|v2\/theme\?op=gd)|a\.p|v2\/api\/pay\/user\/info) url script-response-body https://raw.githubusercontent.com/Yuheng0101/X/main/Scripts/kuwo.js
