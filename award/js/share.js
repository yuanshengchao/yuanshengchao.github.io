$(document).ready(function() {
    $(".music").click(function() {
        $(this).hide();
        $(this).siblings().show();
        var audio = document.getElementById('music1');
        if (audio !== null) {
            if (audio.paused) {
                audio.play(); 
            } else {
                audio.pause(); 
            }
        }
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
