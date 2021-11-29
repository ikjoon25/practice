//메뉴
var menu=$('#nav>ul>li');
menu.on({mouseover: function(){
    $(this).find('ul').stop().slideDown();
}, mouseout: function(){
    $(this).find('ul').stop().slideUp();
}});

//슬라이드
var banner=$('#banner ul li');
var current=0;
setInterval(function(){
    var prev=banner.eq(current);
    current++
    move(prev, 1, 0);
    if(current==banner.size()) current=0;
    var next=banner.eq(current);
    move(next, 0, 1);
}, 2000);
function move(tg, start, end){
    tg.css('opacity', start).stop().animate({opacity: end}, 500);
};

var tab=$('.tab ul li');
var tabContent=$('.tab-contents>div');
tab.click(function(){
    var tg=$(this);
    var i=tg.index();
    tab.removeClass('active');
    tg.addClass('active');

    tabContent.css('display', 'none');
    tabContent.eq(i).css('display', 'block');
})

$('.popup').click(function(){
    $('.pop').fadeIn();
});
$('.btn').click(function(){
    $('.pop').fadeOut();
});