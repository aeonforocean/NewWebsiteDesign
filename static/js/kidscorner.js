// on page fully load
$(document).ready(function(){
  // get the url
  _url = window.location.pathname;
  // split the url
  _url = _url.split("/");
  // target section if exist
  var target = null;
  // check if url has a section
  if (_url.length == 3){
    target = _url[2];
  }
  // initialize card
  $('#colorMe').flip();
  // scroll view to the selected target
  targetScroll(target);
  // hover effect for cards
  $('.card-action-button-wrapper').hover(function(){
    // increase font-size
    $(this).parent().find("p").css("font-size", "1.3rem");
  }, function(){
    $(this).parent().find("p").css("font-size", "1.2rem");
  });
});



// execute scroll to the click option
function targetScroll(t=null){
  // sections declaration
  var sections = {
    funandplay: "section1",
    videos: "section2"
  };
  
  if (t){
    scroll(t);
  }
  
  // on click event
  $(".btn-0").click(function(e){
    // stop redirect
    e.preventDefault();
    // get id of the clicked button
    var target = $(this).prop("id");
    // scroll to selected section
    scroll(target);
  });
  
  // scroll to selected section
  function scroll(target){
    // target coordinates
    var coordinates = $(`#${sections[target]}`).position().top - $("#mainNav").outerHeight();
    // scroll to selected section
    $('html, body').animate({
      scrollTop: (coordinates)
    }, 1000, "swing");
    return false;
  }

  // triggers modal also make AJAX request
  function showModal(){
    let card = $('#modal-toggler');
    // on click over card modal trigger
    $(card).click(function(e){
      // get all modal card links
      let links = $(".news-card").find("a")
      // set links text
      if ($(window).width() < 1200) {
        $.each(links, function(id, link){
          $(link).html("Downnload")
        });
      }
      else{
        $.each(links, function(id, link){
          $(link).html("Check")
        });
      }
      $('.modal').modal("show");
    });
  }
  // execute
  showModal()
}
