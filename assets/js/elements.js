// ELEMENTI CREATI ATTRAVERSO JS

const body = document.querySelector('body')

// Tabello punteggi 
let scoreBoard = document.createElement('div') 
scoreBoard.className = "scoreBoard"
body.appendChild(scoreBoard);


// Display Punteggio 

  let valueHome = "00"; 
  let valueGuest = "00"; 

    let squadre = document.createElement('div')
    squadre.className = 'squadre'
    scoreBoard.appendChild(squadre)

    let homeText = document.createElement('h2')
    squadre.appendChild(homeText)
    homeText.innerHTML = 'HOME'

    let guestText = document.createElement('h2')
    squadre.appendChild(guestText)
    guestText.innerHTML = 'GUEST'

    // HOME

    let homeFrame = document.createElement('div')
    scoreBoard.appendChild(homeFrame)
    homeFrame.className = 'scoreSquare'

    let scoreHome = document.createElement('h3');
    scoreHome.innerHTML = valueHome
    homeFrame.appendChild(scoreHome)

    // GUEST

    let guestFrame = document.createElement('div')
    scoreBoard.appendChild(guestFrame)
    guestFrame.className = 'scoreSquare'
  
    let scoreGuest = document.createElement('h3');
    scoreGuest.innerHTML = valueGuest
    guestFrame.appendChild(scoreGuest)

// Div x contenere punteggio di Home e Guest

  let divPunteggi = document.createElement('div');
  divPunteggi.className = "divPunteggi"
  scoreBoard.appendChild(divPunteggi);
  divPunteggi.appendChild(guestFrame)
  divPunteggi.appendChild(homeFrame)
  

// Console
const console = document.createElement('div') 
console.className = 'console'
scoreBoard.appendChild(console)

// Console - bottoni

  //HOME
    let bottonePlusHome = document.createElement('button')
    bottonePlusHome.textContent = "+"
    bottonePlusHome.className = 'bottone'
    console.appendChild(bottonePlusHome)

    let bottoneMinusHome = document.createElement('button')
    bottoneMinusHome.textContent = "-"
    bottoneMinusHome.className = 'bottone'
    console.appendChild(bottoneMinusHome)
   

    let bottoneResetPunteggioHome = document.createElement('button')
    bottoneResetPunteggioHome.textContent = 'Reset'
    bottoneResetPunteggioHome.className = "bottoneReset"
    console.appendChild(bottoneResetPunteggioHome)

    let divBottoniHome = document.createElement('div') 
    divBottoniHome.className = 'divBottoni'
    console.appendChild(divBottoniHome) 
    divBottoniHome.appendChild(bottonePlusHome);
    divBottoniHome.appendChild(bottoneMinusHome)
    divBottoniHome.appendChild(bottoneResetPunteggioHome)

  //GUEST

    let bottonePlusGuest = document.createElement('button')
    bottonePlusGuest.textContent = "+"
    bottonePlusGuest.className = 'bottone'
    console.appendChild(bottonePlusGuest)

    let bottoneMinusGuest = document.createElement('button')
    bottoneMinusGuest.textContent = "-"
    bottoneMinusGuest.className = 'bottone'
    console.appendChild(bottoneMinusGuest)


    let bottoneResetPunteggioGuest = document.createElement('button')
    bottoneResetPunteggioGuest.textContent = 'Reset'
    bottoneResetPunteggioGuest.className = "bottoneReset"
    console.appendChild(bottoneResetPunteggioGuest)

    let divBottoniGuest = document.createElement('div') 
    divBottoniGuest.className = 'divBottoni'
    console.appendChild(divBottoniGuest) 
    divBottoniGuest.appendChild(bottonePlusGuest);
    divBottoniGuest.appendChild(bottoneMinusGuest)
    divBottoniGuest.appendChild(bottoneResetPunteggioGuest)


