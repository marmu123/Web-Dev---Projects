$(document).ready(function() {
    $('#getallbutton').click(function(){

        $.ajax({
            type:"GET",
            url:"getdata.php",
            success: function(response){
                $('#table1').html(response);
            }
        });

    });



});

$(document).ready(function() {
    $('#filterbutton').click(function(){
        var gr=$('#filterinput').val();

        $.ajax({
            type:"GET",
            url:"filter.php",
            data:{genreinput: gr},
            success: function(response){
                $('#table1').html(response);
            }
        });

    });



});