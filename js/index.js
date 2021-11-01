// use import/export variable for card array

const buildDom = (html) => {
  const main = document.querySelector("main");
  main.innerHTML = html;
  console.log(main)
};

  // First Screen => Splash Screen
const buildSplashScreen = () => {
  buildDom(`
  <div class="splashContainer">
    <h1>Play Your Cards Right</h1>
    <div class="buttonContainer">
      <button id="button button--red">START</button>
      <button id="button button--black">RULES</button>
    </div>
  </div>
`);
    
const startButton = document.getElementById("button button--red");
  startButton.addEventListener("click", buildGameScreen);
};

const randomCard = () => { 
  const cardIndex = Math.floor(Math.random() * cardData.length); //gets a random number based on the length of the carddata array
  const card = cardData[cardIndex]; //assigns the card object to a variable

  cardData.splice(cardIndex, 1); //deletes the chosen card from the carddata array

  return card;
}

const generateCard = (cardObject) => {
  return `<div class="gameCards" data-cardValue="${cardObject.value}">${cardObject.displayValue}${cardObject.suit}</div>`} //generates the card value in the html display

  const buildGameScreen = () => {
   
    const cardOne = generateCard(randomCard())
    const cardTwo = generateCard(randomCard())
    const cardThree = generateCard(randomCard())
    const cardFour = generateCard(randomCard())
    const cardFive = generateCard(randomCard())
    const cardSix = generateCard(randomCard())
    const cardSeven = generateCard(randomCard())
    const cardEight = generateCard(randomCard())
    const cardNine = generateCard(randomCard())

    buildDom(`
    <div class="gameContainer">
    <h1>Game Screen</h1>
    <button id="goToGameOver">GO TO GAME OVER SCREEN</button>
    </div>
    <div class="gameCardsContainer">
      <div class="row">
        ${cardNine}
        ${cardEight}
        ${cardSeven}
      </div>
      <div class="row">
        ${cardFive}
        ${cardSix}
        ${cardFour}
      </div>
      <div class="row">
        ${cardOne}
        ${cardTwo}
        ${cardThree}
      </div>
    </div>
    `);
      const goToGameOverButton = document.getElementById("goToGameOver");
      goToGameOverButton.addEventListener("click", buildGameOverScreen);
    };

    const buildGameOverScreen = () => {
      buildDom(`
      <div class="buildGameOverScreen">
      <h1>Game Over Screen</h1>
      <button id="tryagainbutton">TRY AGAIN</button>
      </div>
      `)
      const tryagainbutton = document.getElementById("tryagainbutton");
      tryagainbutton.addEventListener("click", buildGameScreen);
    }
    window.addEventListener("load", buildSplashScreen);

  
  // new game(cardData)


  



