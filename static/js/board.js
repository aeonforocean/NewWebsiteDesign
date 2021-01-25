$(document).ready(function(){
    // triggers modal also make AJAX request
    showModal();
});

// triggers modal also make AJAX request
function showModal(){
    let card = $('.card-body-inner-wrapper').find("button");
    // on click over card modal trigger
    $(card).click(function(e){
        let name = $(this).parents(".card-body-inner-wrapper").find(".card-title").html();
        // AJAX
        $.getJSON("/about/board", `q=${name}`, function(data, textStatus, jqXHR){
            // insert title into modal
            $('.modal-title').html(name);
            // insert data into modal body
            $('.modal').find(".modal-body > p").html(data);
            // show modal
            $('.modal').modal("show");
        })
        
    });
}