$(function(){
	 $(window).scroll(function(){
	 	var offset = $(window).scrollTop();
	 	var obj = $('#topframe');
	 	if( offset > 90 ) {
	 		obj.animate({ 'top': '-45px' }, 100);
	 	}else{
	 		obj.animate({ 'top': '0px'}, 100);
	 	}
	 });
});