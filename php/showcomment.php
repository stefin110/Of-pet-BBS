<?php

$con = mysql_connect("localhost","root","root");
if (!$con)
  {
  die('Could not connect: ' .mysql_error());
  }else{
     mysql_select_db("wjg", $con);		
	 mysql_query('SET NAMES UTF8');
	 $_sql=mysql_query("select count(*) as count from comment");
	 $_result=mysql_fetch_array($_sql,MYSQL_ASSOC);	
	 $_pagesize=3;
	 $_page=1;	 
	 $_count=ceil($_result['count']/$_pagesize);
	 
	 if(!isset($_POST['page'])){
		 $_page=1;	 
	 }else{
		  $_page=$_POST['page'];
		 if($_page>$_count){
		  $_page=$_count;
		 }
		 
	 }
	 $_limit=($_page-1)*$_pagesize; 
	 
	 
     $query=mysql_query("select ({$_count}) as count,user,content,date from comment order by date desc limit {$_limit},{$_pagesize}");
	/*  for($i=0;$i<mysql_num_rows($query);$i++){
		 $result[$i]=mysql_fetch_assoc($query);
	 }
	 echo $result[$i];  */		 
	 $json='';
   	 while(!!$row = mysql_fetch_array($query,MYSQL_ASSOC)){
		 foreach($row as $key => $value){
			 $row[$key] = urlencode(str_replace("\n","",$value));
		 }
		 $json .=urldecode(json_encode($row)).',';	 
	 }
	 
	 echo '[' .substr($json,0,strlen($json)-1).']';
      
  }
   mysql_close($con);
?>
