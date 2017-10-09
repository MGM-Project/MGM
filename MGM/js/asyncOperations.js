const asyncCardOpsFunc = function eslint1() {
  const newShuffledDeck = function eslint2(numberOfDecks = 6) {
    return $.get(`https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=${numberOfDecks}`);
  };


  const drawCard = function eslint3(deckId, numberOfCards = 1) {
    return $.get(`https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=${numberOfCards}`);
  };

  const reshuffleDeck = function eslint4(deckId) {
    return $.get(`https://deckofcardsapi.com/api/deck/${deckId}/shuffle/`);
  };

  return {
    newShuffledDeck,
    drawCard,
    reshuffleDeck,
  };
};
