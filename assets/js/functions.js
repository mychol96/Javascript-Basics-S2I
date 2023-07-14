// TUTTE LE FUNZIONI DI JS


// Plus dello score fino al valore 99

bottonePlusHome.addEventListener('click', () => {
    if (valueHome < 99) {
      valueHome++;
      scoreHome.innerHTML = valueHome;
    };
    if (valueHome < 10 ) {
      let valueString = valueHome.toString();
      scoreHome.innerHTML = valueString.padStart(2,0)
    }
  })
  
  bottonePlusGuest.addEventListener('click', () => {
    if (valueGuest < 99) {
      valueGuest++;
      scoreGuest.innerHTML = valueGuest;
    };
    if (valueGuest < 10 ) {
      let valueString = valueGuest.toString();
      scoreGuest.innerHTML = valueString.padStart(2,0)
    }
  })
  
  // Minus dello score che non puo andare sotto lo 0 
  
  bottoneMinusHome.addEventListener('click', () => {
    if (valueHome > 0) {
      valueHome--;
      scoreHome.innerHTML = valueHome;
    };
    if (valueHome < 10 ) {
      let valueString = valueHome.toString();
      scoreHome.innerHTML = valueString.padStart(2,0)
    }
  })
  
  bottoneMinusGuest.addEventListener('click', () => {
    if (valueGuest > 0) {
      valueGuest--;
      scoreGuest.innerHTML = valueGuest;
    };
    if (valueGuest < 10 ) {
      let valueString = valueGuest.toString();
      scoreGuest.innerHTML = valueString.padStart(2,0)
    }
  })
  
  // Reset del punteggio a 0
  
  bottoneResetPunteggioHome.addEventListener('click', () => {
    valueHome = "00";
    scoreHome.innerHTML = valueHome;
  })
  
  bottoneResetPunteggioGuest.addEventListener('click', () => {
    valueGuest = "00";
    scoreGuest.innerHTML = valueGuest;
  })
  
  
  
  
  