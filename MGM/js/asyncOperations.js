const asyncCardOpsFunc = function () {

    const newShuffledDeck = function (numberOfDecks = 6){
        return $.get("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count="+numberOfDecks);
         };


    const drawCard = function (deckId, numberOfCards = 1){
        return $.get("https://deckofcardsapi.com/api/deck/" + deckId + "/draw/?count=" + numberOfCards);
    }

    const reshuffleDeck = function (deckId){
        return $.get("https://deckofcardsapi.com/api/deck/"+ deckId +"/shuffle/");
    }

    return {
        newShuffledDeck : newShuffledDeck,
        drawCard: drawCard,
        reshuffleDeck : reshuffleDeck
    }

};