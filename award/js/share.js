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
    //判断微信
    // function is_weixn() {
    //         var ua = navigator.userAgent.toLowerCase();
    //         if (ua.match(/MicroMessenger/i) == "micromessenger") {
    //             return true;
    //         } else {
    //             return false;
    //         }
    //     }
    //     // 微信点击蒙版
    // $("a.wechat").click(function() {
    //     if(is_weixn()){
    //         var screenheight = $(window).height();
    //         var bodyheight = $("body").height();
    //         var lastheight = screenheight > bodyheight ? screenheight : bodyheight;
    //         $("div.shadowbox").height(lastheight);
    //         $("body").scrollTop(0);
    //         $("body,html").css("overflow","hidden");
    //         $('body').bind("touchmove",function(e){ e.preventDefault(); });
    //         $("div.shadowbox").show();
    //         return false;
    //     }
    // });
    // $("div.shadowbox").click(function() {
    //     $(this).hide();
    //     $("body,html").css("overflow","auto");
    //      $("body").unbind("touchmove");
    // });
});
