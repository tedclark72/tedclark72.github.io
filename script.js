$(document).ready(function() { 
    $('.projects div').mouseenter(function() {
        $(this).toggleClass('show-description');
    });
    $('.projects div').mouseleave(function() {
        $(this).toggleClass('show-description');
     });
    
    $('.socialmediacircle a').mouseenter(function() {
        $(this).toggleClass('show-name'); 
    });
    $('.socialmediacircle a').mouseleave(function() {
        $(this).toggleClass('show-name');                             
    });
});