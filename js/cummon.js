// document 실행 시
// header 정석

// 최상단 텍스트 슬릭 슬라이드 최상단 실행
$('header .test-slider').slick({    
  variableWidth: true,  //텍스트 글자가 서로다를 경우
  slidesToShow: 4,  //보여질 갯수
  autoplay: true, //자동실행 
  autoplaySpeed: 0,  //자동실행 속도
  speed: 5000,  //돌아가는 속도
  cssEase: 'linear',  //속도 방식   
  infinite: true,      // 무한반복
  focusOnSelect: false, 
  loop: true,
  infinite:true,
  arrows:false
});

  
      
        

// 각 아이콘 클릭시 스크립트
let lang_btn = $('header .lang_btn');
let search_btn = $('header .search_btn');
let hamburger_btn = $('header .hamburger_btn');
let lang_dropdown = $('.lang_dropdown'); 
let search_modal = $('.search_modal');
let hamburger_modal = $('.hamburger_modal');


search_btn.click(function(){
    search_modal.slideToggle();    
})

hamburger_btn.click(function(){
  hamburger_modal.slideToggle();    
})
lang_btn.click(function(){
  lang_dropdown.slideToggle();    
})




// 나이트모드 
/* 
헤더 토글버튼 클릭시 자식요소이미지의 속성이 day.png이면
이미지의 속성을 night.png<->day.png로 바꾸고
헤더의 배경에 클래스 흰<->검으로 바꾼다
*/
let toggle_btn = $('header .toggle_btn');
let header_navbar =$('header .bottom_menu');
let header_logo = $('header .navbar-brand');
let nav_item = $('header .nav-item,.nav-link');

toggle_btn.click(function(e){  
  e.preventDefault();     
  header_navbar.toggleClass('dark_mode');
});




let mainmenu = $('header .menu_list > li');
let bottom_menu = $('header .bottom_menu');
let bottomsct = bottom_menu.offset().top;
mainmenu.hover(
  function(e){
    bottom_menu.css({
      height:`300px`
    });
  },
  function(){
    bottom_menu.css({
      height:`85px`
    });
  },
);

$(window).scroll(function(){
  let sct  =  $(this).scrollTop();
  console.log(bottomsct);
  if(bottomsct  < sct) {
    bottom_menu.addClass('fixed');
  } else {
    bottom_menu.removeClass('fixed');
  }
});

$('input[type="radio"]').change(function() {
  // 현재 선택된 라디오 버튼의 value 값 (예: "ENGLISH")
  var selectedLanguage = $(this).next().text().trim();  
  // menu_list의 첫 번째 <a> 엘리먼트 찾기
  var firstMenuItem = $('.menu_list li:first-child a:first-child');
  // menu_list의 마지막 <a> 엘리먼트 찾기
  var lastMenuItem = $('.menu_list li:last-child a:last-child');
  // 첫 번째 메뉴 아이템의 텍스트 변경
  firstMenuItem.text(selectedLanguage);  
  // 마지막 메뉴 아이템의 텍스트 변경
  lastMenuItem.text(selectedLanguage);
});
//정석 스크립트 끝
