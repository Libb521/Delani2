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

    //creating a hover effect for the portfolio images
    $('.card').hover(function(){
        $('.porttext',this).slideToggle('slow');
     }, function(){
        $('.porttext',this).slideToggle('slow');
     });


    //Form Validation
    $("form#form").on('submit',function(event){
        event.preventDefault();
        let name = $("input#name").val();
        let email = $("input#email").val();
        let message = $("textarea#message").val();

        if ($("input#name").val() && $("input#email").val()){
            alert ("Hey " + name + ", Your message has been duly received...cheers");
        }
        else {
            alert("Kindly provide your valid name and email!");
        }

    });

});


