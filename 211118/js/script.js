$('#nav>ul>li').hover(function(){
    $(this).find('ul').stop().slideDown();
},function(){
    $(this).find('ul').stop().slideUp();
});


var slide = $('#slide>ul>li');
var current = 0;

function move(tg, start, end){
    tg.css('opacity',start).stop().animate({opacity:end},500)
}

setInterval(function(){
    var prev = slide.eq(current);
    current++;
    move(prev, 1, 0);
    if(current==slide.size()){
        current=0;
    }
    var next = slide.eq(current);
    move(next, 0, 1);
},2000);