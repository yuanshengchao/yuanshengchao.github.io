$(document).ready(function() {
    var audio = document.getElementById('music1');
    $(".start").click(function() {
        $(this).hide();
        $(".end").show();
        audio.pause();
    });
    $(".end").click(function() {
        $(this).hide();
        $(".start").show();
        audio.play();
    });
    $('title').text("我选择了可爱的女王范，快来创造你的女神吧！");
    var bdBox = ["我选择了可爱的女王范，快来创造你的女神吧！", "我选择了可爱的绿茶妹，快来创造你的女神吧！", "我选择了可爱的女汉子，快来创造你的女神吧！", "我选择了可爱的小萝莉，快来创造你的女神吧！", "我选择了时尚的女王范，快来创造你的女神吧！", "我选择了时尚的绿茶妹，快来创造你的女神吧！", "我选择了时尚的女汉子，快来创造你的女神吧！", "我选择了时尚的小萝莉，快来创造你的女神吧！", "我选择了性感的女王范，快来创造你的女神吧！", "我选择了性感的绿茶妹，快来创造你的女神吧！", "我选择了性感的女汉子，快来创造你的女神吧！", "我选择了性感的小萝莉，快来创造你的女神吧！", "我选择了文艺的女王范，快来创造你的女神吧！", "我选择了文艺的绿茶妹，快来创造你的女神吧！", "我选择了文艺的女汉子，快来创造你的女神吧！", "我选择了文艺的小萝莉，快来创造你的女神吧！"];

    $(".friend").click(function(){
        if (typeof WeixinJSBridge == "undefined") {
            $(".weui-popup-overlay>img.sao").css("display","block");
        }else{
             $(".weui-popup-overlay>img.go").show();
        }
    });
    window._bd_share_config = {
        common: {
            // 标题
            bdText: bdBox[0],
            // 
            bdDesc: '女神当众换衣，不忍直视',
            // 分享页面的地址
            bdUrl: 'http://yuanshengchao.cn/award/index.html',
            // 分享的图片
            bdPic: 'http://yuanshengchao.cn/award/images/share.jpg',
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
});
