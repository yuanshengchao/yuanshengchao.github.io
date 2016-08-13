$(function() {
    $("#id_start_ceshi").click(function() {
        $("#index").hide();
        $("#questionBox").show();
        $("#questionBox").children().eq(0).slideDown();
    });
    // 控制题目选择
    var start = 1;
    // 测试规则
    var rule=[{"num":"3,4,2"},{"num":"4,5,3"},{"num":"6,5,4"},{"num":"7,5,6"},{"num":"9,6,8"},{"num":"7,9,10"},{"num":"B,8,10"},{"num":"9,C,E"},{"num":"10,A,B"},{"num":"B,E,D"}];
     // 设置一个测试函数
       var boxAnswer=new Array();
      $.each(rule,function(index,arr){
      	boxAnswer[index]=arr["num"].split(",");
      	boxAnswer[index]=boxAnswer[index];
      })
    var ind=0;
    var isChoose=1;
    var $result=$("#result>article");
    $("#questionBox>article>div>p").click(function(event) {
        var name = $(this).children("input").attr("name");
        var $radio = $('input[name=' + name + ']');
        ind=$(this).parent().parent().index();
        $radio.prop("checked", false);
        $(this).children("input").prop("checked", true);
        var tog = $(this).parent().parent();
        isChoose = $(this).children("input").val();
        // 规则判断
        // alert(boxAnswer[ind][isChoose-1]);
        switch(boxAnswer[ind][isChoose-1]){
        	case "A":
        	case "B":
        	case "C":
        	case "D":
        	case "E":$("a.btn").eq(1).css("display","inline-block");break;
        	default: tog.hide();tog.siblings().eq(boxAnswer[ind][isChoose-1]-2).show();
        }
    });
    $("#questionBox>article>div>p").hover(function() {
            $(this).addClass("add" + $(this).index());
        }, function() {
            $(this).removeClass("add" + $(this).index());
        })
      // 查看结果
      $("#showResult").click(function(){
        $("body").scrollTop(0);
        $("body").css("overflow","hidden");
      	$(".sub").show();
      	var time=setTimeout(function(){
      		$(".sub").fadeOut();
          $("body").css("overflow","auto");
      		$("#questionBox").hide();
	      	switch(boxAnswer[ind][isChoose-1]){
	        	case "A":$result.eq(0).slideDown();$(".shareNew").show();break;
	        	case "B":$result.eq(1).slideDown();$(".shareNew").show();break;
	        	case "C":$result.eq(2).slideDown();$(".shareNew").show();break;
	        	case "D":$result.eq(3).slideDown();$(".shareNew").show();break;
	        	case "E":$result.eq(4).slideDown();$(".shareNew").show();break;
	        }
      	},2500);
      	clearTimeOut(time);
      });
    // function test(isChoose,tog) {
    //     tog.hide();
    //     tog.siblings().eq(isChoose).show();
    //     break;
    // }
});
