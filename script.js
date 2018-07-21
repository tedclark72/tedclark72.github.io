$(document).ready(function() { 
    $('.projects div').mouseenter(function() {
        $(this).toggleClass('show-description');
    });
    $('.projects div').mouseleave(function() {
        $(this).toggleClass('show-description');
     });
    
    $('.contact div').mouseenter(function() {
        $(this).toggleClass('show-name');                             
    });
    $('.contact div').mouseleave(function() {
        $(this).toggleClass('show-name');                             
    });
});