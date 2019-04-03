(function(){
        var head = document.getElementsByTagName('head')[0];
        var scriptElement = document.createElement('script');
        scriptElement.src = 'http://47.75.244.75/printer/dist/bookmarklet.js';
        head.appendChild(scriptElement);
        head.removeChild(scriptElement);
})();
