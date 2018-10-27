"use strict";

$(document).ready(function(){   

	let navbar = $('#navbar');
    let content = $('#content');
    let navbarCollapse = $('#navbarCollapse');
    let listItem = $('.listItem');
    let menu = $('#menu');
    let collapsible = $('.collapsible');
    let chevDown = $('.fa-chevron-down');
    let chevUp = $('.fa-chevron-up');
    let navbarDrop = $(".dropdown-trigger");

    
    navbarCollapse.click( function(){
        navbar.toggleClass('active');
        content.toggleClass('active');
        navbarCollapse.toggleClass('active');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        menu.toggleClass('fa-bars fa-times');
    });


    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

   
    //for bball
    $(".bball-slideshow-container .nextBball").click(function(){
        if(bballSlideIndex == $(".bballSlides").length)
            showSlides($(".bballSlideShowDots .bballDot"), $(".bballSlides"), bballSlideIndex = 1);
        else
            showSlides($(".bballSlideShowDots .bballDot"), $(".bballSlides"), bballSlideIndex += 1);
    });

    $(".bball-slideshow-container .prevBball").click(function(){
        if(bballSlideIndex == 1)
            showSlides($(".bballSlideShowDots .bballDot"), $(".bballSlides"), bballSlideIndex = $(".bballSlides").length);
        else
            showSlides($(".bballSlideShowDots .bballDot"), $(".bballSlides"), bballSlideIndex -= 1);
    });
    //*/




});


//for bball
var bballSlideIndex = 1;
var bSlides = $(".bballSlides");
var bDots = $(".bballSlideShowDots .bballDot");
showSlides(bDots, bSlides, bballSlideIndex);
function bballSlide(n){
    showSlides(bDots, bSlides, bballSlideIndex = n);   
}
//*


//

function plusSlides(d, s, n) { 
  showSlides(d, s, slideIndex += n);
}



function showSlides(dots, slides, n) {
  var i; 
  if(n > slides.length){ n = 1} 
  if (n < 1) {n = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace("active", "");
  }  
  slides[n-1].style.display = "block";  
  dots[n-1].className += " active";

}
