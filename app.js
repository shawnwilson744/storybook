$( document ).ready(function() {
    $('audio').hide();

    $('.play-offering').on('click', function(){
        $('.offerings-img').addClass('full-size');
        $('td').hide();
        $('.offering-str').fadeIn();
    });
    $('.pause-offering').on('click', function() {
        $('.offerings-img').removeClass('full-size');
        $('td').show();
    });

    //

    $('.play-rocks').on('click', function(){
        $('.rocks-image').addClass('full-size');
        $('td').hide();
        $('.rock-str').fadeIn();
    });

    $('.pause-rocks').on('click', function() {
        $('.rocks-image').removeClass('full-size');
        $('td').show();
    });
    //

    $('.play-tower').on('click', function(){
        $('.tower-img').addClass('full-size');
        $('td').hide();
        $('.tower-str').fadeIn();
    });
    $('.pause-tower').on('click', function() {
        $('.tower-img').removeClass('full-size');
        $('td').show();
    });
    //

    $('.play-evan').on('click', function(){
        $('.evan-img').addClass('full-size');
        $('td').hide();
        $('.evan-str').fadeIn();
    });
    $('.pause-evan').on('click', function() {
        $('.evan-img').removeClass('full-size');
        $('td').show();
    });
    //
    $('.play-tour').on('click', function(){
        $('.tour-img').addClass('full-size');
        $('td').hide();
        $('.tour-str').fadeIn();
    });
    $('.pause-tour').on('click', function() {
        $('.tour-img').removeClass('full-size');
        $('td').show();
    });
    //
    $('.play-river').on('click', function(){
        $('.river-img').addClass('full-size');
        $('td').hide();
        $('.river-str').fadeIn();
    });
    $('.pause-river').on('click', function() {
        $('.river-img').removeClass('full-size');
        $('td').show();
    });
    //
    $('.play-iron').on('click', function(){
        $('.iron-img').addClass('full-size');
        $('td').hide();
        $('.iron-str').fadeIn();
    });
    $('.pause-iron').on('click', function() {
        $('.iron-img').removeClass('full-size');
        $('td').show();
    });
    //
    $('.play-brittany').on('click', function(){
        $('.brittany-img').addClass('full-size');
        $('td').hide();
        $('.brittany-str').fadeIn();
    });
    $('.pause-brittany').on('click', function() {
        $('.brittany-img').removeClass('full-size');
        $('td').show();
    });

});
