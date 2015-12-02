$(document).ready(function{
	$("button").mouseenter(function(){
		$("button").fadeTo("slow",0.5);
	});
	$("button").mouseleave(function(){
		$("button").fadeTo("fast",1);
	});
});