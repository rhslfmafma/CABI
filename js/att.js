
/*윈도우 스크롤 발생시, 스크롤양이 메뉴의 offsetTop보다 크다면,
    메뉴에 클래스명 sticky추가 후, 최상단 고정 및 배경색 그라디언트 변경
    각 메인 메뉴의 글자색 흰색으로 변경 
  아니라면, 클래스 sticky 삭제 후, 원래대로 변경*/

  let VideoContainertext = $('.VideoContainer h2');  
  let scrollmat = 0;
  let scale = 0.8;
  let translateY = -50;

// 주어진 코드는 윈도우를 스크롤할 때 발생하는 이벤트 핸들러입니다.
$(window).scroll(function(){    
  let scrollTop = $(window).scrollTop();    //윈도우 객체의 scrollY속성을 사용하여 스크롤 양을 로드
  let textopacity = 1 - (scrollTop / 500); //  // 500으로 나눈 값의 차이를 이용하여 textopacity 값을 계산합니다.

  // 스크롤 양이 이전 스크롤 양보다 큰 경우
  if (scrollTop > scrollmat) {        
      console.log('스크롤 양: ' + scrollTop);     
    // scale과 translateY 값을 각각 0.01씩 증가시킵니다.
    scale+= 0.01;
    translateY +=1;

    // VideoContainertext 요소에 transform 속성을 적용합니다.
    VideoContainertext.css({'transform':`scale(${scale}) translateY(${translateY}%)`});
    // Sec2 h2를 투영하게    
    $('.Sec2 h2').css({
        'color': 'transparent',
        'text-shadow': '0 0 10px rgba(255,255,255,0.8)'  // 글자 투영 효과
      }); // 수정
  } else {    
    console.log('스크롤 양: ' + scrollTop);      
    VideoContainertext.css('transform', 'none');      
    $('.Sec2 h2').css({
      'color':'rgba(0, 0, 0, 1)',
      'text-shadow': 'none'  // 글자 투영 효과

    }); // 수정 
    }

    // 현재 스크롤 양을 이전 스크롤 양으로 업데이트합니다.
    scrollmat = scrollTop;
});
  


AOS.init();

/* section5*/
let square = $('.cube')
let cubeparent = square.parent();
let cubeparentX = cubeparent.offset().left + cubeparent.width() /2;
let cubeparentY = cubeparent.offset().top + cubeparent.height() /2;
let sensitivity = 10;

let targetrotationX = 0;
let targetrotationY = 0;
let currentrotationX = 0;
let currentrotationY = 0;


// TweenMax.to(square, 3, {rotation:"360", ease:Linear.easeNone, repeat:-1});



let numLinks = $('.cavicircle span').length;
let angle = 360 / numLinks;
let rotation = 0;

$('.cavicircle span').each(function(index) {
  rotation+= angle;
  $(this).css({
    'transform' : 'rotate(' + rotation + 'deg) translate(100px) rotate(-'+rotation +"deg)"
  })
})


cubeparent.mousemove(function(event){
  let mouseX = event.clientX - cubeparentX;
  let mouseY = event.clientY - cubeparentY;

  let rotationX = (mouseX - cubeparent.height()/ 2) / sensitivity;
  let rotationY = (mouseY - cubeparent.width()/ 2) / sensitivity;
  animateRotation();
  });

  function animateRotation() {
    let diffX = targetrotationX - currentrotationX;
    let diffY = targetrotationY - currentrotationY;
    
    currentrotationX += diffX * 0.1;
    currentrotationY += diffY * 0.1;
  
    square.css({
      transform: 'rotateX(' + currentrotationX + 'deg) rotateY(' + currentrotationY + 'deg)'
    });
    requestAnimationFrame(animateRotation);
}

cubeparent.mouseleave(function(){
  targetrotationX = 0;
  targetrotationY = 0;
  animateRotation();
});

cubeparent.mouseenter(function(){
  animateRotation();
});
