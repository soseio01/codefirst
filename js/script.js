$(document).ready(function(){

	$(".btn").mouseenter(function(){
		$(this).fadeTo("slow", 0.5);
	});
	$(".btn").mouseleave(function(){
		$(this).fadeTo("fast",1);
	});

	$("#head_1").css({'display':'block', 'margin-left':'auto' , 'margin-right':'auto' });
	$("#head_2").css('display','none');
	$("#head_3").css('display','none');
	$("#head_4").css('display','none')
	$("#middle_1").css({'display':'block', 'margin-left':'auto' , 'margin-right':'auto' });
	$("#middle_2").css('display','none');
	$("#middle_3").css('display','none');
	$("#middle_4").css('display','none');
	$("#bottom_1").css({'display':'block', 'margin-left':'auto' , 'margin-right':'auto' });
	$("#bottom_2").css('display','none');
	$("#bottom_3").css('display','none');
	$("#bottom_4").css('display','none');
	$("#story_head_1").show();
	$("#story_head_2").hide();
	$("#story_head_3").hide();
	$("#story_head_4").hide();
	$("#story_middle_1").show();
	$("#story_middle_2").hide();
	$("#story_middle_3").hide();
	$("#story_middle_4").hide();
	$("#story_bottom_1").show();
	$("#story_bottom_2").hide();
	$("#story_bottom_3").hide();
	$("#story_bottom_4").hide();

});

var current_head_index = 1;

function headprev(){

	if (current_head_index == 1)
	 {current_head_index = 4 ;}
	else 
		{  current_head_index = current_head_index - 1}


	if (current_head_index == 1)
 {
 	$("#head_1").css({'display':'block', 'margin-left':'auto' , 'margin-right':'auto' });
	$("#head_2").css('display','none');
	$("#head_3").css('display','none');
	$("#head_4").css('display','none');
	$("#story_head_1").show();
	$("#story_head_2").hide();
	$("#story_head_3").hide();
	$("#story_head_4").hide();
 	return;
 }

  if (current_head_index == 2)
 {
 	$("#head_1").css('display','none');
	$("#head_2").css({'display':'block', 'margin-left':'auto' , 'margin-right':'auto' });
	$("#head_3").css('display','none');
	$("#head_4").css('display','none');
	$("#story_head_1").hide();
	$("#story_head_2").show();
	$("#story_head_3").hide();
	$("#story_head_4").hide();
 	return;
 }

   if (current_head_index == 3)
 {
 	$("#head_1").css('display','none');
	$("#head_2").css('display','none');
	$("#head_3").css({'display':'block', 'margin-left':'auto' , 'margin-right':'auto' });
	$("#head_4").css('display','none');
	$("#story_head_1").hide();
	$("#story_head_2").hide();
	$("#story_head_3").show();
	$("#story_head_4").hide();
 	return;
 }

   if (current_head_index == 4)
 {
 	$("#head_1").css('display','none');
	$("#head_2").css('display','none');
	$("#head_3").css('display','none');
	$("#head_4").css({'display':'block', 'margin-left':'auto' , 'margin-right':'auto' });
	$("#story_head_1").hide();
	$("#story_head_2").hide();
	$("#story_head_3").hide();
	$("#story_head_4").show();
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
 	$("#head_1").css({'display':'block', 'margin-left':'auto' , 'margin-right':'auto' });
	$("#head_2").css('display','none');
	$("#head_3").css('display','none');
	$("#head_4").css('display','none');
	$("#story_head_1").show();
	$("#story_head_2").hide();
	$("#story_head_3").hide();
	$("#story_head_4").hide();

 	return;
 }

  if (current_head_index == 2)
 {
 	$("#head_1").css('display','none');
	$("#head_2").css({'display':'block', 'margin-left':'auto' , 'margin-right':'auto' });
	$("#head_3").css('display','none');
	$("#head_4").css('display','none');
	$("#story_head_1").hide();
	$("#story_head_2").show();
	$("#story_head_3").hide();
	$("#story_head_4").hide();
 	return;
 }

   if (current_head_index == 3)
 {
 	$("#head_1").css('display','none');
	$("#head_2").css('display','none');
	$("#head_3").css({'display':'block', 'margin-left':'auto' , 'margin-right':'auto' });
	$("#head_4").css('display','none');
	$("#story_head_1").hide();
	$("#story_head_2").hide();
	$("#story_head_3").show();
	$("#story_head_4").hide();
 	return;
 }

   if (current_head_index == 4)
 {
 	$("#head_1").css('display','none');
	$("#head_2").css('display','none');
	$("#head_3").css('display','none');
	$("#head_4").css({'display':'block', 'margin-left':'auto' , 'margin-right':'auto' });
	$("#story_head_1").hide();
	$("#story_head_2").hide();
	$("#story_head_3").hide();
	$("#story_head_4").show();
 	return;
 }


}



//////

var current_middle_index = 1;

function middleprev(){

	if (current_middle_index == 1)
	 {current_middle_index = 4 ;}
	else 
		{  current_middle_index = current_middle_index - 1}


	if (current_middle_index == 1)
 {
 	$("#middle_1").css({'display':'block', 'margin-left':'auto' , 'margin-right':'auto' });
	$("#middle_2").css('display','none');
	$("#middle_3").css('display','none');
	$("#middle_4").css('display','none');
	$("#story_middle_1").show();
	$("#story_middle_2").hide();
	$("#story_middle_3").hide();
	$("#story_middle_4").hide();
 	return;
 }

  if (current_middle_index == 2)
 {
 	$("#middle_1").css('display','none');
	$("#middle_2").css({'display':'block', 'margin-left':'auto' , 'margin-right':'auto' });
	$("#middle_3").css('display','none');
	$("#middle_4").css('display','none');
	$("#story_middle_1").hide();
	$("#story_middle_2").show();
	$("#story_middle_3").hide();
	$("#story_middle_4").hide();
 	return;
 }

   if (current_middle_index == 3)
 {
 	$("#middle_1").css('display','none');
	$("#middle_2").css('display','none');
	$("#middle_3").css({'display':'block', 'margin-left':'auto' , 'margin-right':'auto' });
	$("#middle_4").css('display','none');
	$("#story_middle_1").hide();
	$("#story_middle_2").hide();
	$("#story_middle_3").show();
	$("#story_middle_4").hide();
 	return;
 }

   if (current_middle_index == 4)
 {
 	$("#middle_1").css('display','none');
	$("#middle_2").css('display','none');
	$("#middle_3").css('display','none');
	$("#middle_4").css({'display':'block', 'margin-left':'auto' , 'margin-right':'auto' });
	$("#story_middle_1").hide();
	$("#story_middle_2").hide();
	$("#story_middle_3").hide();
	$("#story_middle_4").show();
 	return;
 }
}

function middlenext(){

	if (current_middle_index == 4)
	 {current_middle_index = 1 ;}
	else 
		{  current_middle_index = current_middle_index + 1}


	if (current_middle_index == 1)
 {
 	$("#middle_1").css({'display':'block', 'margin-left':'auto' , 'margin-right':'auto' });
	$("#middle_2").css('display','none');
	$("#middle_3").css('display','none');
	$("#middle_4").css('display','none');
	$("#story_middle_1").show();
	$("#story_middle_2").hide();
	$("#story_middle_3").hide();
	$("#story_middle_4").hide();
 	return;
 }

  if (current_middle_index == 2)
 {
 	$("#middle_1").css('display','none');
	$("#middle_2").css({'display':'block', 'margin-left':'auto' , 'margin-right':'auto' });
	$("#middle_3").css('display','none');
	$("#middle_4").css('display','none');
	$("#story_middle_1").hide();
	$("#story_middle_2").show();
	$("#story_middle_3").hide();
	$("#story_middle_4").hide();
 	return;
 }

   if (current_middle_index == 3)
 {
 	$("#middle_1").css('display','none');
	$("#middle_2").css('display','none');
	$("#middle_3").css({'display':'block', 'margin-left':'auto' , 'margin-right':'auto' });
	$("#middle_4").css('display','none');
	$("#story_middle_1").hide();
	$("#story_middle_2").hide();
	$("#story_middle_3").show();
	$("#story_middle_4").hide();
 	return;
 }

   if (current_middle_index == 4)
 {
 	$("#middle_1").css('display','none');
	$("#middle_2").css('display','none');
	$("#middle_3").css('display','none');
	$("#middle_4").css({'display':'block', 'margin-left':'auto' , 'margin-right':'auto' });
	$("#story_middle_1").hide();
	$("#story_middle_2").hide();
	$("#story_middle_3").hide();
	$("#story_middle_4").show();
 	return;
 }
}


////////////BOTTOM


var current_bottom_index = 1;

function bottomprev(){

	if (current_bottom_index == 1)
	 {current_bottom_index = 4 ;}
	else 
		{  current_bottom_index = current_bottom_index - 1}


	if (current_bottom_index == 1)
 {
 	$("#bottom_1").css({'display':'block', 'margin-left':'auto' , 'margin-right':'auto' });
	$("#bottom_2").css('display','none');
	$("#bottom_3").css('display','none');
	$("#bottom_4").css('display','none');
	$("#story_bottom_1").show();
	$("#story_bottom_2").hide();
	$("#story_bottom_3").hide();
	$("#story_bottom_4").hide();
 	return;
 }

  if (current_bottom_index == 2)
 {
 	$("#bottom_1").css('display','none');
	$("#bottom_2").css({'display':'block', 'margin-left':'auto' , 'margin-right':'auto' });
	$("#bottom_3").css('display','none');
	$("#bottom_4").css('display','none');
	$("#story_bottom_1").hide();
	$("#story_bottom_2").show();
	$("#story_bottom_3").hide();
	$("#story_bottom_4").hide();
 	return;
 }

   if (current_bottom_index == 3)
 {
 	$("#bottom_1").css('display','none');
	$("#bottom_2").css('display','none');
	$("#bottom_3").css({'display':'block', 'margin-left':'auto' , 'margin-right':'auto' });
	$("#bottom_4").css('display','none');
	$("#story_bottom_1").hide();
	$("#story_bottom_2").hide();
	$("#story_bottom_3").show();
	$("#story_bottom_4").hide();
 	return;
 }

   if (current_bottom_index == 4)
 {
 	$("#bottom_1").css('display','none');
	$("#bottom_2").css('display','none');
	$("#bottom_3").css('display','none');
	$("#bottom_4").css({'display':'block', 'margin-left':'auto' , 'margin-right':'auto' });
	$("#story_bottom_1").hide();
	$("#story_bottom_2").hide();
	$("#story_bottom_3").hide();
	$("#story_bottom_4").show();
 	return;
 }
}
function bottomnext(){

	if (current_bottom_index == 4)
	 {current_bottom_index = 1 ;}
	else 
		{  current_bottom_index = current_bottom_index + 1}


	if (current_bottom_index == 1)
 {
 	$("#bottom_1").css({'display':'block', 'margin-left':'auto' , 'margin-right':'auto' });
	$("#bottom_2").css('display','none');
	$("#bottom_3").css('display','none');
	$("#bottom_4").css('display','none');
	$("#story_bottom_1").show();
	$("#story_bottom_2").hide();
	$("#story_bottom_3").hide();
	$("#story_bottom_4").hide();
 	return;
 }

  if (current_bottom_index == 2)
 {
 	$("#bottom_1").css('display','none');
	$("#bottom_2").css({'display':'block', 'margin-left':'auto' , 'margin-right':'auto' });
	$("#bottom_3").css('display','none');
	$("#bottom_4").css('display','none');
	$("#story_bottom_1").hide();
	$("#story_bottom_2").show();
	$("#story_bottom_3").hide();
	$("#story_bottom_4").hide();
 	return;
 }

   if (current_bottom_index == 3)
 {
 	$("#bottom_1").css('display','none');
	$("#bottom_2").css('display','none');
	$("#bottom_3").css({'display':'block', 'margin-left':'auto' , 'margin-right':'auto' });
	$("#bottom_4").css('display','none');
	$("#story_bottom_1").hide();
	$("#story_bottom_2").hide();
	$("#story_bottom_3").show();
	$("#story_bottom_4").hide();
 	return;
 }

   if (current_bottom_index == 4)
 {
 	$("#bottom_1").css('display','none');
	$("#bottom_2").css('display','none');
	$("#bottom_3").css('display','none');
	$("#bottom_4").css({'display':'block', 'margin-left':'auto' , 'margin-right':'auto' });
	$("#story_bottom_1").hide();
	$("#story_bottom_2").hide();
	$("#story_bottom_3").hide();
	$("#story_bottom_4").show();
 	return;
 }
}
