$(document).ready(function() { 
    
    $('.projects div').mouseenter(function() {
        $(this).toggleClass('show-description');
    });
    $('.projects div').mouseleave(function() {
        $(this).toggleClass('show-description');
     });
    
    $('.fa fa-envelope').click(function() {
        alert("You can email me");
    });
});