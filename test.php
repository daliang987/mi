<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="X-UA-Compatible" content="ie=edge">
<title>index</title>
</head>
<body>
<h3>日期表格</h3>
<hr>
<?php
$arr=array(1,2,3);
foreach($arr as $key=>$val){
$val=&$arr[$key]; 
}

print_r($arr);
$url="http://www.abc.com:8081/wcm/app/login.jsp?username=admin&password=123456";
$arr2=parse_url($url);
echo "<pre>";
print_r($arr2);
echo "</pre>";

$str_pre="php 5 and 666";
preg_match_all("/^PHp/i",$str_pre,$arr_pre);
echo "<pre>";
print_r($arr_pre);
echo "</pre>";
echo mt_rand(0,3);

$year=isset($_GET['year'])?$_GET['year']:date("Y");
$month=isset($_GET['month'])?$_GET['month']:date("m");
$first_daty=strtotime("{$year}-{$month}-1",time());
$days=date("t",$first_daty);
$week=date("w",$first_daty);

echo "<h1>".date('w',strtotime('2017-12-10',time()))."</h1>";
$nextyear=$month==12?$year+1:$year;
$nextmonth=$month==12?1:$month+1;

$preyear=$month==1?$year-1:$year;
$premonth=$month==1?12:$month-1
?>
<h2>万年历</h2>
<h3><?php echo $year?>年<?php echo $month?>月</h3>
<hr>
<table border="1" cellspacing="0" width="500px">
<tr>
    <th>周日</th>
    <th>周一</th>
    <th>周二</th>
    <th>周三</th>
    <th>周四</th>
    <th>周五</th>
    <th>周六</th>
</tr>
<?php
    $rows=(($days+$week)%7!=0)?ceil($days+$week)/7:(($days+$week)/7);
    for($i=0;$i<$rows;$i++){
        echo '<tr>';
        for($j=1;$j<=7;$j++){
            $day=((7*$i)+$j);
            
            if($i==0){
                if($day-$week>0)
                    echo "<td>".($day-$week)."</td>"; 
                else
                    echo "<td>&nbsp;</td>"; 
            }
            else{
                if($day-$week>$days)
                    echo "<td>&nbsp;</td>";
                else
                {
                    if(date('d')==($day-$week)){
                        echo "<td style='background:#aaf'>".($day-$week)."</td>"; 
                    }
                    else{
                        echo "<td>".($day-$week)."</td>"; 
                    }
                }
                    
            }


        }
        echo '</tr>';
    }
    // for($i=1-$week;$i<$days;){
    //     echo "<tr>";
    //         for($j=0;$j<7;$j++,$i++){
    //             if($i>$days || $i<1){
    //                 echo "<td>&nbsp;</td>";
    //             }
    //             else{
    //                 echo "<td>".$i."</td>"; 
    //             }
    //         }
    //     echo "</tr>";
    // }

?>
</table>
<hr>
<a href="test.php?year=<?php echo $preyear?>&month=<?php echo $premonth?>">上一月</a> |
<a href="test.php?year=<?php echo $nextyear?>&month=<?php echo $nextmonth?>">下一月</a> 
</body>
</html>
