$(function(){
	var menu = $('#slide_menu'), // スライドインするメニューを指定
	menuBtn = $('#open_button'),
	closeBtn = $('#menu_close_button'), // トリガーとなるボタンを指定
	body = $(document.body), 	
    menuWidth = menu.outerWidth();
    menuBtn.on('click', function(){
		body.toggleClass('open');
        if(body.hasClass('open')){           
            menu.animate({'left' : 0 }, 300);        
		} else {
			menu.animate({'left' : -menuWidth }, 300);
		}
    });
    closeBtn.on('click', function(){
        body.toggleClass('open');
        if(body.hasClass('open')){           
            menu.animate({'left' : 0 }, 300);        
		} else {
			menu.animate({'left' : -menuWidth }, 300);
		}
    })
});