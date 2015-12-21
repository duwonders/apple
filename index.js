//设置字符串数组
var array = new Array("考神附体","学习进步","身体健康","工作顺利","笑口常开","肾6天降","爱情甜蜜","变成吃货","财源滚滚","红包拿来","家人幸福","好梦常圆","兄朋满地","万事大吉");
var post_array = new Array();
//设置遮罩层
var bw = $(".wrapper").width();
var bh = 1.5 * bw;
$("#fullbg").css({
	"height": bh,
	"width": bw
});
$(".background").css({
	"position": "relative",
	"height": bh,
	"width": bw
})
//开始游戏
$(".apple_1").css({
	"position": "absolute",
	"width": 0.06 * bw,
	"top": 0.005 * bh,
	"left": 0.4 * bw
});
$(".apple_2").css({
	"position": "absolute",
	"width": 0.07 * bw,
	"top": 0.1 * bh,
	"left": 0.25 * bw
});
$(".apple_3").css({
	"position": "absolute",
	"width": 0.07 * bw,
	"top": 0.12 * bh,
	"left": 0.56 * bw
});
$(".apple_4").css({
	"position": "absolute",
	"width": 0.08 * bw,
	"top": 0.18 * bh,
	"left": 0.4 * bw
});
$(".apple_5").css({
	"position": "absolute",
	"width": 0.07 * bw,
	"top": 0.3 * bh,
	"left": 0.11 * bw
});
$(".apple_6").css({
	"position": "absolute",
	"width": 0.08 * bw,
	"top": 0.37 * bh,
	"left": 0.4 * bw
});
$(".apple_7").css({
	"position": "absolute",
	"width": 0.08 * bw,
	"top": 0.28 * bh,
	"left": 0.65 * bw
});
$(".apple_8").css({
	"position": "absolute",
	"width": 0.08 * bw,
	"top": 0.45 * bh,
	"left": 0.1 * bw
});
$(".apple_9").css({
	"position": "absolute",
	"width": 0.07 * bw,
	"top": 0.45 * bh,
	"left": 0.7 * bw
});
$(".apple_10").css({
	"position": "absolute",
	"width": 0.1 * bw,
	"top": 0.49 * bh,
	"left": 0.58 * bw
});
$("#start_button").on("click",function(){
	$("#start").stop().fadeOut(200,function(){
	    $("#fullbg").animate({
	     height: 0
	    },400);
	})
});
$("#start p").css({
	"font-size": 0.03 * bw + "px",
	"top": 0.03 * bh,
	"right": 0.02 * bw
})
//苹果点击事件
var count = 0;
$(".apple").on("click",function(){
	//最多点击三个苹果
	if (count < 3) {
		$(this).animate({
			top: 0.9*bh
		},400).fadeOut();
		count += 1;
	}
	if(count == 3) {
		//游戏结束
		$("#fullbg").stop().animate({
	        height: bh,
	        width: bw
	    },400,function(){
	        $("#end").fadeIn(400);
	    });
		//显示分享内容
	    $("#share_content").css({
	    	"top": 0.25 * bh,
			"left": 0.2 * bw,
			"width": 0.6 * bw,
			"height": 0.3 * bh
		});
		$("#share_content h3").css({
			"font-size": 0.06 * bw + "px",
			"padding-bottom": 0.02 * bh,			
		});
		$("#share_content p").css({
			"font-size": 0.04 * bw + "px",
		});
		$("#share_content ul").css({
			"width": 0.6 * bw,
			"margin-top": 0.05 * bh
		})
		$("#share_content ul li").css({
			"display": "inline-block",
			"width": 0.15 * bw,
			"height": 0.19 * bw,
			"line-height": 0.19 * bw + "px",
			"padding": 0.01 * bh,
			"font-size": 0.03 * bw + "px",		
		})
		for (var i = 0; i < $("#share_content ul li").length; i++) {
			var random = Math.floor(Math.random()*(array.length - 1));
			$("#share_content ul li").eq(i).text(array[random]);
			post_array.push(array[random]);
			array.splice(random,1);
		};
		$("#slide_down").css({
			"width": 0.085 * bw,
			"height": 0.328 * bh,
			"top": 0.673 * bh,
			"left": 0.05 * bw,
			"background-color": "#97999a",
			"opacity": 0.8
		})
		shareTitle = "重邮圣诞福利:我刚获得了3个小苹果,来年一定:" + post_array[0] + ","　+　post_array[1] + "," + post_array[2];
	};
})

//分享到朋友圈
var imgUrl = "http://www.virgilzone.com/apple/img/background.png";
var lineLink = "http://www.virgilzone.com/apple/index.html";
var descContent = "重庆邮电大学红岩网校工作站-圣诞小苹果";
var shareTitle = "重邮圣诞福利：赶快来领小苹果吧！把它们送给最心爱的人。";
var appid = '';
        
function shareFriend() {
    WeixinJSBridge.invoke('sendAppMessage',{
        "appid": appid,
        "img_url": imgUrl,
        "img_width": "200",
        "img_height": "200",
        "link": lineLink,
        "desc": descContent,
        "title": shareTitle
    }, function(res) {
        
    })
}
function shareTimeline() {
    WeixinJSBridge.invoke('shareTimeline',{
        "img_url": imgUrl,
        "img_width": "200",
        "img_height": "200",
        "link": lineLink,
        "desc": descContent,
        "title": shareTitle
    }, function(res) {
           
    });
}
// 当微信内置浏览器完成内部初始化后会触发WeixinJSBridgeReady事件。
		document.addEventListener('WeixinJSBridgeReady', function onBridgeReady() {
		    // 发送给好友
		    WeixinJSBridge.on('menu:share:appmessage', function(argv){
		        shareFriend();
		    });
		    // 分享到朋友圈
		    WeixinJSBridge.on('menu:share:timeline', function(argv){	
		        shareTimeline();
		    });
		}, false);
