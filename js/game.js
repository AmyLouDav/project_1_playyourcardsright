class game {
    constructor(cards){
        this.cards = cardData;
    }

    shuffleCards() {
        const randomCard = cardData[Math.floor(Math.random() * cardData.length)];
        return randomCard
    }

    checkIfHigher() {

    }


}

// const copyOfCardData = cardData.slice();

// console.log(copyOfCardData);
// // SPLICE (i,k)   // from position i remove k elements
// const randomNumber = Math.floor(Math.random() * copyOfCardData.length);
// const h  = copyOfCardData.splice(randomNumber, 1);

// console.log('removedCard', removedCard);
// console.log('copyOfCardData', copyOfCardData);

// console.log(copyOfCardData[0].displayValue);