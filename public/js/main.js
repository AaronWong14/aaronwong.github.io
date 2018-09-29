"use strict";

$(document).ready(function(){
    var rellax = new Rellax('.rellax');

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

    // collapsible.click( function(){
    //     chevDown.toggleClass('fa-chevron-down fa-chevron-up');
    // });

    // listItem.click( function(){
    //     collapseSidebar2();
    // });

    // collapseSidebar();
    // $( window ).resize( function() {
    //     collapseNavbar();
    // });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });


    //open projects
    // let projectDrop = $('#projectDropdown');
    // let projectDropShow = $('#projectDropdownContents');

    //toggle dropdown
    // projectDrop.click(function(){    		
    // 	$(this).find("i").toggleClass("fa fa-forward fa fa-backward");
    // 	if (projectDropShow[0].style.display === "block") 
    // 		projectDropShow[0].style.display = "none";
    // 	else
    // 		projectDropShow[0].style.display = "block";
    // }); 

    //forward and back on DoItEarlyFind slides
    $(".do-it-early-findings-slideshow-container .nextFind").click(function(){
      if(findSlideIndex == $(".mySlidesFind").length)
        showSlides($(".dotFind .findingDot"), $(".mySlidesFind"), findSlideIndex = 1); 
      else
        showSlides($(".dotFind .findingDot"), $(".mySlidesFind"), findSlideIndex +=1); 
    });    

    $(".do-it-early-findings-slideshow-container .prevFind").click(function(){
      if(findSlideIndex == 1)
        showSlides($(".dotFind .findingDot"), $(".mySlidesFind"), findSlideIndex = $(".mySlidesFind").length);
      else
         showSlides($(".dotFind .findingDot"), $(".mySlidesFind"), findSlideIndex -=1);
    }); 
    //*/

    //forward and back on DoItEarly slides
    $(".slideshow-container .next").click(function(){
      //edgecase: click next at end of slideshow (loop back to slide 1)  
      if(slideIndex == $(".mySlides").length)
         showSlides($(".slideShowDots .dot"), $(".mySlides"), slideIndex = 1);
      else       
        showSlides($(".slideShowDots .dot"), $(".mySlides"), slideIndex +=1); 
    });    

    $(".slideshow-container .prev").click(function(){
      //edgecase: click next at start of slideshow (loop back to last slide)
        if(slideIndex == 1)
            showSlides($(".slideShowDots .dot"), $(".mySlides"), slideIndex = $(".mySlides").length); 
        else
            showSlides($(".slideShowDots .dot"), $(".mySlides"), slideIndex -=1); 
    }); 
    //*/

    //forward and back on nbaPy slides
    $(".nbaPy-slideshow-container .rowSSnext").click(function(){    
        if(nbaPySlideIndex == $(".nbaPySlides").length)
            showSlides($(".nbaPySlideShowDots .nbaPyDot"), $(".nbaPySlides"), nbaPySlideIndex = 1);
        else
            showSlides($(".nbaPySlideShowDots .nbaPyDot"), $(".nbaPySlides"), nbaPySlideIndex += 1);  
    }); 

    $(".nbaPy-slideshow-container .rowSSprev").click(function(){     
        if(nbaPySlideIndex == 1)
            showSlides($(".nbaPySlideShowDots .nbaPyDot"), $(".nbaPySlides"), nbaPySlideIndex = $(".nbaPySlides").length);
        else
            showSlides($(".nbaPySlideShowDots .nbaPyDot"), $(".nbaPySlides"), nbaPySlideIndex -= 1); 
    }); 
    //*/

    //for pantry
    $(".pantry-slideshow-container .nextPantry").click(function(){
        if(pantrySlideIndex == $(".pantrySlides").length)
            showSlides($(".pantrySlideShowDots .pantryDot"), $(".pantrySlides"), pantrySlideIndex = 1);
        else
            showSlides($(".pantrySlideShowDots .pantryDot"), $(".pantrySlides"), pantrySlideIndex += 1);
    });

    $(".pantry-slideshow-container .prevPantry").click(function(){
        if(pantrySlideIndex == 1)
            showSlides($(".pantrySlideShowDots .pantryDot"), $(".pantrySlides"), pantrySlideIndex = $(".pantrySlides").length);
        else
            showSlides($(".pantrySlideShowDots .pantryDot"), $(".pantrySlides"), pantrySlideIndex -= 1);
    });

    //*/

     //for ucsd
    $(".ucsd-slideshow-container .nextUCSD").click(function(){
        if(ucsdSlideIndex == $(".ucsdSlides").length)
            showSlides($(".ucsdSlideShowDots .ucsdDot"), $(".ucsdSlides"), ucsdSlideIndex = 1);
        else
            showSlides($(".ucsdSlideShowDots .ucsdDot"), $(".ucsdSlides"), ucsdSlideIndex += 1);
    });

    $(".ucsd-slideshow-container .prevUCSD").click(function(){
        if(ucsdSlideIndex == 1)
            showSlides($(".ucsdSlideShowDots .ucsdDot"), $(".ucsdSlides"), ucsdSlideIndex = $(".ucsdSlides").length);
        else
            showSlides($(".ucsdSlideShowDots .ucsdDot"), $(".ucsdSlides"), ucsdSlideIndex -= 1);
    });

    //*/



});

//hide doItEarlySection
function doItEarlyCollapse(){
        
}


// function collapseNavbar() {
//     let navbar = $('#navbar');
//     let content = $('#content');
//     let sidebarCollapse = $('#navbarCollapse');
//     let menu = $('#menu');
//     let collapsible = $('.collapsible');
//     let chevDown = $('.fa-chevron-down');
//     let chevUp = $('.fa-chevron-up');
//     if ($(window).width() <= 600) {
//         collapseNavbar2();
//     }
// }


//for DoItEarlyFind slideShow init
var findSlideIndex = 1;
var fSlides = $(".mySlidesFind");
var fDots = $(".dotFind .findingDot");
showSlides(fDots, fSlides, findSlideIndex);

function doItEarlyFindSlide(n) {   
  showSlides(fDots, fSlides, findSlideIndex = n);
}

//for DoItEarly
var slideIndex = 1;
var slides = $(".mySlides");
var dots = $(".slideShowDots .dot");
showSlides(dots, slides, slideIndex);
function doItEarlySlide(n) {
  showSlides(dots, slides, slideIndex = n);
}
//*

//for NBAPy
var nbaPySlideIndex = 1;
var nSlides = $(".nbaPySlides");
var nDots = $(".nbaPySlideShowDots .nbaPyDot");
showSlides(nDots, nSlides, nbaPySlideIndex);
function nbaPySlide(n){
  showSlides(nDots, nSlides, nbaPySlideIndex = n);
}
//*

//for Pantry
var pantrySlideIndex = 1;
var pSlides = $(".pantrySlides");
var pDots = $(".pantrySlideShowDots .pantryDot");
showSlides(pDots, pSlides, pantrySlideIndex);
function pantrySlide(n){
    showSlides(pDots, pSlides, pantrySlideIndex = n);
}
//*

//for UCSD
var ucsdSlideIndex = 1;
var uSlides = $(".ucsdSlides");
var uDots = $(".ucsdSlideShowDots .ucsdDot");
showSlides(uDots, uSlides, ucsdSlideIndex);
function pantrySlide(n){
    showSlides(uDots, uSlides, ucsdSlideIndex = n);
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

//collapse doItEarly
function doItEarlyCollapse(){


    var die = $(".doItEarly");
    if (die[0].style.display === "none") {
        die.fadeIn({duration: 1000, queue: false});  
        die.animate({marginTop: '+=100vh',duration: 1000, queue: false});             
        $("#dieToggle").text("Minimize this section"); 
    } else {
        die.animate({marginTop: '-=100vh', duration:1000, queue: false});
        $(".doItEarly").fadeOut({duration: 1000, queue: false});
        $("#dieToggle").text("Maximize this section"); 
    }


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





