$(function(){
	$('.toggle-btn').click(function(){
		$(this).parents('li').siblings().find('.toggle-target').hide();
		$(this).siblings('.toggle-target').toggle();
	});

	/* TEXT-OVERFLOW */
	/* MAKE STRING WIDTH RESPONSIVE */
	/* DISPLAY TEXT-OVERFLOW EFFECTS */

	function changeWidth(containerEl, targetEl, minusEl, minusVal){
		
		var obj = $(containerEl);
		var containerWidth = obj.width();
		var minusWidth = 0;

		if( minusVal == undefined ){ minusVal = 0; }
		if( minusEl !== undefined ){
			minusWidth = $(minusEl).width();
		}

		var result = containerWidth - minusWidth - minusVal;
		obj.find(targetEl).css({ 'width': result + 'px' });
	}

	function textOverflow(containerEl, targetEl, minusEl, minusVal){
		changeWidth(containerEl, targetEl, minusEl, minusVal)
		$(window).resize(function(){
			changeWidth(containerEl, targetEl, minusEl, minusVal)
		});
	}

	/* COMMON USE */
	textOverflow('.rsmodal-container','.rsmodal-resp','.rsmodal-fixed', 10);

	/* MEMBER/MEMBER .member-info-detailList */
	textOverflow('.member-info-detailList li', '.dd', '.dt');
	/* PURCHASE/GAME/GAMELIST */
	textOverflow('.list-blocks li', '.list-blocks-item-name', undefined, 15);
	/* PURCHASE/A-POINT/AMOUNT */
	textOverflow('#roleAppHead', '#roleAppHeadEamil', '#roleAppHeadOpt', 10);
	/* PURCHASE/GAME/ITEMS */
	textOverflow('.app-headblock-title','.app-headblock-title .note > p', undefined, 5);
	/* PURCHASE/GAME/A-POINT */


	// responsive image attribute
	function responsiveImage(el){
		$(el).find('img').addClass('responsive');
	}
	responsiveImage('.article-content');
});
