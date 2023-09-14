
/* SECTION1 */

/*윈도우 스크롤 발생시, 스크롤양이 메뉴의 offsetTop보다 크다면,
    메뉴에 클래스명 sticky추가 후, 최상단 고정 및 배경색 그라디언트 변경
    각 메인 메뉴의 글자색 흰색으로 변경 
  아니라면, 클래스 sticky 삭제 후, 원래대로 변경*/

  let VideoContainertext = $('.VideoContainer h2'); 
  let videoiframe = $('iframe');
  let scrollmat = 0;
  let scale = 1;
  let translateY = -0.8;
  let translateX = -8;

// 주어진 코드는 윈도우를 스크롤할 때 발생하는 이벤트 핸들러입니다.
$(window).scroll(function(){    
  let scrollTop = $(window).scrollTop();    //윈도우 객체의 scrollY속성을 사용하여 스크롤 양을 로드
  let textopacity = 1 - (scrollTop / 500); //  // 500으로 나눈 값의 차이를 이용하여 textopacity 값을 계산합니다.
  console.log('스크롤 양: ' + scrollTop);    


  // 스크롤 양이 이전 스크롤 양보다 큰 경우
  if (scrollTop > scrollmat) {       
       
    // scale과 translateY 값을 각각 0.01씩 증가시킵니다.
    scale-= 0.04;
    translateY -=0.01;
    translateX -=20;

    // VideoContainertext 요소에 transform 속성을 적용합니다.
    VideoContainertext.css({'transform':`scale(${scale}) translateY(${translateY}px) translateX(${translateX}px)`});
    // Sec2 h2를 투영하게    
    $('.Sec2 h2').css({
        'color': 'transparent',
        'text-shadow': '0 0 10px rgba(255,255,255,0.8)'  // 글자 투영 효과
      }); // 수정
  } else {    
  

  }
  if (scrollTop > 200) {
    VideoContainertext.hide();
    videoiframe.addClass('active');
  }
});



// AOS.init();

/* SECTION5 */




let numLinks = $('.cavicircle span').length;
let angle = 360 / numLinks;
let rotation = 0;

$('.cavicircle span').each(function(index) {
  rotation+= angle;
  $(this).css({
    'transform' : 'rotate(' + rotation + 'deg) translate(100px) rotate(-'+rotation +'deg)'
  })
})


let square = $('.cube'); // 원형 변수선택
let cubeparent = square.parent(); //원형 부모요소선택
let isHovered = false; //마우스가 요소 위 올려져있는 지 여부 저장 변수
let autoRotateInterval;


TweenMax.to(square, 3, {rotation:"360", ease:Linear.easeNone, repeat:-1});

//자동회전 함수 
// autoRotate 함수는 마우스가 요소 위에 올려져 있지 않을 때, cube를 3초에 한 번씩 360도씩 회전시킵니다.
// function autoRotate() {
//   if (!isHovered) {
//   TweenMax.to(square, 3, {rotation:"360", ease:Linear.easeNone, repeat:-1});
//   }
// }
// 자동회전 함수
function autoRotate() {
  autoRotateInterval = setInterval(() => {
    TweenMax.to(square, 3, { rotation: "+=360", ease: Linear.easeNone });
  }, 3000);
}
function StopRotate() {
      TweenMax.to(square, 3, { rotation: "+=360", ease: Linear.easeNone, Paused : true });
}



//커서에 따라 회전하는 함수
// rotateCube 함수는 마우스의 위치에 따라 cube를 회전시킵니다.

function rotateCube(e) { 
  let cubeparentX = (e.clientX - cubeparent.offset().left) - (cubeparent.width() / 2) ;
  let cubeparentY = (e.clientY - cubeparent.offset().top) - (cubeparent.height() / 2) ;
  let q = 0.15;

  let cubeRotateX = -cubeparentY * q;
  let cubeRotateY = cubeparentX * q;
  
  square.css({
      transform: 
      'rotateX(' + cubeRotateX + 'deg) rotateY(' + cubeRotateY + 'deg)'
    });
}

autoRotate();

//원형에 마우스 호버 시 stopautorotate 함수 실행
square.mouseenter(function(e){
  isHovered = true;
  StopRotate();
  // rotateCube(e);
  clearInterval(autoRotateInterval);
});

//원형에 마우스 빠져나가면 isHovered변수를 false로 설정 후 자동 회전 다시 시작
square.mouseleave(function(){
  isHovered = false;
  // autoRotate();
});

// rotateCube 함수는 마우스 위치에 따라 cube를 회전시킵니다.
$(document).mousemove(function(e){
  // rotateCube(e);
});



/* SECTION2 */

let objectcircles = $('.object div');
let objectcircle1 = objectcircles.eq(0);
let objectcircle2 = objectcircles.eq(1);
let objectcircle3 = objectcircles.eq(2);


let  objectscale = 1;
let  objecttranslateX = 0;
let  objecttranslateY = 0;



// 주어진 코드는 윈도우를 스크롤할 때 발생하는 이벤트 핸들러입니다.
$(window).scroll(function(){    
  let scrollTop = $(window).scrollTop();    //윈도우 객체의 scrollY속성을 사용하여 스크롤 양을 로드  

  // 스크롤 양이 이전 스크롤 양보다 큰 경우
  if (scrollTop > scrollmat) {       
      
    
    if (scrollTop > 200) {
    // scale과 translateY 값을 각각 0.01씩 증가시킵니다.
    objectscale+= 0.04;
    objecttranslateX +=0.01;
    objecttranslateY +=20;

      objectcircle1.css({'transform':`translateY(${objecttranslateY}px) translateX(${objecttranslateX}px)`});
      objectcircle2.css({'transform':`translateY(${objecttranslateY}px) translateX(${objecttranslateX}px)`});
      objectcircle3.css({'transform':`translateY(${objecttranslateY}px) translateX(${objecttranslateX}px)`});
      }
}
  scrollmat = scrollTop;
});

  