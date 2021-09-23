    ACL4SSR_Google.ini_ORG,原始配置,从acl4ssr下载
    ACL4SSR_Google_FULL.ini，自用完整版配置
    ACL4SSR_Google_mini.ini ，自用精简版配置
    
    
    eg:从acl4ssr获得的clash新链接，供参考：
    https://subcon.dlj.tf/sub?target=clash&new_name=true&url=https%3A%2F%2Fraw.githubusercontent.com%2Fch0306%2Fclash%2Fmain%2Fclash&insert=false&config=https%3A%2F%2Fraw.githubusercontent.com%2FACL4SSR%2FACL4SSR%2Fmaster%2FClash%2Fconfig%2FACL4SSR_Online_Full_Google.ini
    
    
    如何确保转换订阅的安全？
    
       先下载subconverter.zip并运行subconverter.exe，提供本地后端地址；
       之后利用“本地后端地址”，结合“远程配置”，有以下两种方法可用：    
    
    
         1. ACL4SSR网站，“后端地址”选择localhosts:25500 本地版，“远程配置”利用acl4ssr提供的 ===>>> 直接获得encode url后的订阅链接
         
         
         2. 从类似ACL4SSR获取远程配置，encode url 【“任意订阅链接”和“远程配置”替换："/"替换为"%2F"；":"替换为"%3A"】,然后获得QX/clash/surge/其他base64的信息。
     
            //“本地后端地址”：http://localhost:25500/sub?target=clash&url【clash使用】或quanx&url【QX使用】
            //“任意订阅链接”：https://raw.githubusercontent.com/ch0306/clash/main/clash【第三方clash订阅】，encode url后并且末尾添加insert=false&config：  https%3A%2F%2Fraw.githubusercontent.com%2Fch0306%2Fclash%2Fmain%2Fclash&insert=false&config
            //“远程配置”：以acl4ssr提供的google分组为例，获得的是：https%3A%2F%2Fraw.githubusercontent.com%2FACL4SSR%2FACL4SSR%2Fmaster%2FClash%2Fconfig%2FACL4SSR_Online_Full_Google.ini，反向encode url后，链接为：https://raw.githubusercontent.com/ACL4SSR/ACL4SSR/master/Clash/config/ACL4SSR_Online_Full_Google.ini,按照我自己的需求修改为 ACL4SSR_Google_FULL.ini，
    ACL4SSR_Google_mini.ini。
    
    
   结合上面的例子，我们可以得到安全的订阅链接：
   http://localhost:25500/sub?target=clash&url=https%3A%2F%2Fraw.githubusercontent.com%2Fch0306%2Fclash%2Fmain%2Fclash&insert=false&config=https%3A%2F%2Fraw.githubusercontent.com%2FACL4SSR%2FACL4SSR%2Fmaster%2FClash%2Fconfig%2FACL4SSR_Online_Full_Google.ini   利用别人的“远程配置”
   或者    
   http://localhost:25500/sub?target=clash&url=https%3A%2F%2Fraw.githubusercontent.com%2Fch0306%2Fclash%2Fmain%2Fclash&insert=false&config=https%3A%2F%2Fraw.githubusercontent.com%2Furnuts%2Fhaproxy%2Fmain%2Fnt%2Fsubconverter%2FACL4SSR_Google_mini.ini     利用自己修改后上传的“远程配置”
