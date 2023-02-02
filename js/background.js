/*
const value = document.getElementById("SliderChangerValue").value-
document.getElementById("sliderButton").addEventListener("click", myFunction);

function myFunction(){
  console.log(document.getElementById("SliderChangerValue").value);
}


const value = document.getElementById("SliderChangerValue").value 
document.getElementById("sliderButton").addEventListener("click", myFunction);

function myFunction(){
  console.log(document.getElementById("SliderChangerValue").value);
}
*/
let value = "https://i.imgur.com/cbhaSpy.gif"

chrome.tabs.onUpdated.addListener(async (tabId, info) => {
  if (info.status == "complete") {

    const query = { active: true, lastFocusedWindow: true }
    const result = await chrome.tabs.query(query)

    chrome.scripting.executeScript(
      {
        target: {
          tabId: result[0].id
        },
        func: mafunction,
        args: [value]
      }
    ).then(() => { console.log('script injected') });
  }

  // To handle youtube video page

})


function mafunction() {
/*
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
*/
  alert(value);
}
/*
chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {
  console.log(response);
  value = toString(response)
  return value;
})*/

