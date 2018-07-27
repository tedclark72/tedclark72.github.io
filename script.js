$(document).ready(function() { 
    //Show description when div is moused over
    $('.projects div').mouseenter(function() {
        $(this).toggleClass('show-description');
    });
    $('.projects div').mouseleave(function() {
        $(this).toggleClass('show-description');
    });
    
    //Blur and darken background image when hovered over
    $('.individual-project').hover(function() {
        $('.project-img', this).css({
            'filter': 'blur(3px) brightness(60%)', 
            'transform': 'scale(1.1, 1.1)', 
            '-webkit-filter': 'blur(3px) brightness(60%)', 
            '-webkit-transform': 'scale(1.1, 1.1)', 
            '-moz-filter': 'blur(3px) brightness(60%)', 
            '-moz-transform': 'scale(1.1, 1.1)'});
    }, function() {
        $('.project-img', this).css({
            'filter': 'blur(0px) brightness(100%)',
            'transform': 'scale(1, 1)',
            '-webkit-filter': 'blur(0px) brightness(100%)',
            '-webkit-transform': 'scale(1, 1)',
            '-moz-filter': 'blur(0px) brightness(100%)',
            '-moz-transform': 'scale(1, 1)'});
    });
    
    //Show name of social media when hovered over
    $('.socialmediacircle a').mouseenter(function() {
        $(this).toggleClass('show-name'); 
    });
    $('.socialmediacircle a').mouseleave(function() {
        $(this).toggleClass('show-name');                             
    });
});