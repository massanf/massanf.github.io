$(window).on("load", function(){
	$("#conductor").delay(325).animate({opacity: 1,marginTop: 0},{duration: 500});
	$("#violin").delay(250).animate({opacity: 1,marginTop: 0},{duration: 300});
	$("#viola").delay(300).animate({opacity: 1,marginTop: 0},{duration: 300});
	$("#cello").delay(350).animate({opacity: 1,marginTop: 0},{duration: 300});
	$("#contrabass").delay(400).animate({opacity: 1,marginTop: 0},{duration: 300});
	$("#basoon").delay(450).animate({opacity: 1,marginTop: 0},{duration: 300});
	$("#clarinet").delay(500).animate({opacity: 1,marginTop: 0},{duration: 300});
	$("#oboe").delay(550).animate({opacity: 1,marginTop: 0},{duration: 300});
	$("#flute").delay(600).animate({opacity: 1,marginTop: 0},{duration: 300});
	$("#timpani").delay(650).animate({opacity: 1,marginTop: 0},{duration: 300});
	$("#horn").delay(700).animate({opacity: 1,marginTop: 0},{duration: 300});
	$("#trumpet").delay(750).animate({opacity: 1,marginTop: 0},{duration: 300});
	$("#trombone").delay(800).animate({opacity: 1,marginTop: 0},{duration: 300});
});

var linkTouchStart = function(){
    thisAnchor = $(this);
    touchPos = thisAnchor.offset().top;
    moveCheck = function(){
        nowPos = thisAnchor.offset().top;
        if(touchPos == nowPos){
            thisAnchor.addClass("hover");
        }
    }
    setTimeout(moveCheck,100);
}
var linkTouchEnd = function(){
    thisAnchor = $(this);
    hoverRemove = function(){
        thisAnchor.removeClass("hover");
    }
    setTimeout(hoverRemove,500);
}
$(document).on('touchstart mousedown','a',linkTouchStart);
$(document).on('touchend mouseup','a',linkTouchEnd);

var widthList = [];
var topList = [];
var leftList = [];
var clickedElementIndex = 0;
var closeButtonWidth

$(document).ready(function(){
    closeButtonWidth = window.getComputedStyle(document.getElementById("modal_window_close_button")).getPropertyValue('width');
    for (var i = 0; i < 13; ++i ) {
        widthList.push(window.getComputedStyle(document.getElementsByClassName("instruments")[i]).getPropertyValue('width'));
        topList.push(window.getComputedStyle(document.getElementsByClassName("instruments")[i]).getPropertyValue('top'));
        leftList.push(window.getComputedStyle(document.getElementsByClassName("instruments")[i]).getPropertyValue('left'));
    }
});
$(window).ready(function(){
    $(".instruments").on('click', function(){
        clickedElementIndex = $(".instruments").index(this);
        $("#window-"+clickedElementIndex.toString()).css("display","block");
        $(".modal_window_picture:eq("+clickedElementIndex.toString()+")").css("display",'block');
        $(".modal_window_picture:eq("+clickedElementIndex.toString()+")").css('width',(Number(widthList[clickedElementIndex].slice(0,-2))*1.5).toString()+"px");
        $("#modal_window").animate({'top':'0%'}, 300, function(){});
    });
    $("#modal_window_close_button").on('click', function(){
        $("#modal_window").animate({'top':'110%'}, {duration:300});
        $('#stage_image_container').animate({"width":"100%"}, {duration:0, queue: false, easing:"easeOutElastic"});
        $('#page_description').css("display","block");
        $(".modal_window_picture:eq("+clickedElementIndex.toString()+")").css("display",'none');
        setTimeout( function(){
            $("#window-"+clickedElementIndex.toString()).css("display","none");
        },300);
    });
});