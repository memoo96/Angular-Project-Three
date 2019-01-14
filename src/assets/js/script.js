$(document).ready(function(){


    $('.menu, .overlay').click(function () {
        $('.menu').toggleClass('clicked');
        $('#nav').toggleClass('show');
    });

    $('#nav ul.main li').click(function () {
        location.reload(true);
    });
    


     /* icon of navbar Links slidToggle When Click On It */
     $('.navbar-dark .navbar-toggler-icon').click(function(){
        $('.collapse').slideToggle();

    });
});








