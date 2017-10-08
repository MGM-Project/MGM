$(() => {
  // MODAL LOGIN START
  // Audio
  $('.sound-icon-speaker-cover').toggleClass('silent');
  const audio = $('#audio').get(0);
  audio.addEventListener('canplaythrough', function () {
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
  // Show overlay & Open modal
  $('.login-modal-overlay').fadeIn(200);
  $('.nameButton').click(() => {
    $('.login-modal-overlay').fadeOut(200);
    $('#userName').append(`${$('#playerName').val()}`);
    $('.transparent-container').show();
  });
  $('.depositValue').click(function () {
    $('.dropbtn').text($(this).html());
  });
  $('#playerName').keyup((event) => {
    if (event.keyCode === 13) {
      $('.nameButton').click();
    }
  });
  // Attach event on .depositButton
  $('.depositButton').click(() => {
    if (`${$('.dropbtn').text()}` !== 'Select sum') {
      $('#depositSum').append(`${$('.dropbtn').text()}`);
      $('.transparent-container').hide();
      $('.gameWindow').show();
      loadVideo('0_greet.mp4');
      $('#audio').prop('volume', 0.1);
      responsiveVoice.speak(`Hello ${$('#userName').text().substr(10)}.`);
      setTimeout(() => $('#audio').prop('volume', 1), 2000);
      $('#vid').on('ended', () => {
        $('#idleEmptyBoard').show();
        setTimeout(() => { $('#vid').hide(); }, 50);
      });
    }
  });
  $('.dropdown-content').click(() => {
    if ($('.dropdown-content').is(':hidden')) {
      $('.dropdown-content').show();
    } else {
      $('.dropdown-content').hide();
    }
  });
  $('.dropbtn').click(() => {
    if ($('.dropdown-content').is(':hidden')) {
      $('.dropdown-content').show();
    } else {
      $('.dropdown-content').hide();
    }
  });
  // Stops event execution of children elements
  $('.login-modal').click((event) => {
    event.stopPropagation();
  });
  // Input label
  $('input').blur(function () {
    const $this = $(this);
    if ($this.val()) { $this.addClass('used'); } else { $this.removeClass('used'); }
  });
  // MODAL LOGIN END

  // TESTING PURPOSES START
  // const container = containerFunc();
  // let deck_id;
  // container.asyncOps.newShuffledDeck(5).then(deck => deck.deck_id)
  //   .then(deck => container.asyncOps.drawCard(deck))
  //   .then(picUrl => $('#logo').attr('src', picUrl.cards.get(0).image));
  // TESTING PURPOSES END
});

function loadVideo(id) {
  const video = $('#vid').get(0);
  video.setAttribute('src', `../Assets/Videos/${id}`);
  $('#vid').show();
  video.load();
  video.play();
}
