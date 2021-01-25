$(document).ready(function(){
  // zoom the card on click
  zoomCard();
})

// zoom the card on click
function zoomCard(){
  // trigger on click over cards
  $(".news-card").click(function(){
    let currentCard = $(this)
    // get navbar width
    let navHeight = $(".navbar").outerHeight();
    // add class zoom in on click if doesn't exist
    if (currentCard.hasClass("zoom-in") == false) {
      // minimize all cards
      zoomOutCards()
      // animate top of current selected card
      if ($(window).width() < 1200) {
        // mobile view
        $(currentCard).animate({
          // move card to center of screen
          top: Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop() - (navHeight * 2))
        }, 1, "linear", currentCard.addClass("zoom-in"))
      }
      else{
        // desktop view
        $(currentCard).animate({
          // move card to center of screen
          top: Math.max(0, (($(window).height() - $(this).outerHeight()) / 2) + $(window).scrollTop() - (navHeight * 2) + 20)
        }, 1, "linear", currentCard.addClass("zoom-in"))
      }
      
      // change button text
      if ($(window).width() < 1200) {
        $(currentCard).find("a").html("Download")
      }
      else{
        $(currentCard).find("a").html("Read More")
      }
      
    }
    else{
      // relocate card to original position
      $(currentCard).css({
        top: "auto"
      })
      // remove zoom-in class
      $(currentCard).removeClass("zoom-in")
      // change button text
      $(currentCard).find("a").html("")
    }
  })
  
}

// minimize all cards
function zoomOutCards(){
  // minimice any other card
  let cards = $(".news-card");
  $.each(cards, function(id, card){
    if ($(card).hasClass("zoom-in")) {
      $(card).css({
        top: "auto"
      })
      // remove zoom-in class
      $(card).removeClass("zoom-in")
      // change button text
      $(card).find("a").html("")
    }
  });
}