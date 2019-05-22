

$(function () {
    $('.option_block__js').click(function () {
        $(this).toggleClass('option_block__active');
        $(this).toggleClass('animated');
        $(this).toggleClass('flip');
    });

    $(function () {
        $(document).on('mousemove', function (e) {
            $('.circle').css({
                right: -520 + e.pageX / 10,
                top: 80 + e.pageY / 10
            });
            $('.triangle').css({
                left: -e.pageX / 10,
                top: 150 +e.pageY / 10
            });
        });
    });
});

