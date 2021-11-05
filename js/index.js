const buildDom = (html) => {
  const main = document.querySelector("main");
  main.innerHTML = html;
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

  const rulesButton = document.getElementById("button-black");
  rulesButton.addEventListener("click", buildRulesScreen);

  const startButton = document.getElementById("button-red");
  startButton.addEventListener("click", buildGameScreen);
};

window.addEventListener("load", buildSplashScreen);

const generateCard = (cardObject, isFirst) => {
  return `<div class="gameCards gameCard${cardObject.suitColor} ${
    isFirst ? "gameCards-showCard" : ""
  }" 
               data-cardValue="${cardObject.value}">
            <div class="gameCardInner">
               <div class="gameCardFront"></div>
               <div class="gameCardBack">
                ${cardObject.displayValue}${cardObject.suit}
               </div>
             </div>
          </div>`;
};

const buildRulesScreen = () => {
  buildDom(`
      <div class="buildRulesScreen">
        <h1>Rules!</h1>
        <ol>
          <li>♥  Guess if the next card is higher or lower</li>
          <li>♦  Aces are high</li>
          <li>♣  You don't get anything for a pair</li>
        </ol>
        <div class="buttonContainer">
          <button id="goBackButton">GO BACK</button>
        </div>
      </div>
      `);
  const goBackButton = document.getElementById("goBackButton");
  goBackButton.addEventListener("click", buildSplashScreen);
};

const buildGameScreen = () => {
  const game = new Game(cardData);

  const cardOne = generateCard(game.randomCard(), true);
  const cardTwo = generateCard(game.randomCard());
  const cardThree = generateCard(game.randomCard());
  const cardFour = generateCard(game.randomCard());
  const cardFive = generateCard(game.randomCard());
  const cardSix = generateCard(game.randomCard());
  const cardSeven = generateCard(game.randomCard());
  const cardEight = generateCard(game.randomCard());
  const cardNine = generateCard(game.randomCard());

  buildDom(`
 
    <div class="gameContainer">
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

  const guessHiButton = document.getElementById("guessHi");
  guessHiButton.addEventListener("click", () => game.guessHand("h"));

  const guessLowButton = document.getElementById("guessLow");
  guessLowButton.addEventListener("click", () => game.guessHand("l"));
};

const buildGameOverScreen = () => {
  buildDom(`
      <div class="buildGameOverScreen">
        <h1>BETTER LUCK NEXT TIME!</h1>
        <div class="buttonContainer">
          <button id="tryagainbutton">TRY AGAIN</button>
        <div>
      </div>
      `);
  const tryagainbutton = document.getElementById("tryagainbutton");
  tryagainbutton.addEventListener("click", buildGameScreen);
};

const buildWinScreen = () => {
  buildDom(`
      <div class="buildWinScreen">
        <h1>Woo hoooooo! YOU WON!</h1>
        <div class="buttonContainer">
          <button id="playAgainButton">PLAY AGAIN</button>
        </div>
      </div>
      `);
  const playAgainButton = document.getElementById("playAgainButton");
  playAgainButton.addEventListener("click", buildGameScreen);

  const audio = new Audio("audio/themetune.mp3");
  audio.play();
};


