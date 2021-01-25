$(document).ready(function(){
    let colorList = [
        "#0D47A1",
        "#ffc107",
        "#03a9f4",
        "#ff5722",
        "#009688",
        "#795548",
        "#cddc39"
    ]

    // get all the cards
    let cards = $(".card-before")
    $.each(cards, function(index, card){
        let n = index % 8
        $(card).css("border-color", colorList[n])
    });
    
})