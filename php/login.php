<?php
session_start();
//header("Content-type: text/html; charset=utf-8");
$con = mysql_connect("localhost","root","root");
if (!$con)
  {
  die('Could not connect: ' . mysql_error());
  }else{
     mysql_select_db("wjg", $con);		
	 $username = trim($_POST['username']);
     $password = trim($_POST['password']); //md5加密未解决
	 mysql_query('SET NAMES UTF8');
     $result=mysql_query("select * from user where username='$username' and password='$password'");
	 $row=mysql_fetch_array($result); 
      if($row){   
             $_SESSION['username']=$row['username'];	  
			 echo $_SESSION['username'];
			 //json方法
            /*  $json_arr=array('username'=>$username, 'password'=>$password,'success'=>1);
	     	 $json_obj = json_encode($json_arr);
	    	 echo $json_obj; */    		 
	     }else{
			/*  $json_arr1=array('success'=>0);
			 $json_obj1 = json_encode($json_arr1);
		     echo $json_obj1; */ 
			 return false;
	 } 
  }
   mysql_close($con);
?>