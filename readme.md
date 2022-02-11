# apt update -y && apt upgrade -y
## apt -y install curl net-tools lsb-release vim tar mtr curl dnsutils sudo lsb-release haproxy openresolv
###### sed -i 's/#Port 22/Port 27499/g' /etc/ssh/sshd_config && sed -i 's/Port 22/Port 27499/g' /etc/ssh/sshd_config && systemctl restart ssh

**设置IPv4优先**
*echo "precedence*

~~ffff:0:0/96  100" >> /etc/gai.conf~~
**cat /etc/_resolv.conf_**
***Ubuntu修改dns:***

```
echo -e "nameserver 1.1.1.1 
```



[链接](https://github.com/urnuts/haproxy/edit/main/readme.md)

通过将链接文本包含在方括号 [ ] 内，然后将 URL 包含在括号 ( ) 内，可创建内联链接
nameserver 1.0.0.1
nameserver 8.8.8.8
nameserver 8.8.4.4" > /etc/resolv.conf
