<?php
    include_once 'connect.php';

    $query=mysqli_query($conn,"SELECT * FROM files;");
    $value=$_GET['genreinput'];
    echo "
    <table border = \"1\">
    <tr>
    <th>id</th>
    <th>title</th>
    <th>format_type</th>
    <th>genre</th>
    <th>path</th>
    </tr>";
    while($row=mysqli_fetch_array($query)){
        if($row['genre'] == $value)
        {
            echo "<tr>";
            echo "<td>" . $row['id']  . "</td>";
            echo "<td>" . $row['title'] ."</td>";
            echo "<td>". $row['format_type'] . "</td>";
            echo "<td>". $row['genre'] . "</td>";
            echo "<td>". $row['path'] . "</td>";
        }
    }



?>