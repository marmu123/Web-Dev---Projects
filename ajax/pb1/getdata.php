<?php
    include_once 'connect.php';
	$query=mysqli_query($conn,"SELECT * FROM rute;");
    echo '<select id="stanga" multiple=10 style="float:left;">';
    while($row=mysqli_fetch_assoc($query)){
		

            echo "<option>" . $row['Plecare']  . "</option>";

                
    }
	echo "</select>";
	
	
	

?>