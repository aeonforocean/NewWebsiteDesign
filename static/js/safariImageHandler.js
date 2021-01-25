function ImageHandler(){
  Modernizr.on('webp', function( result ) {
    // the browser has webp
    if (result) {
      // exit
      return
    }
    // the browser does not have webp
    else {
      // get current router images
      let images = document.getElementsByTagName("img")
      // loop through all the images
      for (let i = 0; i < images.length; i++) {
        // get current image source
        let src = images[i].src
        // get img extension
        let ext = src.split(".")
        ext = ext[ext.length - 1]
        // remove current extension from source
        src = src.split(`.${ext}`)[0]
        // skip image if no changes needed
        if (images[i].classList.contains("no-change")) {
          continue 
        }
        // if current image has to be converted to png
        else if(images[i].classList.contains("to-png")){
          // add new extension
          src = `${src}.png`
        }
        // current image has to be a jpg
        else{
          // add new extension
          src = `${src}.jpg`
        }
        // change image source
        images[i].src = src
      }
    }
  });
}
ImageHandler()