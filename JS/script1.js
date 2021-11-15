$('#nav>ul>li').hover(function(){
    $(this).find('ul').stop().slideDown()
},function(){
    $(this).find('ul').stop().slideUp()
});

var banner = $('.slide ul li'),
    current = 0;

    setInterval(function(){
        var prev = banner.eq(current);
        current++;
        move(prev, 0, '100%');
        if (current == banner.size()){
            current = 0;
        }
        var next = banner.eq(current);
        move(next, '-100%', 0);
    },3000);

    function move(tg, start, end){
        tg.css({'top':start}).stop().animate({top:end},500)
    }

    var tab = $('.tabs ul li'),
        content = $('.pannel>div');
        tab.click(function(){
            var tg = $(this),
                i = tg.index();
                tab.removeClass('active');
                tg.addClass('active');
                content.css('display','none');
                content.eq(i).css('display','block');
        });