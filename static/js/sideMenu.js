$(document).ready(function(){
  // render links menu with all options
  linksMenu();
  // show or hide links menu on mobile view
  menuToggler()
})

// render links menu with all options
function linksMenu(){
  let icons = {
    worldocean: `<span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-1x"></i>
                  <i class="fas fa-globe-americas fa-stack-1x fa-inverse"></i>
                  <a class="" href="/knowyourocean/worldocean">The World Ocean</a>
                </span>`,
    landtoocean: `<span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-1x"></i>
                    <i class="fas fa-water fa-stack-1x fa-inverse"></i>
                    <a class="" href="/knowyourocean/landtoocean">Land to Ocean</a>
                  </span>`,
    marinehabits: `<span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-1x"></i>
                    <i class="fas fa-fish fa-stack-1x fa-inverse"></i>
                    <a class="" href="/knowyourocean/marinehabits">Marine Habits</a>
                  </span>`,
    endangeredspecies: `<span class="fa-stack fa-lg">
                          <i class="fas fa-circle fa-stack-1x"></i>
                          <i class="fas fa-exclamation-triangle fa-stack-1x fa-inverse"></i>
                          <a class="" href="/knowyourocean/endangeredspecies">Endangered Species</a>
                        </span>`,
    takeaction: `<span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-1x"></i>
                  <i class="fas fa-directions fa-stack-1x fa-inverse"></i>
                  <a class="" href="/takeaction">Take Action</a>
                </span>`,
    ambassador: `<span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-1x"></i>
                  <i class="fas fa-user-graduate fa-stack-1x fa-inverse"></i>
                  <a class="" href="/takeaction/ambassador">Become a K2W Ambassador</a>
                </span>`,
    commonsenseplastic: `<span class="fa-stack fa-lg">
                          <i class="fas fa-circle fa-stack-1x"></i>
                          <i class="fas fa-recycle fa-stack-1x fa-inverse"></i>
                          <a class="" href="/takeaction/commonsenseplastic">Common Sense Plastic</a>
                        </span>`,
    funandplay: `<span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-1x"></i>
                  <i class="fas fa-gamepad fa-stack-1x fa-inverse"></i>
                  <a class="" href="/kidscorner/funandplay">Fun and Play</a>
                </span>`,
    videos: `<span class="fa-stack fa-lg">
                <i class="fas fa-circle fa-stack-1x"></i>
                <i class="fas fa-video fa-stack-1x fa-inverse"></i>
                <a class="" href="/kidscorner/videos">Videos</a>
              </span>`,
    publications: `<span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-1x"></i>
                    <i class="fas fa-newspaper fa-stack-1x fa-inverse"></i>
                    <a class="" href="/publications">Press Release</a>
                  </span>`,
    endorsement: `<span class="fa-stack fa-lg">
                    <i class="fas fa-circle fa-stack-1x"></i>
                    <i class="fas fa-pen-fancy fa-stack-1x fa-inverse"></i>
                    <a class="" href="/publications/endorsement">Endorsement</a>
                  </span>`,
    newsletter: `<span class="fa-stack fa-lg">
                  <i class="fas fa-circle fa-stack-1x"></i>
                  <i class="fas fa-file-alt fa-stack-1x fa-inverse"></i>
                  <a class="" href="/publications/newsletter">Newsletter</a>
                </span>`,
    about: `<span class="fa-stack fa-lg">
              <i class="fas fa-circle fa-stack-1x"></i>
              <i class="fas fa-question-circle fa-stack-1x fa-inverse"></i>
              <a class="" href="/about">About us</a>
            </span>`,
    team: `<span class="fa-stack fa-lg">
            <i class="fas fa-circle fa-stack-1x"></i>
            <i class="fas fa-user-friends fa-stack-1x fa-inverse"></i>
            <a class="" href="/about/team">Our Team</a>
          </span>`,
    k2w: `<span class="fa-stack fa-lg">
            <i class="fas fa-circle fa-stack-1x"></i>
            <i class="fas fa-fish fa-stack-1x fa-inverse"></i>
            <a class="" href="/k2w">Krill to Whale</a>
          </span>`,
    board: `<span class="fa-stack fa-lg">
            <i class="fas fa-circle fa-stack-1x"></i>
            <i class="fas fa-user-tie fa-stack-1x fa-inverse"></i>
            <a class="" href="/about/board">Our Board</a>
          </span>`,
    journey: `<span class="fa-stack fa-lg">
              <i class="fas fa-circle fa-stack-1x"></i>
              <i class="fas fa-route fa-stack-1x fa-inverse"></i>
              <a class="" href="/about/journey">Our Journey</a>
            </span>`,
    partners: `<span class="fa-stack fa-lg">
                <i class="fas fa-circle fa-stack-1x"></i>
                <i class="fas fa-handshake fa-stack-1x fa-inverse"></i>
                <a class="" href="/about/partners">Partners</a>
              </span>`,

  }
  // get current url endpoint
  let endpoint = document.location.pathname
  // get all links
  let links = $(".side-menu-wrapper").find("a")
  // create variable
  let subLinks
  // loop through all the links to find a match
  $.each(links, function(id, link){
    if ($(link).prop("pathname") == endpoint) {
      subLinks = $(link).parents(".row").find(".dropdown-links").find(".nav-link")
    }
  });

  // get links wrapper
  let linksWrapper = $(".side-links-menu-wrapper")
  // append links to wrapper
  $.each(subLinks, function(id, link){
    // get the link address string
    let name = $(link).prop("href")
    // create a url from string
    name = new URL(name)
    // get the endopoint name and remove /
    name = name.pathname.split("/")
    name = name[name.length - 1]
    // insert icon into wrapper
    $(linksWrapper).append(icons[name])
  });

  // set position of the menu toggler
  let toggler = $("#menuToggler")
  $(toggler).css({"top": `${($(linksWrapper).outerHeight() / 2) - ($(toggler).height() / 2)}px`, "margin": 0})
  // unbind toggler from hover events
  $(toggler).unbind("hover")

  // adjust on hover with of each link in the wrapper
  // get original icon width
  let originalWidth = linksWrapper.find("span").find("i").first().outerWidth()
  // on hover over a link
  linksWrapper.find("span").hover(function(){
    // get current link
    let span = this
    // wait untill link text get expanded
    setTimeout(function(){
      // get text width
      let textWidth = $(span).find("a").outerWidth()
      // avoid hover by accident
      if (textWidth < 10){
        // exit
        return
      }
      // set link width
      $(span).find("i").first().css("width", `${(textWidth / 16) + 5}rem`)
    }, 150, span)
  // on hover exit
  }, function(){
    // get current link
    let span = this
    // set with to original width
    $(span).find("i").first().css("width", originalWidth)
  })

  // initiate sticky
  $(".side-links-menu-wrapper").sticky({
    zIndex: 2000,
    topSpacing: function(){
                  if ($(window).width() < 1200) {
                    return 200
                  }
                  else{
                    return 350
                  }
                },
    getWidthFrom: $(".side-links-menu-wrapper")
  })
  // show sticky side menu on scroll
  $(window).scroll(function(){
    // show only if view is not at top
    if (($(window).scrollTop() > 300) && ($(".side-links-menu-wrapper").hasClass("is-visible") == false)) {
      $(".side-links-menu-wrapper").addClass("is-visible")
    }
    // hide if view is at top
    else if (($(window).scrollTop() < 300) && ($(".side-links-menu-wrapper").hasClass("is-visible"))){
      $(".side-links-menu-wrapper").removeClass("is-visible")
    }
  })
}

// show or hide links menu on mobile view
function menuToggler(){
  // get toggler
  let toggler = $("#menuToggler")
  // if mobile and tablets view
  if ($(window).width() < 1200) {
    // hide menu to the left of the screen
    let menu = $(".side-links-menu-wrapper")
    $(menu).addClass("is-hidden")
    // show or hide menu
    $(toggler).click(function(){
      // check if menu is hidden
      if($(menu).hasClass("is-hidden")){
        // show menu
        $(menu).removeClass("is-hidden")
        $(toggler).find("i").last().removeClass("fa-chevron-circle-right").addClass("fa-chevron-circle-left")
      }
      // check is menu is visible
      else{
        // hide menu
        $(menu).addClass("is-hidden")
        $(toggler).find("i").last().removeClass("fa-chevron-circle-left").addClass("fa-chevron-circle-right")
      }
    })
  }
  else{
    $(toggler).addClass("d-none")
  }
}