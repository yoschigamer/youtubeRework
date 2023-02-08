const currentDiv = document.querySelector("body > div.truc")
const img = "https://cdn.discordapp.com/attachments/779691718160941076/845583088904962058/akbKSb4.gif"

function Slider() {
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
            --size: 100px !important
        }

        #img-container {
            background: url("${img}") 0% 0% / contain no-repeat;
            left: calc(var(--size)/2*-1) !important;
            width: var(--size);
            height: var(--size); 
            position: relative;
        }
        `;
        document.head.appendChild(newDivStyle);
    }
}

Slider()

document.getElementById("sliderButton").addEventListener("click", () => {
    document.getElementById("img-container").style.background = `url(${document.getElementById("SliderChangerValue").value}) 0% 0% / contain no-repeat`
    localStorage.setItem('MyKey', document.getElementById("SliderChangerValue").value);

    alert(localStorage.getItem('MyKey')); // document.getElementById("SliderChangerValue").value
})
