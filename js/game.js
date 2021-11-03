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
    if (this.guess === this.compare()) {
      this.playerCard += 1;
      this.hand += 1;
      console.log("handplayedguessed");
      if (this.playerCard === 8) {
        buildWinScreen();
        //wait for two seconds and then build win screen
      }
    } else {
      this.gameOn = false;
      console.log("handplayedlost");
      buildGameOverScreen();
      //wait for two seconds and then build game over screen
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
