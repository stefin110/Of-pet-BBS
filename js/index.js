$(function(){
     $("#register_form,#login_form")[0].reset();  /* 页面刷新时同时清空注册表单数据 */
	
	/*  if("placeholder" in input){  // 判断浏览器是否支持 placeholder
		alert('支持');
	 }else{
		alert('不支持');
	 }  */   
	 
	/*  
	 $("#password).focus(function(){
		 $('#password').val('');
	 }),blur(function(){
		 $('#password').val('请输入密码');
	 })
	  */
	 
 /* 判断是否支持placehoder属性 IE不支持 */
     
	 if(!placeholderSupport()){ 
	 $("input[type=text]").each(function(){
		 $('[placeholder]').focus(function() {
        var input = $(this);
        if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
        }
     }).blur(function() {
        var input = $(this);
        if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
        }
    }).blur();
	 
	 });
	 
     $("input[type=password]").each(function(index){
		 var pwdVal=$(this).attr('placeholder');
		 var pwdField = $(this);
	  	 $(this).after('<input id="passw'+index+'" type="text" value='+pwdVal+' autocomplete="off"/>');
		 var passw=$('#passw'+index+'');			 
		 $(this).hide();
		 passw.show();
		 passw.addClass('placeholder'); 	
		 passw.focus(function(){  			
             passw.hide();  
             pwdField.show();  
             pwdField.focus();   			
         });
			
		 pwdField.blur(function(){
			 if(pwdField.val() == '' || pwdField.val() == pwdField.attr('placeholder')){  /* 加上这句pwdField.val() == pwdField.attr('placeholder')) 使得密码框blur时文字显示正确 ？？？*/
                 passw.show();  
                 pwdField.hide();  
                 }  
		 }); 								  
		  })

		 	 
};

function placeholderSupport() {
    return 'placeholder' in document.createElement('input');
}
	 
	 
	 
 
	 /* 显示登录框 */
	 $(".login").click(function(){
		 $(".reg").removeClass("logstyle light");
		 $(this).addClass("logstyle light");				   
		 $("#login_form").show();
		 $("#register_form").hide(); 
	 })
	 
	/*  显示注册框 */
	 $(".reg").click(function(){
		  $(".login").removeClass("logstyle light");
		 $(this).addClass("logstyle light");
         $("#register_form").show(); 		 
		 $("#login_form").hide();		
	 })
	 
	 /* 登录表单验证 */
	 $("#submit").click(function(){
		 var username = $("#username").val(); 
         var password =  $("#password").val();   
	     if(username =="" || username == null || username ==$("#username").attr('placeholder')){
             $("#log_error").html("*用户名不能为空！"); 
             $("#username").focus();
             return false;
         } 
	     if(password =="" ||password ==null || password ==$("#password").attr('placeholder')){
             $("#log_error").html("*密码不能为空！"); 
			 $("#passw0").focus();
             return false;
         } 	
         //7天内自动登录
         if($("#check").attr("checked")==true){
			 $.cookie("username",username,{expires:7/* ,path:"/" */});
			 $.cookie("password",password,{expires:7/* ,path:"/" */});	 
	     } else{
			 $.cookie("username","" /* ,{expires:-1,path:"/"} */ );
			 $.cookie("password","");
		 }	  
		 
		 
		 
		 var cont=$("#login_form").serialize();
		 $.ajax({
		      type:'POST',
		      //dataType:'json',
		      url:'./php/login.php',
			  contentType:'application/x-www-form-urlencoded',
			  //'text/json; charset=utf-8',
		      data:cont,
              /* {'username':username,'password':password}, */			  
			  success:function(data){
				 //json方法
				/* if(data.success==1){
					  var url="main.html?username="+data.username;
					  //var encodeUrl=escape(url);                			 
					  location.href=url;			  
			      }else {					  
					  $("#log_error").html("*用户名或密码错误！");
				  } */
				 if(data){				  
					 parent.location.href="main.html";
					  //或window.open
				 }else{
					 $("#log_error").html("*用户名或密码错误！");
				 }
		     }
	     });			
	 });
	        //回车方法
		$("body").keydown(function(){
			if(event.keyCode== "13")
			{
				$("#submit").click();
			}
			
		})
	 
	 
	  $("#username,#password").keyup(function(){
	  $("#log_error").html("");
       });
	  
	  /* 注册表单验证及注册 */	  
	    
     $('form[name=register_form]:input').blur(function(){
		    // var username = $("#username").val();            
	        // var uRPass = $("#uRPass").val();
		   //1.验证用户名
		 if($(this).is('#reg_username')){
			 if(!(/^[0-9a-zA-Z_]{3,15}$/).test($(this).val()))		  
		        {	
				     $("#reg_error").html("*用户名为3-15位数字或字母!");
				     return false;
				 }else{
					 $("#reg_error").html("");
				   //需要判断服务器端是否存在该用户！			  
				     return false;
				 } 
		 }
		 
		 //2.验证密码		 
		 if($(this).is('#reg_password')){
    	     if(!(/^(?!\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z]{6,15}$/).test($(this).val()))	
                 {				  	
		          $("#reg_error").html("*密码为6-15位数字字母组合!");				 
				 return false;
		         }else{
				  $("#reg_error").html("");				   		  
				  return false;				 
		         } 
   	      }
		 
	     //3.验证密码是否重复
		 var pass= $("#reg_password").val(); 
	         if($(this).is('#reg_repass')){
		         if (pass != this.value && pass !=$("#reg_password").attr('placeholder')) {
                 $("#reg_error").html("*两次密码输入不一致!");
				   $("#passw2").focus();
				 //$("#password").focus();
				 return false;
		         }else{ 
		          $("#reg_error").html("");				   		  
				  return false;	   
		         } 
		     }
	 	 });
		 
		  
        $("#register").click(function(){
		     var user = $("#reg_username").val(); 
             var pass = $("#reg_password").val();   
			 var repass = $("#reg_repass").val();
	     if(user =="" || user == null || !(/^[0-9a-zA-Z_]{3,15}$/).test(user)){
             $("#reg_error").html("*用户名为3-15位数字或字母!"); 
            $("#reg_username").focus();
             return false;
         } 
	     if(pass =="" ||pass ==null || !(/^(?!\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z]{6,15}$/).test(pass)){
             $("#reg_error").html("*密码为6-15位数字字母组合!"); 
		     $("#passw1").focus(); 
             return false;
         } 	
		 
		 if(repass =="" ||repass ==null || repass!=pass){
             $("#reg_error").html("*两次密码输入不一致!"); 
		      $("#passw2").focus(); 
             return false;
         } 	
		  
		  var cont1=$("#register_form").serialize();
		 $.ajax({
		      type:'POST',
		      //dataType:'json',
		      url:'php/register.php',
			  contentType:'application/x-www-form-urlencoded',
			  //'text/json; charset=utf-8',
		      data:cont1,
              /* {'username':username,'password':password}, */			  
			  success:function(data){
				 //json方法
				/* if(data.success==1){
					  var url="main.html?username="+data.username;
					  //var encodeUrl=escape(url);                			 
					  location.href=url;			  
			      }else {					  
					  $("#log_error").html("*用户名或密码错误！");
				  } */
				  if(data){				  
					  parent.location.href="main.html";
					  //或window.open
				  }else{
					 $("#reg_error").html("*用户名已存在！");
				  }
		     }
	      })		
		});
	
	  
	
})
