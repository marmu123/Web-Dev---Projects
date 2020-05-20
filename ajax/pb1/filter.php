<?php
	include_once 'connect.php';
	$stat = $_GET['statie'];
	$query=mysqli_query($conn,"SELECT Sosire FROM rute WHERE Plecare='" . $stat . "';");
    echo '<select id="dreapta" multiple=10 style="float:right;">';
	
    while($row=mysqli_fetch_assoc($query)){
           
            echo "<option>" . $row['Sosire']  . "</option>";
                
    }
	echo "
	</select>";
	
	
	
?>