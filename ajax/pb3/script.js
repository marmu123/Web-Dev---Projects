$(document).ready(function() {
    //AJAX
    function toArray(){
        console.log("toarray start");
        var output = [],
            row    = 0;
        $('#board').find('tr').each(function (index, obj) {
            output.push([]);
            var TDs = $(this).children();
            $.each(TDs, function (i, o) {
                output[row].push(this.innerHTML);
            });
            row++;
        });
        console.log("toarray out");
        return output;
    }



    function bindClicks(){
        $("#board td").click(function () {
            console.log("Click");
            row=$(this).parent().index();
            col=$(this).index();
            $.ajax({
                type: "GET",
                url: "nextMove.php",
                data:{table:toArray(),col:col,row:row},
                success: function (response) {
                    $("#board").html(response);
                    console.log(response);
                    bindClicks();

                }
            });
        });
    }
    bindClicks();
    //PLAIN JAVASCRIPT
    // function bindClicksPlain(){
    //     $("#board td").click(function () {
    //         row=$(this).parent().index();
    //         col=$(this).index();
    //         var req=new XMLHttpRequest();
    //         req.onreadystatechange=function(){
    //             if (this.status === 200 && this.readyState === XMLHttpRequest.DONE) {
    //                 $("#board").html(this.responseText);
    //                 bindClicksPlain();
    //             }
    //             };
    //         req.open("GET","nextMove.php",true);
    //         req.send();
    //
    //     });
    // }
    bindClicksPlain();

});
