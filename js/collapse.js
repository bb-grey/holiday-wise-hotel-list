$(document).ready(function() {
	$(".tg-icon").click(function(){
		if($(this).hasClass("fas fa-chevron-up")){
			$(this).removeClass("fas fa-chevron-up");
			$(this).addClass("fas fa-chevron-down");	
		} else{
			$(this).removeClass("fas fa-chevron-down");
			$(this).addClass("fas fa-chevron-up");
		}
	});
});