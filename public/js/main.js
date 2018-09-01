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

    //project dropdown trigger
    navbarDrop.dropdown();
    
    navbarCollapse.click( function(){
        navbar.toggleClass('active');
        content.toggleClass('active');
        navbarCollapse.toggleClass('active');
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
        menu.toggleClass('fa-bars fa-times');
    });

    collapsible.click( function(){
        chevDown.toggleClass('fa-chevron-down fa-chevron-up');
    });

    // listItem.click( function(){
    //     collapseSidebar2();
    // });

    // collapseSidebar();
    $( window ).resize( function() {
        collapseNavbar();
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    //open projects
    let projectDrop = $('#projectDropdown');
    let projectDropShow = $('#projectDropdownContents');

    //toggle dropdown
    projectDrop.click(function(){    		
    	$(this).find("i").toggleClass("fa fa-forward fa fa-backward");
    	if (projectDropShow[0].style.display === "block") 
    		projectDropShow[0].style.display = "none";
    	else
    		projectDropShow[0].style.display = "block";
    }); 

    //forward and back on DoItEarly slides
    $(".slideshow-container .next").click(function(){
      showSlides($(".dot"), $(".mySlides"), slideIndex +=1); 
    }); ;   

    $(".slideshow-container .prev").click(function(){
      showSlides($(".dot"), $(".mySlides"), slideIndex -=1); 
    }); 
    //*/

    //forward and back on nbaPy slides
    $(".nbaPy-slideshow-container .next").click(function(){
      showSlides($(".nbaPydot"), $(".nbaPySlides"), slideIndex +=1); 
    }); ;   

    $("nbaPy-slideshow-container .prev").click(function(){
      showSlides($(".nbaPydot"), $(".nbaPySlides"), slideIndex -=1); 
    }); 
    //*/


});

function collapseNavbar() {
    let navbar = $('#navbar');
    let content = $('#content');
    let sidebarCollapse = $('#navbarCollapse');
    let menu = $('#menu');
    let collapsible = $('.collapsible');
    let chevDown = $('.fa-chevron-down');
    let chevUp = $('.fa-chevron-up');
    if ($(window).width() <= 600) {
        collapseNavbar2();
    }
}

//for DoItEarly
var slideIndex = 1;
var slides = $(".mySlides");
var dots = $(".dot");
showSlides(dots, slides, slideIndex);
function doItEarlySlide(n) {  
  showSlides($(".dots"), $(".mySlides"), slideIndex = n);
}
//*

//for NBAPy
var nbaPySlideIndex = 1;
var nSlides = $(".nbaPySlides");
var nDots = $(".nbaPydot");
showSlides(nDots, nSlides, nbaPySlideIndex);
//*

function plusSlides(d, s, n) { 
  showSlides(d, s, slideIndex += n);
}



function showSlides(dot, slides, n) {
  var i;
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}





// function collapseSidebar2() {
//     let sidebar = $('#sidebar');
//     let content = $('#content');
//     let sidebarCollapse = $('#sidebarCollapse');
//     let menu = $('#menu');
//     sidebar.addClass('active');
//     sidebarCollapse.removeClass('active');
//     content.addClass('active');
//     menu.removeClass('fa fa-times').addClass('fa fa-bars');
// }


