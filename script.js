$(document).ready(function() { 
    //Show description when div is moused over
    $('.projects div').mouseenter(function() {
        $(this).toggleClass('show-description');
    });
    $('.projects div').mouseleave(function() {
        $(this).toggleClass('show-description');
    });
    
    //Blur and darken background image when hovered over
    $('.individual-project').eq(0).hover(function() {
        $('.project-img').eq(0).css({'filter': 'blur(3px) brightness(75%)', 'margin': '-5px -10px -10px -5px', 'backface-visibility': 'hidden'});
    }, function() {
        $('.project-img').eq(0).css({'filter': 'blur(0px) brightness(100%)', 'backface-visibility': 'hidden'});
    });
     $('.individual-project').eq(1).hover(function() {
        $('.project-img').eq(1).css({'filter': 'blur(3px) brightness(75%)', 'margin': '-5px -10px -10px -5px'});
    }, function() {
        $('.project-img').eq(1).css({'filter': 'blur(0px) brightness(100%)'});
    });
     $('.individual-project').eq(2).hover(function() {
        $('.project-img').eq(2).css({'filter': 'blur(3px) brightness(75%)', 'margin': '-5px -10px -10px -5px'});
    }, function() {
        $('.project-img').eq(2).css({'filter': 'blur(0px) brightness(100%)'});
    });
     $('.individual-project').eq(3).hover(function() {
        $('.project-img').eq(3).css({'filter': 'blur(3px) brightness(75%)', 'margin': '-5px -10px -10px -5px'});
    }, function() {
        $('.project-img').eq(3).css({'filter': 'blur(0px) brightness(100%)'});
    });
     $('.individual-project').eq(4).hover(function() {
        $('.project-img').eq(4).css({'filter': 'blur(3px) brightness(75%)', 'margin': '-5px -10px -10px -5px'});
    }, function() {
        $('.project-img').eq(4).css({'filter': 'blur(0px) brightness(100%)'});
    });
     $('.individual-project').eq(5).hover(function() {
        $('.project-img').eq(5).css({'filter': 'blur(3px) brightness(75%)', 'margin': '-5px -10px -10px -5px'});
    }, function() {
        $('.project-img').eq(5).css({'filter': 'blur(0px) brightness(100%)'});
    });
    
    
    //Show name of social media when hovered over
    $('.socialmediacircle a').mouseenter(function() {
        $(this).toggleClass('show-name'); 
    });
    $('.socialmediacircle a').mouseleave(function() {
        $(this).toggleClass('show-name');                             
    });
});