$(document).ready(function () {


    // 滑動至指定區塊位置
    $('.menu a').click(function () {

        var btn = $(this).attr('href');
        var pos = $(btn).offset();
        $('html,body').animate({ scrollTop: pos.top }, 1500);

    });

    //滑動至頂
    $('#gotop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 1500);
    });

    $(window).scroll(function () {

        if ($(this).scrollTop() > 200) {
            $('#gotop').stop().fadeTo('', 1);
        } else {
            $('#gotop').stop().fadeOut();
        }

    });


    //滑動載入
    $('.smoove').smoove({
        offset: '30%'
    }
    );
});


// 啟用lightbox
lightbox.option({
    'wrapAround': true
});











