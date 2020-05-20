<?php
    $table=$_GET['table'];
    $col=$_GET['col'];
    $row=$_GET['row'];
    $isLastMove=TRUE;
    $winner="";
    if($table[$row][$col]=="")
        {
            $table[$row][$col]="0";
            for($i=0;$i<3;$i++)
                for($j=0;$j<3;$j++)
                    if($table[$i][$j]=="")
                    $isLastMove=FALSE;
            if($isLastMove==TRUE){
               for($i=0;$i<3;$i++)
                    if($table[$i][0]==$table[$i][1] && $table[$i][1]==$table[$i][2] && $table[$i][0]=="0")
                        $winner="YOU WIN";
                    else
                        if($table[0][$i]==$table[1][$i] && $table[1][$i]==$table[2][$i] && $table[0][$i]=="0")
                            $winner="YOU WIN";
                    else
                        if($table[0][0]==$table[1][1] && $table[1][1]==$table[2][2] && $table[0][0]=="0")
                            $winner="YOU WIN";
                    else
                        if($table[0][2]==$table[1][1] && $table[1][1]==$table[2][0] && $table[0][0]=="0")
                            $winner="YOU WIN";

               if($winner=="")
               for($i=0;$i<3;$i++)
                    if($table[$i][0]==$table[$i][1] && $table[$i][1]==$table[$i][2] && $table[$i][0]=="X")
                        $winner="COMPUTER WIN";
                    else
                        if($table[0][$i]==$table[1][$i] && $table[1][$i]==$table[2][$i] && $table[0][$i]=="X")
                            $winner="COMPUTER WIN";
                    else
                        if($table[0][0]==$table[1][1] && $table[1][1]==$table[2][2] && $table[0][0]=="X")
                            $winner="COMPUTER WIN";
                    else
                        if($table[0][2]==$table[1][1] && $table[1][1]==$table[2][0] && $table[0][0]=="X")
                            $winner="COMPUTER WIN";
               if($winner=="")
                    $winner="NO WINNER";
            }
            else{
            $rowBot=rand(0,2);
            $colBot=rand(0,2);
            while($table[$rowBot][$colBot]!=""){
                $rowBot=rand(0,2);
                $colBot=rand(0,2);
            }
            $table[$rowBot][$colBot]="X";
            for($i=0;$i<3;$i++)
                 if($table[$i][0]==$table[$i][1] && $table[$i][1]==$table[$i][2] && $table[$i][0]=="0")
                     $winner="YOU WIN";
                 else
                     if($table[0][$i]==$table[1][$i] && $table[1][$i]==$table[2][$i] && $table[0][$i]=="0")
                         $winner="YOU WIN";
                 else
                     if($table[0][0]==$table[1][1] && $table[1][1]==$table[2][2] && $table[0][0]=="0")
                         $winner="YOU WIN";
                 else
                     if($table[0][2]==$table[1][1] && $table[1][1]==$table[2][0] && $table[0][0]=="0")
                         $winner="YOU WIN";

            if($winner=="")
            for($i=0;$i<3;$i++)
                 if($table[$i][0]==$table[$i][1] && $table[$i][1]==$table[$i][2] && $table[$i][0]=="X")
                     $winner="COMPUTER WIN";
                 else
                     if($table[0][$i]==$table[1][$i] && $table[1][$i]==$table[2][$i] && $table[0][$i]=="X")
                         $winner="COMPUTER WIN";
                 else
                     if($table[0][0]==$table[1][1] && $table[1][1]==$table[2][2] && $table[0][0]=="X")
                         $winner="COMPUTER WIN";
                 else
                     if($table[0][2]==$table[1][1] && $table[1][1]==$table[2][0] && $table[0][0]=="X")
                         $winner="COMPUTER WIN";
            }
        }

    if($winner!=""){

        for($i=0;$i<3;$i++){
            echo "<tr>";
            for($j=0;$j<3;$j++)
                echo "<td>" . "</td>";
            echo "</tr>";
            }
             echo "<script>alert('" . $winner . "')</script>";
        }

    else{
    for($i=0;$i<3;$i++){
            echo "<tr>";
            for($j=0;$j<3;$j++)
                echo "<td>" . $table[$i][$j] . "</td>";
            echo "</tr>";
    }

    }

?>