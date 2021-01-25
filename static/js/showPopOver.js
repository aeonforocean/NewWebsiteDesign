// get all links in current page
let links = $("a")
// trigger hover only for desktop
if ($(document).width() > 992){
  // initialize popover on link element only if data content is provided
  $.each(links, function(id, link){
    if (($(link).attr("data-content")) && ($(link).attr("data-content").length > 0)){
      // initialize popover on hovered element
      $(link).popover({
        container: "body",
        content: function(){
          return $(this).attr("data-content")
        },
        delay: {
          show: 1000,
          hide: 100
        },
        placement: "bottom",
        template: `<div class="popover" role="tooltip">
                    <div class="arrow">
                    </div>
                    <h3 class="popover-header">
                    </h3>
                    <div class="popover-body">
                    </div>
                  </div>`,
        trigger: "hover",
        offset: "[0, 10]"
      })
    }
  });
}