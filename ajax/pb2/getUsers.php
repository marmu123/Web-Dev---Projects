<?php
    include_once 'connect.php';
    $from=$_GET['ind'];
	$query=mysqli_query($conn,"SELECT * FROM Users LIMIT " . $from . ",3;");
    echo "<table border = \"1\">";
    echo  "<tr>";
    echo    "<th>nume</th>";
    echo    "<th>prenume</th>";
    echo    "<th>telefon</th>";
    echo    "<th>email</th>";
    echo   "</tr>";
    for ($i = 1; $i <= 3; $i++) {
        $row=mysqli_fetch_assoc($query);
        if($row){
            echo '<tr>';
            echo '<td>' . $row['nume'] . '</td>';
            echo '<td>' . $row['prenume'] . '</td>';
            echo '<td>' . $row['telefon'] . '</td>';
            echo '<td>' . $row['email'] . '</td>';
            echo '</tr>';
        }
}
	echo "</table>";
	
	
	

?>