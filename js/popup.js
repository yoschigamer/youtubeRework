/*
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

//

document.body.onload = Slider;

function Slider() {
    const currentDiv = document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-progress-bar-container > div.ytp-progress-bar > div.ytp-scrubber-container")
    const img = "https://cdn.discordapp.com/attachments/779691718160941076/845583088904962058/akbKSb4.gif"

    // create a new div element
    const newDiv = document.createElement("div");
    newDiv.id = "img-container";

    styled()

    // add the text node to the newly created div
    currentDiv.appendChild(newDiv);

    // apply StyleSheet
    function styled() {
        var newDivStyle = document.createElement('style');
        newDivStyle.innerHTML = `
        :root{
            --size: 50px !important
        }

        #img-container {
            background: url("${img}") 0% 0% / contain no-repeat;
            top: calc(var(--size)*-1) !important;
            left: calc(var(--size)/2*-1) !important;
            width: var(--size);
            height: var(--size); 
            position: relative;
        }   
        `;
        document.head.appendChild(newDivStyle);
    }
}
document.querySelector("#sliderButton").addEventListener("click", () => {
    //document.getElementById("img-container").style.background = `url(${document.getElementById("SliderChangerValue").value}) 0% 0% / contain no-repeat`
    localStorage.setItem('MyKey', document.getElementById("SliderChangerValue").value);

    alert(localStorage.getItem('MyKey')); // document.getElementById("SliderChangerValue").value
})
*/
console.log("popup.js loaded");

document.getElementById("sliderButton").addEventListener("click", () => {
    if (document.getElementById("SliderChangerValue").value != "") {
        localStorage.setItem('MyKey', document.getElementById("SliderChangerValue").value);
        chrome.runtime.sendMessage(document.getElementById("SliderChangerValue").value)  
        console.log('send');      
    }else {
        alert("Remplisser le champs")
    }
});