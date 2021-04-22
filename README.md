自用第三种方案：可以sni分流,拒绝白嫖CF:



=============================================
=============================================

方案1：iptables,不支持bbr,延迟稳定
      wget -N --no-check-certificate https://raw.githubusercontent.com/ToyoDAdoubiBackup/doubi/master/iptables-pf.sh && chmod +x iptables-pf.sh && bash iptables-pf.sh
      推荐Debian / Ubuntu,无BBR,稳定，doubibackup.com/mbofzp9h-2.html
    
方案2：socat,支持bbr
      wget -N --no-check-certificate https://raw.githubusercontent.com/ToyoDAdoubiBackup/doubi/master/socat.sh && chmod +x socat.sh && bash socat.sh
    
    
方案3：Haproxy

     安装haproxy ##：apt-get install -y haproxy
     停止haproxy ##：/etc/init.d/haproxy stop
     启动haproxy ##：/etc/init.d/haproxy restart
     haproxy目录 ##：cd /etc/haproxy
     
    // Haproxy参考模板01：单节点转发
 
    global

    defaults
            log     global
            mode    tcp
            option  dontlognull
            timeout connect 5000
            timeout client  50000
            timeout server  50000

    frontend ss-in1
        bind *:20053
        default_backend ss-out1
    backend ss-out1
        server server1 18.183.4.146:443 maxconn 20480

    frontend ss-in2
        bind *:20054
        default_backend ss-out2
    backend ss-out2
         server server1 54.169.209.153:443 maxconn 20480




    // Haproxy参考模板02：静态负载平衡
 
    global
       log /dev/log local0
       log /dev/log local1 notice
       user root
       group root
       daemon

    defaults
       log global
       mode tcp
       timeout connect 5s
       timeout client 50s
       timeout server 50s
       option      dontlognull
       option      redispatch
       retries     1

    # CF -> HKNAT
    frontend ss-in-c8f-hknat
        bind *:21118
        default_backend ss-out-cf8-hknat
    backend ss-out-cf8-hknat
        server server1 104.19.27.223:443 maxconn 20480

    # CloudFlare负载均衡
    frontend cf-in
        mode tcp
        bind *:21119
        default_backend cf-out
    backend cf-out
        mode tcp
        option  tcp-check
        balance static-rr   # 静态负载平衡
        #balance roundrobin # 轮询负载平衡
        server  cfbak    104.19.99.114:443  backup
        server  cf23     104.19.77.23:443   check  weight 50  check inter 1s rise 3 fall 2  maxconn 20480
        server  cf223    104.19.27.223:443  check  weight 5   check inter 1s rise 3 fall 2  maxconn 20480
   
      
    // Haproxy参考模板03：单端口域名分流

    重点：trojan域名需要手动指hosts，v2ray则直接http伪装填写域名；
    nat小鸡 -> haproxy Sever --> 443 {v*y s* tr*jan ssh};

    global
        log /dev/log local0
        log /dev/log local1 notice
        chroot /var/lib/haproxy
        user haproxy
        group haproxy
        daemon

    defaults
        log global
        mode tcp
        option tcplog
        option dontlognull
        #maxconn 2000
        timeout connect 24h
        timeout client 24h
        timeout server 24h


    frontend ssl
        mode tcp
        bind *:443
        tcp-request inspect-delay 5s
        tcp-request content accept if { req.ssl_hello_type 1 }

        #acl ssh_payload payload(0,7) -m bin 5353482d322e30
        acl v2-pr req_ssl_sni -i pr.v2ray.best
        acl v2-gcp  req_ssl_sni -i pr.v2ray.best
        acl v2-tr  req_ssl_sni -i pr.trojan.best
        acl ss-gcp  req_ssl_sni -i gcp.ss.best

        use_backend gcp if v2-gcp
        use_backend pr if v2-pr
        use_backend tr if v2-tr
        #use_backend shadowsocks if ss-gcp
        use_backend defaultserv if { req.ssl_hello_type 1 } !v2-gcp !v2-tr !v2-pr !ss-gcp

    backend gcp
        mode tcp
        option ssl-hello-chk
        server server1 xxx.xxx.xxx.xxx:443

    backend tr
         mode tcp
         option ssl-hello-chk
         http-request set-header Host pr.trojan.best
         #option httpclose
         server server1 xxx.xxx.xxx.xxx:4431

    backend pr
         mode tcp
         option ssl-hello-chk
         server server1 xxx.xxx.xxx.xxx:443
    backend defaultserv
          mode tcp
          server server1 www.baidu.com
   
    
