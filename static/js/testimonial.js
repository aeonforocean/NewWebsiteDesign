$(document).ready(function(){
  sideMenuColor()
})

// change side menu caret links icon direction on click
// show side menu and show dropdown menu for current link
function sideMenuColor(){
  var menuTrigger = $('#sideMenuTrigger');
  // on click on the menu trigger
  $(menuTrigger).click(function(){
    if ($('#sideMenu').hasClass('isVisible') == true) {
      // change side menu css properties if the view is not at top, to match with navbar
      if ($(window).scrollTop() == 0) {
        // change link color
        $('#sideMenu').find('a').css('color', 'black');
        // change link color on hover
        $('#sideMenu').find('a').hover(function($this){
          $(this).css('color', '#0085a1d1');
        }, function($this){
          $(this).css('color', 'black');
        });
        // change caret color
        $('#sideMenu').find('i.fas').css('color', 'black');
        // change caret color on hover
        $('#sideMenu').find('i.fas').hover(function($this){
          $(this).css('color', '#0085a1d1');
        }, function($this){
          $(this).css('color', 'black');
        });
      }
    }
  });
}

// remove hr element from footer
$("footer").find("hr").remove()