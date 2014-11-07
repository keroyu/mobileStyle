$(function(){
	 $(window).scroll(function(){
	 	var offset = $(window).scrollTop();
	 	var obj = $('#topframe');
	 	if( offset > 45 ) {
	 		obj.animate({ 'top': '-45px' }, 300);
	 	}else{
	 		obj.animate({ 'top': '0px'}, 300);
	 	}
	 });
});