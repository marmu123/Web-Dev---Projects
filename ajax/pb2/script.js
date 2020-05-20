$(document).ready(function() {	

//AJAX JQUERY
		var ind=0;
		$("#btnPrev").prop("disabled",true);
		var size=0;
	// $.ajax({
	// 	type:"GET",
	// 	url:"getSize.php",
	// 	success: function(resp){
	// 		size = parseInt(resp);
	// 		console.log(size);
	// 	}
	// });
	// 	$.ajax({
	// 		type:"GET",
	// 		url:"getUsers.php?ind=0",
	// 		success: function(response){
	// 			$('#table').html(response);
	// 		}
	// 	});
	//
	// 	$("#btnNext").click(function () {
	// 		ind+=3;
	// 		if(ind+3>size){
	// 			$("#btnNext").prop("disabled",true);
	// 		}
	// 		else{
	// 			$("#btnNext").prop("disabled",false);
	// 		}
	// 		$.ajax({
	// 			type:"GET",
	// 			url:"getUsers.php?ind="+ind,
	// 			success:function (response) {
	// 				var count = (response.match(/tr/g) || []).length;
	// 				if(count===2)
	// 				{
	// 					ind-=3;
	//
	// 				}
	// 				else
	// 				{
	// 					$('table').html(response);
	//
	// 				}
	//
	// 			}
	// 		});
	// 		if(ind<=0)
	// 			$("#btnPrev").prop("disabled",true);
	// 		else
	// 		{
	// 			$("#btnPrev").prop("disabled",false);
	// 			ind-=3;
	// 		}
	// 	});
	// 	$("#btnPrev").click(function () {
	//
	// 		if(ind-3<=0)
	// 			$("#btnPrev").prop("disabled",true);
	// 		else
	// 		{
	// 			$("#btnPrev").prop("disabled",false);
	// 			ind-=3;
	// 		}
	//
	// 		$.ajax({
	// 			type:"GET",
	// 			url:"getUsers.php?ind="+ind,
	// 			success:function (response) {
	// 				$('table').html(response);
	// 			}
	// 		});
	// 		if(ind>size){
	// 			$("#btnNext").prop("disabled",true);
	// 		}
	// 		else{
	// 			$("#btnNext").prop("disabled",false);
	// 		}
	// 	});


//PLAIN JAVASCRIPT

	var getSizeRequest = new XMLHttpRequest();
	var initRequest = new XMLHttpRequest();

	getSizeRequest.onreadystatechange = function() {
		if (this.status === 200 && this.readyState===XMLHttpRequest.DONE) {
			size=parseInt(this.responseText);
			console.log(size);
		}
	};
	getSizeRequest.open("GET", "getSize.php", true);
	getSizeRequest.send();

	initRequest.onreadystatechange=function () {
		if (this.status === 200 && this.readyState === XMLHttpRequest.DONE) {
			$('#table').html(this.responseText);
		}
	};
	initRequest.open("GET", "getUsers.php?ind=0", true);
	initRequest.send();

	$("#btnNext").click(function () {
		ind+=3;
		if(ind+3>size){
			$("#btnNext").prop("disabled",true);
		}
		else{
			$("#btnNext").prop("disabled",false);
		}
		var nextRequest=new XMLHttpRequest();
		nextRequest.onreadystatechange=function () {
			if (this.status === 200 && this.readyState === XMLHttpRequest.DONE) {
				var count = (this.responseText.match(/tr/g) || []).length;
				if(count===2)
				{
					ind-=3;
				}
				else
				{
					$('table').html(this.responseText);
				}
			}
		};
		nextRequest.open("GET","getUsers.php?ind="+ind,true);
		nextRequest.send();
		if(ind<=0)
			$("#btnPrev").prop("disabled",true);
		else
		{
			$("#btnPrev").prop("disabled",false);
			ind-=3;
		}
	});
	$("#btnPrev").click(function () {

		if(ind-3<=0)
			$("#btnPrev").prop("disabled",true);
		else
		{
			$("#btnPrev").prop("disabled",false);
			ind-=3;
		}
		var prevRequest=new XMLHttpRequest();
		prevRequest.onreadystatechange=function () {
			if (this.status === 200 && this.readyState === XMLHttpRequest.DONE) {
				$('table').html(this.responseText);
			}
		};
		prevRequest.open("GET","getUsers.php?ind="+ind,true);
		prevRequest.send();

		if(ind>size){
			$("#btnNext").prop("disabled",true);
		}
		else{
			$("#btnNext").prop("disabled",false);
		}
	});

});


