

$(() => {
  // MODAL LOGIN START
  // Audio
  $('.sound-icon-speaker-cover').toggleClass('silent');
  const audio = $('#audio').get(0);
  audio.addEventListener('canplaythrough', function eslintStopCryingLikeALittleBitch() {
    const isChrome = !!window.chrome && !!window.chrome.webstore;
    if (!isChrome) {
      this.currentTime = 2;
    }
    this.play();
    // loadVideo('0_greet.mp4');
  });
  $('.wrapper').on('click', () => {
    $('.sound-icon-speaker-cover').toggleClass('silent');
    if (audio.muted) {
      audio.muted = false;
    } else {
      audio.muted = true;
    }
  });
  const container = containerFunc();
  container.uiHandler.login().render;
  // MODAL LOGIN END

  // TESTING PURPOSES START
  // const container = containerFunc();
  // let deck_id;
  // container.asyncOps.newShuffledDeck(5).then(deck => deck.deck_id)
  //   .then(deck => container.asyncOps.drawCard(deck))
  //   .then(picUrl => $('#logo').attr('src', picUrl.cards.get(0).image));
  // TESTING PURPOSES END
});
