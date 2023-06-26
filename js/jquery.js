function slideshow() {
    var slideshow = document.getElementById("slideshow"),
        imgs = slideshow.getElementsByTagName("img"), //得到图片们
        pages = slideshow.getElementsByTagName("span"), //得到页码们
        buttons = slideshow.getElementsByTagName("p"), //得到描述们
        left_btn = buttons[0],
        right_btn = buttons[1],
        current = 0; //current为当前活跃的图片编号

    function slideOff() {
        imgs[current].className = ""; //图片淡出
        pages[current].className = "";
    }
    function slideOn() {
        imgs[current].className = "active"; //图片淡入
        pages[current].className = "active";
    }

    function changeSlide() { //切换图片的函数
        slideOff();
        current++; //自增1
        if (current >= 5) current = 0;
        slideOn();
    }

    //每2s调用changeSlide函数进行图片轮播
    var slideon = setInterval(changeSlide, 4000);

    slideshow.onmouseover = function () {
        clearInterval(slideon); //当鼠标移入时清除轮播事件
    }
    slideshow.onmouseout = function () {
        slideon = setInterval(changeSlide, 4000); //当鼠标移出时重新开始轮播事件
    }

    for (var i = 0; i < pages.length; i++) { //定义鼠标移入和移出页码事件
        pages[i].onmouseover = function () {
            slideOff(); //图片淡出
            current = this.getAttribute("name"); //得到鼠标停留的页码对应的current
            slideOn(); //图片淡出
        }
    }

    left_btn.onclick = function () {
        slideOff(); //图片淡出
        current--;
        if (current < 0) current = 4;
        slideOn(); //图片淡出
    }
    right_btn.onclick = function () {
        slideOff(); //图片淡出
        current++;
        if (current > 4) current = 0;
        slideOn(); //图片淡出
    }
}

slideshow();



$(document).ready(function () {

    //---漢堡按鈕---
    $('.hamburger').click(function () {
        $(this).toggleClass('is-active');
        $('.navigation').toggleClass('show');
    });

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

// topbar hide

// $(window).scroll(function () {

//     if ($(this).scrollTop() > 50) {
//         $('.scroll-hide').fadeOut();
//     }
//     else {
//         $('.scroll-hide').fadeIn();
//     }
// });