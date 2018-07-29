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
    $(function() {
        // Get form
        var form = $('#contact-form');

        // Set up event listener
        $(form).submit(function(event) {
            // Stop the browser from submitting the form.
            event.preventDefault();

            var formData = $(form).serialize();
            
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: formData
            }).done(function(response) {
                alert("Email successfully sent! I'll get back to you shortly.");

                // Clear the form.
                $('#name').val('');
                $('#email').val('');
                $('#message').val('');
            }).fail(function(data) {
                if (data.responseText !== '') {
                    alert(data.responseText);
                }
                else {
                    alert("There was a problem. Please check your fields or email me directly.");
                }
            }); 
        });
    });
});