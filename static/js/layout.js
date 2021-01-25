$(document).ready(function(){
    // close menu if expanded
    // autoCollapseNav();
    // change color of responsive navbar in mobile view if top = 0
    navResponsiveColor();
    // change nav caret links icon direction on click
    caretTrigger();
    // change side menu caret links icon direction on click
    // show side menu and show dropdown menu for current link
    sideMenuTrigger();
    // make the nav bar sticky
    $('#mainNav').sticky({responsiveWidth: true, zIndex: 500000, topSpacing: 0});
    
});

// close menu if expanded
function autoCollapseNav(){
    // on click
    $(this).click(function(){
        if (($(this).parents('.navbar') == 0) && ($('#navbarResponsive').hasClass('show') == true)) {
            // remove class and collapse navbar
            $('.navbar-toggler-left').click();
        }
    });
}

// change color of responsive navbar in mobile view if top = 0
function navResponsiveColor(){
    // get trigger
    var toggler = $(".navbar-toggler");
    // on click event
    $(toggler).click(function(){
        // check if nav responsive is expanded
        if (($('.navbar-collapse').hasClass('show') == false) && ($(window).scrollTop() == 0)) {
            // change background color
            $('#mainNav').parent().addClass('is-sticky');
        }
        // check if collapsing
        else if (($('.navbar-collapse').hasClass('show')) && ($(window).scrollTop() == 0)) {
            // change background color
            $('#mainNav').parent().removeClass('is-sticky');
        }
    });
}

// change nav caret links icon direction on click
// and show dropdown menu for current link
function caretTrigger(){
    var trigger = $('#navbarResponsive').find("li > div .fas");
    
    // on click
    $(trigger).click(function(){
        // find dropdown
        var dropdown = $(this).parent().parent().find(".dropdown-links");
        // get dropdown links
        var dropLinks = $(dropdown).children();
        // check for current class
        if ($(this).hasClass("fa-caret-down")) {
            // remove class
            $(this).removeClass("fa-caret-down").addClass("fa-caret-up");
            
            // add in effect
            $.each(dropLinks, function(index, link){
                $(link).addClass('animated slideInLeft');
            });
            // show dropdown menu
            $(dropdown).removeClass('d-none');
        }
        else{
            // remove class
            $(this).removeClass("fa-caret-up").addClass("fa-caret-down");
            // hide dropdown menu
            $(dropdown).addClass('d-none');
        }
    });
}

// change side menu caret links icon direction on click
// show side menu and show dropdown menu for current link
function sideMenuTrigger(){
    var menuTrigger = $('#sideMenuTrigger');
    var linkTrigger = $('#sideMenu').find(".fas");
    // on click on the menu trigger
    $(menuTrigger).click(function(){
        if ($('#sideMenu').hasClass('isInvisible') == true) {
            // position menu below the nav bar
            var sideMenuTop = $('#mainNav').first();
            sideMenuTop = $(sideMenuTop).height() + $(window).scrollTop() + 17;
            $('#sideMenu').css('top', sideMenuTop);
            // change side menu css properties if the view is not at top, to match with navbar
            if ($(window).scrollTop() > 0) {
                // change background color
                $('#sideMenu').css('background-color', '#0085a1d1');
                // change link color
                $('#sideMenu').find('a').css('color', '#fff');
                // change link color on hover
                $('#sideMenu').find('a').hover(function($this){
                    $(this).css('color', '#212529');
                }, function($this){
                    $(this).css('color', '#fff');
                });
                // change caret color
                $('#sideMenu').find('i.fas').css('color', '#fff');
                // change caret color on hover
                $('#sideMenu').find('i.fas').hover(function($this){
                    $(this).css('color', '#212529');
                }, function($this){
                    $(this).css('color', '#fff');
                });
            }
            // if view is at top
            else{
                $('#sideMenu').css('background-color', 'transparent');
                // change link color
                $('#sideMenu').find('a').css('color', '#fff');
                // change link color on hover
                $('#sideMenu').find('a').hover(function($this){
                    $(this).css('color', '#0085a1d1');
                }, function($this){
                    $(this).css('color', '#fff');
                });
                // change caret color
                $('#sideMenu').find('i.fas').css('color', '#fff');
                // change caret color on hover
                $('#sideMenu').find('i.fas').hover(function($this){
                    $(this).css('color', '#0085a1d1');
                }, function($this){
                    $(this).css('color', '#fff');
                });
            }
            // change icon
            $('#sideMenuTrigger').children().last().removeClass('fa-bars').addClass('fa-times');
            // add display property to menu
            $('#sideMenu').removeClass('d-none').removeClass('isInvisible').addClass('d-block').addClass('isVisible');
            // animate transition to left
            $('#sideMenu').animate({right: '0rem'});
        }
        else if($('#sideMenu').hasClass('isInvisible') == false){
            // change icon
            $('#sideMenuTrigger').children().last().removeClass('fa-times').addClass('fa-bars');
            // remove display property to menu
            $('#sideMenu').removeClass('d-block').removeClass('isVisible').addClass('isInvisible');
            // animate transition to left
            $('#sideMenu').animate({right: '-15rem'}, function(){
                $('#sideMenu').addClass('d-none');
            });
        }
    });
    // on click on links
    $(linkTrigger).click(function(){
        // find dropdown
        var dropdown = $(this).parent().parent().find(".dropdown-links");
        // get dropdown links
        var dropLinks = $(dropdown).children();
        
        // check for current class
        if ($(this).hasClass("fa-caret-down")) {
            // remove class
            $(this).removeClass("fa-caret-down").addClass("fa-caret-up");
            
            // add in effect
            $.each(dropLinks, function(index, link){
                $(link).addClass('animated slideInLeft');
            });
            // show dropdown menu
            $(dropdown).removeClass('d-none');
        }
        else{
            // remove class
            $(this).removeClass("fa-caret-up").addClass("fa-caret-down");
            // hide dropdown menu
            $(dropdown).addClass('d-none');
        }
    });
}

(function($) {
    "use strict"; // Start of use strict
  
    // Floating label headings for the contact form
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  
    // Show the navbar when the page is scrolled up
    var MQL = 992;
  
    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
  
      $(window).on('scroll', {
          previousTop: 0
        },
        function() {
          var currentTop = $(window).scrollTop();
          //check if user is scrolling up
          if (currentTop < this.previousTop) {
            //if scrolling up...
            hideSideMenu();
          } else if (currentTop > this.previousTop) {
            //if scrolling down...
            hideSideMenu();
          }
          this.previousTop = currentTop;
        });
    }
  
  })(jQuery); // End of use strict
  
//   Hide side menu if scroll on any direction
  function hideSideMenu(){
    if ($('#sideMenu').hasClass('isVisible') == true) {
      // change trigger icon
      $('#sideMenuTrigger').children().last().removeClass('fa-times').addClass('fa-bars');
      // remove display property from menu
      $('#sideMenu').removeClass('d-block').removeClass('isVisible').addClass('isInvisible');
      // animate transition to left
      $('#sideMenu').animate({right: '-15rem'}, function(){
          $('#sideMenu').addClass('d-none');
      });
    }
  }