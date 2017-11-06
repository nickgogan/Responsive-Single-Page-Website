$(function() {
<<<<<<< HEAD
  'use strict';

  var topoffset = 43;
  var isTouch = 'ontouchstart' in document.documentElement;

  //window height
  var wheight = $(window).height(); //get height of the window

  $('.fullheight').css('height', wheight);

  $(window).resize(function() {
    var wheight = $(window).height(); //get height of the window
    $('.fullheight').css('height', wheight);
  }); //on resize


// Animated Scrolling
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top-topoffset
        }, 1000);
        return false;
      } // target.length
    } //location hostname
  }); //on click

  //highlight navigation
  $(window).scroll(function() {
    var windowpos = $(window).scrollTop() + topoffset;
    $('nav li a').removeClass('active');

    if (windowpos > $('#hotelinfo').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#hotelinfo"]').addClass('active');
    } //windowpos

    if (windowpos > $('#rooms').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#rooms"]').addClass('active');
    } //windowpos

    if (windowpos > $('#dining').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#dining"]').addClass('active');
    } //windowpos

    if (windowpos > $('#events').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#events"]').addClass('active');
    } //windowpos

    if (windowpos > $('#attractions').offset().top) {
      $('nav li a').removeClass('active');
      $('a[href$="#attractions"]').addClass('active');
    } //windowpos

  }); //window scroll




  //set up ScrollMagic
  var controller = new ScrollMagic({
    globalSceneOptions: {
      triggerHook: 'onLeave'
    }
  });

  //pin the navigation
  var pin = new ScrollScene({
    triggerElement: '#nav',
  }).setPin('#nav').addTo(controller);


  if(!isTouch) {
    //room animations
    var roomOrigin = {
      bottom: -700,
      opacity: 0,
      scale: 0
    };

    var roomDest = {
      repeat: 1,
      yoyo: true,
      bottom: 0,
      opacity: 1,
      scale: 1,
      ease: Back.easeOut
    };

    var roomtween = TweenMax.staggerFromTo(
      '#westminster .content',
      1, roomOrigin, roomDest);

    pin = new ScrollScene({
      triggerElement: '#westminster',
      offset: -topoffset,
      duration: 500
    }).setPin('#westminster')
      .setTween(roomtween)
      .addTo(controller);


    roomtween = TweenMax.staggerFromTo(
      '#oxford .content',
      1, roomOrigin, roomDest);

    pin = new ScrollScene({
      triggerElement: '#oxford',
      offset: -topoffset,
      duration: 500
    }).setPin('#oxford')
      .setTween(roomtween)
      .addTo(controller);

    roomtween = TweenMax.staggerFromTo(
      '#victoria .content',
      1, roomOrigin, roomDest);

    pin = new ScrollScene({
      triggerElement: '#victoria',
      offset: -topoffset,
      duration: 500
    }).setPin('#victoria')
      .setTween(roomtween)
      .addTo(controller);

    roomtween = TweenMax.staggerFromTo(
      '#manchester .content',
      1, roomOrigin, roomDest);

    pin = new ScrollScene({
      triggerElement: '#manchester',
      offset: -topoffset,
      duration: 500
    }).setPin('#manchester')
      .setTween(roomtween)
      .addTo(controller);

    roomtween = TweenMax.staggerFromTo(
      '#piccadilly .content',
      1, roomOrigin, roomDest);

    pin = new ScrollScene({
      triggerElement: '#piccadilly',
      offset: -topoffset,
      duration: 500
    }).setPin('#piccadilly')
      .setTween(roomtween)
      .addTo(controller);


    roomtween = TweenMax.staggerFromTo(
      '#cambridge .content',
      1, roomOrigin, roomDest);

    pin = new ScrollScene({
      triggerElement: '#cambridge',
      offset: -topoffset,
      duration: 500
    }).setPin('#cambridge')
      .setTween(roomtween)
      .addTo(controller);
  } //not a touch device


  //atractions animation
  var attractionstween = TweenMax.staggerFromTo('#attractions article', 1, { opacity: 0, scale: 0 },
      {delay: 1, opacity: 1, scale: 1,
        ease: Back.easeOut});


  var scene = new ScrollScene({
    triggerElement: '#attractions',
    offset: -topoffset
  }).setTween(attractionstween)
    .addTo(controller);
}); //on load
=======
    var wheight = $(window).height();
    $('.fullheight').css('height', wheight);

    //Window height 
    $(window).resize(function() {
        var wheight = $(window).height();
        $('.fullheight').css('height', wheight);
    });

    //Tween Animation
    var topoffset = 43;
    var attractionsTween = TweenMax.staggerFromTo('#attractions article', 1, {opacity: 0, scale: 0}, {delay: 1, opacity: 1, scale: 1, ease: Back.easeOut});
    //Tween Animation - Instantiate configured scroll controller.
    var controller = new ScrollMagic({
        globalSceneOptions: {
            triggerHook: "onLeave",

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
            if ($target.is(":focus")) { // Checking if the target was focused
            return false;
            } 
            else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
            };
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
>>>>>>> start
