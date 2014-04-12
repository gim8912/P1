var count = 0;
var check = 0;
var savepoint = [0, 0];
var savepoint2 = [0, 0];
var checkpoint = 0;
 
$(document).ready(function(){ 
	var Y = function(){

		if(count == 2){
			count=0;
			
			if(savepoint[0] == savepoint[1]){
				checkpoint++;
			}
			else{
				alert("틀렸어용!!!!!!")
				$('.c'+savepoint2[0]).toggleClass('k'+savepoint[0]);
				$('.c'+savepoint2[1]).toggleClass('k'+savepoint[1]);
			}		
		}
	}
	$("clear").click(function() {
		location.reload();
	});



	$('.c1').click(function(){
		$(this).toggleClass('k1');
		savepoint[count] = 1;
		savepoint2[count] = 1;
		count +=1;
		Y();
	});

	$('.c2').click(function(){
		$(this).toggleClass('k3');
		savepoint[count] = 3;
		savepoint2[count] = 2;
		count +=1;
		Y();
	});

	$('.c3').click(function(){
		$(this).toggleClass('k1');
		savepoint[count] = 1;
		savepoint2[count] = 3;
		count +=1;
		Y();
	});

	$('.c4').click(function(){
		$(this).toggleClass('k4');
		savepoint[count] = 4;
		savepoint2[count] = 4;
		count +=1;
		Y();
	});

	$('.c5').click(function(){
		$(this).toggleClass('k4');
		savepoint[count] = 4;
		savepoint2[count] = 5;
		count +=1;
		Y();
	});

	$('.c6').click(function(){
		$(this).toggleClass('k6');
		savepoint[count] = 6;
		savepoint2[count] = 6;
		count +=1;
		Y();
	});

	$('.c7').click(function(){
		$(this).toggleClass('k5');
		savepoint[count] = 5;
		savepoint2[count] = 7;
		count +=1;
		Y();
	});

	$('.c8').click(function(){
		$(this).toggleClass('k2');
		savepoint[count] = 2;
		savepoint2[count] = 8;
		count +=1;
		Y();
	});

	$('.c9').click(function(){
		$(this).toggleClass('k2');
		savepoint[count] = 2;
		savepoint2[count] = 9;
		count +=1;
		Y();
	});

	$('.c10').click(function(){
		$(this).toggleClass('k3');
		savepoint[count] = 3;
		savepoint2[count] = 10;
		count +=1;
		Y();
	});

	$('.c11').click(function(){
		$(this).toggleClass('k6');
		savepoint[count] = 6;
		savepoint2[count] = 11;
		count +=1;
		Y();
	});

	$('.c12').click(function(){
		$(this).toggleClass('k5');
		savepoint[count] = 5;
		savepoint2[count] = 12;
		count +=1;
		Y();
	});

});
