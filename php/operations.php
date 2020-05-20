<?php
    include_once 'connect.php';
    session_start();

    if(isset($_POST['add_operation'])){
        $title=mysqli_real_escape_string($conn,$_POST['title']);
        $format=mysqli_real_escape_string($conn,$_POST['format']);
        $genre=mysqli_real_escape_string($conn,$_POST['genre']);
        $path=mysqli_real_escape_string($conn,$_POST['path']);
        $query="INSERT INTO files (title,format_type,genre,path) VALUES ('$title','$format','$genre','$path');";
        mysqli_query($conn,$query);
        header('location: index.php');
    }

    if(isset($_POST['delete_operation'])){
        $id=mysqli_escape_string($conn,$_POST['id']);
        $query="DELETE FROM files WHERE id='$id';";
        mysqli_query($conn,$query);
        header('location: index.php');
    }

    if(isset($_POST['update_operation'])){
        $id=mysqli_real_escape_string($conn,$_POST['id']);
        $title=mysqli_real_escape_string($conn,$_POST['title']);
        $format=mysqli_real_escape_string($conn,$_POST['format']);
        $genre=mysqli_real_escape_string($conn,$_POST['genre']);
        $path=mysqli_real_escape_string($conn,$_POST['path']);
        $query="UPDATE files SET title='$title', format_type='$format', genre = '$genre', path='$path' WHERE id='$id';";
        mysqli_query($conn,$query);
        header('location: index.php');
    }
    
?>