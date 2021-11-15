$(function () {
    // BANNER:
    let banner=$('.slide ul li'),
        current = 0;
    setInterval(function () {
            let prev = banner.eq(current);
            current++;
            move(prev, 1, 0);
            if (current == banner.size()) {
                current = 0
            }
            let next = banner.eq(current);
            move(next, 0, 1);
        },2500);
    function move(tg, start, end) {
        tg.css({'opacity':start}).stop().animate({opacity:end},500)
    }
    // MENU:
    $('#nav>ul>li').on('mouseover',function () {
        $('#nav>ul>li').find('ul').stop().slideDown();

    })
    $('#nav>ul>li').on('mouseout',function () {
        $('#nav>ul>li').find('ul').stop().slideUp();
    })

    // TAB:
    // TAB'S BUTTON(LI)":
    let tab=$('.tabs ul li'),   //click S
        content=$('.panel>div');    //나올내용물
    tab.click(function () {
        let tg=$(this),
            i=tg.index();
        tab.removeClass('active');
        tg.addClass('active');
        // 내용물:
        content.css('display','none');
        content.eq(i).css('display','block');
    })
    // POPUP:
    $('.popup').click(function () {
        $('.pop').fadeIn();
    });
    $('.btn').click(function () {
        $('.pop').fadeOut();
    });
})