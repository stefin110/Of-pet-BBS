<?php
     session_start();
     if (isset($_SESSION['username']) && !empty($_SESSION['username'])) {
	 // $arr['username']=$_SESSION['username'];	
     echo "欢迎:".$_SESSION['username'];
     }else{
      echo '<script>location.href="'."index.html".'"</script>'; 	   
      //header("Location:http://www.baidu.com");
     } 
?>
