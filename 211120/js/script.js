$("#nav>ul>li").on({mouseover:function(){
    $(this).find('ul').stop().slideDown();
},mouseout:function(){
    $(this).find('ul').stop().slideUp();
}});

var slide=('#slide>ul>li');
var current=0;

setInterval(function(){
    var prev=slide.eq(current);
    current++;
    if(current==slide.size()){current=0};
    move(prev, 0,'100%');
    var next=slide.eq(currnet);
    move(next,'-100%',0);
},2000);

function move(tg,start,end){
    tg.css('left',start).stop().animate({left:end},500)
}