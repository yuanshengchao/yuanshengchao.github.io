$(function(){$("#id_start_ceshi").click(function(){$("#index").hide(),$("#questionBox").show(),$("#questionBox").children().eq(0).slideDown()});var e=[{num:"3,4,2"},{num:"4,5,3"},{num:"6,5,4"},{num:"7,5,6"},{num:"9,6,8"},{num:"7,9,10"},{num:"B,8,10"},{num:"9,C,E"},{num:"10,A,B"},{num:"B,E,D"}],i=new Array;$.each(e,function(e,n){i[e]=n.num.split(","),i[e]=i[e]});var n=0,s=1,o=$("#result>article");$("#questionBox>article>div>p").click(function(){var e=$(this).children("input").attr("name"),o=$("input[name="+e+"]");n=$(this).parent().parent().index(),o.prop("checked",!1),$(this).children("input").prop("checked",!0);var t=$(this).parent().parent();switch(s=$(this).children("input").val(),i[n][s-1]){case"A":case"B":case"C":case"D":case"E":$("a.btn").eq(1).css("display","inline-block");break;default:t.hide(),t.siblings().eq(i[n][s-1]-2).show()}}),$("#questionBox>article>div>p").hover(function(){$(this).addClass("add"+$(this).index())},function(){$(this).removeClass("add"+$(this).index())}),$("#showResult").click(function(){$("body").scrollTop(0),$("body,html").css("overflow","hidden"),$("body").bind("touchmove",function(e){e.preventDefault()});var e=$(window).height(),t=$("body").height(),a=e>t?e:t;$(".sub").height(a),$(".sub").show();setTimeout(function(){switch($(".sub").fadeOut(),$("body,html").css("overflow","auto"),$("body").unbind("touchmove"),$("#questionBox").hide(),i[n][s-1]){case"A":o.eq(0).slideDown(),$(".shareNew").show();break;case"B":o.eq(1).slideDown(),$(".shareNew").show();break;case"C":o.eq(2).slideDown(),$(".shareNew").show();break;case"D":o.eq(3).slideDown(),$(".shareNew").show();break;case"E":o.eq(4).slideDown(),$(".shareNew").show()}},2500)})});