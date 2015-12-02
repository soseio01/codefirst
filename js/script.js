$(document).ready(function(){

	$(".btn").mouseenter(function(){
		$(this).fadeTo("slow", 0.5);
	});
	$(".btn").mouseleave(function(){
		$(this).fadeTo("fast",1);
	});
});

