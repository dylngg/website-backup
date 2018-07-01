var tablet = function(){
	$('.main').css("width", "720px");
	$('body').css("background-color", "#ffffff");
}
var mobile = function(){
	$('.main').css("width", "100%");
	$('.mainPic').css("width", "90%");
	$('.mainPic').css("max-width", "720px");
}

$(document).ready(function(){
	if ($(window).width() < 950) {
   		//less than 1000px
		if ($(window).width()< 500){
			//mobile size
			$(document).ready(mobile);
		}
		else{
			//tablet size
			// photo changed to 720
			$(document).ready(tablet);
		}
		
	}
	else {
   		//greater than 1000px

	}
});