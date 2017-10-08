const asyncCardOps = asyncCardOpsFunc();
let deckID;
asyncCardOps.newShuffledDeck(6).then((deck) => { deckID = deck.deck_id; });
let numPlayerCards = 0;
let numDealerCards = 0;
let playerScore = 0;
let dealerScore = 0;
const cardValues = {
  2: 2,
  3: 3,
  4: 4,
  5: 5,
  6: 6,
  7: 7,
  8: 8,
  9: 9,
  10: 10,
  JACK: 10,
  QUEEN: 10,
  KING: 10,
  ACE: 11,
};

$('.hit').click(() => {
  $('.idleEmptyBoard').hide();
  $('.idleFullBoard').hide();
  $('#buttons').hide();
  loadVideo('3_deal1To_Player.mp4');
  $('#vid').on('ended', () => {
    $('#idleFullBoard').show();
    $('#buttons').show();
    setTimeout(() => { $('#vid').hide(); }, 50);
  });
});

$('.stand').click(() => {
  $('.idleEmptyBoard').hide();
  $('.idleFullBoard').hide();
  $('#buttons').hide();
  loadVideo('5_deal1To_Self.mp4');
  $('#vid').on('ended', () => {
    $('#idleFullBoard').show();
    $('#buttons').show();
    setTimeout(() => { $('#vid').hide(); }, 50);
  });
});

$('.split').click(() => {
  $('.idleEmptyBoard').hide();
  $('.idleFullBoard').hide();
  $('#buttons').hide();
  loadVideo('4_split.mp4');
  $('#vid').on('ended', () => {
    $('#idleFullBoard').show();
    $('#buttons').show();
    setTimeout(() => { $('#vid').hide(); }, 50);
  });
});

$('.doubledown').click(() => {
  $('.idleEmptyBoard').hide();
  $('.idleFullBoard').hide();
  $('#buttons').hide();
  loadVideo('3_deal1To_Player.mp4');
  $('#vid').on('ended', () => {
    $('#idleFullBoard').show();
    $('#buttons').show();
    setTimeout(() => { $('#vid').hide(); }, 50);
  });
});

$('.tipdealer').click(() => {
  if ($('#depositSum').text().substr(10) >= 5) {
    const moneyLeft = +$('#depositSum').text().substr(10) - 5;
    $('#depositSum').text(`Balance: $${moneyLeft}`);
    $('.idleEmptyBoard').hide();
    $('.idleFullBoard').hide();
    $('#buttons').hide();
    loadVideo('9_thanks.mp4');
    $('#audio').prop('volume', 0.1);
    responsiveVoice.speak(`Thanks a lot, ${$('#userName').text().substr(10)}!`);
    setTimeout(() => $('#audio').prop('volume', 1), 2000);
    $('#vid').on('ended', () => {
      $('#idleFullBoard').show();
      $('#buttons').show();
      setTimeout(() => { $('#vid').hide(); }, 50);
    });
  }
});

$('.enterBet').click(() => {
  if ($('.betAmount').val() <= +$('#depositSum').text().substr(10) && $('.betAmount').val() > 0) {
    $('#currentBet').append(`$${$('.betAmount').val()}`);
    const moneyLeft = +$('#depositSum').text().substr(10) - $('.betAmount').val();
    $('#depositSum').text(`Balance: $${moneyLeft}`);
    $('#betting').hide();
    $('.idleEmptyBoard').hide();
    $('.idleFullBoard').hide();
    loadVideo('2_fullDeal.mp4');
    $('#audio').prop('volume', 0.1);
    responsiveVoice.speak(`Good luck, ${$('#userName').text().substr(10)}!`);
    setTimeout(() => $('#audio').prop('volume', 1), 2000);
    const drawnCards = [];
    const drawnCardsValues = [];
    asyncCardOps.drawCard(deckID, 3).then((picUrl) => {
      for (let i = 0; i < 3; i += 1) { // eslint seems to hate unary operators
        drawnCards.push(picUrl.cards[i].image);
        drawnCardsValues.push(picUrl.cards[i].value);
      }
      $('.gameInfo').show();
    });
    $('#vid').on('ended', () => {
      $('.allDealerCards2').attr('src', '../Assets/Images/cardback.gif');
      numDealerCards += 1;
      $(`.allDealerCards${numDealerCards}`).attr('src', drawnCards[0]);
      dealerScore += cardValues[drawnCardsValues[0]];

      numPlayerCards += 1;
      $(`.allPlayerCards${numPlayerCards}`).attr('src', drawnCards[1]);
      playerScore += cardValues[drawnCardsValues[1]];

      numPlayerCards += 1;
      $(`.allPlayerCards${numPlayerCards}`).attr('src', drawnCards[2]);
      playerScore += cardValues[drawnCardsValues[2]];

      $('#ds').text(dealerScore);
      $('#ps').text(playerScore);
      $('#idleFullBoard').show();
      $('#buttons').show();
      setTimeout(() => { $('#vid').hide(); }, 50);
    });
  }
});
