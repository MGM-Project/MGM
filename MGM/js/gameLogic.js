const asyncCardOps = asyncCardOpsFunc();
let deckID;
asyncCardOps.newShuffledDeck(6).then((deck) => { deckID = deck.deck_id; });
let numDealerCards = 0;
let numPlayerCards = 0;
let dealerScore = 0;
let playerScore = 0;
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
    $('#vid').off('ended');
  });
});

$('.stand').click(() => {
  $('.idleEmptyBoard').hide();
  $('.idleFullBoard').hide();
  $('#buttons').hide();
  loadVideo('5_deal1To_Self.mp4');
  $('#vid').on('ended', () => {
    // $('#idleFullBoard').show();
    // $('#buttons').show();
    // setTimeout(() => { $('#vid').hide(); }, 50);
    loadVideo('6_player_won.mp4');
    $('#vid').off('ended');
    $('#vid').on('ended', () => {
      $('#idleEmptyBoard').show();
      // $('#buttons').show();
      $('#betting').show();
      $('.gameInfo').hide();
      numDealerCards = 0;
      numPlayerCards = 0;
      dealerScore = 0;
      playerScore = 0;
      $('#ds').text(dealerScore);
      $('#ps').text(playerScore);
      const betSize = +$('#currentBet').text().substr(14);
      const curBalance = +$('#depositSum').text().substr(10);
      const curBalancePlusWonMoney = curBalance + (2 * betSize);
      $('#depositSum').text(`Balance: $${curBalancePlusWonMoney}`);
      $('#currentBet').text('Current bet: ');
      for (let i = 0; i < 7; i += 1) {
        $(`.allDealerCards${i}`).attr('src', '');
        $(`.allPlayerCards${i}`).attr('src', '');
      }
      setTimeout(() => { $('#vid').hide(); }, 50);
      $('#vid').off('ended');
    });
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
    $('#vid').off('ended');
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
    $('#vid').off('ended');
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
      $('#vid').off('ended');
    });
  }
});

$('.betAmount').keyup((event) => {
  if (event.keyCode === 13) {
    $('.enterBet').click();
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
      $('#vid').off('ended');
    });
  }
});
