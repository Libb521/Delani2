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
});

