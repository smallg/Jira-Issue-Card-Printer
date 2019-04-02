(function(){
        var head = document.getElementsByTagName('head')[0];
        var scriptElement = document.createElement('script');
        scriptElement.src = 'https://github.com/smallg/Jira-Issue-Card-Printer/dist/bookmarklet.js';
        head.appendChild(scriptElement);
        head.removeChild(scriptElement);
})();
