(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{61:function(_,v,t){"use strict";t.r(v);var l=t(0),e=Object(l.a)({},function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("p",[_._v("阿里云centos_7_3_64")]),_._v(" "),t("h2",{attrs:{id:"_1-卸载"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-卸载","aria-hidden":"true"}},[_._v("#")]),_._v(" 1.卸载")]),_._v(" "),t("ul",[t("li",[_._v("查看当前server中的vsftpd\n"),t("code",[_._v("rpm -qa|grep vsftpd")])])]),_._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[_._v("显示结果：")]),_._v(" "),t("p",[_._v("vsftpd-2.2.2-13.el6_6.1.x86_64")])]),_._v(" "),t("ul",[t("li",[_._v("运行卸载\n"),t("code",[_._v("rpm -e vsftpd-2.2.2-13.el6_6.1.x86_64")])])]),_._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[_._v("提示：")]),_._v(" "),t("p",[_._v("卸载时自己主动备份vsftp的用户列表文件")])]),_._v(" "),t("ul",[t("li",[_._v("删除文件\n"),t("code",[_._v("rm -rf /etc/vsftpd")])]),_._v(" "),t("li",[_._v("查看vsftpd是否还在开机启动项中\n"),t("code",[_._v("chkconfig --list")])]),_._v(" "),t("li",[_._v("查看vsftpd执行状态\n"),t("code",[_._v("service vsftpd status")])])]),_._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[_._v("返回结果:")]),_._v(" "),t("p",[_._v("vsftpd: unrecognized service（无法识别vsftpd。说明卸载了vsftpd了）")])]),_._v(" "),t("h2",{attrs:{id:"_2-安装"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装","aria-hidden":"true"}},[_._v("#")]),_._v(" 2.安装")]),_._v(" "),t("p",[t("code",[_._v("yum -y install vsftpd")])]),_._v(" "),t("h2",{attrs:{id:"_3-配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-配置","aria-hidden":"true"}},[_._v("#")]),_._v(" 3.配置")]),_._v(" "),t("div",{staticClass:"tip custom-block"},[t("p",{staticClass:"custom-block-title"},[_._v("vsftpd的主配置文件的内容")]),_._v(" "),t("p",[_._v("-----------------/etc/vsftpd/vsftpd.conf START---------------------------------------")]),_._v(" "),t("ul",[t("li",[_._v("anonymous_enable=NO")]),_._v(" "),t("li",[_._v("local_enable=YES")]),_._v(" "),t("li",[_._v("write_enable=YES")]),_._v(" "),t("li",[_._v("local_umask=022")]),_._v(" "),t("li",[_._v("#anon_upload_enable=YES")]),_._v(" "),t("li",[_._v("#anon_mkdir_write_enable=YES")]),_._v(" "),t("li",[_._v("dirmessage_enable=YES")]),_._v(" "),t("li",[_._v("xferlog_enable=YES")]),_._v(" "),t("li",[_._v("connect_from_port_20=YES")]),_._v(" "),t("li",[_._v("#chown_uploads=YES")]),_._v(" "),t("li",[_._v("#chown_username=whoever")]),_._v(" "),t("li",[_._v("#xferlog_file=/var/log/xferlog")]),_._v(" "),t("li",[_._v("xferlog_std_format=YES")]),_._v(" "),t("li",[_._v("idle_session_timeout=600")]),_._v(" "),t("li",[_._v("data_connection_timeout=120")]),_._v(" "),t("li",[_._v("#nopriv_user=ftpsecure")]),_._v(" "),t("li",[_._v("#async_abor_enable=YES")]),_._v(" "),t("li",[_._v("ascii_upload_enable=YES")]),_._v(" "),t("li",[_._v("ascii_download_enable=YES")]),_._v(" "),t("li",[_._v("ftpd_banner=Welcome to lightnear FTP service.")]),_._v(" "),t("li",[_._v("#deny_email_enable=YES")]),_._v(" "),t("li",[_._v("#banned_email_file=/etc/vsftpd/banned_emails")]),_._v(" "),t("li",[_._v("chroot_local_user=YES")]),_._v(" "),t("li",[_._v("#chroot_list_enable=YES")]),_._v(" "),t("li",[_._v("#chroot_list_file=/etc/vsftpd/chroot_list")]),_._v(" "),t("li",[_._v("ls_recurse_enable=YES")]),_._v(" "),t("li",[_._v("listen=YES")]),_._v(" "),t("li",[_._v("#listen_ipv6=YES")]),_._v(" "),t("li",[_._v("pam_service_name=vsftpd")]),_._v(" "),t("li",[_._v("userlist_enable=YES")]),_._v(" "),t("li",[_._v("userlist_deny=NO")]),_._v(" "),t("li",[_._v("#设置FTP用户能够訪问的主文件夹（假设该文件夹不存在，能够创建并改动权限）")]),_._v(" "),t("li",[_._v("local_root=/var/ftp")]),_._v(" "),t("li",[_._v("tcp_wrappers=YES")]),_._v(" "),t("li",[_._v("use_localtime=YES\n---------------------/etc/vsftpd/vsftpd.conf END------------------------------------")])])]),_._v(" "),t("h2",{attrs:{id:"_4-基本操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-基本操作","aria-hidden":"true"}},[_._v("#")]),_._v(" 4.基本操作")]),_._v(" "),t("ul",[t("li",[t("p",[_._v("ls 列出远程机的当前目录")])]),_._v(" "),t("li",[t("p",[_._v("cd 在远程机上改变工作目录")])]),_._v(" "),t("li",[t("p",[_._v("lcd 在本地机上改变工作目录")])]),_._v(" "),t("li",[t("p",[_._v("ascii 设置文件传输方式为ASCII模式")])]),_._v(" "),t("li",[t("p",[_._v("binary 设置文件传输方式为二进制模式")])]),_._v(" "),t("li",[t("p",[_._v("close 终止当前的ftp会话")])]),_._v(" "),t("li",[t("p",[_._v("hash 每次传输完数据缓冲区中的数据后就显示一个#号")])]),_._v(" "),t("li",[t("p",[_._v("get（mget） 从远程机传送指定文件到本地机")])]),_._v(" "),t("li",[t("p",[_._v("put（mput） 从本地机传送指定文件到远程机")])]),_._v(" "),t("li",[t("p",[_._v("open 连接远程ftp站点")])]),_._v(" "),t("li",[t("p",[_._v("? 显示本地帮助信息")])]),_._v(" "),t("li",[t("p",[_._v("! 转到Shell中")])]),_._v(" "),t("li",[t("p",[_._v("添加FTP账户\n"),t("code",[_._v("useradd ftpadmin -s /sbin/nologin")])])]),_._v(" "),t("li",[t("p",[_._v("给ftpadmin设置password"),t("code",[_._v("passwd ******")]),_._v("输入两遍password就可以")])]),_._v(" "),t("li",[t("p",[_._v("创建FTP根文件夹\n"),t("code",[_._v("mkdir /var/ftp")])])]),_._v(" "),t("li",[t("p",[_._v("假设上述文件夹已经存在，仅仅须要改动权限就可以\n"),t("code",[_._v("chown -R ftpadmin /var/ftp && chmod -R 755 /var/ftp")])])])]),_._v(" "),t("p",[_._v("暂时先这样吧，后续有时间再加……")])])},[],!1,null,null,null);v.default=e.exports}}]);