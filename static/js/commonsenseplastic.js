$(document).ready(function(){
  flipCards();
});

function flipCards(){
  // HD breakpoint
  var MQL = 992;

  // if desktop view
  if ($(window).width() > MQL) {
    // instance of flip
    var cOne = $("#cardOne").flip({trigger: "manual"});
    var cTwo = $("#cardTwo").flip({trigger: "manual"});
    var cThree = $("#cardThree").flip({trigger: "manual"});
    var cFour = $("#cardFour").flip({trigger: "manual", axis: "x"});
    // get section top
    var secTop = $('#section1').offset().top - $(".navbar").outerHeight() - 100;
    var fourTop = $('#cardFour').offset().top - $(".navbar").outerHeight() - 200;
    
    $(window).on('scroll', function(){
      if (($(window).scrollTop() >= secTop && ($(window).scrollTop() < fourTop))) {
        // flip card one
        if ($(cOne).data("flip-model").isFlipped == false){
          $("#cardOne").removeClass("is-original").addClass("is-flipped");
          $(cOne).flip(true);
        }
        // flip card two
        $(cOne).on("flip:done", function(){
          if ($(cTwo).data("flip-model").isFlipped == false){
            $("#cardTwo").removeClass("is-original").addClass("is-flipped");
            $(cTwo).flip(true);
          }
        });
        // flip card three
        $(cTwo).on("flip:done", function(){
          if ($(cThree).data("flip-model").isFlipped == false){
            $("#cardThree").removeClass("is-original").addClass("is-flipped");
            $(cThree).flip(true);
          }
        });
      }
      // flip cards back if scroll top above the cards section
      if($(window).scrollTop() > fourTop) {
        // flip card four
        if ($(cFour).data("flip-model").isFlipped == false){
          $("#cardFour").removeClass("is-original").addClass("is-flipped");
          $(cFour).flip(true);
        }
      }
    });
  }
  // if mobile view
  else{
    // instance of flip
    var ccOne = $("#cardOne").flip({trigger: "manual"});
    var ccTwo = $("#cardTwo").flip({trigger: "manual"});
    var ccThree = $("#cardThree").flip({trigger: "manual"});
    var ccFour = $("#cardFour").flip({trigger: "manual", axis: "x"});
    // first card top
    var firstTop = $('#section1').offset().top - $(".navbar").outerHeight() - 150;
    // second card top
    var secondTop = $('#cardTwo').offset().top - $(".navbar").outerHeight() - 150;
    // third card top
    var thirdTop = $('#cardThree').offset().top - $(".navbar").outerHeight() - 150;
    // third card top
    var four_Top = $('#cardFour').offset().top - $(".navbar").outerHeight() - 150;
    // when scrolling
    $(window).on("scroll", function(){
      // flip first card
      if (($(window).scrollTop() > firstTop) && ($(window).scrollTop() < secondTop)){
        // remove original class and add flipped class
        $("#cardOne").removeClass("is-original").addClass("is-flipped");
        $(ccOne).flip(true);
      }
      // recalculate second card top
      secondTop = $('#cardTwo').offset().top - $(".navbar").outerHeight() - 150;
      // flip second card
      if (($(window).scrollTop() > secondTop) && ($(window).scrollTop() < thirdTop)){
        // remove original class and add flipped class
        $("#cardTwo").removeClass("is-original").addClass("is-flipped");
        $(ccTwo).flip(true);
      }
      // recalculate third card top
      thirdTop = $('#cardThree').offset().top - $(".navbar").outerHeight() - 150;
      // flip third card
      if ($(window).scrollTop() > thirdTop){
        // remove original class and add flipped class
        $("#cardThree").removeClass("is-original").addClass("is-flipped");
        $(ccThree).flip(true);
      }
      // recalculate four card top
      four_Top = $('#cardFour').offset().top - $(".navbar").outerHeight() - 150;
      // flip four card
      if ($(window).scrollTop() > four_Top){
        // remove original class and add flipped class
        $("#cardFour").removeClass("is-original").addClass("is-flipped");
        $(ccFour).flip(true);
      }
    });
  }
}