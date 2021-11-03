const buildDom = (html) => {
  const main = document.querySelector("main");
  main.innerHTML = html;
  console.log(main)
};

const buildSplashScreen = () => {
  buildDom(`
  <div class="splashContainer">
    <h1>Play Your Cards Right</h1>
    <div class="buttonContainer">
      <button id="button-red" class="button-red">START</button>
      <button id="button-black" class="button button-black">RULES</button>
    </div>
  </div>
`);

const startButton = document.getElementById("button-red");
startButton.addEventListener("click", buildGameScreen);
}

  window.addEventListener("load", buildSplashScreen);

const generateCard = (cardObject) => {
  return `<div class="gameCards gameCard${cardObject.suitColor}" data-cardValue="${cardObject.value}">${cardObject.displayValue}${cardObject.suit}</div>`
} //generates the card value in the html display

const buildGameScreen = () => {
  const game = new Game(cardData)

  const cardOne = generateCard(game.randomCard())
  const cardTwo = generateCard(game.randomCard())
  const cardThree = generateCard(game.randomCard())
  const cardFour = generateCard(game.randomCard())
  const cardFive = generateCard(game.randomCard())
  const cardSix = generateCard(game.randomCard())
  const cardSeven = generateCard(game.randomCard())
  const cardEight = generateCard(game.randomCard())
  const cardNine = generateCard(game.randomCard())
  


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
        ${cardOne}
        ${cardTwo}
        ${cardThree}
      </div>
      <div class="row">
        ${cardFour}
        ${cardFive}
        ${cardSix}
      </div>
      <div class="row">
        ${cardSeven}
        ${cardEight}
        ${cardNine}
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

const buildWinScreen = () => {
  buildDom(`
      <div class="buildWinScreen">
      <h1>Yay! You won!</h1>
      <button id="playAgainButton">PLAY AGAIN</button>
      </div>
      `)
  const playAgainButton = document.getElementById("playAgainButton");
  playAgainButton.addEventListener("click", buildGameScreen);
}

const flipCard = () => {
  buildDom(`
  <div class="flip-card">
  <div class="flip-card-inner">
    <div class="flip-card-front">
      <img style="width:150px;height:200px;">
    </div>
    <div class="flip-card-back">
    </div>
  </div>
</div>
`)

}










