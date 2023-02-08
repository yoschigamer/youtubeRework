var Data = {
  InputValude: "Vide", // https://media.tenor.com/WtDDOBNCKB8AAAAi/sonic-running.gif
  ProgressBarColor: "vide" // red
}

chrome.runtime.onMessage.addListener(function (response, sender, sendResponse) {
  Data = {
    InputValude: response.temp1,
    ProgressBarColor: response.temp2
  }
  console.log(response);
  return Data
}) // On reçois le slider définis dans la popup

chrome.tabs.onUpdated.addListener(async (tabId, info) => {
  if (info.status == "complete") {

    const query = { active: true, lastFocusedWindow: true }
    const result = await chrome.tabs.query(query)

    chrome.scripting.executeScript(
      {
        target: {
          tabId: result[0].id
        },
        func: SliderFunction,
        args: [Data.InputValude]
      }
    ).then(() => { console.log('script SliderFunction injected') });
    chrome.scripting.executeScript(
      {
        target: {
          tabId: result[0].id
        },
        func: fullscreen,
      }
    ).then(() => { console.log('script fullscreen injected') });
    chrome.scripting.executeScript(
      {
        target: {
          tabId: result[0].id
        },
        func: progressBar,
        args: [Data.ProgressBarColor]
      }
    ).then(() => { console.log('script progressBar injected') });
  }
})

function fullscreen() {
  let fullscreen = document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-chrome-controls > div.ytp-right-controls > button.ytp-fullscreen-button.ytp-button")
  var oldTitle = fullscreen.title;

  window.setInterval(function () {
    if (fullscreen.title !== oldTitle) {
      (fullscreen.title == 'Plein écran (f)')
        ? (document.querySelector("#page-manager > ytd-watch-flexy").style.marginTop = "50px")
        : (document.querySelector("#page-manager > ytd-watch-flexy").style.marginTop = "0px", window.scrollTo(0, 0));
    }
    oldTitle = fullscreen.title;
  }, 100); //check every 100ms
}

function SliderFunction(InputValude) {
  function styled() {
    var newDivStyle = document.createElement('style');
    newDivStyle.innerHTML = `
      :root{
        --size: 50px !important
      }

      #img-container {
        background: url("${InputValude}") 0% 0% / contain no-repeat;
        top: calc(var(--size)*-1.2) !important;
        left: calc(var(--size)/2*-1) !important;
        width: var(--size);
        height: var(--size); 
        position: relative;
      }
    `;
    document.head.appendChild(newDivStyle);
  } // StyleSheet

  if (!(document.querySelector("#img-container") != null)) {
    const currentDiv = document.querySelector("#movie_player > div.ytp-chrome-bottom > div.ytp-progress-bar-container > div.ytp-progress-bar > div.ytp-scrubber-container")

    // create a new div element
    const newDiv = document.createElement("div");
    newDiv.id = "img-container";

    styled() // Css du slider

    // liée la div à l'element
    currentDiv.appendChild(newDiv);
  }
  else {
    return;
  }
}

function progressBar(ProgressBarColor) {
  document.querySelector(':root').style.setProperty('--Progress-Bar-Color', ProgressBarColor);
}