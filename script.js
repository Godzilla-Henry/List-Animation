// HTML DOM 元件渲染完成後才執行以下FUNC
$(document).ready(function(){
    // 背景的大小
    var screenWidth = "scale(60)";

    // 選單
    $.fn.clickToggle = function(func1, func2) {
        var funcs = [func1, func2];
        this.data('toggleclicked', 0);
        this.click(function() {
            var data = $(this).data();
            var tc = data.toggleclicked;
            $.proxy(funcs[tc], this)();
            data.toggleclicked = (tc + 1) % 2;
        });
        return this;
    };
    
    /*OPEN FUNC==============================*/
    $('#menu-btn').clickToggle(function() {
        event.preventDefault();
        $('.ripple').css("opacity", "1");
        $('.ripple').css("transition", "all 400ms");
        $('.ripple').css("transform", screenWidth);
        /*add -webit,-ms,-moz specific code*/
        $('.ripple').css("-webkit-transition", "all 400ms");
        $('.ripple').css("-webkit-transform", screenWidth);
        $('.ripple').css("-moz-transition", "all 400ms");
        $('.ripple').css("-moz-transform", screenWidth);
        /*X animation*/
        $('#nav-icon').toggleClass('open');
        /*menu animations*/
        $('#menu-txt').css({
            "animation-name" : "ulAni",
            "animation-duration" : "0.5s",
            "display" : "block"
        });
        $('#menu-txt li').css({
            "animation-name" : "liAni",
            "animation-duration" : "0.5s"
        });  
    },
    /*OPEN END==============================*/
        
    /*CLOSE FUNC=====================*/   
    function() {
        event.preventDefault();
        function blend(){
        $('.ripple').css("opacity", "0");
        }
        setTimeout(blend, 30);
        $('.ripple').css("transition", "all 200ms ease-in");
        $('.ripple').css("transform", "scale(1)");
        /*X animation=====*/
        $('#nav-icon').toggleClass('open');
        /*menu animations*/
        $('#menu-txt').css({
            "display" : "none"
        });
    });
    /*CLOSE END=====================*/
});