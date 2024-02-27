var posts=["2020/05/10/1.日常生活/1.交友/1.【程序猿交友】IT老翟：努力前进中!/","2020/02/06/1.日常生活/2.win操作/1.玩转浏览器黑科技/","2020/02/20/1.日常生活/2.win操作/2.投屏软件/","2020/03/27/1.日常生活/2.win操作/3.Windows问题之部分软件乱码/","2021/08/31/1.日常生活/2.win操作/5.虚拟机上用U盘安装系统/","2021/08/31/1.日常生活/2.win操作/6.系统安装光盘的制作/","2020/04/03/1.日常生活/2.win操作/7.安卓手机当电脑摄像头（droidcam）/","2020/03/24/1.日常生活/5.诗词/1.那些年写下的诗篇/","2020/03/24/1.日常生活/4.运动/2.FF跑酷视频/","2020/02/20/1.日常生活/4.运动/1.西安理工跑酷视频/","2020/03/24/1.日常生活/4.运动/3.小时候跑酷的我们/","2020/04/01/2.软件开发/5.编程语言/1.C语言/10.单链表实现学生信息的存储与排序/","2020/02/10/2.软件开发/5.编程语言/1.C语言/2.C语言之字节序/","2020/02/07/2.软件开发/5.编程语言/2.markdown/1.轻松入手Markdown编程/","2020/02/09/2.软件开发/5.编程语言/1.C语言/1.c语言之字符串处理函数的实现/","2020/02/15/2.软件开发/5.编程语言/1.C语言/3.数据结构与算法之排序/","2020/03/31/2.软件开发/5.编程语言/1.C语言/4.C语言之指针函数和函数指针/","2020/03/31/2.软件开发/5.编程语言/1.C语言/5.C语言关键字之const和static/","2020/04/01/2.软件开发/5.编程语言/1.C语言/6.C语言笔试题中的那些坑（一）/","2020/03/21/2.软件开发/5.编程语言/3.html cs js/1.html添加背景音乐/","2020/04/01/2.软件开发/5.编程语言/1.C语言/7.C语言之程序的内存分断/","2020/04/01/2.软件开发/5.编程语言/1.C语言/8.C语言之指针数组和数组指针/","2020/04/01/2.软件开发/5.编程语言/1.C语言/9.C语言之指针与数组运算/","2020/02/01/2.软件开发/1.开发工具/1.代码管理/1.小白入门 github/","2020/03/30/2.软件开发/5.编程语言/4.python/1.python安装第三方库的问题/","2020/02/02/2.软件开发/1.开发工具/1.代码管理/2.小白入门gitee(码云)/","2020/03/22/2.软件开发/1.开发工具/3.vscode/1.vsCode配置c_c++环境/","2020/02/03/2.软件开发/1.开发工具/2.图床搭建/1.jsDeliver+github打造属于自己的图床/","2020/02/04/2.软件开发/1.开发工具/2.图床搭建/2.PicGo+jsdelivr+github打造私人图床/","2020/03/23/2.软件开发/7.项目/2.嵌入式项目/1.智能氛围灯/","2021/01/15/2.软件开发/6.界面开发/1.MFC/1.MFC添加程序关闭时时的提示界面/","2021/01/23/2.软件开发/6.界面开发/1.MFC/2.MFC窗口及组件大小设置/","2021/01/25/2.软件开发/6.界面开发/1.MFC/3.MFC定时器的使用/","2021/01/25/2.软件开发/6.界面开发/1.MFC/4.MFC模态对话框和非模态对话框使用/","2021/01/28/2.软件开发/6.界面开发/1.MFC/5.MFC新建工程基本配置/","2021/01/28/2.软件开发/6.界面开发/1.MFC/6.MFC之Button按键控件/","2021/01/28/2.软件开发/6.界面开发/1.MFC/7.MFC之编辑框和静态文本框/","2021/01/28/2.软件开发/6.界面开发/1.MFC/8.MFC之Tab Control标签控件/","2020/12/01/2.软件开发/2.嵌入式/1.单片机/ESP8266/10.ESP8266-12F最小系统板程序烧录/","2020/02/12/2.软件开发/2.嵌入式/1.单片机/ESP8266/1.常用单片机开发板引脚图/","2020/12/23/2.软件开发/2.嵌入式/1.单片机/ESP8266/11.ESP8266制作创意时钟（DS1302+TM1637）/","2021/01/03/2.软件开发/2.嵌入式/1.单片机/ESP8266/12.ESP8266+blinker点灯（小爱+天猫+小度三合一）/","2021/01/19/2.软件开发/2.嵌入式/1.单片机/ESP8266/13.ESP8266+0.96OLED驱动显示（I2C）/","2021/08/01/2.软件开发/2.嵌入式/1.单片机/ESP8266/15.ESP8266+Blinker+小爱同学舵机控制开关/","2021/01/25/2.软件开发/2.嵌入式/1.单片机/ESP8266/14.ESP8266相互通讯（ESP-NOW）/","2020/03/22/2.软件开发/2.嵌入式/1.单片机/ESP8266/3.blinker点灯开关组件/","2020/03/14/2.软件开发/2.嵌入式/1.单片机/ESP8266/2.Arduino+esp8266+blinker物联网开发/","2020/03/23/2.软件开发/2.嵌入式/1.单片机/ESP8266/5.小爱同学+ESP8266+blinker点灯/","2020/03/22/2.软件开发/2.嵌入式/1.单片机/ESP8266/4.ESP8266+blinker测温湿度/","2020/03/23/2.软件开发/2.嵌入式/1.单片机/ESP8266/6.小爱同学+ESP8266+blinker监测数据/","2024/02/27/2.软件开发/2.嵌入式/1.单片机/ESP8266/7.ESP8266+OLED制作网络时钟/","2020/05/07/2.软件开发/2.嵌入式/1.单片机/ESP8266/8.ESP8266驱动oled显示多级菜单（spi）/","2021/01/28/2.软件开发/2.嵌入式/1.单片机/STC89C51/1.STC89C51驱动0.96寸oled避坑教程（I2C）/","2020/03/27/2.软件开发/2.嵌入式/1.单片机/STM32/1.STM32CubeMx+Freertos系统开发点亮小灯/","2020/06/10/2.软件开发/2.嵌入式/1.单片机/ESP8266/9.ESP8266+安信可微信智能配网/","2020/03/27/2.软件开发/2.嵌入式/1.单片机/STM32/3.使用STM32CubMx创建一个简单工程/","2020/03/27/2.软件开发/2.嵌入式/1.单片机/STM32/2.STM32CubMx+Freertos系统之任务的挂起和取消/","2020/03/29/2.软件开发/2.嵌入式/1.单片机/STM32/37.STM32CubMx+FreeRTOS消息队列（三）/","2020/03/27/2.软件开发/2.嵌入式/1.单片机/STM32/34.STM32CubMx配置串口输入输出/","2020/03/29/2.软件开发/2.嵌入式/1.单片机/STM32/38.STM32CubMx+FreeRTOS二值信号量和计数信号量（四）/","2020/05/26/2.软件开发/2.嵌入式/1.单片机/STM32/54.STM32F103驱动DHT11显示温湿度（0.96寸oled）/","2020/04/19/2.软件开发/2.嵌入式/1.单片机/STM32/50.STM32燃烧你的oled屏（0.96寸SPI）/","2021/06/18/2.软件开发/2.嵌入式/1.单片机/ZYNQ7000/1.ZYNQ7000系列入门之GPIO点灯/","2020/03/29/2.软件开发/2.嵌入式/1.单片机/STM32/39.STM32CubMx+FreeRTOS互斥锁和递归互斥锁/","2021/07/27/2.软件开发/2.嵌入式/2.linux/1.驱动/1.Linux入门之驱动框架/","2021/07/29/2.软件开发/2.嵌入式/2.linux/1.驱动/2.Linux驱动之字符设备驱动/","2020/05/01/2.软件开发/2.嵌入式/2.linux/2.应用/1.Linux下开发板通过串口和PC文件传输（lrzsz）/","2020/11/01/2.软件开发/2.嵌入式/2.linux/2.应用/2.Linux和Windows下网络测试工具的安装使用（iperf）/","2020/12/26/2.软件开发/2.嵌入式/2.linux/2.应用/3.Linux最好用的计时器看见就不要错过了/","2021/01/15/2.软件开发/2.嵌入式/2.linux/2.应用/4.电量显示还不会进来坐坐（MCP3421）/","2021/01/20/2.软件开发/2.嵌入式/2.linux/2.应用/5.你知道Linux文件读写速度最快跑多少？/","2021/01/23/2.软件开发/2.嵌入式/2.linux/2.应用/7.Linux关于TCP通讯协议的测试/","2021/01/23/2.软件开发/2.嵌入式/2.linux/2.应用/6.Linux下教你破解2G写文件大小限制/","2020/03/01/2.软件开发/7.项目/1.web项目/1.博客搭建/1.hexo+gitee(码云)搭建个人博客避开所有坑/","2020/02/20/2.软件开发/7.项目/1.web项目/1.博客搭建/2.hexo+sakura主题美化合集/","2020/03/19/2.软件开发/7.项目/1.web项目/1.博客搭建/3.hexo搭建博客之添加评论系统/","2020/03/28/2.软件开发/7.项目/1.web项目/1.博客搭建/4.hexo博客搭建之添加搜索功能/","2024/02/22/2.软件开发/7.项目/1.web项目/1.博客搭建/6.hexo+gitee免费打造个人网站导航/","2020/03/28/2.软件开发/7.项目/1.web项目/1.博客搭建/5.hexo搭建博客之hexo命令不起作用/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","recommend":true}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };