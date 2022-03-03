# 扫描全能王
[rewrite_local]
^https:\/\/(api|api-cs)\.intsig\.net\/purchase\/cs\/query_property\? url script-response-body https://raw.githubusercontent.com/id77/QuantumultX/master/Script/camscanner.js

[mitm]
hostname = *.intsig.net
