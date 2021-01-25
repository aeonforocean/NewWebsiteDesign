$(document).ready(function(){
  // initial top and left values
  let initialTop = 0
  let initialLeft = 0
  // trigger on click over a header column
  $('.contact-us').click(function(){
    // get device width
    var devWidth = $(window).width();
    // get available options
    var options = $(".contact-us");
    // get clicked option
    var current = $(this).prop("id");
    // if volunteer was selected, redirect browser
    if (current == "volunteer") {
      window.open("https://www.volunteermatch.org/search/org1107201.jsp", target="_blank");
      // exit
      return;
    }
    // if selected is request a speaker
    else if (current == "request") {
      // get subject element
      let subject = $('#subject');
      // get options for the subject
      let options = $(subject).find("option");
      // remove current options
      $(subject).empty("option");
      // insert subject option
      $(subject).append(`<option value="request">Request a Speaker</option>`);
    }
    // remove request speaker subject
    else {
      // get request option
      let req = $("#subject").find("option").last();
      // remove option
      $(req).remove();
    }

    // if DESKTOP view
    if (devWidth > 576) {
      // loop over all the options to assign exit effect
      $.each(options, function(id, opt){
        // assign only to not chosen one
        if ($(opt).prop("id") != current){
          // assign exit effect
          $(opt).addClass("animated slideOutUp");
        }
        else {
          // assign selected effect
          $(opt).addClass("animated pulse faster");
        }
      });
      // after selected element animations end
      const selected = document.getElementById(current);
      selected.addEventListener("animationend", function anim(e){
        // get selected left offset
        var left = $(this).offset().left;
        // save left value
        initialLeft = left
        // animate selected element transition to the left
        $(this).animate({left: `-${left}`}, 
          400,
          // when animation is done
          // set hidden options display to none
          function(){
            $.each(options, function(id, opt){
              // assign only to not chosen one
              if ($(opt).prop("id") != current){
                // assign exit effect
                $(opt).addClass("d-none");
              }
            });
          }
        );
        // relocate selected section
        $(this).animate({left: 0},0);
        // show form
        $('.form-wrapper').removeClass("d-none").addClass("animated fadeIn slow delay-1s col-md-7 col-xl-5 m-auto");
        // set row background color
        $("#header-row").css("background-color", "#343a401a");
        // mach selected section overlay background-color with row background-color
        $(this).find(".overlay").css("background-color", "#343a401a");
        // remove event listener
        selected.removeEventListener("animationend", anim)
      });
    }
    // if MOBILE device
    else {
      // loop over all the options to assign exit effect
      $.each(options, function(id, opt){
        // assign only to not chosen one
        if ($(opt).prop("id") != current){
          // assign exit effect
          $(opt).addClass("animated slideOutLeft");
        }
        else {
          // assign selected effect
          $(opt).addClass("animated pulse faster");
        }
      });
      // after selected element animations end
      const selected = document.getElementById(current);
      selected.addEventListener("animationend", function anim(e){
        // get selected left offset
        var top = $(this).offset().top;
        // save initial top value
        initialTop = top
        // animate selected element transition to the left
        $(this).animate({top: `-${top}`, position: "relative"}, 
        400,
        // when animation is done
        // set hidden options display to none
        function(){
          // show form and add effect
          $(".form-wrapper").removeClass("d-none").addClass("animated fadeIn slow col-md-7 col-xl-5 m-auto");
          // slide form up
          $.each(options, function(id, opt){
            // assign only to not chosen one
            if ($(opt).prop("id") != current){
              // assign exit effect
              $(opt).addClass("d-none");
            }
          });
          $(this).animate({top: 0},0);
          // set row background color
          $("#header-row").css("background-color", "#343a401a");
          // mach selected section overlay background-color with row background-color
          $(this).find(".overlay").css("background-color", "#343a401a");
          // remove event listener
          selected.removeEventListener("animationend", anim)
        });
      });
    }
  });


  
  // restore view on click over return button
  $("#undoBtn").click(function(){
    // get device width
    var devWidth = $(window).width();
    // hide form
    let form = document.querySelector(".form-wrapper")
    $(form).removeClass("fadeIn slow delay-1s").addClass("fadeOut")
    // remove element from dom after animation ends
    form.addEventListener("animationend", function anime(e){
      // remove classes from form
      $(form).removeClass("col-md-7 col-xl-5 m-auto fadeOut").addClass("d-none")
      // get all options
      let options = $(".contact-us");
      // get active option
      let activeOption
      $.each(options, function(id, opt){
        if($(opt).hasClass("d-none") == false){
          activeOption = opt
          $(activeOption).removeClass("pulse faster")
        }
      });
      // IF DESKTOP
      if(devWidth > 576) {
        // animate selected element transition to the left
        $(activeOption).animate({left: `${initialLeft}`}, 
          400,
          // when animation is done
          // set hidden options display to none
          function(){
            $(activeOption).animate({left: 0},0)
            $.each(options, function(id, opt){
              // assign only to not chosen one
              if ($(opt).hasClass("d-none")){
                // assign exit effect
                $(opt).removeClass("d-none slideOutUp").addClass("slideInDown");
                // remove slide in animation effect
                opt.addEventListener("animationend", function animee(e){
                  $(this).removeClass("slideInDown")
                  opt.removeEventListener("animationend", animee)
                })
              }
            });
          }
        );
        form.removeEventListener("animationend", anime)
      }
      // IF MOBILE
      else{
        // animate selected element transition to the left
        $(activeOption).animate({top: `${initialTop}`}, 
          400,
          // when animation is done
          // set hidden options display to none
          function(){
            $(activeOption).animate({top: 0},0)
            $.each(options, function(id, opt){
              // assign only to not chosen one
              if ($(opt).hasClass("d-none")){
                // assign exit effect
                $(opt).removeClass("d-none slideOutLeft");
                $(opt).addClass("slideInLeft")
                // remove slide in animation effect
                opt.addEventListener("animationend", function animee(e){
                  $(this).removeClass("slideInLeft")
                  opt.removeEventListener("animationend", animee)
                })
              }
            });
          }
        );
        // remove event listener
        form.removeEventListener("animationend", anime)
      }
    })
  })


});

// delete hr element in the footer
$('hr').remove();