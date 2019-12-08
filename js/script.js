$(document).ready(function () {
    $('.des p').hide();
    $('.des').click(function () {
        $('.des p').toggle();
        $('.des img').toggle();
    });

    $('.dev p').hide();
    $('.dev').click(function () {
        $('.dev p').toggle();
        $('.dev img').toggle();
    });

    $('.prod p').hide();
    $('.prod').click(function () {
        $('.prod p').toggle();
        $('.prod img').toggle();
    });


    //Form Validation
    $("form#form").on('submit',function(event){
        event.preventDefault();
        let name = $("input#name").val();
        let email = $("input#email").val();
        let message = $("textarea#message").val();

        if ($("input#name").val() && $("input#email").val()){
            alert ("Hey " + name + ", Thanks for reaching out, we'll get back to you shortly...cheers");
        }
        else {
            alert("Please provide your correct name and email!");
        }

    });

});

// $('.card').hover(function(){
//     $('.porttext',this).slideToggle('slow');
//  }, function(){
//     $('.porttext',this).slideToggle('slow');
//  });

