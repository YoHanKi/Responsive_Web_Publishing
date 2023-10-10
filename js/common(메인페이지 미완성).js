//상단 gnb_depth2_1 false를 디폴트로 지정
var isOver1 = false;
var isOver2 = false;
function goHide1() {
	if (!isOver1 && !isOver2) {
		$('.gnb_depth2_1').stop().fadeOut('fast');
	}
}

$(document).ready( function() {
    $('a.s_point').smoothScroll();

	// 스크롤하여 내려와야 top버튼이 보이도록 함.
	if ( $(document).scrollTop() < 50) $('.to_top').addClass('hide');
	else $('.to_top').removeClass('hide');
	$(window).scroll( function() {
	  if ( $(document).scrollTop() < 50) $('.to_top').addClass('hide');
	  else $('.to_top').removeClass('hide');
	});

	//index.html = 상단부 gnb_depth2_1 	
	$('.openAll1').mouseover(function(){
		if ( parseInt($('header').css('width')) > 800 ) $('.gnb_depth2_1').fadeIn('fast');
		isOver1 = true;
	});	
    $('.openAll1').focus(function(){
		if ( parseInt($('header').css('width')) > 800 ) $('.gnb_depth2_1').fadeIn('fast');
		isOver1 = true;
	});
	$('.openAll1').mouseout(function(){
		isOver1 = false;
		setTimeout("goHide1()",200);
	});	
	$('.gnb_depth2_1 li:last-child a').blur(function(){
		isOver1 = false;
		setTimeout("goHide1()",200);
	});	
	$('.gnb_depth2_1').mouseover(function(){
		isOver2 = true;			
	});	
	$('.gnb_depth2_1').focus(function(){
		isOver2 = true;			
	});	
	$('.gnb_depth2_1').mouseout(function(){
		isOver2 = false;
		setTimeout("goHide1()",200);
	});	
	$('.gnb_depth2_1').blur(function(){
		isOver2 = false;
		setTimeout("goHide1()",200);
    });

    	//모바일 메뉴 띄움
	$('.openMOgnb').click(function(){
		$('header').addClass('on');
		$('header .header_cont').slideDown('fast');
		$('header .header_area .header_cont .closePop').show();			
		$("body").bind('touchmove', function(e){e.preventDefault()});
	});
	$('header .header_cont .closePop').click(function(){
        $('.header_cont').slideUp('fast');
        $('header').removeClass('on');
        $("body").unbind('touchmove');
	});
});

$(document).ready(function(){
    // PC브라우저에서 좁혀서 메뉴 닫고 다시 넓힐 때 상단메뉴 노출되게.
    $(window).resize(function() {
        if ( parseInt($('header').css('width')) > 800 ) $('.header_cont').show();
    }); 
});