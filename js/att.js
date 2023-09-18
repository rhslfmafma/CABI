
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
    let audio = $('#cavisong')[0];

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

    } else {    
    }

    //비디오 src mute 변경 (소리 off)
    let currentUrl = videoiframe.attr('src');
    let changeUrl = currentUrl.replace('mute=1','mute=0');

    //스크롤 200보다 크면, 텍스트 out, 비디오 in(소리 on)
    if (scrollTop > 200) {
      VideoContainertext.hide();
      //- 스크롤 200 만 되면 다시 시작하는 것을 HASCLASS을 이용해서, active가 없을 때만... 실행해서 무한 로딩을 막았다
      if (!videoiframe.hasClass('active')) {
        videoiframe.attr('src',changeUrl);      
        videoiframe.addClass('active');  
      } 
    }

    /* audio */

    //스크롤 19800보다 크면, 비디오 out (소리 off), 오디오 in(소리 on)
    if (scrollTop > 2135) {
      console.log('오디오 음악재생',currentUrl);
      changeUrl = currentUrl.replace('mute=0','mute=1');
      videoiframe.attr('src',changeUrl);
      audio.play(); 
    } else {
      //오디오 out(소리 off)
      audio.pause();   
    }

  });


  /* SECTION2 */

  let objectcircles = $('.object div');
  let objectcircle1 = objectcircles.eq(0);
  let objectcircle2 = objectcircles.eq(1);
  let objectcircle3 = objectcircles.eq(2);
  let  oX = 0;
  let  oY = 0;
  let Sec2title = $('.Sec2 h2');

  // 주어진 코드는 윈도우를 스크롤할 때 발생하는 이벤트 핸들러입니다.
  $(window).scroll(function(){    
    let scrollTop = $(window).scrollTop();    //윈도우 객체의 scrollY속성을 사용하여 스크롤 양을 로드  
    // 스크롤 양이 이전 스크롤 양보다 큰 경우
    if (scrollTop > scrollmat) {       
      if (scrollTop > 1899) {
        objectcircle1.addClass('active');
        objectcircle2.addClass('active');
        objectcircle3.addClass('active');
      }
      if (scrollTop > 1900) {
        console.log('작동');
        // scale과 translateY 값을 각각 0.01씩 증가시킵니다.
        if (oX < 168) {
          oX +=1;   
          oY +=1;   
          objectcircle1.css({
            'transform': `translateY(${-20 * oY}px) translateX(${20 * oX}px) rotate(${-20 * oX}deg)`  


        });
          objectcircle2.css({'transform': `translateY(${-20 * oY}px) translateX(${-20 * oX}px) rotate(${-10 * oX}deg)`});
          objectcircle3.css({'transform': `translateY(${20 * oY}px) translateX(${-20 * oX}px) rotate(${10 * oX}deg)`});  
        } 
      }
      if (scrollTop > 2140) {
        objectcircle1.removeClass('active');
        objectcircle2.removeClass('active');
        objectcircle3.removeClass('active');

        // Sec2 h2를 보이고, 투영하게    
        Sec2title.addClass('active');
      }
      if (scrollTop > 2182) {
        // Sec2 h2를 보이고, 투영하게  
        Sec2title.css({
          'color': 'rgba(255, 255, 255, 0)',
          'text-shadow': '0 0 12px rgba(255,255,255,0.8)'  // 글자 투영 효과
        }); // 수정 
      }
    }  
  });

  

  /* SECTION3 */

  AOS.init({
    duration: 1200,
    easing: 'ease-in-out-back'
  });

  let Sec3_introtxt = $('.Sec3_introtxt');
  $(window).scroll(function(){    
    let scrollTop = $(window).scrollTop();    //윈도우 객체의 scrollY속성을 사용하여 스크롤 양을 로드  
    // 스크롤 양이 이전 스크롤 양보다 큰 경우
    if (scrollTop > scrollmat) {       
      if (scrollTop > 2672) {        
        Sec3_introtxt.css({
          opacity:'1'
        })
      } 
    }  
  });


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

  let rotateDirectionplus = 1; //시계방향
  let rotateDirectionminus = -1; //반시계방향
  let value = "";



  // TweenMax.to(square, 3, {rotation:"360", ease:Linear.easeNone, repeat:-1});

  //자동회전 함수 
  // autoRotate 함수는 마우스가 요소 위에 올려져 있지 않을 때, cube를 3초에 한 번씩 360도씩 회전시킵니다.
  // function autoRotate() {
  //   if (!isHovered) {
  //   TweenMax.to(square, 3, {rotation:"360", ease:Linear.easeNone, repeat:-1});
  //   }
  // }
  // 자동회전 함수
  function Rotate(direction) {
    if (direction == 'cw') {
      value = "+=360";
    } else {
      value = "-=360";

    }
    autoRotateInterval = setInterval(() => {
      TweenMax.to(square, 3, { rotation: value, ease: Linear.easeNone });
    }, 3000);
  }

  function StopRotate() {
    clearInterval(autoRotateInterval);
  }


  

  //커서에 따라 회전하는 함수
  // rotateCube 함수는 마우스의 위치에 따라 cube를 회전시킵니다.

  // function rotateCube(e) { 
  //   let cubeparentX = (e.clientX - cubeparent.offset().left) - (cubeparent.width() / 2) ;
  //   let cubeparentY = (e.clientY - cubeparent.offset().top) - (cubeparent.height() / 2) ;
  //   let q = 0.15;

  //   let cubeRotateX = -cubeparentY * q;
  //   let cubeRotateY = cubeparentX * q;
    
  //   square.css({
  //       transform: 
  //       'rotateX(' + cubeRotateX + 'deg) rotateY(' + cubeRotateY + 'deg)'
  //     });
  // }


  //원형에 마우스 호버 시 stopautorotate 함수 실행
  // square.mouseenter(function(e){
  //   isHovered = true;
  //   StopRotate();
  //   // rotateCube(e);
  //   clearInterval(autoRotateInterval);
  // });

  //원형에 마우스 빠져나가면 isHovered변수를 false로 설정 후 자동 회전 다시 시작
  // square.mouseleave(function(){
  //   isHovered = false;
  //   autoRotate();
  // });

  // // rotateCube 함수는 마우스 위치에 따라 cube를 회전시킵니다.
  // $(document).mousemove(function(e){
  //   // rotateCube(e);
  // });

  
  // autoRotate();




  $('.rotate_left').dblclick(function(){           
    square.removeAttr('class');
    square.addClass('cube ccw2');
  });
  $('.rotate_right').dblclick(function(){
    square.removeAttr('class');
    square.addClass('cube cw2');
  });
  $('.rotate_left').click(function(){       
    square.removeAttr('class');
    square.addClass('cube ccw');
  });
  $('.rotate_right').click(function(){
    square.removeAttr('class');
    square.addClass('cube cw');
  });
  
  $('.cube').click(function(){    
    $(this).toggleClass('cw');      
  });
  
  $('.rotate_stop').click(function(){
    StopRotate();    
  });
  $('.rotate_start').click(function(){        
    Rotate('cw');
  });




  /* SECTION4 */

  let Sec4txtodd = $('.Sec4_txtgroup_odd');
  let Sec4txteven = $('.Sec4_txtgroup_even');
  let currenttxtX = 0;
  let oddtxtoX = 0;   
  

  //주어진 코드는 윈도우를 스크롤할 때 발생하는 이벤트 핸들러입니다.
  $(window).scroll(function(){    
    let scrollTop = $(window).scrollTop();    //윈도우 객체의 scrollY속성을 사용하여 스크롤 양을 로드  
    // 스크롤 양이 이전 스크롤 양보다 큰 경우
    if (scrollTop > scrollmat) {       
      if (scrollTop > 6800) {
        console.log('텍스트 스크롤 작동');
        // scale과 translateY 값을 각각 0.01씩 증가시킵니다.       
        oddtxtoX +=1;
        currenttxtX +=1;   
        Sec4txtodd.css({'transform': `translateX(${10 * oddtxtoX}px)`});
        Sec4txteven.css({'transform':`translateX(${-10 * currenttxtX}px)`});
      }
    }  
  });


 /* SECTION6 */
 $('.multiple-slider').slick({
  infinite: true,
  slidesToShow: 7,
  slidesToScroll: 1,
  dots: true, // 페이저 (도트) 활성화
    prevArrow: '<button type="button" class="slick-prev">Previous</button>', // 이전 버튼 커스텀
    nextArrow: '<button type="button" class="slick-next">Next</button>' // 다음 버튼 커스텀
});

/* SECTION9 */
$('.Guide-Rules').slick({  
  autoplaySpeed: 100,   
  variableWidth: true,  //텍스트 글자가 서로다를 경우
  slidesToShow: 4,  //보여질 갯수
  autoplay: true, //자동실행 
  autoplaySpeed: 0,  //자동실행 속도
  speed: 10000,  //돌아가는 속도
  cssEase: 'linear',  //속도 방식   
  infinite: true,      // 무한반복
  focusOnSelect: false, 
  loop: true,
  infinite:true,
  arrows:false,
  pauseOnHover: true
});


/* cursor */
$('a').mouseenter(function(){
  $(this).css({
    cursor: 'url("/img/cabi_cursor_hover.png"), auto',
  });
});
  $('a').mousedown(function(){
  $(this).css({cursor: 'url("/img/cabi_cursor_click.png"), auto'
});
  });
  $('a').mouseup(function(){
  $(this).css({cursor: 'url("/img/cabi_cursor.png"), auto'
});
  });



  /* SECTION8 */
  let mapContainer = $('#map'); // 지도를 표시할 div 
  let mapOption = { 
      center: new kakao.maps.LatLng(37.293327, 127.201322), // 캐리비안베이 중심좌표
      level: 3 // 지도의 확대 레벨
  };

  // 지도를 표시할 div와  지도 옵션으로  지도를 생성합니다
  let map = new kakao.maps.Map(mapContainer[0], mapOption); 

  