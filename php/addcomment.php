<?php
//session_start();
//header("Content-type: text/html; charset=utf-8");
$con = mysql_connect("localhost","root","root");
if (!$con)
  {
  die('Could not connect: ' .mysql_error());
  }else{
     mysql_select_db("wjg", $con);		
	 $user = trim($_POST['comm_user']);
     $comm= trim($_POST['addcomm']); //md5¼ÓÃÜÎ´½â¾ö
	 mysql_query('SET NAMES UTF8');
     $result1=mysql_query("insert into comment(content,user,date)values('$comm', '$user',now())");
	 echo mysql_affected_rows();
      
  }
   mysql_close($con);
?>