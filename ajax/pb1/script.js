$(document).ready(function() {	

//APEL AJAX JQUERY
//
// 		$.ajax({
// 			type:"GET",
// 			url:"getdata.php",
// 			success: function(response){
// 				$('#table1').html(response);
//
// 				$(function(){
// 					$("#stanga option").click(function() {
//
// 						var statie = $(this).html();
// 						console.log(statie);
// 						$.ajax({
// 							url:"filter.php?statie="+statie,
// 							success:function(result){
// 								console.log(result);
// 								$('#table2').html(result);
// 							}
//
// 						});
//
//
//
// 					});
// 				});
//
// 			}
// 		});
//

//PLAIN JAVASCRIPT

		var xhttp = new XMLHttpRequest();
		var request = new XMLHttpRequest();

		xhttp.onreadystatechange = function() {
			if (this.status === 200 && this.readyState===XMLHttpRequest.DONE) {
				$("#table1").html(this.responseText);
				$("#stanga option").click(function() {
					var statie = this.innerHTML;

					request.open("GET", "filter.php?statie="+statie, true);
					request.onreadystatechange=function(){
						if (request.readyState == 4 && request.status == 200) {
							$("#table2").html(request.responseText);
						}
					};
					request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
					request.send();



					});
			}
		};
		xhttp.open("GET", "getdata.php", true);
		xhttp.send();

});


