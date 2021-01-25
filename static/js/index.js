// on full page load
$(document).ready(function(){
    // animate the categories cards for mobile and medium views
    animateCards();
    // change about collapse icon on click
    aboutCollapseTrigger();
    // change voice of krill2whale section collapse icon on click
    voiceCollapseTrigger();
});

// animate the categories cards
function animateCards(){
    $('.category').hover(function(){
        // get current card
        var card = $(this);
        // delay the animation until the element is visible (css)
        setTimeout(function(){
            // animate the element
            $(card).find('.far').animate({'font-size': '5rem'}, 200, 
                // animate back when first animation is done
                function(){
                    $(card).find('.far').animate({'font-size': '3rem'});
            });
        }, 600);
    // exit hover with void
    }, function(){});
}

// change about collapse icon on click
function aboutCollapseTrigger(){
    // get the trigger
    var trigger = $('#aboutWrapper').find('i');
    // on click
    $(trigger).click(function(){
        // check for current class
        if ($(trigger).hasClass("fa-angle-down")) {
            // remove class
            $(trigger).removeClass("fa-angle-down").addClass("fa-angle-up");
        }
        else{
            // remove class
            $(trigger).removeClass("fa-angle-up").addClass("fa-angle-down");
        }
    });
}

// change voice of krill2whale section collapse icon on click
function voiceCollapseTrigger(){
    // get the trigger
    var trigger = $('#voiceWrapper').find('#voice-trigger-wrapper').find('i');
    // on click
    $(trigger).click(function(){
        // check for current class
        if ($(trigger).hasClass("fa-angle-down")) {
            // remove class
            $(trigger).removeClass("fa-angle-down").addClass("fa-angle-up");
        }
        else{
            // remove class
            $(trigger).removeClass("fa-angle-up").addClass("fa-angle-down");
        }
    });
}
