window.onload=function(){

    $('.nav .list-item .list-children').each(function(){

        var lis=$(this).find('li'); //查找当前元素中所有的li
        var len=lis.length; //len为所有li的个数
        var width=lis.width; //获取li的宽度
        var height=lis.height;//获取li的高度
        var col=Math.ceil(len/6); //向上取整
        $(this).width=col*width;

        lis.each(function(i){

            var x=Math.floor(i/6);

            var y=i%6; //取余

            $(this).css({
                left:x*width+"px",
                top:y*height+"px"
            });
        });   
    });

$('.nav .list-item').hover(function(){

    $(this).find('.list-children').show();

},function(){

    $(this).find('.list-children').hide();
});





}