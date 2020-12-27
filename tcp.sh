#!/usr/bin/env bash
PATH=/bin:/sbin:/usr/bin:/usr/sbin:/usr/local/bin:/usr/local/sbin:~/bin
export PATH

#=================================================
#	System Required: CentOS 6/7/8,Debian 8/9/10,ubuntu 16/18/19
#	Description: BBR+BBRplus+Lotserver
#	Version: 1.3.2.61
#	Author: 千影,cx9208,YLX
#	更新内容及反馈:  https://blog.ylx.me/archives/783.html
#=================================================

sh_ver="1.3.2.61"
github="github.000060000.xyz"

Green_font_prefix="\033[32m" && Red_font_prefix="\033[31m" && Green_background_prefix="\033[42;37m" && Red_background_prefix="\033[41;37m" && Font_color_suffix="\033[0m"
Info="${Green_font_prefix}[信息]${Font_color_suffix}"
Error="${Red_font_prefix}[错误]${Font_color_suffix}"
Tip="${Green_font_prefix}[注意]${Font_color_suffix}"

#安装BBR内核
installbbr(){
	kernel_version="5.9.6"
	bit=`uname -m`
	rm -rf bbr
	mkdir bbr && cd bbr
	
	if [[ "${release}" == "centos" ]]; then
		# if [[ ${version} = "6" ]]; then
			# if [[ ${bit} = "x86_64" ]]; then
				# wget -N -O kernel-headers-c6.rpm https://chinagz2018-my.sharepoint.com/:u:/g/personal/ylx_chinagz2018_onmicrosoft_com/EUCmObDQnMZEmKnhxS67sJkBG8kjbx0bjNF-XwTtzvgtAA?download=1
				# wget -N -O kernel-c6.rpm https://chinagz2018-my.sharepoint.com/:u:/g/personal/ylx_chinagz2018_onmicrosoft_com/EeC72joP3HVNmrIbjlPg_coBs7kj29Md4f9psAjZOuqOdg?download=1
			
				# yum install -y kernel-c6.rpm
				# yum install -y kernel-headers-c6.rpm
			
				# kernel_version="5.5.5"
			# else
				# echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
			# fi
		
		if [[ ${version} = "7" ]]; then
			if [[ ${bit} = "x86_64" ]]; then
				kernel_version="5.10.2"
				detele_kernel_head
				wget -N -O kernel-headers-c7.rpm https://chinagz2018-my.sharepoint.com/:u:/g/personal/ylx_chinagz2018_onmicrosoft_com/EZ_a_I1mzcdGl-xz-7jWci8BoE_BjgPjclYc844G81ZFiA?download=1
				wget -N -O kernel-c7.rpm https://chinagz2018-my.sharepoint.com/:u:/g/personal/ylx_chinagz2018_onmicrosoft_com/EePhYI2CjAVIjcpPJ3vDLIQBPWe_7k8SBGdZUBb3B_YbqA?download=1
				
				yum install -y kernel-c7.rpm
				yum install -y kernel-headers-c7.rpm
			else
				echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
			fi	
			
		elif [[ ${version} = "8" ]]; then
			kernel_version="5.6.15"
			detele_kernel_head
			wget -N -O kernel-c8.rpm https://chinagz2018-my.sharepoint.com/:u:/g/personal/ylx_chinagz2018_onmicrosoft_com/ETadaTIeeQJCgxEXKlOFiCEBsBa-Y15QbDkv-HQGo2EHSQ?download=1
			wget -N -O kernel-headers-c8.rpm https://chinagz2018-my.sharepoint.com/:u:/g/personal/ylx_chinagz2018_onmicrosoft_com/EZEZyLBjDplMgSqDzyaqkvYBW06OOKDCcIQq27381fa5-A?download=1

			yum install -y kernel-c8.rpm
			yum install -y kernel-headers-c8.rpm
		fi
	
	elif [[ "${release}" == "debian" || "${release}" == "ubuntu" ]]; then
		if [[ ${bit} = "x86_64" ]]; then
			kernel_version="5.10.2"
			detele_kernel_head
			wget -N -O linux-headers-d10.deb https://chinagz2018-my.sharepoint.com/:u:/g/personal/ylx_chinagz2018_onmicrosoft_com/EUFAnbAni8tFok4BRGQUo6gBdlFfEZvuRnLLRmHSgq6Smw?download=1
			wget -N -O linux-image-d10.deb https://chinagz2018-my.sharepoint.com/:u:/g/personal/ylx_chinagz2018_onmicrosoft_com/EZI4LXrCLsREka-Jtfv733UBhp71FFpfT2DOjQ7BW0S7SA?download=1
				
			dpkg -i linux-image-d10.deb
			dpkg -i linux-headers-d10.deb
		else
			echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1	
		fi	
	fi
	
	cd .. && rm -rf bbr	
	
	detele_kernel
	BBR_grub
	echo -e "${Tip} ${Red_font_prefix}请检查上面是否有内核信息，无内核千万别重启${Font_color_suffix}"
	echo -e "${Tip} ${Red_font_prefix}rescue不是正常内核，要排除这个${Font_color_suffix}"
	echo -e "${Tip} 重启VPS后，请重新运行脚本开启${Red_font_prefix}BBR${Font_color_suffix}"	
	stty erase '^H' && read -p "需要重启VPS后，才能开启BBR，是否现在重启 ? [Y/n] :" yn
	[ -z "${yn}" ] && yn="y"
	if [[ $yn == [Yy] ]]; then
		echo -e "${Info} VPS 重启中..."
		reboot
	fi
	#echo -e "${Tip} 内核安装完毕，请参考上面的信息检查是否安装成功及手动调整内核启动顺序"
}

#安装BBRplus内核 4.14.129
installbbrplus(){
	kernel_version="4.14.160-bbrplus"
	bit=`uname -m`
	rm -rf bbrplus
	mkdir bbrplus && cd bbrplus
	if [[ "${release}" == "centos" ]]; then
		if [[ ${version} = "7" ]]; then
			if [[ ${bit} = "x86_64" ]]; then
				kernel_version="4.14.129_bbrplus"
				detele_kernel_head
				wget -N -O kernel-headers-c7.rpm https://github.com/cx9208/Linux-NetSpeed/raw/master/bbrplus/centos/7/kernel-headers-4.14.129-bbrplus.rpm
				wget -N -O kernel-c7.rpm https://github.com/cx9208/Linux-NetSpeed/raw/master/bbrplus/centos/7/kernel-4.14.129-bbrplus.rpm
				
				yum install -y kernel-c7.rpm
				yum install -y kernel-headers-c7.rpm
			else
					echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
			fi
		fi	
		
	elif [[ "${release}" == "debian" || "${release}" == "ubuntu" ]]; then
		kernel_version="4.14.129-bbrplus"
		detele_kernel_head
		wget -N -O linux-headers.deb https://github.com/cx9208/Linux-NetSpeed/raw/master/bbrplus/debian-ubuntu/x64/linux-headers-4.14.129-bbrplus.deb
		wget -N -O linux-image.deb https://github.com/cx9208/Linux-NetSpeed/raw/master/bbrplus/debian-ubuntu/x64/linux-image-4.14.129-bbrplus.deb
		
		dpkg -i linux-image.deb
		dpkg -i linux-headers.deb
	fi
	
	cd .. && rm -rf bbrplus
	detele_kernel
	BBR_grub
	echo -e "${Tip} ${Red_font_prefix}请检查上面是否有内核信息，无内核千万别重启${Font_color_suffix}"
	echo -e "${Tip} ${Red_font_prefix}rescue不是正常内核，要排除这个${Font_color_suffix}"
	echo -e "${Tip} 重启VPS后，请重新运行脚本开启${Red_font_prefix}BBRplus${Font_color_suffix}"
	stty erase '^H' && read -p "需要重启VPS后，才能开启BBRplus，是否现在重启 ? [Y/n] :" yn
	[ -z "${yn}" ] && yn="y"
	if [[ $yn == [Yy] ]]; then
		echo -e "${Info} VPS 重启中..."
		reboot
	fi
	#echo -e "${Tip} 内核安装完毕，请参考上面的信息检查是否安装成功及手动调整内核启动顺序"
}

#安装Lotserver内核
installlot(){
	if [[ "${release}" == "centos" ]]; then
		rpm --import http://${github}/lotserver/${release}/RPM-GPG-KEY-elrepo.org
		yum remove -y kernel-firmware
		yum install -y http://${github}/lotserver/${release}/${version}/${bit}/kernel-firmware-${kernel_version}.rpm
		yum install -y http://${github}/lotserver/${release}/${version}/${bit}/kernel-${kernel_version}.rpm
		yum remove -y kernel-headers
		yum install -y http://${github}/lotserver/${release}/${version}/${bit}/kernel-headers-${kernel_version}.rpm
		yum install -y http://${github}/lotserver/${release}/${version}/${bit}/kernel-devel-${kernel_version}.rpm
	elif [[ "${release}" == "ubuntu" ]]; then
		bash <(wget -qO- "https://${github}/Debian_Kernel.sh")
	elif [[ "${release}" == "debian" ]]; then
		bash <(wget -qO- "https://${github}/Debian_Kernel.sh")
	fi
	
	detele_kernel
	BBR_grub
	echo -e "${Tip} ${Red_font_prefix}请检查上面是否有内核信息，无内核千万别重启${Font_color_suffix}"
	echo -e "${Tip} ${Red_font_prefix}rescue不是正常内核，要排除这个${Font_color_suffix}"
	echo -e "${Tip} 重启VPS后，请重新运行脚本开启${Red_font_prefix}Lotserver${Font_color_suffix}"
	stty erase '^H' && read -p "需要重启VPS后，才能开启Lotserver，是否现在重启 ? [Y/n] :" yn
	[ -z "${yn}" ] && yn="y"
	if [[ $yn == [Yy] ]]; then
		echo -e "${Info} VPS 重启中..."
		reboot
	fi
	#echo -e "${Tip} 内核安装完毕，请参考上面的信息检查是否安装成功及手动调整内核启动顺序"
}

#安装xanmod内核  from xanmod.org
installxanmod(){
	kernel_version="5.5.1-xanmod1"
	bit=`uname -m`
	rm -rf xanmod
	mkdir xanmod && cd xanmod
	if [[ "${release}" == "centos" ]]; then
		if [[ ${version} = "7" ]]; then
			if [[ ${bit} = "x86_64" ]]; then
				kernel_version="5.9.6_xanmod"
				detele_kernel_head
				wget -N -O kernel-c7.rpm https://chinagz2018-my.sharepoint.com/:u:/g/personal/ylx_chinagz2018_onmicrosoft_com/ETLw9F6MgjBBlkkNGmFZu70B9p0kMOdqrF6ntv2QNI5I4g?download=1
				wget -N -O kernel-headers-c7.rpm https://chinagz2018-my.sharepoint.com/:u:/g/personal/ylx_chinagz2018_onmicrosoft_com/EcFnSZfa6JBKqZOkE5xFd8oBPJCa6Lo7DzTPPM0INWsk-w?download=1
				
				yum install -y kernel-c7.rpm
				yum install -y kernel-headers-c7.rpm			
			else
				echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
			fi
		elif [[ ${version} = "8" ]]; then
				kernel_version="5.5.1_xanmod1"
				detele_kernel_head
				wget -N -O kernel-c8.rpm https://github.com/ylx2016/kernel/releases/download/5.5.1xanmod/kernel-5.5.1_xanmod1-1-c8.x86_64.rpm
				wget -N -O kernel-headers-c8.rpm https://github.com/ylx2016/kernel/releases/download/5.5.1xanmod/kernel-headers-5.5.1_xanmod1-1-c8.x86_64.rpm
				
				yum install -y kernel-c8.rpm
				yum install -y kernel-headers-c8.rpm
		fi
		
	elif [[ "${release}" == "debian" || "${release}" == "ubuntu" ]]; then
		if [[ ${bit} = "x86_64" ]]; then
			kernel_version="5.10.2-xanmod"
			detele_kernel_head
			wget -N -O linux-headers-d10.deb https://chinagz2018-my.sharepoint.com/:u:/g/personal/ylx_chinagz2018_onmicrosoft_com/EX2Ba-jo29ZMiqgPxtpE7XQB1WOluu7knD0RxZZqkfdb5w?download=1
			wget -N -O linux-image-d10.deb https://chinagz2018-my.sharepoint.com/:u:/g/personal/ylx_chinagz2018_onmicrosoft_com/ES00Tt-nOlZEow3GbdxzS2IB3jt1YKi7Y67v_fWIr55eCQ?download=1
				
			dpkg -i linux-image-d10.deb
			dpkg -i linux-headers-d10.deb
		else
			echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1	
		fi		
	fi
	
	cd .. && rm -rf xanmod
	detele_kernel
	BBR_grub
	echo -e "${Tip} ${Red_font_prefix}请检查上面是否有内核信息，无内核千万别重启${Font_color_suffix}"
	echo -e "${Tip} ${Red_font_prefix}rescue不是正常内核，要排除这个${Font_color_suffix}"
	echo -e "${Tip} 重启VPS后，请重新运行脚本开启${Red_font_prefix}BBR${Font_color_suffix}"
	stty erase '^H' && read -p "需要重启VPS后，才能开启BBR，是否现在重启 ? [Y/n] :" yn
	[ -z "${yn}" ] && yn="y"
	if [[ $yn == [Yy] ]]; then
		echo -e "${Info} VPS 重启中..."
		reboot
	fi
	#echo -e "${Tip} 内核安装完毕，请参考上面的信息检查是否安装成功及手动调整内核启动顺序"
}

#安装bbr2内核
installbbr2(){
	kernel_version="5.4.0-rc6"
	bit=`uname -m`
	rm -rf bbr2
	mkdir bbr2 && cd bbr2
	if [[ "${release}" == "centos" ]]; then
		if [[ ${version} = "7" ]]; then
			if [[ ${bit} = "x86_64" ]]; then
				kernel_version="5.4.0_rc6"
				detele_kernel_head
				wget -N -O kernel-c7.rpm https://github.com/ylx2016/kernel/releases/download/5.4.0r6bbr2/kernel-5.4.0_rc6-1-bbr2-c7.x86_64.rpm
				wget -N -O kernel-headers-c7.rpm https://github.com/ylx2016/kernel/releases/download/5.4.0r6bbr2/kernel-headers-5.4.0_rc6-1-bbr2-c7.x86_64.rpm
				
				yum install -y kernel-c7.rpm
				yum install -y kernel-headers-c7.rpm
			else
				echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
			fi
		elif [[ ${version} = "8" ]]; then
				kernel_version="5.4.0_rc6"
				detele_kernel_head
				wget -N -O kernel-c8.rpm https://github.com/ylx2016/kernel/releases/download/5.4.0r6bbr2/kernel-5.4.0_rc6-1-bbr2-c8.x86_64.rpm
				wget -N -O kernel-headers-c8.rpm https://github.com/ylx2016/kernel/releases/download/5.4.0r6bbr2/kernel-headers-5.4.0_rc6-1-bbr2-c8.x86_64.rpm
				
				yum install -y kernel-c8.rpm
				yum install -y kernel-headers-c8.rpm
		fi
		
	elif [[ "${release}" == "debian" || "${release}" == "ubuntu" ]]; then
		if [[ ${bit} = "x86_64" ]]; then
			kernel_version="5.4.0_rc6"
			detele_kernel_head
			wget -N -O linux-headers-d10.deb https://github.com/ylx2016/kernel/releases/download/5.4.0r6bbr2/linux-headers-5.4.0-rc6_5.4.0-rc6-1-bbr2-d10_amd64.deb
			wget -N -O linux-image-d10.deb https://github.com/ylx2016/kernel/releases/download/5.4.0r6bbr2/linux-image-5.4.0-rc6_5.4.0-rc6-1-bbr2-d10_amd64.deb
					
			dpkg -i linux-image-d10.deb
			dpkg -i linux-headers-d10.deb
		else
			echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1	
		fi		
	fi
	
	cd .. && rm -rf bbr2
	detele_kernel
	BBR_grub
	echo -e "${Tip} ${Red_font_prefix}请检查上面是否有内核信息，无内核千万别重启${Font_color_suffix}"
	echo -e "${Tip} ${Red_font_prefix}rescue不是正常内核，要排除这个${Font_color_suffix}"
	echo -e "${Tip} 重启VPS后，请重新运行脚本开启${Red_font_prefix}BBR2${Font_color_suffix}"
	stty erase '^H' && read -p "需要重启VPS后，才能开启BBR2，是否现在重启 ? [Y/n] :" yn
	[ -z "${yn}" ] && yn="y"
	if [[ $yn == [Yy] ]]; then
		echo -e "${Info} VPS 重启中..."
		reboot
	fi
	#echo -e "${Tip} 内核安装完毕，请参考上面的信息检查是否安装成功及手动调整内核启动顺序"
}

#安装Zen内核
installzen(){
	kernel_version="5.5.2-zen"
	bit=`uname -m`
	rm -rf zen
	mkdir zen && cd zen
	if [[ "${release}" == "centos" ]]; then
		if [[ ${version} = "7" ]]; then
			if [[ ${bit} = "x86_64" ]]; then
				kernel_version="5.5.10_zen"
				detele_kernel_head
				wget -N -O kernel-c7.rpm https://chinagz2018-my.sharepoint.com/:u:/g/personal/ylx_chinagz2018_onmicrosoft_com/EfQb4N8c2bxDlF3mj3SBVHIBGFSg_d1uR4LFzzT0Ii5FWA?download=1
				wget -N -O kernel-headers-c7.rpm https://chinagz2018-my.sharepoint.com/:u:/g/personal/ylx_chinagz2018_onmicrosoft_com/EfKgMa8vsZBOt0zwXM_lHcUBOYlyH1CyRHrYSRJ5r6a0EQ?download=1
				
				yum install -y kernel-c7.rpm
				yum install -y kernel-headers-c7.rpm
			else
				echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
			fi
		elif [[ ${version} = "8" ]]; then
				kernel_version="5.5.2_zen"
				detele_kernel_head
				wget -N -O kernel-c8.rpm https://github.com/ylx2016/kernel/releases/download/5.5.2zen/kernel-5.5.2_zen-1-c8.x86_64.rpm
				wget -N -O kernel-headers-c8.rpm https://github.com/ylx2016/kernel/releases/download/5.5.2zen/kernel-headers-5.5.2_zen-1-c8.x86_64.rpm
				
				yum install -y kernel-c8.rpm
				yum install -y kernel-headers-c8.rpm	
		fi
		
	elif [[ "${release}" == "debian" || "${release}" == "ubuntu" ]]; then
		if [[ ${bit} = "x86_64" ]]; then
			kernel_version="5.5.10-zen"
			detele_kernel_head
			wget -N -O linux-headers-d10.deb https://chinagz2018-my.sharepoint.com/:u:/g/personal/ylx_chinagz2018_onmicrosoft_com/EShzFq8Jlv1PthbYlNNvLjIB2-hktrkPXxwd9mqcXgmcyg?download=1
			wget -N -O linux-image-d10.deb https://chinagz2018-my.sharepoint.com/:u:/g/personal/ylx_chinagz2018_onmicrosoft_com/ERXzOc-2BzJInOxBgKo62OkBgcI9-O-fw0M8U2B4NazuLg?download=1
					
			dpkg -i linux-image-d10.deb
			dpkg -i linux-headers-d10.deb	
		else
			echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1	
		fi		
	fi
	
	cd .. && rm -rf zen
	detele_kernel
	BBR_grub
	echo -e "${Tip} ${Red_font_prefix}请检查上面是否有内核信息，无内核千万别重启${Font_color_suffix}"
	echo -e "${Tip} ${Red_font_prefix}rescue不是正常内核，要排除这个${Font_color_suffix}"
	echo -e "${Tip} 重启VPS后，请重新运行脚本开启${Red_font_prefix}BBR${Font_color_suffix}"
	stty erase '^H' && read -p "需要重启VPS后，才能开启BBR，是否现在重启 ? [Y/n] :" yn
	[ -z "${yn}" ] && yn="y"
	if [[ $yn == [Yy] ]]; then
		echo -e "${Info} VPS 重启中..."
		reboot
	fi
	#echo -e "${Tip} 内核安装完毕，请参考上面的信息检查是否安装成功及手动调整内核启动顺序"
}

#安装bbrplus 新内核
installbbrplusnew(){
	kernel_version="4.14.182-bbrplus"
	bit=`uname -m`
	rm -rf bbrplusnew
	mkdir bbrplusnew && cd bbrplusnew
	if [[ "${release}" == "centos" ]]; then
		if [[ ${version} = "7" ]]; then
			if [[ ${bit} = "x86_64" ]]; then
				kernel_version="4.14.182_bbrplus"
				detele_kernel_head
				wget -N -O kernel-c7.rpm https://chinagz2018-my.sharepoint.com/:u:/g/personal/ylx_chinagz2018_onmicrosoft_com/EWtxHt1RiAlHgqERl5bvYzcBUrkKa_n1mWQ-uM2-Na7gmQ?download=1
				wget -N -O kernel-headers-c7.rpm https://chinagz2018-my.sharepoint.com/:u:/g/personal/ylx_chinagz2018_onmicrosoft_com/EYkNoi17pKJBi7KnhUGRqEIBEK_26-bzkCL-fuQYZmrHWA?download=1
				
				yum install -y kernel-c7.rpm
				yum install -y kernel-headers-c7.rpm
			else
				echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
			fi
		fi
	elif [[ "${release}" == "debian" || "${release}" == "ubuntu" ]]; then
		if [[ ${bit} = "x86_64" ]]; then
			kernel_version="4.14.182-bbrplus"
			detele_kernel_head
			wget -N -O linux-headers-d10.deb https://chinagz2018-my.sharepoint.com/:u:/g/personal/ylx_chinagz2018_onmicrosoft_com/Ef9pJn1wp-pBk4FIPxT1qBoBqpWhTVCawoKzEB0_vpiMRw?download=1
			wget -N -O linux-image-d10.deb https://chinagz2018-my.sharepoint.com/:u:/g/personal/ylx_chinagz2018_onmicrosoft_com/EaFJshr8za9Bq9FGjEBLds0B4ZfrYThLH8E35xe9-qWX_Q?download=1
					
			dpkg -i linux-image-d10.deb
			dpkg -i linux-headers-d10.deb
		else
			echo -e "${Error} 还在用32位内核，别再见了 !" && exit 1
		fi
	fi

	cd .. && rm -rf bbrplusnew
	detele_kernel
	BBR_grub
	echo -e "${Tip} ${Red_font_prefix}请检查上面是否有内核信息，无内核千万别重启${Font_color_suffix}"
	echo -e "${Tip} ${Red_font_prefix}rescue不是正常内核，要排除这个${Font_color_suffix}"
	echo -e "${Tip} 重启VPS后，请重新运行脚本开启${Red_font_prefix}BBRplus${Font_color_suffix}"
	stty erase '^H' && read -p "需要重启VPS后，才能开启BBRplus，是否现在重启 ? [Y/n] :" yn
	[ -z "${yn}" ] && yn="y"
	if [[ $yn == [Yy] ]]; then
		echo -e "${Info} VPS 重启中..."
		reboot
	fi
	#echo -e "${Tip} 内核安装完毕，请参考上面的信息检查是否安装成功及手动调整内核启动顺序"

}

#启用BBR+fq
startbbrfq(){
	remove_bbr_lotserver
	echo "net.core.default_qdisc=fq" >> /etc/sysctl.d/99-sysctl.conf
	echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.d/99-sysctl.conf
	sysctl --system
	echo -e "${Info}BBR+FQ修改成功，重启生效！"
}

#启用BBR+fq_pie
startbbrfqpie(){
	remove_bbr_lotserver
	echo "net.core.default_qdisc=fq_pie" >> /etc/sysctl.d/99-sysctl.conf
	echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.d/99-sysctl.conf
	sysctl --system
	echo -e "${Info}BBR+FQ_PIE修改成功，重启生效！"
}

#启用BBR+cake
startbbrcake(){
	remove_bbr_lotserver
	echo "net.core.default_qdisc=cake" >> /etc/sysctl.d/99-sysctl.conf
	echo "net.ipv4.tcp_congestion_control=bbr" >> /etc/sysctl.d/99-sysctl.conf
	sysctl --system
	echo -e "${Info}BBR+cake修改成功，重启生效！"
}

#启用BBRplus
startbbrplus(){
	remove_bbr_lotserver
	echo "net.core.default_qdisc=fq" >> /etc/sysctl.d/99-sysctl.conf
	echo "net.ipv4.tcp_congestion_control=bbrplus" >> /etc/sysctl.d/99-sysctl.conf
	sysctl --system
	echo -e "${Info}BBRplus修改成功，重启生效！"
}

#启用Lotserver
startlotserver(){
	remove_bbr_lotserver
	if [[ "${release}" == "centos" ]]; then
		yum install ethtool
	else
		apt-get update
		apt-get install ethtool
	fi
	#bash <(wget -qO- https://git.io/lotServerInstall.sh) install
	bash <(wget --no-check-certificate -qO- https://github.com/xidcn/LotServer_Vicer/raw/master/Install.sh) install
	sed -i '/advinacc/d' /appex/etc/config
	sed -i '/maxmode/d' /appex/etc/config
	echo -e "advinacc=\"1\"
maxmode=\"1\"">>/appex/etc/config
	/appex/bin/lotServer.sh restart
	start_menu
}

#启用BBR2+FQ
startbbr2fq(){
	remove_bbr_lotserver
	echo "net.ipv4.tcp_ecn=0" >> /etc/sysctl.d/99-sysctl.conf
	echo "net.core.default_qdisc=fq" >> /etc/sysctl.d/99-sysctl.conf
	echo "net.ipv4.tcp_congestion_control=bbr2" >> /etc/sysctl.d/99-sysctl.conf
	sysctl --system
	echo -e "${Info}BBR2修改成功，重启生效！"
}

#启用BBR2+CAKE
startbbr2cake(){
	remove_bbr_lotserver
	echo "net.ipv4.tcp_ecn=0" >> /etc/sysctl.d/99-sysctl.conf
	echo "net.core.default_qdisc=cake" >> /etc/sysctl.d/99-sysctl.conf
	echo "net.ipv4.tcp_congestion_control=bbr2" >> /etc/sysctl.d/99-sysctl.conf
	sysctl --system
	echo -e "${Info}BBR2修改成功，重启生效！"
}

#启用BBR2+FQ+ecn
startbbr2fqecn(){
	remove_bbr_lotserver
	echo "net.ipv4.tcp_ecn=1" >> /etc/sysctl.d/99-sysctl.conf
	echo "net.core.default_qdisc=fq" >> /etc/sysctl.d/99-sysctl.conf
	echo "net.ipv4.tcp_congestion_control=bbr2" >> /etc/sysctl.d/99-sysctl.conf
	sysctl --system
	echo -e "${Info}BBR2修改成功，重启生效！"
}

#启用BBR2+CAKE+ecn
startbbr2cakeecn(){
	remove_bbr_lotserver
	echo "net.ipv4.tcp_ecn=1" >> /etc/sysctl.d/99-sysctl.conf
	echo "net.core.default_qdisc=cake" >> /etc/sysctl.d/99-sysctl.conf
	echo "net.ipv4.tcp_congestion_control=bbr2" >> /etc/sysctl.d/99-sysctl.conf
	sysctl --system
	echo -e "${Info}BBR2修改成功，重启生效！"
}

#卸载bbr+锐速
remove_bbr_lotserver(){
	sed -i '/net.ipv4.tcp_ecn/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.core.default_qdisc/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.tcp_congestion_control/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.tcp_ecn/d' /etc/sysctl.conf
	sed -i '/net.core.default_qdisc/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_congestion_control/d' /etc/sysctl.conf
	sysctl --system
		
	rm -rf bbrmod
	
	if [[ -e /appex/bin/lotServer.sh ]]; then
		bash <(wget -qO- https://git.io/lotServerInstall.sh) uninstall
	fi
	clear
	# echo -e "${Info}:清除bbr/lotserver加速完成。"
	# sleep 1s
}

#卸载全部加速
remove_all(){
	sed -i '/#!!! Do not change these settings unless you know what you are doing !!!/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/#############################/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.ip_forward/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.conf.all.forwarding/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.conf.default.forwarding/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv6.conf.all.forwarding/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv6.conf.default.forwarding/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv6.conf.lo.forwarding/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv6.conf.all.disable_ipv6/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv6.conf.default.disable_ipv6/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv6.conf.lo.disable_ipv6/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv6.conf.all.accept_ra/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv6.conf.default.accept_ra/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv6.conf.default.accept_ra/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.core.netdev_max_backlog/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.core.netdev_budget/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.core.netdev_budget_usecs/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/fs.file-max /d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.core.rmem_max/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.core.wmem_max/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.core.rmem_default/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.core.wmem_default/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.core.somaxconn/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.icmp_echo_ignore_all/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.icmp_echo_ignore_broadcasts/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.icmp_ignore_bogus_error_responses/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.conf.all.accept_redirects/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.conf.default.accept_redirects/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.conf.all.secure_redirects/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.conf.default.secure_redirects/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.conf.all.send_redirects/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.conf.default.send_redirects/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.conf.default.rp_filter/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.conf.all.rp_filter/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.tcp_keepalive_time/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.tcp_keepalive_intvl/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.tcp_keepalive_probes/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.tcp_synack_retries/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.tcp_syncookies/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.tcp_rfc1337/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.tcp_timestamps/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.tcp_tw_reuse/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.tcp_fin_timeout/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.ip_local_port_range/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.tcp_max_tw_buckets/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.tcp_fastopen/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.tcp_rmem/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.tcp_wmem/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.udp_rmem_min/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.udp_wmem_min/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.tcp_mtu_probing/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.conf.all.arp_ignore /d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.conf.default.arp_ignore/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.conf.all.arp_announce/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.conf.default.arp_announce/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.tcp_autocorking/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.tcp_slow_start_after_idle/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.tcp_max_syn_backlog/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.core.default_qdisc/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.tcp_congestion_control/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.tcp_notsent_lowat/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.tcp_no_metrics_save/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.tcp_ecn/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.tcp_ecn_fallback/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.tcp_frto/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv6.conf.all.accept_redirects/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv6.conf.default.accept_redirects/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/vm.swappiness/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.ip_unprivileged_port_start/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/vm.overcommit_memory/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.neigh.default.gc_thresh3/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.neigh.default.gc_thresh2/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv4.neigh.default.gc_thresh1/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv6.neigh.default.gc_thresh3/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv6.neigh.default.gc_thresh2/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.ipv6.neigh.default.gc_thresh1/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.netfilter.nf_conntrack_max/d' /etc/sysctl.d/99-sysctl.conf
	sed -i '/net.nf_conntrack_max/d' /etc/sysctl.d/99-sysctl.conf
	
	sed -i '/#!!! Do not change these settings unless you know what you are doing !!!/d' /etc/sysctl.conf
	sed -i '/#############################/d' /etc/sysctl.conf
	sed -i '/net.ipv4.ip_forward/d' /etc/sysctl.conf
	sed -i '/net.ipv4.conf.all.forwarding/d' /etc/sysctl.conf
	sed -i '/net.ipv4.conf.default.forwarding/d' /etc/sysctl.conf
	sed -i '/net.ipv6.conf.all.forwarding/d' /etc/sysctl.conf
	sed -i '/net.ipv6.conf.default.forwarding/d' /etc/sysctl.conf
	sed -i '/net.ipv6.conf.lo.forwarding/d' /etc/sysctl.conf
	sed -i '/net.ipv6.conf.all.disable_ipv6/d' /etc/sysctl.conf
	sed -i '/net.ipv6.conf.default.disable_ipv6/d' /etc/sysctl.conf
	sed -i '/net.ipv6.conf.lo.disable_ipv6/d' /etc/sysctl.conf
	sed -i '/net.ipv6.conf.all.accept_ra/d' /etc/sysctl.conf
	sed -i '/net.ipv6.conf.default.accept_ra/d' /etc/sysctl.conf
	sed -i '/net.ipv6.conf.default.accept_ra/d' /etc/sysctl.conf
	sed -i '/net.core.netdev_max_backlog/d' /etc/sysctl.conf
	sed -i '/net.core.netdev_budget/d' /etc/sysctl.conf
	sed -i '/net.core.netdev_budget_usecs/d' /etc/sysctl.conf
	sed -i '/fs.file-max /d' /etc/sysctl.conf
	sed -i '/net.core.rmem_max/d' /etc/sysctl.conf
	sed -i '/net.core.wmem_max/d' /etc/sysctl.conf
	sed -i '/net.core.rmem_default/d' /etc/sysctl.conf
	sed -i '/net.core.wmem_default/d' /etc/sysctl.conf
	sed -i '/net.core.somaxconn/d' /etc/sysctl.conf
	sed -i '/net.ipv4.icmp_echo_ignore_all/d' /etc/sysctl.conf
	sed -i '/net.ipv4.icmp_echo_ignore_broadcasts/d' /etc/sysctl.conf
	sed -i '/net.ipv4.icmp_ignore_bogus_error_responses/d' /etc/sysctl.conf
	sed -i '/net.ipv4.conf.all.accept_redirects/d' /etc/sysctl.conf
	sed -i '/net.ipv4.conf.default.accept_redirects/d' /etc/sysctl.conf
	sed -i '/net.ipv4.conf.all.secure_redirects/d' /etc/sysctl.conf
	sed -i '/net.ipv4.conf.default.secure_redirects/d' /etc/sysctl.conf
	sed -i '/net.ipv4.conf.all.send_redirects/d' /etc/sysctl.conf
	sed -i '/net.ipv4.conf.default.send_redirects/d' /etc/sysctl.conf
	sed -i '/net.ipv4.conf.default.rp_filter/d' /etc/sysctl.conf
	sed -i '/net.ipv4.conf.all.rp_filter/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_keepalive_time/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_keepalive_intvl/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_keepalive_probes/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_synack_retries/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_syncookies/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_rfc1337/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_timestamps/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_tw_reuse/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_fin_timeout/d' /etc/sysctl.conf
	sed -i '/net.ipv4.ip_local_port_range/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_max_tw_buckets/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_fastopen/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_rmem/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_wmem/d' /etc/sysctl.conf
	sed -i '/net.ipv4.udp_rmem_min/d' /etc/sysctl.conf
	sed -i '/net.ipv4.udp_wmem_min/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_mtu_probing/d' /etc/sysctl.conf
	sed -i '/net.ipv4.conf.all.arp_ignore /d' /etc/sysctl.conf
	sed -i '/net.ipv4.conf.default.arp_ignore/d' /etc/sysctl.conf
	sed -i '/net.ipv4.conf.all.arp_announce/d' /etc/sysctl.conf
	sed -i '/net.ipv4.conf.default.arp_announce/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_autocorking/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_slow_start_after_idle/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_max_syn_backlog/d' /etc/sysctl.conf
	sed -i '/net.core.default_qdisc/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_congestion_control/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_notsent_lowat/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_no_metrics_save/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_ecn/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_ecn_fallback/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_frto/d' /etc/sysctl.conf
	sed -i '/net.ipv6.conf.all.accept_redirects/d' /etc/sysctl.conf
	sed -i '/net.ipv6.conf.default.accept_redirects/d' /etc/sysctl.conf
	sed -i '/vm.swappiness/d' /etc/sysctl.conf
	sed -i '/net.ipv4.ip_unprivileged_port_start/d' /etc/sysctl.conf
	sed -i '/vm.overcommit_memory/d' /etc/sysctl.conf
	sed -i '/net.ipv4.neigh.default.gc_thresh3/d' /etc/sysctl.conf
	sed -i '/net.ipv4.neigh.default.gc_thresh2/d' /etc/sysctl.conf
	sed -i '/net.ipv4.neigh.default.gc_thresh1/d' /etc/sysctl.conf
	sed -i '/net.ipv6.neigh.default.gc_thresh3/d' /etc/sysctl.conf
	sed -i '/net.ipv6.neigh.default.gc_thresh2/d' /etc/sysctl.conf
	sed -i '/net.ipv6.neigh.default.gc_thresh1/d' /etc/sysctl.conf
	sed -i '/net.netfilter.nf_conntrack_max/d' /etc/sysctl.conf
	sed -i '/net.nf_conntrack_max/d' /etc/sysctl.conf
	sysctl --system
	sed -i '/DefaultTimeoutStartSec/d' /etc/systemd/system.conf
	sed -i '/DefaultTimeoutStopSec/d' /etc/systemd/system.conf
	sed -i '/DefaultRestartSec/d' /etc/systemd/system.conf
	sed -i '/DefaultLimitCORE/d' /etc/systemd/system.conf
	sed -i '/DefaultLimitNOFILE/d' /etc/systemd/system.conf
	sed -i '/DefaultLimitNPROC/d' /etc/systemd/system.conf
	
	sed -i '/soft nofile/d' /etc/security/limits.conf
	sed -i '/hard nofile/d' /etc/security/limits.conf
	sed -i '/soft nproc/d' /etc/security/limits.conf
	sed -i '/hard nproc/d' /etc/security/limits.conf

	sed -i '/ulimit -SHn/d' /etc/profile
	sed -i '/ulimit -SHn/d' /etc/profile
	sed -i '/required pam_limits.so/d' /etc/pam.d/common-session

	systemctl daemon-reload
	
	rm -rf bbrmod
	sed -i '/net.ipv4.tcp_retries2/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_slow_start_after_idle/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_fastopen/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_ecn/d' /etc/sysctl.conf
	sed -i '/net.core.default_qdisc/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_congestion_control/d' /etc/sysctl.conf
	sed -i '/fs.file-max/d' /etc/sysctl.conf
	sed -i '/net.core.rmem_max/d' /etc/sysctl.conf
	sed -i '/net.core.wmem_max/d' /etc/sysctl.conf
	sed -i '/net.core.rmem_default/d' /etc/sysctl.conf
	sed -i '/net.core.wmem_default/d' /etc/sysctl.conf
	sed -i '/net.core.netdev_max_backlog/d' /etc/sysctl.conf
	sed -i '/net.core.somaxconn/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_syncookies/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_tw_reuse/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_tw_recycle/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_fin_timeout/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_keepalive_time/d' /etc/sysctl.conf
	sed -i '/net.ipv4.ip_local_port_range/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_max_syn_backlog/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_max_tw_buckets/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_rmem/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_wmem/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_mtu_probing/d' /etc/sysctl.conf
	sed -i '/net.ipv4.ip_forward/d' /etc/sysctl.conf
	sed -i '/fs.inotify.max_user_instances/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_syncookies/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_fin_timeout/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_tw_reuse/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_max_syn_backlog/d' /etc/sysctl.conf
	sed -i '/net.ipv4.ip_local_port_range/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_max_tw_buckets/d' /etc/sysctl.conf
	sed -i '/net.ipv4.route.gc_timeout/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_synack_retries/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_syn_retries/d' /etc/sysctl.conf
	sed -i '/net.core.somaxconn/d' /etc/sysctl.conf
	sed -i '/net.core.netdev_max_backlog/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_timestamps/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_max_orphans/d' /etc/sysctl.conf
	if [[ -e /appex/bin/lotServer.sh ]]; then
		bash <(wget -qO- https://git.io/lotServerInstall.sh) uninstall
	fi
	clear
	echo -e "${Info}:清除加速完成。"
	sleep 1s
}

#优化系统配置
optimizing_system(){
	sed -i '/net.ipv4.tcp_retries2/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_slow_start_after_idle/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_fastopen/d' /etc/sysctl.conf
	sed -i '/fs.file-max/d' /etc/sysctl.conf
	sed -i '/fs.inotify.max_user_instances/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_syncookies/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_fin_timeout/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_tw_reuse/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_max_syn_backlog/d' /etc/sysctl.conf
	sed -i '/net.ipv4.ip_local_port_range/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_max_tw_buckets/d' /etc/sysctl.conf
	sed -i '/net.ipv4.route.gc_timeout/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_synack_retries/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_syn_retries/d' /etc/sysctl.conf
	sed -i '/net.core.somaxconn/d' /etc/sysctl.conf
	sed -i '/net.core.netdev_max_backlog/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_timestamps/d' /etc/sysctl.conf
	sed -i '/net.ipv4.tcp_max_orphans/d' /etc/sysctl.conf
	sed -i '/net.ipv4.ip_forward/d' /etc/sysctl.conf

echo "net.ipv4.tcp_retries2 = 8
net.ipv4.tcp_slow_start_after_idle = 0
fs.file-max = 1000000
fs.inotify.max_user_instances = 8192
net.ipv4.tcp_syncookies = 1
net.ipv4.tcp_fin_timeout = 30
net.ipv4.tcp_tw_reuse = 1
net.ipv4.ip_local_port_range = 1024 65000
net.ipv4.tcp_max_syn_backlog = 16384
net.ipv4.tcp_max_tw_buckets = 6000
net.ipv4.route.gc_timeout = 100
net.ipv4.tcp_syn_retries = 1
net.ipv4.tcp_synack_retries = 1
net.core.somaxconn = 32768
net.core.netdev_max_backlog = 32768
net.ipv4.tcp_timestamps = 0
net.ipv4.tcp_max_orphans = 32768
# forward ipv4
#net.ipv4.ip_forward = 1">>/etc/sysctl.conf
sysctl -p
	echo "*               soft    nofile           1000000
*               hard    nofile          1000000">/etc/security/limits.conf
	echo "ulimit -SHn 1000000">>/etc/profile
	read -p "需要重启VPS后，才能生效系统优化配置，是否现在重启 ? [Y/n] :" yn
	[ -z "${yn}" ] && yn="y"
	if [[ $yn == [Yy] ]]; then
		echo -e "${Info} VPS 重启中..."
		reboot
	fi
}

optimizing_system_johnrosen1()
{
sed -i '/net.ipv4.ip_forward/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.conf.all.forwarding/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.conf.default.forwarding/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv6.conf.all.forwarding/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv6.conf.default.forwarding/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv6.conf.lo.forwarding/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv6.conf.all.disable_ipv6/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv6.conf.default.disable_ipv6/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv6.conf.lo.disable_ipv6/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv6.conf.all.accept_ra/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv6.conf.default.accept_ra/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv6.conf.default.accept_ra/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.core.netdev_max_backlog/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.core.netdev_budget/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.core.netdev_budget_usecs/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/fs.file-max /d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.core.rmem_max/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.core.wmem_max/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.core.rmem_default/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.core.wmem_default/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.core.somaxconn/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.icmp_echo_ignore_all/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.icmp_echo_ignore_broadcasts/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.icmp_ignore_bogus_error_responses/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.conf.all.accept_redirects/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.conf.default.accept_redirects/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.conf.all.secure_redirects/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.conf.default.secure_redirects/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.conf.all.send_redirects/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.conf.default.send_redirects/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.conf.default.rp_filter/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.conf.all.rp_filter/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.tcp_keepalive_time/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.tcp_keepalive_intvl/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.tcp_keepalive_probes/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.tcp_synack_retries/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.tcp_syncookies/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.tcp_rfc1337/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.tcp_timestamps/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.tcp_tw_reuse/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.tcp_fin_timeout/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.ip_local_port_range/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.tcp_max_tw_buckets/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.tcp_fastopen/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.tcp_rmem/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.tcp_wmem/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.udp_rmem_min/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.udp_wmem_min/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.tcp_mtu_probing/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.conf.all.arp_ignore /d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.conf.default.arp_ignore/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.conf.all.arp_announce/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.conf.default.arp_announce/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.tcp_autocorking/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.tcp_slow_start_after_idle/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.tcp_max_syn_backlog/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.core.default_qdisc/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.tcp_congestion_control/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.tcp_notsent_lowat/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.tcp_no_metrics_save/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.tcp_ecn/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.tcp_ecn_fallback/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.tcp_frto/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv6.conf.all.accept_redirects/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv6.conf.default.accept_redirects/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/vm.swappiness/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.ip_unprivileged_port_start/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/vm.overcommit_memory/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.neigh.default.gc_thresh3/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.neigh.default.gc_thresh2/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv4.neigh.default.gc_thresh1/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv6.neigh.default.gc_thresh3/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv6.neigh.default.gc_thresh2/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.ipv6.neigh.default.gc_thresh1/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.netfilter.nf_conntrack_max/d' /etc/sysctl.d/99-sysctl.conf
sed -i '/net.nf_conntrack_max/d' /etc/sysctl.d/99-sysctl.conf

cat > '/etc/sysctl.d/99-sysctl.conf' << EOF
#!!! Do not change these settings unless you know what you are doing !!!
#net.ipv4.ip_forward = 1
#net.ipv4.conf.all.forwarding = 1
#net.ipv4.conf.default.forwarding = 1

net.ipv6.conf.all.forwarding = 1
net.ipv6.conf.default.forwarding = 1
net.ipv6.conf.lo.forwarding = 1

net.ipv6.conf.all.disable_ipv6 = 0
net.ipv6.conf.default.disable_ipv6 = 0
net.ipv6.conf.lo.disable_ipv6 = 0

net.ipv6.conf.all.accept_ra = 2
net.ipv6.conf.default.accept_ra = 2

net.core.netdev_max_backlog = 100000
net.core.netdev_budget = 50000
net.core.netdev_budget_usecs = 5000
#fs.file-max = 51200
net.core.rmem_max = 67108864
net.core.wmem_max = 67108864
net.core.rmem_default = 67108864
net.core.wmem_default = 67108864
net.core.somaxconn = 10000

net.ipv4.icmp_echo_ignore_all = 0
net.ipv4.icmp_echo_ignore_broadcasts = 1
net.ipv4.icmp_ignore_bogus_error_responses = 1
net.ipv4.conf.all.accept_redirects = 0
net.ipv4.conf.default.accept_redirects = 0
net.ipv4.conf.all.secure_redirects = 0
net.ipv4.conf.default.secure_redirects = 0
net.ipv4.conf.all.send_redirects = 0
net.ipv4.conf.default.send_redirects = 0
net.ipv4.conf.default.rp_filter = 0
net.ipv4.conf.all.rp_filter = 0
net.ipv4.tcp_keepalive_time = 1200
net.ipv4.tcp_keepalive_intvl = 15
net.ipv4.tcp_keepalive_probes = 5
net.ipv4.tcp_synack_retries = 2
net.ipv4.tcp_syncookies = 0
net.ipv4.tcp_rfc1337 = 0
net.ipv4.tcp_timestamps = 1
net.ipv4.tcp_tw_reuse = 1
net.ipv4.tcp_fin_timeout = 15
net.ipv4.ip_local_port_range = 10000 65000
net.ipv4.tcp_max_tw_buckets = 2000000
#net.ipv4.tcp_fastopen = 3
net.ipv4.tcp_rmem = 4096 87380 67108864
net.ipv4.tcp_wmem = 4096 65536 67108864
net.ipv4.udp_rmem_min = 8192
net.ipv4.udp_wmem_min = 8192
net.ipv4.tcp_mtu_probing = 0

#net.ipv4.conf.all.arp_ignore = 2
#net.ipv4.conf.default.arp_ignore = 2
#net.ipv4.conf.all.arp_announce = 2
#net.ipv4.conf.default.arp_announce = 2

net.ipv4.tcp_autocorking = 0
net.ipv4.tcp_slow_start_after_idle = 0
net.ipv4.tcp_max_syn_backlog = 30000
net.core.default_qdisc = fq
net.ipv4.tcp_congestion_control = bbr
net.ipv4.tcp_notsent_lowat = 16384
net.ipv4.tcp_no_metrics_save = 1
net.ipv4.tcp_ecn = 2
net.ipv4.tcp_ecn_fallback = 1
net.ipv4.tcp_frto = 0

net.ipv6.conf.all.accept_redirects = 0
net.ipv6.conf.default.accept_redirects = 0
vm.swappiness = 1
#net.ipv4.ip_unprivileged_port_start = 0
vm.overcommit_memory = 1
net.ipv4.neigh.default.gc_thresh3=8192
net.ipv4.neigh.default.gc_thresh2=4096
net.ipv4.neigh.default.gc_thresh1=2048
net.ipv6.neigh.default.gc_thresh3=8192
net.ipv6.neigh.default.gc_thresh2=4096
net.ipv6.neigh.default.gc_thresh1=2048
net.netfilter.nf_conntrack_max = 262144
net.nf_conntrack_max = 262144
EOF
sysctl --system
echo madvise > /sys/kernel/mm/transparent_hugepage/enabled

sed -i '/DefaultTimeoutStartSec/d' /etc/systemd/system.conf
sed -i '/DefaultTimeoutStopSec/d' /etc/systemd/system.conf
sed -i '/DefaultRestartSec/d' /etc/systemd/system.conf
sed -i '/DefaultLimitCORE/d' /etc/systemd/system.conf
sed -i '/DefaultLimitNOFILE/d' /etc/systemd/system.conf
sed -i '/DefaultLimitNPROC/d' /etc/systemd/system.conf

cat > '/etc/systemd/system.conf' << EOF
[Manager]
#DefaultTimeoutStartSec=90s
DefaultTimeoutStopSec=30s
#DefaultRestartSec=100ms
DefaultLimitCORE=infinity
DefaultLimitNOFILE=51200
DefaultLimitNPROC=51200
EOF

sed -i '/soft nofile/d' /etc/security/limits.conf
sed -i '/hard nofile/d' /etc/security/limits.conf
sed -i '/soft nproc/d' /etc/security/limits.conf
sed -i '/hard nproc/d' /etc/security/limits.conf
cat > '/etc/security/limits.conf' << EOF
* soft nofile 51200
* hard nofile 51200
* soft nproc 51200
* hard nproc 51200
EOF
if grep -q "ulimit" /etc/profile
then
	:
else
sed -i '/ulimit -SHn/d' /etc/profile
sed -i '/ulimit -SHn/d' /etc/profile
echo "ulimit -SHn 51200" >> /etc/profile
echo "ulimit -SHu 51200" >> /etc/profile
fi
if grep -q "pam_limits.so" /etc/pam.d/common-session
then
	:
else
sed -i '/required pam_limits.so/d' /etc/pam.d/common-session
echo "session required pam_limits.so" >> /etc/pam.d/common-session
fi
systemctl daemon-reload
}

#更新脚本
Update_Shell(){
	echo -e "当前版本为 [ ${sh_ver} ]，开始检测最新版本..."
	sh_new_ver=$(wget -qO- "https://${github}/tcp.sh"|grep 'sh_ver="'|awk -F "=" '{print $NF}'|sed 's/\"//g'|head -1)
	[[ -z ${sh_new_ver} ]] && echo -e "${Error} 检测最新版本失败 !" && start_menu
	if [[ ${sh_new_ver} != ${sh_ver} ]]; then
		echo -e "发现新版本[ ${sh_new_ver} ]，是否更新？[Y/n]"
		read -p "(默认: y):" yn
		[[ -z "${yn}" ]] && yn="y"
		if [[ ${yn} == [Yy] ]]; then
			wget -N "https://${github}/tcp.sh" && chmod +x tcp.sh && ./tcp.sh
			echo -e "脚本已更新为最新版本[ ${sh_new_ver} ] !"
		else
			echo && echo "	已取消..." && echo
		fi
	else
		echo -e "当前已是最新版本[ ${sh_new_ver} ] !"
		sleep 2s && ./tcp.sh
	fi
}

#切换到不卸载内核版本
gototcpx(){
	clear
	wget -N "https://github.000060000.xyz/tcpx.sh" && chmod +x tcpx.sh && ./tcpx.sh
}

#切换到秋水逸冰BBR安装脚本
gototeddysun_bbr(){
	clear
	wget https://github.com/teddysun/across/raw/master/bbr.sh && chmod +x bbr.sh && ./bbr.sh
}

#切换到一键DD安装系统脚本 新手勿入 
gotodd(){
	clear
	wget -qO ~/Network-Reinstall-System-Modify.sh 'https://github.com/ylx2016/reinstall/raw/master/Network-Reinstall-System-Modify.sh' && chmod a+x ~/Network-Reinstall-System-Modify.sh && bash ~/Network-Reinstall-System-Modify.sh -UI_Options
}

#开始菜单
start_menu(){
clear
echo && echo -e " TCP加速 一键安装管理脚本 ${Red_font_prefix}[v${sh_ver}]${Font_color_suffix}
 更新内容及反馈:  https://blog.ylx.me/archives/783.html 运行./tcp.sh再次调用本脚本 母鸡慎用
 ${Green_font_prefix}0.${Font_color_suffix} 升级脚本
 ${Green_font_prefix}9.${Font_color_suffix} 切换到不卸载内核版本
 ${Green_font_prefix}10.${Font_color_suffix} 切换到一键DD安装系统脚本 自负其责 新手勿入 
————————————内核管理————————————
 ${Green_font_prefix}1.${Font_color_suffix} 安装 BBR原版内核 - 5.6.15/5.10.2
 ${Green_font_prefix}2.${Font_color_suffix} 安装 BBRplus版内核 - 4.14.129
 ${Green_font_prefix}3.${Font_color_suffix} 安装 Lotserver(锐速)内核 - 多种
 ${Green_font_prefix}4.${Font_color_suffix} 安装 xanmod版内核 - 5.5.1/5.10.2
 ${Green_font_prefix}5.${Font_color_suffix} 安装 BBR2测试版内核 - 5.4.0
 ${Green_font_prefix}7.${Font_color_suffix} 安装 BBRplus新版内核 - 4.14.182
————————————加速管理————————————
 ${Green_font_prefix}11.${Font_color_suffix} 使用BBR+FQ加速
 ${Green_font_prefix}12.${Font_color_suffix} 使用BBR+CAKE加速 
 ${Green_font_prefix}13.${Font_color_suffix} 使用BBRplus+FQ版加速
 ${Green_font_prefix}14.${Font_color_suffix} 使用Lotserver(锐速)加速
 ${Green_font_prefix}15.${Font_color_suffix} 使用BBR2+FQ加速
 ${Green_font_prefix}16.${Font_color_suffix} 使用BBR2+CAKE加速
 ${Green_font_prefix}17.${Font_color_suffix} 使用BBR2+FQ+ECN加速
 ${Green_font_prefix}18.${Font_color_suffix} 使用BBR2+CAKE+ECN加速 
 ${Green_font_prefix}19.${Font_color_suffix} 使用BBR+FQ_PIE加速 
————————————杂项管理————————————
 ${Green_font_prefix}21.${Font_color_suffix} 卸载全部加速
 ${Green_font_prefix}22.${Font_color_suffix} 系统配置优化
 ${Green_font_prefix}24.${Font_color_suffix} 应用johnrosen1的优化方案
 ${Green_font_prefix}23.${Font_color_suffix} 退出脚本 
————————————————————————————————" && echo

	check_status
	echo -e " 当前内核为：${Font_color_suffix}${kernel_version_r}${Font_color_suffix}"
	if [[ ${kernel_status} == "noinstall" ]]; then
		echo -e " 当前状态: ${Green_font_prefix}未安装${Font_color_suffix} 加速内核 ${Red_font_prefix}请先安装内核${Font_color_suffix}"
	else
		echo -e " 当前状态: ${Green_font_prefix}已安装${Font_color_suffix} ${_font_prefix}${kernel_status}${Font_color_suffix} 加速内核 , ${Green_font_prefix}${run_status}${Font_color_suffix}"
		
	fi
	echo -e " 当前拥塞控制算法为: ${Green_font_prefix}${net_congestion_control}${Font_color_suffix} 当前队列算法为: ${Green_font_prefix}${net_qdisc}${Font_color_suffix} "
	
echo
read -p " 请输入数字 :" num
case "$num" in
	0)
	Update_Shell
	;;
	1)
	check_sys_bbr
	;;
	2)
	check_sys_bbrplus
	;;
	3)
	check_sys_Lotsever
	;;
	4)
	check_sys_xanmod
	;;
	5)
	check_sys_bbr2
	;;
	6)
	check_sys_zen
	;;
	7)
	check_sys_bbrplusnew
	;;
	9)
	gototcpx
	;;
	10)
	gotodd
	;;
	11)
	startbbrfq
	;;
	19)
	startbbrfqpie	
	;;
	12)
	startbbrcake
	;;
	13)
	startbbrplus
	;;
	14)
	startlotserver
	;;
	15)
	startbbr2fq
	;;
	16)
	startbbr2cake
	;;
	17)
	startbbr2fqecn
	;;
	18)
	startbbr2cakeecn
	;;
	21)
	remove_all
	;;
	22)
	optimizing_system
	;;
	24)
	optimizing_system_johnrosen1
	;;
	23)
	exit 1
	;;
	*)
	clear
	echo -e "${Error}:请输入正确数字 [0-23]"
	sleep 5s
	start_menu
	;;
esac
}
#############内核管理组件#############

#删除多余内核
detele_kernel(){
	if [[ "${release}" == "centos" ]]; then
		rpm_total=`rpm -qa | grep kernel | grep -v "${kernel_version}" | grep -v "noarch" | wc -l`
		if [ "${rpm_total}" > "1" ]; then
			echo -e "检测到 ${rpm_total} 个其余内核，开始卸载..."
			for((integer = 1; integer <= ${rpm_total}; integer++)); do
				rpm_del=`rpm -qa | grep kernel | grep -v "${kernel_version}" | grep -v "noarch" | head -${integer}`
				echo -e "开始卸载 ${rpm_del} 内核..."
				rpm --nodeps -e ${rpm_del}
				echo -e "卸载 ${rpm_del} 内核卸载完成，继续..."
			done
			echo --nodeps -e "内核卸载完毕，继续..."
		else
			echo -e " 检测到 内核 数量不正确，请检查 !" && exit 1
		fi
	elif [[ "${release}" == "debian" || "${release}" == "ubuntu" ]]; then
		deb_total=`dpkg -l | grep linux-image | awk '{print $2}' | grep -v "${kernel_version}" | wc -l`
		if [ "${deb_total}" > "1" ]; then
			echo -e "检测到 ${deb_total} 个其余内核，开始卸载..."
			for((integer = 1; integer <= ${deb_total}; integer++)); do
				deb_del=`dpkg -l|grep linux-image | awk '{print $2}' | grep -v "${kernel_version}" | head -${integer}`
				echo -e "开始卸载 ${deb_del} 内核..."
				apt-get purge -y ${deb_del}
				echo -e "卸载 ${deb_del} 内核卸载完成，继续..."
			done
			echo -e "内核卸载完毕，继续..."
		else
			echo -e " 检测到 内核 数量不正确，请检查 !" && exit 1
		fi
	fi
}

detele_kernel_head(){
	if [[ "${release}" == "centos" ]]; then
		rpm_total=`rpm -qa | grep kernel-headers | grep -v "${kernel_version}" | grep -v "noarch" | wc -l`
		if [ "${rpm_total}" > "1" ]; then
			echo -e "检测到 ${rpm_total} 个其余head内核，开始卸载..."
			for((integer = 1; integer <= ${rpm_total}; integer++)); do
				rpm_del=`rpm -qa | grep kernel-headers | grep -v "${kernel_version}" | grep -v "noarch" | head -${integer}`
				echo -e "开始卸载 ${rpm_del} headers内核..."
				rpm --nodeps -e ${rpm_del}
				echo -e "卸载 ${rpm_del} 内核卸载完成，继续..."
			done
			echo --nodeps -e "内核卸载完毕，继续..."
		else
			echo -e " 检测到 内核 数量不正确，请检查 !" && exit 1
		fi
	elif [[ "${release}" == "debian" || "${release}" == "ubuntu" ]]; then
		deb_total=`dpkg -l | grep linux-headers | awk '{print $2}' | grep -v "${kernel_version}" | wc -l`
		if [ "${deb_total}" > "1" ]; then
			echo -e "检测到 ${deb_total} 个其余head内核，开始卸载..."
			for((integer = 1; integer <= ${deb_total}; integer++)); do
				deb_del=`dpkg -l|grep linux-headers | awk '{print $2}' | grep -v "${kernel_version}" | head -${integer}`
				echo -e "开始卸载 ${deb_del} headers内核..."
				apt-get purge -y ${deb_del}
				echo -e "卸载 ${deb_del} 内核卸载完成，继续..."
			done
			echo -e "内核卸载完毕，继续..."
		else
			echo -e " 检测到 内核 数量不正确，请检查 !" && exit 1
		fi
	fi
}




#更新引导
BBR_grub(){
	if [[ "${release}" == "centos" ]]; then
        if [[ ${version} = "6" ]]; then
            if [ ! -f "/boot/grub/grub.conf" ]; then
                echo -e "${Error} /boot/grub/grub.conf 找不到，请检查."
                #exit 1
            fi
            sed -i 's/^default=.*/default=0/g' /boot/grub/grub.conf
        elif [[ ${version} = "7" ]]; then
            if [ -f "/boot/grub2/grub.cfg" ]; then
				grub2-mkconfig -o /boot/grub2/grub.cfg
				grub2-set-default 0
				#exit 1
			elif [ -f "/boot/efi/EFI/centos/grub.cfg" ]; then
				grub2-mkconfig -o /boot/efi/EFI/centos/grub.cfg
				grub2-set-default 0
				#exit 1
			else
				echo -e "${Error} grub.cfg 找不到，请检查."
            fi
			#grub2-mkconfig -o /boot/grub2/grub.cfg
			#grub2-set-default 0
		
		elif [[ ${version} = "8" ]]; then
			grub2-mkconfig -o /boot/grub2/grub.cfg
			grubby --info=ALL|awk -F= '$1=="kernel" {print i++ " : " $2}'
        fi
    elif [[ "${release}" == "debian" || "${release}" == "ubuntu" ]]; then
        /usr/sbin/update-grub
		#exit 1
    fi
}

#############内核管理组件#############



#############系统检测组件#############

#检查系统
check_sys(){
	if [[ -f /etc/redhat-release ]]; then
		release="centos"
	elif cat /etc/issue | grep -q -E -i "debian"; then
		release="debian"
	elif cat /etc/issue | grep -q -E -i "ubuntu"; then
		release="ubuntu"
	elif cat /etc/issue | grep -q -E -i "centos|red hat|redhat"; then
		release="centos"
	elif cat /proc/version | grep -q -E -i "debian"; then
		release="debian"
	elif cat /proc/version | grep -q -E -i "ubuntu"; then
		release="ubuntu"
	elif cat /proc/version | grep -q -E -i "centos|red hat|redhat"; then
		release="centos"
    fi
	
#处理ca证书
	if [[ "${release}" == "centos" ]]; then
		yum install ca-certificates -y
		update-ca-trust force-enable
	elif [[ "${release}" == "debian" || "${release}" == "ubuntu" ]]; then
		apt-get install ca-certificates -y
		update-ca-certificates
	fi	
}

#检查Linux版本
check_version(){
	if [[ -s /etc/redhat-release ]]; then
		version=`grep -oE  "[0-9.]+" /etc/redhat-release | cut -d . -f 1`
	else
		version=`grep -oE  "[0-9.]+" /etc/issue | cut -d . -f 1`
	fi
	bit=`uname -m`
	if [[ ${bit} = "x86_64" ]]; then
		bit="x64"
	else
		bit="x32"
	fi
}

#检查安装bbr的系统要求
check_sys_bbr(){
	check_version
	if [[ "${release}" == "centos" ]]; then
		# if [[ ${version} = "6" || ${version} = "7" || ${version} = "8" ]]; then
		if [[ ${version} = "7" || ${version} = "8" ]]; then
			installbbr
		else
			echo -e "${Error} BBR内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		fi
	# elif [[ "${release}" == "debian" ]]; then
		# if [[ ${version} = "8" || ${version} = "9" || ${version} = "10" ]]; then
		# if [[ ${version} = "9" || ${version} = "10" ]]; then
			# installbbr
		# else
			# echo -e "${Error} BBR内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		# fi
	# elif [[ "${release}" == "ubuntu" ]]; then
		# if [[ ${version} = "16" || ${version} = "18" || ${version} = "19" || ${version} = "20" ]]; then
		# if [[ ${version} = "16" || ${version} = "18" || ${version} = "20" ]]; then
			# installbbr
		# else
			# echo -e "${Error} BBR内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		# fi
	elif [[ "${release}" == "debian" || "${release}" == "ubuntu" ]]; then
		# if [[ ${version} = "8" || ${version} = "9" || ${version} = "10" || ${version} = "16" || ${version} = "18" || ${version} = "19" || ${version} = "20" ]]; then
			installbbr
		# fi
	else
		echo -e "${Error} BBR内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
	fi
}

check_sys_bbrplus(){
	check_version
	if [[ "${release}" == "centos" ]]; then
		if [[ ${version} = "7" ]]; then
			installbbrplus
		else
			echo -e "${Error} BBRplus内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		fi
	# elif [[ "${release}" == "debian" ]]; then
		# if [[ ${version} = "8" || ${version} = "9" || ${version} = "10" ]]; then
		# if [[ ${version} = "9" || ${version} = "10" ]]; then
			# installbbrplus
		# else
			# echo -e "${Error} BBRplus内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		# fi
	# elif [[ "${release}" == "ubuntu" ]]; then
		# if [[ ${version} = "16" || ${version} = "18" || ${version} = "19" ]]; then
		# if [[ ${version} = "16" || ${version} = "18" ]]; then
			# installbbrplus
		# else
			# echo -e "${Error} BBRplus内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		# fi
	elif [[ "${release}" == "debian" || "${release}" == "ubuntu" ]]; then
		# if [[ ${version} = "8" || ${version} = "9" || ${version} = "10" || ${version} = "16" || ${version} = "18" || ${version} = "19" || ${version} = "20" ]]; then
			installbbrplus
		# fi	
	else
		echo -e "${Error} BBRplus内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
	fi
}

check_sys_bbrplusnew(){
	check_version
	if [[ "${release}" == "centos" ]]; then
		if [[ ${version} = "7" ]]; then
			installbbrplusnew
		else
			echo -e "${Error} BBRplusNew内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		fi
	# elif [[ "${release}" == "debian" ]]; then
		# if [[ ${version} = "10" ]]; then
			# installbbrplusnew
		# else
			# echo -e "${Error} BBRplusNew内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		# fi
	elif [[ "${release}" == "debian" || "${release}" == "ubuntu" ]]; then
		# if [[ ${version} = "8" || ${version} = "9" || ${version} = "10" || ${version} = "16" || ${version} = "18" || ${version} = "19" || ${version} = "20" ]]; then
			installbbrplusnew
	else
		echo -e "${Error} BBRplusNew内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
	fi
}

check_sys_xanmod(){
	check_version
	if [[ "${release}" == "centos" ]]; then
		if [[ ${version} = "7" || ${version} = "8" ]]; then
			installxanmod
		else
			echo -e "${Error} xanmod内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		fi
	elif [[ "${release}" == "debian" || "${release}" == "ubuntu" ]]; then
		# if [[ ${version} = "8" || ${version} = "9" || ${version} = "10" || ${version} = "16" || ${version} = "18" || ${version} = "19" || ${version} = "20" ]]; then
			installxanmod
		# fi
	# elif [[ "${release}" == "ubuntu" ]]; then
			# echo -e "${Error} xanmod内核不支持当前系统 ${release} ${version} ${bit} ,去xanmod.org 官网安装吧!" && exit 1
	else
		echo -e "${Error} xanmod内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
	fi
}

check_sys_bbr2(){
	check_version
	if [[ "${release}" == "centos" ]]; then
		if [[ ${version} = "7" || ${version} = "8" ]]; then
			installbbr2
		else
			echo -e "${Error} bbr2内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		fi
	# elif [[ "${release}" == "debian" ]]; then
		# if [[ ${version} = "9" || ${version} = "10" ]]; then
			# installbbr2
		# else
			# echo -e "${Error} bbr2内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		# fi
	# elif [[ "${release}" == "ubuntu" ]]; then
			# echo -e "${Error} bbr2内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
	elif [[ "${release}" == "debian" || "${release}" == "ubuntu" ]]; then
		# if [[ ${version} = "8" || ${version} = "9" || ${version} = "10" || ${version} = "16" || ${version} = "18" || ${version} = "19" || ${version} = "20" ]]; then
			installbbr2		
	else
		echo -e "${Error} bbr2内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
	fi
}


check_sys_zen(){
	check_version
	if [[ "${release}" == "centos" ]]; then
		if [[ ${version} = "7" || ${version} = "8" ]]; then
			installzen
		else
			echo -e "${Error} zen内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		fi
	# elif [[ "${release}" == "debian" ]]; then
		# if [[ ${version} = "9" || ${version} = "10" ]]; then
			# installzen
		# else
			# echo -e "${Error} zen内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		# fi
	# elif [[ "${release}" == "ubuntu" ]]; then
			# echo -e "${Error} zen内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
	elif [[ "${release}" == "debian" || "${release}" == "ubuntu" ]]; then
		# if [[ ${version} = "8" || ${version} = "9" || ${version} = "10" || ${version} = "16" || ${version} = "18" || ${version} = "19" || ${version} = "20" ]]; then
			installzen				
	else
		echo -e "${Error} zen内核不支持当前系统 ${release} ${version} ${bit} !" && exit 1
	fi
}

#检查安装Lotsever的系统要求
check_sys_Lotsever(){
	check_version
	if [[ "${release}" == "centos" ]]; then
		if [[ ${version} == "6" ]]; then
			kernel_version="2.6.32-504"
			installlot
		elif [[ ${version} == "7" ]]; then
			yum -y install net-tools
			kernel_version="4.11.2-1"
			installlot
		else
			echo -e "${Error} Lotsever不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		fi
	elif [[ "${release}" == "debian" ]]; then
		if [[ ${version} = "7" || ${version} = "8" ]]; then
			if [[ ${bit} == "x64" ]]; then
				kernel_version="3.16.0-4"
				installlot
			elif [[ ${bit} == "x32" ]]; then
				kernel_version="3.2.0-4"
				installlot
			fi
		elif [[ ${version} = "9" ]]; then
			if [[ ${bit} == "x64" ]]; then
				kernel_version="4.9.0-4"
				installlot
			fi
		else
			echo -e "${Error} Lotsever不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		fi
	elif [[ "${release}" == "ubuntu" ]]; then
		if [[ ${version} -ge "12" ]]; then
			if [[ ${bit} == "x64" ]]; then
				kernel_version="4.4.0-47"
				installlot
			elif [[ ${bit} == "x32" ]]; then
				kernel_version="3.13.0-29"
				installlot
			fi
		else
			echo -e "${Error} Lotsever不支持当前系统 ${release} ${version} ${bit} !" && exit 1
		fi
	else
		echo -e "${Error} Lotsever不支持当前系统 ${release} ${version} ${bit} !" && exit 1
	fi
}

check_status(){
	kernel_version=`uname -r | awk -F "-" '{print $1}'`
	kernel_version_full=`uname -r`
	net_congestion_control=`cat /proc/sys/net/ipv4/tcp_congestion_control | awk '{print $1}'`
	net_qdisc=`cat /proc/sys/net/core/default_qdisc | awk '{print $1}'`
	kernel_version_r=`uname -r | awk '{print $1}'`
	if [[ ${kernel_version_full} = "4.14.182-bbrplus" || ${kernel_version_full} = "4.14.168-bbrplus" || ${kernel_version_full} = "4.14.98-bbrplus" || ${kernel_version_full} = "4.14.129-bbrplus" || ${kernel_version_full} = "4.14.160-bbrplus" || ${kernel_version_full} = "4.14.166-bbrplus" || ${kernel_version_full} = "4.14.161-bbrplus" ]]; then
		kernel_status="BBRplus"
	elif [[ ${kernel_version} = "3.10.0" || ${kernel_version} = "3.16.0" || ${kernel_version} = "3.2.0" || ${kernel_version} = "4.4.0" || ${kernel_version} = "3.13.0"  || ${kernel_version} = "2.6.32" || ${kernel_version} = "4.9.0" || ${kernel_version} = "4.11.2" ]]; then
		kernel_status="Lotserver"
	elif [[ `echo ${kernel_version} | awk -F'.' '{print $1}'` == "4" ]] && [[ `echo ${kernel_version} | awk -F'.' '{print $2}'` -ge 9 ]] || [[ `echo ${kernel_version} | awk -F'.' '{print $1}'` == "5" ]]; then
		kernel_status="BBR"
	else 
		kernel_status="noinstall"
	fi
	

	if [[ ${kernel_status} == "BBR" ]]; then
		run_status=`cat /proc/sys/net/ipv4/tcp_congestion_control | awk '{print $1}'`
		if [[ ${run_status} == "bbr" ]]; then
			run_status=`cat /proc/sys/net/ipv4/tcp_congestion_control | awk '{print $1}'`
			if [[ ${run_status} == "bbr" ]]; then
				run_status="BBR启动成功"
			else 
				run_status="BBR启动失败"
			fi
		elif [[ ${run_status} == "bbr2" ]]; then
			run_status=`cat /proc/sys/net/ipv4/tcp_congestion_control | awk '{print $1}'`
			if [[ ${run_status} == "bbr2" ]]; then
				run_status="BBR2启动成功"
			else 
				run_status="BBR2启动失败"
			fi	
		elif [[ ${run_status} == "tsunami" ]]; then
			run_status=`lsmod | grep "tsunami" | awk '{print $1}'`
			if [[ ${run_status} == "tcp_tsunami" ]]; then
				run_status="BBR魔改版启动成功"
			else 
				run_status="BBR魔改版启动失败"
			fi
		elif [[ ${run_status} == "nanqinlang" ]]; then
			run_status=`lsmod | grep "nanqinlang" | awk '{print $1}'`
			if [[ ${run_status} == "tcp_nanqinlang" ]]; then
				run_status="暴力BBR魔改版启动成功"
			else 
				run_status="暴力BBR魔改版启动失败"
			fi
		else 
			run_status="未安装加速模块"
		fi
		
	elif [[ ${kernel_status} == "Lotserver" ]]; then
		if [[ -e /appex/bin/lotServer.sh ]]; then
			run_status=`bash /appex/bin/lotServer.sh status | grep "LotServer" | awk  '{print $3}'`
			if [[ ${run_status} = "running!" ]]; then
				run_status="启动成功"
			else 
				run_status="启动失败"
			fi
		else 
			run_status="未安装加速模块"
		fi	
	elif [[ ${kernel_status} == "BBRplus" ]]; then
		run_status=`cat /proc/sys/net/ipv4/tcp_congestion_control | awk '{print $1}'`
		if [[ ${run_status} == "bbrplus" ]]; then
			run_status=`cat /proc/sys/net/ipv4/tcp_congestion_control | awk '{print $1}'`
			if [[ ${run_status} == "bbrplus" ]]; then
				run_status="BBRplus启动成功"
			else 
				run_status="BBRplus启动失败"
			fi
		else 
			run_status="未安装加速模块"
		fi
	fi
}

#############系统检测组件#############
check_sys
check_version
[[ ${release} != "debian" ]] && [[ ${release} != "ubuntu" ]] && [[ ${release} != "centos" ]] && echo -e "${Error} 本脚本不支持当前系统 ${release} !" && exit 1
start_menu







































































