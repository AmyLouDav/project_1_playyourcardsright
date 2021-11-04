class Game {
  constructor() {
    this.cards = cardData;
    this.playedCards = [];
    this.gameOn = true;
    this.guess = null;
    this.playerCard = 0;
    this.hand = 1;
  }

  playHand() {
    console.log(this.playedCards);
    const allCards = document.querySelectorAll(".gameCards");

    for (let i = 0; i < allCards.length; i++) {
      if (allCards[i].classList.contains("gameCards-showCard") === false) {
        allCards[i].classList.add("gameCards-showCard");

        break;
      }
    }

    if (this.guess === this.compare()) {
      this.playerCard += 1;
      this.hand += 1;
      console.log("handplayedguessed");
      if (this.playerCard === 8) {
        setTimeout(() => {
          buildWinScreen();
        }, 2000);
      }
    } else {
      this.gameOn = false;
      console.log("handplayedlost");
      setTimeout(() => {
        buildGameOverScreen();
      }, 3000);
    }
  }

  guessHand(input) {
    this.guess = input;
    this.playHand();
  }

  compare() {
    if (
      this.playedCards[this.playerCard].value <
      this.playedCards[this.hand].value
    ) {
      return "h";
    } else if (
      this.playedCards[this.playerCard].value >
      this.playedCards[this.hand].value
    ) {
      return "l";
    } else {
      return "e";
    }
  }

  randomCard() {
    const cardIndex = Math.floor(Math.random() * this.cards.length); //gets a random number based on the length of the cardData array
    const card = this.cards[cardIndex]; //assigns the card object to a variable
    this.cards.splice(cardIndex, 1); //deletes the chosen card from the carddata array
    this.playedCards.push(card);
    return card;
  }
}
