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
  container.uiHandler.login().render();
});
