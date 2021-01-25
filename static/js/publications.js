$(document).ready(function(){
  // object with colors
  colors = {
    1: "#006064",
    2: "#B71C1C",
    3: "#4a148c",
    4: "#283593",
    5: "#1565c0",
    6: "#004d40",
    7: "#827717",
    8: "#e65100",
    9: "#263238",
    0: "#f57f17"
  };
  
  // get all card titles
  var cards = $(".card");
  // assign a random background color to each title
  $.each(cards, function(index, card){
    // get random number
    n = getRandomInt(10);
    // set card color
    $(card).css("background-color", colors[n]);
    // set title color
    $(card).find(".card--title").css("background-color", colors[n]);
    // set link color
    $(card).find("a").css("color", colors[n]);
  });
});


// return a random number between cero and max
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}