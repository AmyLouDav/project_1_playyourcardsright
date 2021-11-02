class game {
    constructor(){
        this.playedCards = []
    }

    checkIfHigher() {
        console.log(this.playedCards[0].getAttribute("cardData-value"),
        this.playedCards[1].getAttribute("cardData-value")
        )
        if(this.playedCards[0].getAttribute("cardData-value") > this.playedCards[1].getAttribute("cardData-value")){
            return true
        }
    }

    checkIfLower() {
        console.log(this.playedCards[0].getAttribute("cardData-value"),
        this.playedCards[1].getAttribute("cardData-value")
        )
        if(this.playedCards[0].getAttribute("cardData-value") < this.playedCards[1].getAttribute("cardData-value")){
            return true
        }
    }

    checkIfEqual() {
        console.log(this.playedCards[0].getAttribute("cardData-value"),
        this.playedCards[1].getAttribute("cardData-value")
        )
        if(this.playedCards[0].getAttribute("cardData-value") === this.playedCards[1].getAttribute("cardData-value")){
            return true
        }
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