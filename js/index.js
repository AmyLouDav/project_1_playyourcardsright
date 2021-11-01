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

  const buildGameScreen = () => {
    buildDom(`
    <div class="gameContainer">
    <h1>Game Screen</h1>
    <button id="goToGameOver">to game over screen</button>
    </div>
    <div class="gameCardsContainer">
    <div class="bottomRow">
      <div class="gameCards">1</div>
      <div class="gameCards">2</div>
      <div class="gameCards">3</div>
      <div class="gameCards">4</div>
      </div>
      <div class="middleRow">
      <div class="gameCards">5</div>
      <div class="gameCards">6</div>
      <div class="gameCards">7</div>
      <div class="gameCards">8</div>
      </div>
      <div class="topRow">
      <div class="gameCards">9</div>
      <div class="gameCards">10</div>
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
      <button id="tryagainbutton">Try again</button>
      </div>
      `)
      const tryagainbutton = document.getElementById("tryagainbutton");
      tryagainbutton.addEventListener("click", buildGameScreen);
    }
    window.addEventListener("load", buildSplashScreen);

  


  



