/*! Page transition code borrowed from the following free bootstrap template:
 * Start Bootstrap - Grayscale v5.0.2 (https://startbootstrap.com/template-overviews/grayscale)
 * Copyright 2013-2018 Start Bootstrap
 * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap-grayscale/blob/master/LICENSE)
 */
!function(e){
    "use strict";
    e('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){
            var a=e(this.hash);
            if((a=a.length?a:e("[name="+this.hash.slice(1)+"]")).length)return e("html, body").animate({
                scrollTop:a.offset().top-70
            },1e3,"easeInOutExpo"),!1
        }
    }),e(".js-scroll-trigger").click(function(){
        e(".navbar-collapse").collapse("hide")
    }),e("body").scrollspy({
        target:"#mainNav",offset:100
        });
    var a=function(){
        100<e("#mainNav").offset().top?e("#mainNav").addClass("navbar-shrink"):e("#mainNav").removeClass("navbar-shrink")
    };
    a(),e(window).scroll(a)
}(jQuery);




//ACTIVE NAVBAR FORMATTING
$(".navbar .navbar-nav").on("click", function(){
   $("li").find(".active").removeClass("active");
   $(this).addClass("active");
});

/****************** PARALLAX SCROLLING ***********************/

const parallax = document.getElementById("parallax");
window.addEventListener("scroll", function()
                        {
    let offset = window.pageYOffset;
    console.log('offset:' + offset);
    console.log('offset * 0.7' + offset * 0.5);
    parallax.style.backgroundPositionY = offset * 0.5 + "px";
})

/****************** PERSONAS LIGHTBOX ***********************/
//
//
//// Open the Modal
//function openModal() {
//  document.getElementById('myModal').style.display = "block";
//}
//
//// Close the Modal
//function closeModal() {
//  document.getElementById('myModal').style.display = "none";
//}
//
//var slideIndex = 1;
//showSlides(slideIndex);
//
//// Next/previous controls
//function plusSlides(n) {
//  showSlides(slideIndex += n);
//}
//
//// Thumbnail image controls
//function currentSlide(n) {
//  showSlides(slideIndex = n);
//}
//
//function showSlides(n) {
//  var i;
//  var slides = document.getElementsByClassName("mySlides");
//  var dots = document.getElementsByClassName("demo");
//  var captionText = document.getElementById("caption");
//  if (n > slides.length) {slideIndex = 1}
//  if (n < 1) {slideIndex = slides.length}
//  for (i = 0; i < slides.length; i++) {
//    slides[i].style.display = "none";
//  }
//  for (i = 0; i < dots.length; i++) {
//    dots[i].className = dots[i].className.replace(" active", "");
//  }
//  slides[slideIndex-1].style.display = "block";
//  dots[slideIndex-1].className += " active";
//  captionText.innerHTML = dots[slideIndex-1].alt;
//}
//
