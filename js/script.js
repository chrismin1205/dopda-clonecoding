// 스크롤 애니메이션
$(function(){
    $('.animate').scrolla({
        mobile: true, // 모바일에서 실행 시킬 것이기 때문에 true
        once: false // 스크롤 시 한번만 실행될 때는 true
    });
});

// fixHeader
var scrollValue = 0;
scrollValue = $(document).scrollTop();
fixHeader();

$(window).on('scroll resize', function(){
    scrollValue = $(document).scrollTop();
    fixHeader();
});

function fixHeader(){
    if(scrollValue > 200){
        $('header').addClass('on');
    } else {
        $('header').removeClass('on');
    }
}

// slide animation
// script.js 라는 외부 파일 생성해서 사용하기 때문에
// $(function){} 으로 사용
$(function(){
    $('.visual .slide').slick({
        arrows: false, // 화살표 사용
        dots: true,
        autoplay: true, // 자동 재생
        fade: true, // fadein 효과
        autoplaySpeed: 5000, // 각 슬라이드 자동 재생 시간 5초
        pauseOnHover: false, // 마우스 올라갔을 때, 슬라이드 멈추는 것, false면 사용 안함
        pauseOnFocus: false // focus 시, 슬라이드 멈추는 것, false면 사용 안함
    });
});

$(function() {
    $('header .open').on('click', function() {
        $('body').css({'overflow': 'hidden'});   //스크롤하지 못하게 막음
        $('header .bg').css({'display': 'block'});
        $('header nav').addClass('on');
	});
    $('header .close').on('click', function() {
        $('body').css({'overflow': 'auto'});
        $('header .bg').css({'display': 'none'});
        $('header nav').removeClass('on');
	});	
}); 