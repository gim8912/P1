var checkpoint = 0;
$(document).ready(function(){ 
	var count = 0; // 현재 카드를 몇번  뒤집었는가의 카운트 변수.(최대 2회 까지만 뒤집을수 있게 나중에 조건문을 건다)
	var check = 0;
	var savepoint = [0, 0]; ////// 뒤집은 첫번째 카드와 두번쨰 카드 값 저장 변수
	var savepoint2 = [0, 0];////// 뒤집은 첫번째 카드와 두번쨰 카드 위치 저장 변수
	var lock = [0,0,0,0,0,0,0,0,0,0,0,0];  // 맞춘 카드들을 못뒤집게 하는 변수
	var checkpoint2 = 0;
	var minute = 0;
	var second = 0;

	

	var card1 = [0,0,0,0,0,0]; 
	var card2 = [0,0,0,0,0,0];
	              // 새로운 게임마다 그림의 위치들이 랜덤으로 바뀌게 해주기 위해 생성한 변수.
	              // 그리고 이 게임은 똑같은 문양이나 같은 그림의 카드를 쌍으로 찾는 방식의 게임이므로 
	              // 배열을 2개 선언 하여 랜덤함수를 사용, 각각의 배열에 중복이 없는 값들을 넣어서 
	              // 활용하면 된다. 
	                
	var i=0;  // 반복문 변수
	var j=0;  //
	var Random_Val =0; // 랜덤값 저장 변수
	
	///////////////////////////   랜덤값 생성 
	for(i=0;i<6;i++){
		Random_Val = Math.floor((Math.random()*6)+1);//Math.floor((Math.random()*최대값)+최소값);
		                                    // 1~6사이의 난수들중 하나의 값이 Random_Val에 저장이 된다.


		for(j=0;j<i;j++){  // 중복값을 검사하는 반복문 부분.
			if(checkpoint2==1){
				j=0;
			}
			if(card1[j]==Random_Val){ // 지금까지 입력한 값들의 중복을 찾아낸다
				Random_Val = Math.floor((Math.random()*6)+1); // 조건문이 참이면 새로운 난수 생성.
				j=0; // 그리고 다시 처음부터 중복검사를 해야하므로 j=0으로 만들어준다. 
				if(card1[j]==Random_Val){
					checkpoint2=1;
				}
				else{
					checkpoint2=0;
				}
			}
		}
		card1[i] = Random_Val; // 위의 반복문을 빠져나오면 중복값이 없다는 말이므로 
		                 // 카드배열의 i번째에 저장된 값을 넣어준다.
		checkpoint2=0;
	}


	for(i=0;i<6;i++){ // 이하 동문, 2번째 카드배열의 난수 생성 반복문
		Random_Val = Math.floor((Math.random()*6)+1);


		for(j=0;j<i;j++){
			if(checkpoint2==1){
				j=0;
			}
			if(card2[j]==Random_Val){
				Random_Val = Math.floor((Math.random()*6)+1);
				j=0;
				if(card2[j]==Random_Val){
					checkpoint2=1;
				}
				else{
					checkpoint2=0;
				}
			}
		}
		card2[i] = Random_Val; 
		checkpoint2 = 0;
	}
	///////////// //////////////////////////
	var Time = function(){
		second++;
		if(second == 60){
			mintute++;
			second=0;
		}
		$("#second").html(second);      
		$("#minute").html(minute);      
	}
	
	setTimeout("Time()", 1000);
	
	window.onload = function() {
		Time();
	}

	
	

	var Y = function(){ ///// 뒤집은 카드들이 같은지 같지않은지 검사해주는 함수.
		if(count==2){ // 카드들을 뒤집을때마다 count가 +1씩 된다. 
		              // 카드를 2번 뒤집어야 하므로, 최대 2회만 뒤집을수 있게 조건을 걸어준다.
            
 			if(savepoint[0] == savepoint[1]){ // count = 1 첫번째 카드를 뒤집은 상태. 
			                                  //  savepoint[count] = 클릭이벤트 발생한 카드 위치값.
			                                  // count = 2 두번째 카드를 뒤집은 상태. 
			                                  //  savepoint[count] = 클릭이벤트 발생한 카드 위치값.
			                                  // 카드를 2번 뒤집게 되면 각각의 카드 주소들이 저장됨.
			                                  // 그래서 이 두 값들이 같으면 다음 조건문을 수행.
			                                  
				lock[savepoint2[0]-1] = 1; // 맞춘 카드들을 클릭할때마다 count가 +1씩 되어 
				lock[savepoint2[1]-1] = 1; // 게임을 방해, 위치를 저장한 배열을 활용하여 
				checkpoint++;             // 맞춘그림들이 count +1이 안되도록 조건을 걸어줌
				$("#score_no").html(checkpoint);      
				count=0;                  // 두번 뒤집으면 다시 카운트를 0으로 만들어
				                          // 다시 다른카드들을 뒤집을수 있게 해준다.
				                       
				
			}
			else{
				alert("X");
				//alert(card2);
				$('.c'+savepoint2[0]).toggleClass('k'+savepoint[0]);
				$('.c'+savepoint2[1]).toggleClass('k'+savepoint[1]);
				lock[savepoint2[0]-1] = 0; // 카드 잠금 해제
				lock[savepoint2[1]-1] = 0;
				count=0;
	
			}
		}
	}
	
	
	
	$('.clear').click(function() {
		location.reload();
	});
	
	
	
	///////////////////// 카드부분 
	$('.c1').click(function(){
		if(lock[0]==0){ // 카드가 뒤집혀져있는지 아닌지 검사.
			lock[0]=1
			$(this).addClass('k'+card1[0]); 
			savepoint[count] = card1[0]; // 뒤집은 카드 값 저장
			savepoint2[count] = 1;       // 뒤집은 카드 위치 저장
			count +=1;
			Y();                         // 정답검사 함수실행
		}
	});
	$('.c2').click(function(){
		if(lock[1]==0){
			lock[1]=1
			$(this).addClass('k'+card1[1]);
			savepoint[count] = card1[1];
			savepoint2[count] = 2;
			count +=1;
			Y();
		}
	});
	$('.c3').click(function(){
		if(lock[2]==0){
			lock[2]=1
			$(this).addClass('k'+card1[2]);
			savepoint[count] = card1[2];
			savepoint2[count] = 3;
			count +=1;
			Y();
		}
	});
	$('.c4').click(function(){
		if(lock[3]==0){
			lock[3]=1
			$(this).addClass('k'+card1[3]);
			savepoint[count] = card1[3];
			savepoint2[count] = 4;
			count +=1;
			Y();
		}
	});
	$('.c5').click(function(){
		if(lock[4]==0){
			lock[4]=1
			$(this).addClass('k'+card1[4]);
			savepoint[count] = card1[4];
			savepoint2[count] = 5;
			count +=1;
			Y();
		}
	});
	$('.c6').click(function(){
		if(lock[5]==0){
			lock[5]=1
			$(this).addClass('k'+card1[5]);
			savepoint[count] = card1[5];
			savepoint2[count] = 6;
			count +=1;
			Y();
		}
	});
	$('.c7').click(function(){
		if(lock[6]==0){
			lock[6]=1
			$(this).addClass('k'+card2[0]);
			savepoint[count] = card2[0];
			savepoint2[count] = 7;
			count +=1;
			Y();
		}
	});
	$('.c8').click(function(){
		if(lock[7]==0){
			lock[7]=1
			$(this).addClass('k'+card2[1]);
			savepoint[count] = card2[1];
			savepoint2[count] = 8;
			count +=1;
			Y();
		}
	});
	$('.c9').click(function(){
		if(lock[8]==0){
			lock[8]=1
			$(this).addClass('k'+card2[2]);
			savepoint[count] = card2[2];
			savepoint2[count] = 9;
			count +=1;
			Y();
		}
	});
	$('.c10').click(function(){
		if(lock[9]==0){
			lock[9]=1
			$(this).addClass('k'+card2[3]);
			savepoint[count] = card2[3];
			savepoint2[count] = 10;
			count +=1;
			Y();
		}
	});
	$('.c11').click(function(){
		if(lock[10]==0){
			lock[10]=1
			$(this).addClass('k'+card2[4]);
			savepoint[count] = card2[4];
			savepoint2[count] = 11;
			count +=1;
			Y();
		}
	});
	$('.c12').click(function(){
		if(lock[11]==0){
			lock[11]=1
			$(this).addClass('k'+card2[5]);
			savepoint[count] = card2[5];
			savepoint2[count] = 12;
			count +=1;
			Y();
		}
	});
});
