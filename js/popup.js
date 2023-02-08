console.log("popup.js loaded");
var InputValude = document.querySelector("#SliderChangerValue")
var ProgressBarColor = document.querySelector(".ProgressBarColorPicker")
var PopupData = {
    InputValude: "vide",
    ProgressBarColor: "#0000F0"
}

window.onload = () => {
    PopupData = JSON.parse(localStorage.getItem('MyKey-Data'))
    InputValude.value = PopupData.InputValude
    ProgressBarColor.value = PopupData.ProgressBarColor
    
} // SetPopup to Defaults settings

console.log(JSON.parse(localStorage.getItem('MyKey-Data')));

document.getElementById("Apply").addEventListener("click", () => {
    let temp1 = InputValude.value
    let temp2 = ProgressBarColor.value

    PopupData = {
        InputValude: InputValude.value,
        ProgressBarColor: ProgressBarColor.value
    }

    if (InputValude.value != "") {
        localStorage.setItem('MyKey-Data', JSON.stringify(PopupData));
        chrome.runtime.sendMessage(response = { temp1, temp2 })
    } else {
        alert("Remplisser le champs")
    }
})
