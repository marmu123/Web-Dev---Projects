<?php
    include_once 'connect.php';
    include_once 'operations.php';
?>


<!DOCTYPE html>
<script language="JavaScript" type="text/javascript" src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js"></script>
<html>
<head>
<link href="style.css" rel="stylesheet"/>
<title>Lab 7 WP</title>

</head>
<body>
<form action="operations.php" method="post">
    <div class="mainform" id=main>
        <input id="idi" type="text" name="id" placeholder="ID">
        <br>
        <input id="titlei" type="text" name="title" placeholder="Title">
        <br>
        <input id="genrei" type="text" name="genre" placeholder="Genre">
        <br>
        <input id="formati" type="text" name="format" placeholder="Format">
        <br>
        <input id="pathi" type="text" name="path" placeholder="Path">
        <br>
        <button id="addbutton" type="submit" name="add_operation">ADD</button>
        <button id="deletebutton" type="submit" name="delete_operation" >DELETE</button>
        <button id="updatebutton" type="submit" name= "update_operation">UPDATE</button>
    </div>
</form>
<button id="getallbutton" type="button" name="getallbutton">DISPLAY ALL</button>
<button id="filterbutton" type="button" name="filterbutton">FILTER</button>
<input id="filterinput" type="text" name="filterinput" placeholder="Genre to filter by:">
<br>
<div id="table1">

</div>

<script type="text/javascript" src="javascripts.js"></script>
</body> 
</html>