element = document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls > button.ytp-fullscreen-button.ytp-button")
var oldTitle = element.title;

function myFunc(Element) {
    if (Element.title == 'Plein écran (f)')
        document.querySelector("#page-manager > ytd-watch-flexy").style.marginTop = "50px";
    else
        document.querySelector("#page-manager > ytd-watch-flexy").style.marginTop = "0px";
        window.scrollTo(0,0);
}

window.setInterval(function()
{
    if (element.title !== oldTitle)
    {
        myFunc(element);
    }
    oldTitle = element.title;
}, 100); //check every 100ms