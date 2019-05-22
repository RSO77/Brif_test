

$(function () {
    $('.option_block__js').click(function () {
        $(this).toggleClass('option_block__active');
        $(this).toggleClass('animated');
        $(this).toggleClass('flip');
    });

    // $('.option_block__js_hover').hover(
    //     function(){ $(this).addClass('animated'); $(this).addClass('flip') },
    //     function(){ $(this).removeClass('animated'); $(this).removeClass('flip') }
    // );
});

