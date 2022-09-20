# NAV Animation
## HTML 使用原理
建立div.ripple做為展開後選單的背景，注意各個元件z-index的優先關係。
使用display: none和 display: block決定出現隱藏。
背景則是opacity 0 -> 1淡入淡出動畫。

## CSS 使用屬性
* Z-index
	- Z軸上下層關係，數字愈大愈優先。
* letter-spacing
	- 字母之間的間隔。
* cursor
	- 屬標的樣式。
* position: fixed;
    - 將元件固定在某個位置
* transform: rotate(0deg);
    - 旋轉(*)度
* transition 屬性
    - transition-property:指定要轉換的CSS屬性
    - transition-duration:轉換需要的時間，預設0，單位為s或ms
    - transition-delay:延遲多久轉換，預設0，單位為s或ms
    - transition-timing-function:轉換時的速度曲線，預設ease
* transform-origin
    - 設定物件變形的起始點
* @keyframes 動畫名稱{...//do something animation}

## JS 使用
```javascript=
    // Jquery 切換toggle
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

    $('#menu-btn').clickToggle(
        function() {
            function1...
        },
        
        function() {
            function2...
        }
    );
```