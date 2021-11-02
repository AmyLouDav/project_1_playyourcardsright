
const game = new Game(cardData)


const buildDom = (html) => {
  const main = document.querySelector("main");
  main.innerHTML = html;
  console.log(main)
};


const generateCard = (cardObject) => {
  return `<div class="gameCards" data-cardValue="${cardObject.value}">${cardObject.displayValue}${cardObject.suit}</div>`
} //generates the card value in the html display

const buildGameScreen = () => {

  const cardOne = generateCard(game.randomCard())
  const cardTwo = generateCard(game.randomCard())
  const cardThree = generateCard(game.randomCard())
  const cardFour = generateCard(game.randomCard())
  const cardFive = generateCard(game.randomCard())
  const cardSix = generateCard(game.randomCard())
  const cardSeven = generateCard(game.randomCard())
  const cardEight = generateCard(game.randomCard())
  const cardNine = generateCard(game.randomCard())

  // function flipCard(card) {
  //   card.classList.toggle("turned")
  // }

  // function freezeCard(card){
  //   card.classList.toggle("frozen")
  // }

  buildDom(`
    <div class="gameContainer">
    <h1>Game Screen</h1>
    <button id="goToGameOver">GO TO GAME OVER SCREEN</button>
    <div class="buttonContainer">
    <button id="guessHi" class="button button-red">HIGHER</button>
    <button id="guessLow" class="button button-black">LOWER</button>
  </div>
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

  const guessHiButton = document.getElementById("guessHi");
  guessHiButton.addEventListener("click", ()=>game.guessHand('h'));
  const guessLowButton = document.getElementById("guessLow");
  guessLowButton.addEventListener("click", ()=>game.guessHand('l'));
};

// const checkIfHigherButton = document.getElementById("checkIfHigher");
// checkIfHigherButton.addEventListener("click")

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
}

  window.addEventListener("load", buildSplashScreen);








