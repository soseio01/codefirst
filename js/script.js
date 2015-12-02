$(document).ready(function(){

	$(".btn").mouseenter(function(){
		$(this).fadeTo("slow", 0.5);
	});
	$(".btn").mouseleave(function(){
		$(this).fadeTo("fast",1);
	});

	$("#head_1").css('display','block');
	$("#head_2").css('display','none');
	$("#head_3").css('display','none');
	$("#head_4").css('display','none')


});

var current_head_index = 1;

function headprev(){

	if (current_head_index == 1)
	 {current_head_index = 4 ;}
	else 
		{  current_head_index = current_head_index - 1}

if (current_head_index == 1)
 {
 	$("#head_1").css('display','block');
	$("#head_2").css('display','none');
	$("#head_3").css('display','none');
	$("#head_4").css('display','none');

 	return;
 }

  if (current_head_index == 2)
 {
 	$("#head_1").css('display','none');
	$("#head_2").css('display','block');
	$("#head_3").css('display','none');
	$("#head_4").css('display','none');
 	return;
 }

   if (current_head_index == 3)
 {
 	$("#head_1").css('display','none');
	$("#head_2").css('display','none');
	$("#head_3").css('display','block');
	$("#head_4").css('display','none');
 	return;
 }

   if (current_head_index == 4)
 {
 	$("#head_1").css('display','none');
	$("#head_2").css('display','none');
	$("#head_3").css('display','none');
	$("#head_4").css('display','block');
 	return;
 }


}


function headnext(){

	if (current_head_index == 4)
	 {current_head_index = 1 ;}
	else 
		{  current_head_index = current_head_index + 1}


 if (current_head_index == 1)
 {
 	$("#head_1").css('display','block');
	$("#head_2").css('display','none');
	$("#head_3").css('display','none');
	$("#head_4").css('display','none');

 	return;
 }

  if (current_head_index == 2)
 {
 	$("#head_1").css('display','none');
	$("#head_2").css('display','block');
	$("#head_3").css('display','none');
	$("#head_4").css('display','none');

 	return;
 }

   if (current_head_index == 3)
 {
 	$("#head_1").css('display','none');
	$("#head_2").css('display','none');
	$("#head_3").css('display','block');
	$("#head_4").css('display','none');

 	return;
 }

   if (current_head_index == 4)
 {
 	$("#head_1").css('display','none');
	$("#head_2").css('display','none');
	$("#head_3").css('display','none');
	$("#head_4").css('display','block');

 	return;
 }




}

