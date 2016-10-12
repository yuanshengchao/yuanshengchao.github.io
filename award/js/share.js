$(document).ready(function() {
    $('title').text("10月22号天猫JanSport旗舰店party直播,等你哟！！！");
    window._bd_share_config = {
        common: {
            // 标题
            bdText: '10月22号天猫JanSport旗舰店party直播，关注jansport天猫旗舰店，赢取神秘大奖',
            // 
            bdDesc: '10月22号天猫JanSport旗舰店party直播,等你哟！！！',
            // 分享页面的地址
            bdUrl: 'http://yuanshengchao.cn/jansport/index.html',
            // 分享的图片
            bdPic: 'http://yuanshengchao.cn/jansport/images/jansportLogo.png',
            //配置分享来源
            /*bdSnsKey: {
                'tsina': '11',
                'qzone': '22',
                'weixin': '3154391214',
                'tieba': '3154391214'
            }*/
        },
        share: [{
            "bdSize": 16
        }],
        image: [{
            viewType: 'list',
            viewPos: 'top',
            viewColor: 'black',
            viewSize: '16',
            viewList: ['qzone', 'tsina', 'huaban', 'tqq', 'renren']
        }],
        selectShare: [{
            "bdselectMiniList": ['qzone', 'tqq', 'kaixin001', 'bdxc', 'tqf']
        }]
    }
    with(document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?cdnversion=' + ~(-new Date() / 36e5)];

    //判断微信
    function is_weixn() {
            var ua = navigator.userAgent.toLowerCase();
            if (ua.match(/MicroMessenger/i) == "micromessenger") {
                return true;
            } else {
                return false;
            }
        }
        // 微信点击蒙版
    $("a.wechat").click(function() {
        if(is_weixn){
            var screenheight = $(window).height();
            var bodyheight = $("body").height();
            var lastheight = screenheight > bodyheight ? screenheight : bodyheight;
            $("div.shadowbox").height(lastheight);
            $("body").scrollTop(0);
            $("body,html").css("overflow","hidden");
            $('body').bind("touchmove",function(e){ e.preventDefault(); });
            $("div.shadowbox").show();
            return false;
        }
    });
    $("div.shadowbox").click(function() {
        $(this).hide();
        $("body,html").css("overflow","auto");
         $("body").unbind("touchmove");
    });
});
