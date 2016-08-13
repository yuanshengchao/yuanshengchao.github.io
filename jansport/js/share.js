$(document).ready(function() {
    $('title').text("带着Jansport背包，来释放你的洪荒之力");
    window._bd_share_config = {
        common: {
            // 标题
            bdText: '带着Jansport背包，来释放你的洪荒之力，关注jansport天猫旗舰店，赢取神秘大奖',
            // 
            bdDesc: '关注jansport天猫旗舰店，截图发jansport微信公众号，赢取神秘红包，分享千元大奖，快来加入我们',
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

    // 居中
    var libox = $("#shareimages>div>li");
    var liWidth = 0;
    var screenWidth = $(window).width();
    var marginleftWdith = 0;
    liWidth += libox.width() + parseInt(libox.css("margin-right"));
    var footer = $(".footer");
    var footerWidth = footer.width();
    var footweMargin = (screenWidth - footerWidth) / 2;
    footer.css({
        "margin-left": footweMargin,
    })
    if (is_weixn()) {
        $("li.wapWeiXin").show();
        marginleftWdith = (screenWidth - liWidth * 3 + parseInt(libox.css("margin-right"))) / 2;
    } else {
        $("li.wapWeiXin").hide();
        marginleftWdith = (screenWidth - liWidth * 2 + parseInt(libox.css("margin-right"))) / 2;
    }
    libox.eq(0).css({
        "margin-left": marginleftWdith,
    });

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
    $("li.wapWeiXin").click(function() {
        var screenheight = $(window).height();
        var bodyheight = $("body").height();
        var lastheight = screenheight > bodyheight ? screenheight : bodyheight;
        $("div.shadowbox").height(lastheight);
         $("body").scrollTop(0);
        $("body").css("overflow","hidden");
        $("div.shadowbox").show();
    });
    $("div.shadowbox").click(function() {
        $(this).hide();
        $("body").css("overflow","auto");
    });
});
