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
    
    // scroll view to the selected target
    targetScroll(target);
});



// execute scroll to the click option
function targetScroll(t=null){
    // sections declaration
    var sections = {
        worldocean: "section1",
        landtoocean: "section3",
        marinehabits: "section5",
        endangeredspecies: "section7"
    };

    if (t){
        // setTimeout(scroll(t), 10000);
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
}