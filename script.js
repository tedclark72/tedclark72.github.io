$(document).ready(function() { 
    //Show description when div is moused over
    $('.content-projects div').mouseenter(function() {
        $(this).toggleClass('show-description');
    });
    $('.content-projects div').mouseleave(function() {
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
    $('.socialmedia-circle a').mouseenter(function() {
        $(this).toggleClass('show-name'); 
    });
    $('.socialmedia-circle a').mouseleave(function() {
        $(this).toggleClass('show-name');                             
    });
    
    //Send email on contact form
    //PHP NOT SUPPORTED BY GITHUB PAGES
    /*$(function() {
        $("#contact-submit").click(function() {
            var data = {
                name: $("#contact-name").val(),
                email: $("#contact-email").val(),
                message: $("#contact-message").val()
            };

            $.ajax({
                type: "POST",
                url: "contact_form.php",
                data: data,
                success: function() {
                    alert("Email successfully sent!");
                },
                error: function() {
                    alert("Problem sending email.");
                }
            });
        });
    });*/   
});