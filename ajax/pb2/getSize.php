<?php
    include_once 'connect.php';

    $size=mysqli_query($conn,"SELECT COUNT(*) AS 'Size' FROM Users;");
    $row=mysqli_fetch_assoc($size);
    echo $row['Size'];

?>