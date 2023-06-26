

const body = document.querySelector('body')

// Tabello punteggi 
let scoreBoard = document.createElement('div') 
scoreBoard.className = "scoreBoard"
body.appendChild(scoreBoard);


// Display Punteggio 

  let value = "00"; 

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
    scoreHome.innerHTML = value
    homeFrame.appendChild(scoreHome)

    // GUEST
    let guestFrame = document.createElement('div')
    scoreBoard.appendChild(guestFrame)
    guestFrame.className = 'scoreSquare'
  
    let scoreGuest = document.createElement('h3');
    scoreGuest.innerHTML = value
    guestFrame.appendChild(scoreGuest)

// Console
const console = document.createElement('div') 
console.className = 'console'
body.appendChild(console)

// Console - bottoni

    let bottonePlus = document.createElement('button')
    bottonePlus.textContent = "+"
    console.appendChild(bottonePlus)

    let bottoneMinus = document.createElement('button')
    bottoneMinus.textContent = "-"
    console.appendChild(bottoneMinus)

    let bottoneResetPunteggio = document.createElement('button')
    bottoneResetPunteggio.textContent = 'Reset'
    console.appendChild(bottoneResetPunteggio)

// Plus dello score fino al valore 99

const incrementoValue = () => {
  if (value < 99) {
    value++;
    scoreHome.innerHTML = value;
  };
  if (value < 10 ) {
    let valueString = value.toString();
    scoreHome.innerHTML = valueString.padStart(2,0)
  }
}

bottonePlus.addEventListener('click', incrementoValue)

// Minus dello score che non puo andare sotto lo 0 

const decrementoValue = () => {
  if (value > 0) {
    value--;
    scoreHome.innerHTML = value;
  };
  if (value < 10 ) {
    let valueString = value.toString();
    scoreHome.innerHTML = valueString.padStart(2,0)
  }
}

bottoneMinus.addEventListener('click', decrementoValue)

//Reset del punteggio a 0

const resetValue = () => {
  value = "00";
  scoreHome.innerHTML = value;
}

bottoneResetPunteggio.addEventListener('click', resetValue)
