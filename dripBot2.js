(function (window, undefined) {
    if (window.top != window.self) { return; }
    window.addEventListener("load", LocalMain, false);
    
    function LocalMain() {  
        setInterval(function() { FuckTheSystem(); }, 50);
        setInterval(function() { Drip(); }, 5000);
        setInterval(function() { CheckError(); }, 1000);
    }
    function FuckTheSystem() {
        //for(var i = 0; i < 10; i++) { // 10
            var t=CoffeeCup.calcBytesPerClick();
            localStats.byteCount+=t;
        //}
    }
    function Drip() {
    	$('#btn-addGlobalMem').click();
    }
    function CheckError() {
        if($('#networkError').css('display') == 'block') {
            location.reload();
        }
    }
})(window);
