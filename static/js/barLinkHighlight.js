    // get current location
    const currentLink = document.location.pathname.split("/")[1]
    // get navbar links
    let mainLinks = $("#navbarResponsive").find(".main-link")
    // loop through all the main links
    $.each(mainLinks, function(id, link){
        // get full path of current link
        let pathname = $(link).prop("href").split("/")
        // get the path endpoint
        pathname = pathname[pathname.length -1]
        // desktop view
        if ($(document).width() > 992){
            // apply css style to current path main link parent
            if (pathname == currentLink){
                $(link).css({"border-bottom": "2px solid #FFEB3B"})
            }
        }
        else{
            // apply css style to current path main link parent
            if (pathname == currentLink){
                $(link).css({"border-left": "2px solid #FFEB3B", "padding-left": "0.5rem"})
            }
        }
        
    });