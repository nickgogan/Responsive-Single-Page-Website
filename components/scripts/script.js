var $ = require('jquery');

$(function () {
  var wheight = $(window).height();
  $('.fullheight').css('height', wheight);

  //Window height
  $(window).resize(function() {
    var wheight = $(window).height();
    $('.fullheight').css('height', wheight);
  });

  /*********************************************************
     ANIMATIONS
     *********************************************************/
  //Tween Animation
  var topoffset = 43;
  var attractionsTween = TweenMax.staggerFromTo('#attractions article', 1, {opacity: 0, scale: 0}, {delay: 1, opacity: 1, scale: 1, ease: Back.easeOut});
  //Tween Animation - Instantiate configured scroll controller.
  var controller = new ScrollMagic({
    globalSceneOptions: {
      triggerHook: 'onLeave',

    }
  });
    //Tween Animation - Add part of HTML to scroll controller.
  var scene = new ScrollScene({
    triggerElement: '#attractions',
    offset: -topoffset,
  }).setTween(attractionsTween).addTo(controller);

    //Pin nav bar to top of the window
  var pin  = new ScrollScene({
    triggerElement: '#nav'
  }).setPin('#nav').addTo(controller);

    //Smooth Scrolling
  $('a[href*="#"]')
  // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
        // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000,
          function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(':focus')) { // Checking if the target was focused
              return false;
            }
            else {
              $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
              $target.focus(); // Set focus again
            }
          });
        }
      }
    });

  //Highlight currently-seen nav tab
  $(window).scroll(function() {
    var windowPOS = $(window).scrollTop() + topoffset;
    $('nav li a').removeClass('active');
    if (windowPOS > $('#hotelinfo').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#hotelinfo"]').addClass('active');
    }
    if (windowPOS > $('#rooms').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#rooms"]').addClass('active');
    }
    if (windowPOS > $('#dining').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#dining"]').addClass('active');
    }
    if (windowPOS > $('#events').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#events"]').addClass('active');
    }
    if (windowPOS > $('#attractions').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#attractions"]').addClass('active');
    }
  });
});