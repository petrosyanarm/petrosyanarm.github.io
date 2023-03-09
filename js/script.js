$(function(){
	$('#btn_menu2').click(function(){
		$('#menu2_ul').fadeToggle()
	})
	$('#user').click(function(){
		$('#login_form').show(500)
	})
	$('#login_close').click(function(){
		$('#login_form').hide(500)
	})
	$('#part3_graph').click(function(){
		$('#images_all').hide(1000)
		$('#images_UI_UX').hide(1000)
		$('#images_branding').hide(1000)
		$('#images_graphics').show(1000)
		$('#images_graphics').css({'display':'flex','justify-content':'space-between'})
		$('#part3_all').css({'background':'none','border-radius':'0px'})	
	})
	$('#part3_ui').click(function(){
		$('#images_all').hide(1000)
		$('#images_graphics').hide(1000)
		$('#images_branding').hide(1000)
		$('#images_UI_UX').show(1000)
		$('#images_UI_UX').css({'display':'flex','justify-content':'space-between','flex-wrap':'wrap'})
		$('#part3_all').css({'background':'none','border-radius':'0px'})
	})
	$('#part3_brand').click(function(){
		$('#images_all').hide(1000)
		$('#images_graphics').hide(1000)
		$('#images_UI_UX').hide(1000)
		$('#images_branding').show(1000)
		$('#images_branding').css({'display':'flex','justify-content':'space-between','flex-wrap':'wrap'})
		$('#part3_all').css({'background':'none','border-radius':'0px'})
	})
	$('#part3_all').click(function(){
		$('#images_all').show(1000)
		$('#images_graphics').hide(1000)
		$('#images_UI_UX').hide(1000)
		$('#images_branding').hide(1000)
	})
	$('#part2_bus').click(function(){
		$('.work_part2_cards_all').hide()
		$('.work_part2_cards_marketing').hide()
		$('.work_part2_cards_social').hide()
		$('.work_part2_cards_graphic').hide()
		$('.work_part2_cards_business').show()
		$('.work_part2_cards_business').css({'display':'flex','justify-content':'space-between','flex-wrap':'wrap'})
	})
	$('#part2_mark').click(function(){
		$('.work_part2_cards_all').hide()
		$('.work_part2_cards_business').hide()
		$('.work_part2_cards_social').hide()
		$('.work_part2_cards_graphic').hide()
		$('.work_part2_cards_marketing').show()
		$('.work_part2_cards_marketing').css({'display':'flex','justify-content':'space-between','flex-wrap':'wrap'})
	})
	$('#part2_social').click(function(){
		$('.work_part2_cards_all').hide()
		$('.work_part2_cards_business').hide()
		$('.work_part2_cards_marketing').hide()
		$('.work_part2_cards_graphic').hide()
		$('.work_part2_cards_social').show()
		$('.work_part2_cards_social').css({'display':'flex','flex-wrap':'wrap'})
	})
	$('#part2_graphic').click(function(){
		$('.work_part2_cards_all').hide()
		$('.work_part2_cards_business').hide()
		$('.work_part2_cards_marketing').hide()
		$('.work_part2_cards_social').hide()
		$('.work_part2_cards_graphic').show()
		$('.work_part2_cards_graphic').css({'display':'flex','flex-wrap':'wrap'})
	})
	$('#part2_all').click(function(){
		$('.work_part2_cards_business').hide()
		$('.work_part2_cards_marketing').hide()
		$('.work_part2_cards_social').hide()
		$('.work_part2_cards_graphic').hide()
		$('.work_part2_cards_all').show()
		$('.work_part2_cards_all').css({'display':'flex','flex-wrap':'wrap'})
	})


		// var submit = document.getElementById('submit');
		// submit.addEventListener('click', validate);
		$('#submit').click(function validate() {
		let username = $('#username').val();
		let password = $('#pass').val();
	
 	 	if (username === "" || username === null) {
    		intensify($('#username'));
				return false;
  	}	
  
		if (password === "" || password === null) {
				intensify($('#pass'));

					return false;
		  }
		})


		function intensify() {
				var x = document.createElement("span")
				$(x).html("Invalid email format")
				$(x).css("position","absolute")
				$(x).css("fontSize","12px")
				$(x).css("top","90px")
				$(x).css("left","25px")
				$(x).css("color","red")
				$('#login_form').append(x)
		};


		
})




let home_part3_a=document.getElementsByClassName('part3_a1')
function home_cards(part3_li){
	for (var i = 0; i < home_part3_a.length; i++) {
		home_part3_a[i].setAttribute('style',"border-radius:20px; color: white; text-decoration: none; background:none;")
	}
	part3_li.setAttribute('style',"border-radius: 20px;color: white;text-decoration: none;background: #4232c2;")
}


let work_part2_a=document.getElementsByClassName('part2_a1')
function work_card(work_part2_li){
	for (var i = 0; i < work_part2_a.length; i++) {
		work_part2_a[i].setAttribute('style',"border-radius:20px; color: #4232c2; text-decoration: none; background:none")
	}
	work_part2_li.setAttribute('style',"border-radius: 20px; color: white;text-decoration: none;background: #4232c2;")
}


// Carusel SetInterval

// var slidess= document.querySelectorAll('.slide')
// var num=0
// setInterval(function c(){
// 		num++
// 	for (var i = 0; i < slidess.length; i++) {
// 		if (num==i) {
// 			slidess[i]
// 		}
// 	}
// },2000)


// Carusel

var carousel = document.querySelector('.carousel');
var carouselContent = document.querySelector('.carousel-content');
var slides = document.querySelectorAll('.slide');
var arrayOfSlides = Array.prototype.slice.call(slides);
var carouselDisplaying;
var screenSize;
setScreenSize();
var lengthOfSlide;

function addClone() {
   var lastSlide = carouselContent.lastElementChild.cloneNode(true);
   lastSlide.style.left = (-lengthOfSlide) + "px";
   carouselContent.insertBefore(lastSlide, carouselContent.firstChild);
}
// addClone();

function removeClone() {
  var firstSlide = carouselContent.firstElementChild;
  firstSlide.parentNode.removeChild(firstSlide);
}

function moveSlidesRight() {
  var slides = document.querySelectorAll('.slide');
  var slidesArray = Array.prototype.slice.call(slides);
  var width = 0;

  slidesArray.forEach(function(el, i){
    el.style.left = width + "px";
    width += lengthOfSlide;
  });
  addClone();
}
moveSlidesRight();

function moveSlidesLeft() {
  var slides = document.querySelectorAll('.slide');
  var slidesArray = Array.prototype.slice.call(slides);
  slidesArray = slidesArray.reverse();
  var maxWidth = (slidesArray.length - 1) * lengthOfSlide;

  slidesArray.forEach(function(el, i){
    maxWidth -= lengthOfSlide;
    el.style.left = maxWidth + "px";
  });
}

window.addEventListener('resize', setScreenSize);

function setScreenSize() {
  if ( window.innerWidth >= 500 ) {
    carouselDisplaying = 1;
  } else if ( window.innerWidth >= 300 ) {
    carouselDisplaying = 2;
  } else {
    carouselDisplaying = 1;
  }
  getScreenSize();
}

function getScreenSize() {
  var slides = document.querySelectorAll('.slide');
  var slidesArray = Array.prototype.slice.call(slides);
  lengthOfSlide = ( carousel.offsetWidth  / carouselDisplaying );
  var initialWidth = -lengthOfSlide;
  slidesArray.forEach(function(el) {
    el.style.width = lengthOfSlide + "px";
    el.style.left = initialWidth + "px";
    initialWidth += lengthOfSlide;
  });
}


var rightNav = document.querySelector('.nav-right');
rightNav.addEventListener('click', moveLeft);

var moving = true;
function moveRight() {
  if ( moving ) {
    moving = false;
    var lastSlide = carouselContent.lastElementChild;
    lastSlide.parentNode.removeChild(lastSlide);
    carouselContent.insertBefore(lastSlide, carouselContent.firstChild);
    removeClone();
    var firstSlide = carouselContent.firstElementChild;
    firstSlide.addEventListener('transitionend', activateAgain);
    moveSlidesRight();
  }
}

function activateAgain() {
  var firstSlide = carouselContent.firstElementChild;
  moving = true;
  firstSlide.removeEventListener('transitionend', activateAgain);
}

var leftNav = document.querySelector('.nav-left');
leftNav.addEventListener('click', moveRight);

// var moveLeftAgain = true;

function moveLeft() {
  if ( moving ) {
    moving = false;
    removeClone();
    var firstSlide = carouselContent.firstElementChild;
    firstSlide.addEventListener('transitionend', replaceToEnd);
    moveSlidesLeft();
  }
}

function replaceToEnd() {
  var firstSlide = carouselContent.firstElementChild;
  firstSlide.parentNode.removeChild(firstSlide);
  carouselContent.appendChild(firstSlide);
  firstSlide.style.left = ( (arrayOfSlides.length -1) * lengthOfSlide) + "px";
  addClone();
  moving = true;
  firstSlide.removeEventListener('transitionend', replaceToEnd);
}

carouselContent.addEventListener('mousedown', seeMovement);

var initialX;
var initialPos;
function seeMovement(e) {
  initialX = e.clientX;
  getInitialPos();
  carouselContent.addEventListener('mousemove', slightMove);
  document.addEventListener('mouseup', moveBasedOnMouse);
}

function slightMove(e) {
  if ( moving ) {
    var movingX = e.clientX;
    var difference = initialX - movingX;
    if ( Math.abs(difference) < (lengthOfSlide/4) ) {
      slightMoveSlides(difference);
    }  
  }
}

function getInitialPos() {
  var slides = document.querySelectorAll('.slide');
  var slidesArray = Array.prototype.slice.call(slides);
  initialPos = [];
  slidesArray.forEach(function(el){
    var left = Math.floor( parseInt( el.style.left.slice(0, -2 ) ) ); 
    initialPos.push( left );
  });
}

function slightMoveSlides(newX) {
  var slides = document.querySelectorAll('.slide');
  var slidesArray = Array.prototype.slice.call(slides);
  slidesArray.forEach(function(el, i){
    var oldLeft = initialPos[i];
    el.style.left = (oldLeft + newX) + "px";
  });
}

function moveBasedOnMouse(e) { 
  var finalX = e.clientX;
  if ( initialX - finalX > 0) {
    moveRight();
  } else if ( initialX - finalX < 0 ) {
    moveLeft();
  }
  document.removeEventListener('mouseup', moveBasedOnMouse);
  carouselContent.removeEventListener('mousemove', slightMove);
}