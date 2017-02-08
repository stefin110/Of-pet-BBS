$(function(){
	 
	  $.post("./php/main.php",function(msg){	
         $("#logonuser").prepend(msg);
		  //parent.location.href="login.html";			  
	  });	
	  
	  $("#logout").click(function(){
         $.post("./php/logout.php",function(){
		 //alert("test");
		 location.href="index.html";		 
	     })		
	  }) 
	  /* 时钟 */
       setInterval(function(){
		  var now=new Date();
		  var h=now.getHours();
		  var m=now.getMinutes();
		  var s=now.getSeconds();
		  var time=(h<10 ? "0"+h:h)+":"+(m<10 ? "0"+m:m)+":"+(s<10 ? "0"+s:s);
          $('#clock').html(time);		  		   
	   },1000);
      /* 内容一：点击左右滑动 */   
 	 var page=1;
	 $(".next").click(function(){
		 var v_wrap = $(this).parents(".scroll");
		 var v_show = v_wrap.find(".scroll_list");
		 var v_cont = v_wrap.find(".box");
		 var v_width = v_cont.width();
		 var len = v_show.find("li").length;
		 var page_count = len;
			 if(page == page_count){
				 v_show.animate({left:'0px'},"slow");
				 page =1;
		     }else{
				 v_show.animate({left:'-='+v_width},"slow");
				 page++;								 
			 }		
                                     /*  +return false防止点击完按钮后页面回到顶部 或a标签href="javascript:void(0)"*/			 
	 });
	   
	 $(".prev").click(function(){
	     var v_wrap = $(this).parents(".scroll");
		 var v_show = v_wrap.find(".scroll_list");
		 var v_cont = v_wrap.find(".box");
		 var v_width = v_cont.width();
    	 var len = v_show.find("li").length;
		 var page_count = len;
		 if(!v_show.is(":animated")){
			 if(page == 1){
				 v_show.animate({left:'-='+ v_width*(page_count-1)},"slow"); /* animate里面的数值属性不需要加单位 */
				 page =page_count;
		     }else{
				 v_show.animate({left:'+='+ v_width},"slow");
				 page--;								 
			 }			 			 
		 }
		 
	 
	 });
	 
	 
	 /* 选定导航的颜色变化 */
	 $("ul.navigation li a").click(function(){
		 $(this).addClass("bgcolor").parent().siblings().find("a").removeClass('bgcolor'); /* 必须精确到a标签 */
		 /* $(this).siblings('li').removeClass('bgcolor');
         $(this).addClass('bgcolor');  */		 
       });


     $("#backtotop").hide();
    $(window).scroll(function(){
		 if($(window).scrollTop()>100){			
			 $("#backtotop").fadeIn(1500);
		 }else{
			 $("#backtotop").fadeOut(1500);
		 }
	 });
  
     $("#backtotop").click(function(){
		 $('body,html').animate({
			 scrollTop:0			 
		 },1000);
		 $(".aboutme").addClass("bgcolor").parent().siblings().find("a").removeClass('bgcolor'); //回到顶部导航颜色变化
		 return false;	 
 	 });  
	 
	 
     /* 第二个页面鼠标悬停效果 */
	 $(".f1").mouseover(function(){
		 $(".f2").css("color","#69c");	 
		 $(".intro1").show();
	 }).mouseout(function(){
		 $(".f2").css("color","#666");
		 $(".intro1").hide();
	 
	 });
	 
	 	 $(".f4").mouseover(function(){
		 $(".f3").css("color","#69c");	 
		 $(".intro2").show();
	 }).mouseout(function(){
		 $(".f3").css("color","#666");
		 $(".intro2").hide();
	 
	 });
	
	 
	  /* 第三个页面鼠标悬停效果 */
	 $('.zzc div').hover(function(){
		$('.introduce1',this).stop().animate({
			height:'130px'
		});
	},function(){
		$('.introduce1',this).stop().animate({
			height:'0'
		});
	});
	  
	  
	 			 
	


//wrapper3点击图片放大效果（未通）
/*  $(".showphotos ul li").each(function(index){
	
		 if(index<3){			 
			$(this).mouseenter(function(){				
             var ofleft=index*198+8+'px';
			 $(".shade").show();
		     $(".shade").css({"left":ofleft,"top":'28px'});	
 			 var ofleft=null;
		     });   .mouseout(function(){  //mouseout时遮罩层闪烁，因为冒泡
		     $(".shade").hide();   
			 }); 				 
		 }else if(index>2){
			 $(this).mouseover(function(){				 
			 var offleft=(index-3)*198+8+'px';			  
			 $(".shade").show();
			 $(".shade").css({"left":offleft ,"top":"215px"});
             }); 
			 }					 			  	
	}) 
			
/* 
	 
	 $(".shade").click(function(){		 
		 $(".mask").show();

	 }) 
	 
	 $(".mask").click(function(){		 
		 $(".mask").hide();

	 })  */
	

	
     //wrapper3点击图片放大效果
	$(".mark").imgbox({
		'speedIn'		: 0,
		'speedOut'		: 0,
		'alignment'		: 'center',
		'overlayShow'	: true,
		'allowMultiple'	: false
	}); 
	 
	
	$('.showphotos ul li').hover(function(){
		$('.mark',this).fadeIn();
	},function(){
		$('.mark',this).fadeOut();
	});
 
 
 
         /* wrapper2导航效果 */
	     $(".templatevalue").val("0");
	     $(".kj-nav ul li").each(function(index){
		 var ofleft=index*147+25+'px';
		 $(this).hover(function(){
			 $('.move-bg').show();
			 $('.move-bg').animate({
				 left:ofleft				 
			 });			 
		 },function(){	
            var clickvalue=$(".templatevalue").val(); 
			var ofleft1=clickvalue*147+25+'px';	
			 $('.move-bg').animate({
				 left:ofleft1				 
			 });		    
		  }); 

		  $(this).click(function(){			 
			 var indexx=index;
			 $(".templatevalue").val(indexx);
             $(this).children("a").addClass("default").parent().siblings().find("a").removeClass('default');			 ;
              var wid=index*-543+6+'px';
			 $('.kj-content').animate({
				 left:wid			 
			 }); 
			 
			 });
					 
			 }); 
			 
			 
			 
			 
			/*  wrapper2内容一左侧新闻列表 */
			$(".tablist span").each(function(index){
		
		 $(this).hover(function(){
			 $(this).addClass("select").siblings("span").removeClass("select");
			 $(".tabcont1").eq(index).show().siblings("div .tabcont1").hide();	 
		 },function(){	
           	  
		  }); 
			 }); 
			 
			 
			 
		/*  wrapper2内容三小图片hover效果 */	 
		$(".gimge .smalldog img").each(function(index){
		 $(this).hover(function(){
			 $(this).removeClass("tee").addClass("smalldoghover");			
			 $(this).parents(".dogli").find(".dogshow1 a img").attr("src",$(this).attr('src'));
		 },function(){	
           	   $(this).addClass("tee").removeClass("smalldoghover");
		  }); 
			 }); 
			 	 
			 
			 
			 
			 
			 
			 
			 
	 
	/*  foot */
	jQuery.fn.backgroundPosition = function() {
		var bgPosition = $(this).css('background-position');
		if(typeof(bgPosition) == 'undefined') {
            return $(this).css('background-positionX') + ' ' + $(this).css('background-positionY');
        }else{
             return bgPosition;
             }	
	 };		
	
	$("#footer .footcontent span").each(function(index){
		  $(this).hover(function(){
			 var x=$(this).children("a").find("i").backgroundPosition().split(" ")[0]; 
			/*  var y=$(this).children("a").find("i").backgroundPosition().split(" ")[1];		 */
			 bgposition=parseInt(x)+'px'+' '+1+'px';
			
			 $(this).children("a").find("i").css("backgroundPosition",bgposition);
             $(this).children("a").find("em").css('color',"#ff7200");			 
			
		 },function(){
         var x=$(this).children("a").find("i").backgroundPosition().split(" ")[0]; 	
         bgposition1=parseInt(x)+'px'+' '+-19+'px';		 
 
		 $(this).children("a").find("i").css("backgroundPosition",bgposition1); 
           	 $(this).children("a").find("em").css('color',"#868688");
		  }); 
			 });
			
	 function blink(selector){
		 $(selector).fadeOut('fast',function(){
			 $(this).fadeIn('fast',function(){
				 blink(this);				 
			 });			 
		 });	 
	 }		
	  blink('.fcolor');
	
	
		show_time()

	
	
	
	
	//评论添加及实时显示
	 $("#comm_user").val($.cookie("username"));
	 $("#addbutton").click(function(){   
             var cont3=$("#add_comm").serialize();		
             if($('.comment_list').find('textarea').val()==" "){
        	     alert("请输入评论！");
             }else{
				 $(this).attr({"disabled":"disabled"});
				 $.ajax({
				 url:'php/addcomment.php',
				 type:'POST',
				 data:cont3,
				 /* beforeSend:function(jqXHR,settings){
				 alert();
				 // $("#addbutton").attr({"disabled":"disabled"});
				 } */
				 success:function(data){
				 //提交评论自动显示
				 var date=new Date();
         		 if(data){					
                 alert("发表评论成功！");					
			     //window.location.reload();
				 $(".comcontent").prepend('<dl class="comment_content"><dt>'+$.cookie("username")+'</dt><dd>'+$('.comment_list').find('textarea').val()+'</dd><dd>'+date.getFullYear()+'-'+((date.getMonth()+1)>=10?(date.getMonth()+1):('0'+(date.getMonth()+1)))+'-'+(date.getDate()>=10?date.getDate():('0'+date.getDate()))+' '+(date.getHours()>=10?date.getHours():('0'+date.getHours()))+':'+(date.getMinutes()>=10?date.getMinutes():('0'+date.getMinutes()))+':'+(date.getSeconds()>=10?date.getSeconds():('0'+date.getSeconds()))+'</dd></dl>');
         		 $("#addbutton").removeAttr("disabled");
			     $("#add_comm")[0].reset();
				}
         	   }
             });	
			 
			//显示条数
			 $.ajax({          
             url:'php/showcomment.php',
         	 type:'POST',
         	 success:function(response,status){				
			     var json_comment = JSON.parse(response);
                 var count=json_comment[0].count;               			 
			    //根据总页数判断，如果小于5页，则显示所有页数，如果大于5页，则显示5页。根据当前点击的页数生成
				 var pageCount =count;//模拟后台总页数
			     //生成分页按钮
			     if(pageCount>5){
				     page_icon(1,5,0);
			     }else{
				     page_icon(1,pageCount,0);
			     }
		     }		
			 });									
		}
        	
	 });
	 
	 
	 //加载页面显示评论以及点击分页按钮实现分页功能
	     $.ajax({          
             url:'php/showcomment.php',
         	 type:'POST',
         	 success:function(response,status){				
			     var json_comment = JSON.parse(response);				 							 
			     $.each(json_comment,function(index,value){                   					 
				     $(".comcontent").append('<dl class="comment_content"><dt>'+value.user+'</dt><dd>'+value.content+'</dd><dd>'+value.date+'</dd></dl>'); 				  			  		
			     });  
				 				 
				 var pageCount =json_comment[0].count;//模拟后台总页数
			     //生成分页按钮
			     if(pageCount>5){
				     page_icon(1,5,0);
			     }else{
				     page_icon(1,pageCount,0);
			     }
				 				 
			 //点击分页按钮触发
			 $("#pageGro li").live("click",function(){			
                     $(".comcontent").empty();
	                 var pageNum = parseInt($(this).html());
					 if(pageNum>=pageCount){
						 pageNum=pageCount;							 
					 }					
				 if(pageCount > 5){					 					 
					 //获取当前页数							 
					 pageGroup(pageNum,pageCount);					 
					  $.ajax({          
                         url:'php/showcomment.php',
         	             type:'POST',
						 data:{
							 page:pageNum
						 },
         	             success:function(response,status){				
			                 var json_comment_more = JSON.parse(response);		  
			                 $.each(json_comment_more,function(index,value){			         			 
				             $(".comcontent").append('<dl class="comment_content"><dt>'+value.user+'</dt><dd>'+value.content+'</dd><dd>'+value.date+'</dd></dl>'); 				  
						     });
						 }	
                         						 
						 });
																		
				 }else{
					 $(this).addClass("on");
					 $(this).siblings("li").removeClass("on");
					  $.ajax({          
                         url:'php/showcomment.php',
         	             type:'POST',
						 data:{
							 page:pageNum
						 },
         	             success:function(response,status){				
			                 var json_comment_more = JSON.parse(response);		  
			                 $.each(json_comment_more,function(index,value){			         			 
				             $(".comcontent").append('<dl class="comment_content"><dt>'+value.user+'</dt><dd>'+value.content+'</dd><dd>'+value.date+'</dd></dl>'); 				  
						     });
						 }						 
						 });
				 }
			 });
				
//sucess结尾				
    		 }	

						  
			 });//ajax结尾	
			
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
});  



 function show_time(){
		 var time_start=new Date().getTime();
		 var time_end = new Date("2017/03/03 00:00:00").getTime();
		 var time_distance = time_end-time_start;
		 var int_day =Math.floor(time_distance/86400000)
		 time_distance-=int_day*86400000;
		 //时
		 var int_hour = Math.floor(time_distance/3600000) 
	 	 time_distance -= int_hour * 3600000; 
		 // 分
		 var int_minute = Math.floor(time_distance/60000) 
		 time_distance -= int_minute * 60000; 
		 // 秒 
		 var int_second = Math.floor(time_distance/1000) 
		 if(int_day<10){
			 int_day="0"+int_day;
		 } 		 
		 if(int_hour<10){
			 int_hour="0"+int_hour;
		 }
		 if(int_minute<10){
			 int_minute="0"+int_minute;
		 }
		 if(int_second<10){
			 int_second="0"+int_second;
		 }
		 $(".contenttime #time_d").val(int_day);
		 $(".contenttime #time_h").val(int_hour);
		 $(".contenttime #time_m").val(int_minute);
		 $(".contenttime #time_s").val(int_second);
		 setTimeout("show_time()",1000);
		  
	 }
		
		
window.onload=function(){
	var speed=30;
		 var tab=document.getElementById("matchcon2");
		 var tab1=document.getElementById("scrolllist2");
		 var tab2=document.getElementById("scrolllist3");
		 tab2.innerHTML = tab1.innerHTML;		
		 function Marquee(){
			 if(tab2.offsetWidth-tab.scrollLeft<=0)
				 tab.scrollLeft-=tab1.offsetWidth;			 
			 else{
				 tab.scrollLeft++;				
			 }
			
			
		 }
		 var MyMar=setInterval(Marquee,speed);
		 tab.onmouseover=function(){clearInterval(MyMar)};
		 tab.onmouseout=function(){MyMar=setInterval(Marquee,speed)};
	
}
		
		   //点击跳转页面6,6
function pageGroup(pageNum,pageCount){
	 switch(pageNum){
		 case 1:
			 page_icon(1,5,0);
		 break;
		 case 2:
			 page_icon(1,5,1);
		 break;
		 case pageCount-1: page_icon(pageCount-4,pageCount,3);
		 break;
		 case pageCount:page_icon(pageCount-4,pageCount,4);
		 break;
		 default:page_icon(pageNum-2,pageNum+2,2);
		 break;
	 }
}

//根据当前选中页生成页面点击按钮4,8,2
function page_icon(page,count,eq){
	 var ul_html = "";
	 for(var i=page; i<=count; i++){
		 ul_html += "<li>"+i+"</li>";
	 }
	 $("#pageGro ul").html(ul_html);
	 $("#pageGro ul li").eq(eq).addClass("on");
}

//上一页6.11
function pageUp(pageNum,pageCount){
	 switch(pageNum){
		 case 1:
		 break;
		 case 2:
			 page_icon(1,5,0);
		 break;
		 case pageCount-1:
			 page_icon(pageCount-4,pageCount,2);
		 break;
		 case pageCount:
			 page_icon(pageCount-4,pageCount,3);
		 break;
		 default:
			 page_icon(pageNum-2,pageNum+2,1);
		 break;
	}
}

//下一页
function pageDown(pageNum,pageCount){
	 switch(pageNum){
		 case 1:
			 page_icon(1,5,1);
		 break;
		 case 2:
			 page_icon(1,5,2);
		 break;
		 case pageCount-1:
			 page_icon(pageCount-4,pageCount,4);
		 break;
		 case pageCount:
		 break;
		 default:
			 page_icon(pageNum-2,pageNum+2,3);
		 break;
	}
}
	 
	
		
	   
	