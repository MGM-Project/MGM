const asyncCardOpsFunc = function eslintStopCryingLikeALittleBitch() {
  const newShuffledDeck = function eslintStopCryingLikeALittleBitch1(numberOfDecks = 6) {
    return $.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${numberOfDecks}`);
  };


  const drawCard = function eslintStopCryingLikeALittleBitch2(deckId, numberOfCards = 1) {
    return $.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numberOfCards}`);
  };

  const reshuffleDeck = function eslintStopCryingLikeALittleBitch3(deckId) {
    return $.get(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`);
  };

  return {
    newShuffledDeck,
    drawCard,
    reshuffleDeck,
  };
};
