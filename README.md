【HaProxy】：
     安装haproxy ##：apt-get install -y haproxy
     停止haproxy ##：/etc/init.d/haproxy stop
     启动haproxy ## ：/etc/init.d/haproxy restart
     haproxy目录 ##：cd /etc/haproxy
     
     
     编辑参考格式：
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

     frontend ss-in3
         bind *:20055
         default_backend ss-out3
     backend ss-out3
         server server1 54.169.209.153:443 maxconn 20480
    
    
【iptables一键脚本】
 
      ./iptables-pf.sh
      无BBR,稳定，doubibackup.com/mbofzp9h-2.html
    
    
    
【socat一键脚本】
      
      wget -N --no-check-certificate https://raw.githubusercontent.com/ToyoDAdoubiBackup/doubi/master/socat.sh && chmod +x socat.sh && bash socat.sh 
      ./socat.sh 
    
    
    
    
    
    
